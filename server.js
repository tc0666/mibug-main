require('dotenv').config();
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const ExcelJS = require('exceljs');
const Database = require('./database/database');

const app = express();
app.use(express.json({ limit: '1mb' }));
app.use(helmet());

// Initialize database
const db = new Database();
const SESSION_TIMEOUT = 24 * 60 * 60 * 1000; // 24 hours

// Security middleware to extract client info
const getClientInfo = (req) => ({
  ip: req.ip || req.connection.remoteAddress || req.headers['x-forwarded-for'],
  userAgent: req.headers['user-agent'],
  userId: req.headers['x-user-id'] || 'anonymous'
});

if (process.env.NODE_ENV === 'production') {
  // Only enforce HTTPS when behind a proxy that sets x-forwarded-proto
  app.enable('trust proxy');
  app.use((req, res, next) => {
    const proto = req.headers['x-forwarded-proto'];
    if (proto && proto !== 'https') {
      return res.redirect(301, 'https://' + req.headers.host + req.url);
    }
    next();
  });
}

// Database will handle initialization and demo data migration

// --- Security: Database-backed Session Auth for /admin ---
const ADMIN_USER = process.env.ADMIN_USER || '';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const AUTH_CONFIGURED = Boolean(ADMIN_USER && ADMIN_PASSWORD);
console.log(`[admin] Database session auth configured: ${AUTH_CONFIGURED ? 'yes' : 'no'}`);

async function isValidSession(sessionId) {
  try {
    const session = await db.getSession(sessionId);
    return !!session;
  } catch (error) {
    console.error('Session validation error:', error);
    return false;
  }
}

async function adminAuth(req, res, next) {
  const sessionId = req.headers['x-session-id'] || req.query.sessionId;

  if (!sessionId) {
    return res.status(401).json({ error: 'No session provided', needsLogin: true });
  }

  try {
    const isValid = await isValidSession(sessionId);
    if (isValid) {
      return next();
    }
  } catch (error) {
    console.error('Auth error:', error);
  }

  return res.status(401).json({ error: 'Invalid session', needsLogin: true });
}

// --- Rate limit public ingestion endpoint ---
const ingestLimiter = rateLimit({ windowMs: 60 * 1000, max: 30 });

// Public endpoint to capture a copy of a lead; forwards to external API when configured
app.post('/admin/api/lead', ingestLimiter, async (req, res) => {
  try {
    const payload = req.body || {};
    const clientInfo = getClientInfo(req);

    // Store in database with security audit trail
    const leadData = {
      ...payload,
      label: 'New',
      status: 'New',
      notes: '',
      source: 'web_form'
    };

    const result = await db.createLead(leadData, clientInfo);

    // Optional forward to external API if configured on the server side (safer than client)
    const BASE_URL = process.env.API_BASE_URL;
    const API_TOKEN = process.env.API_TOKEN;
    let forward; // undefined by default
    if (BASE_URL) {
      try {
        const resp = await axios.post(`${BASE_URL.replace(/\/$/, '')}/deals?apiToken=${encodeURIComponent(API_TOKEN || '')}`, payload, {
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
          timeout: 10000,
        });
        forward = resp.data;
      } catch (e) {
        // Do not fail ingestion if forward fails
        forward = { error: true, message: 'Forward failed' };
        console.error('External API forward failed:', e.message);
      }
    }

    res.json({ success: true, id: result.id, forward });
  } catch (error) {
    console.error('Lead creation error:', error);
    res.status(500).json({ success: false, error: 'Failed to create lead' });
  }
});

// Admin login endpoint
app.post('/admin/api/login', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    const clientInfo = getClientInfo(req);

    if (!AUTH_CONFIGURED) {
      return res.json({ success: true, sessionId: 'no-auth-needed' });
    }

    if (!username || !password) {
      return res.status(400).json({ success: false, error: 'Username and password required' });
    }

    // Authenticate against database
    const user = await db.authenticateUser(username, password);

    if (!user) {
      return res.status(401).json({ success: false, error: 'Invalid credentials' });
    }

    if (!user.isActive) {
      return res.status(401).json({ success: false, error: 'Account is disabled' });
    }

    // Create session
    const sessionId = uuidv4();
    const expiresAt = new Date(Date.now() + SESSION_TIMEOUT);

    await db.createSession(sessionId, user.username, expiresAt, clientInfo);

    res.json({ success: true, sessionId, user: { username: user.username } });
  } catch (error) {
    console.error('Login error:', error);
    if (error.message.includes('locked')) {
      return res.status(423).json({ success: false, error: error.message });
    }
    res.status(500).json({ success: false, error: 'Login failed' });
  }
});

// Admin logout endpoint
app.post('/admin/api/logout', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || req.body.sessionId;
    if (sessionId) {
      await db.deleteSession(sessionId);
    }
    res.json({ success: true });
  } catch (error) {
    console.error('Logout error:', error);
    res.json({ success: true }); // Always succeed logout
  }
});

// Admin session check endpoint
app.get('/admin/api/session', async (req, res) => {
  try {
    const sessionId = req.headers['x-session-id'] || req.query.sessionId;

    if (!AUTH_CONFIGURED) {
      return res.json({ valid: true, sessionId: 'no-auth-needed' });
    }

    if (!sessionId) {
      return res.json({ valid: false, needsLogin: true });
    }

    const valid = await isValidSession(sessionId);
    res.json({ valid, needsLogin: !valid });
  } catch (error) {
    console.error('Session check error:', error);
    res.json({ valid: false, needsLogin: true });
  }
});

// Admin-protected APIs
app.use('/admin/api', (req, res, next) => {
  if (req.path === '/lead' && req.method === 'POST') return next(); // public ingestion handled above
  if (req.path === '/login' && req.method === 'POST') return next(); // login handled above
  if (req.path === '/logout' && req.method === 'POST') return next(); // logout handled above
  if (req.path === '/session' && req.method === 'GET') return next(); // session check handled above
  return adminAuth(req, res, next);
});

app.get('/admin/api/leads', async (req, res) => {
  try {
    const { search = '', label, status, from, to, page = '1', limit = '20', sortField, sortDirection } = req.query;

    const filters = {
      search: search || undefined,
      label: label || undefined,
      status: status || undefined,
      from: from ? new Date(String(from)) : undefined,
      to: to ? new Date(String(to)) : undefined
    };

    const pagination = {
      page: parseInt(String(page), 10) || 1,
      limit: Math.min(parseInt(String(limit), 10) || 20, 100) // Max 100 items per page
    };

    const sorting = {
      field: sortField || 'createdAt',
      direction: (sortDirection === 'asc' || sortDirection === 'desc') ? sortDirection : 'desc'
    };

    const result = await db.getLeads(filters, pagination, sorting);
    res.json(result);
  } catch (error) {
    console.error('Get leads error:', error);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

app.post('/admin/api/leads', async (req, res) => {
  try {
    const leadData = req.body;
    const clientInfo = getClientInfo(req);

    // Generate UUID for new lead
    const { v4: uuidv4 } = require('uuid');
    const newLead = {
      id: uuidv4(),
      ...leadData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const result = await db.createLead(newLead, clientInfo);
    res.status(201).json(result);
  } catch (error) {
    console.error('Create lead error:', error);
    res.status(500).json({ error: 'Failed to create lead' });
  }
});

app.patch('/admin/api/leads/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { label, notes, status } = req.body || {};
    const clientInfo = getClientInfo(req);

    const updates = {};
    if (label !== undefined) updates.label = label;
    if (notes !== undefined) updates.notes = notes;
    if (status !== undefined) updates.status = status;

    if (Object.keys(updates).length === 0) {
      return res.status(400).json({ error: 'No valid fields to update' });
    }

    const result = await db.updateLead(id, updates, clientInfo);
    res.json({ success: true, item: result });
  } catch (error) {
    console.error('Update lead error:', error);
    if (error.message === 'Lead not found') {
      return res.status(404).json({ error: 'Lead not found' });
    }
    res.status(500).json({ error: 'Failed to update lead' });
  }
});

// Bulk delete (admin)
app.post('/admin/api/bulk-delete', async (req, res) => {
  try {
    const { ids } = req.body || {};

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.json({ success: true, deleted: 0 });
    }

    // Validate UUIDs
    const validIds = ids.filter(id =>
      typeof id === 'string' &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
    );

    if (validIds.length === 0) {
      return res.status(400).json({ error: 'No valid IDs provided' });
    }

    const deleted = await db.bulkDeleteLeads(validIds);
    res.json({ success: true, deleted });
  } catch (error) {
    console.error('Bulk delete error:', error);
    res.status(500).json({ error: 'Failed to delete leads' });
  }
});

app.patch('/admin/api/leads/bulk-label', async (req, res) => {
  try {
    const { ids, label } = req.body;

    if (!Array.isArray(ids) || ids.length === 0) {
      return res.status(400).json({ error: 'No IDs provided' });
    }

    if (!label || typeof label !== 'string') {
      return res.status(400).json({ error: 'Valid label required' });
    }

    // Validate UUIDs
    const validIds = ids.filter(id =>
      typeof id === 'string' &&
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id)
    );

    if (validIds.length === 0) {
      return res.status(400).json({ error: 'No valid IDs provided' });
    }

    const updated = await db.bulkUpdateLeads(validIds, { label });
    res.json({ success: true, updated });
  } catch (error) {
    console.error('Bulk label change error:', error);
    res.status(500).json({ error: 'Failed to update labels' });
  }
});

app.post('/admin/api/export', async (req, res) => {
  try {
    const { format = 'csv', filter = {}, ids } = req.body || {};
    const { search = '', label, status, from, to } = filter;

    let leads;

    if (Array.isArray(ids) && ids.length > 0) {
      // Export specific leads by IDs
      const filters = {};
      const result = await db.getLeads(filters, { page: 1, limit: 10000 });
      leads = result.items.filter(lead => ids.includes(lead.id));
    } else {
      // Export with filters
      const filters = {
        search: search || undefined,
        label: label || undefined,
        status: status || undefined,
        from: from ? new Date(String(from)) : undefined,
        to: to ? new Date(String(to)) : undefined
      };

      const result = await db.getLeads(filters, { page: 1, limit: 10000 });
      leads = result.items;
    }

    const prefOrder = [
      'id', 'createdAt', 'updatedAt', 'label', 'status', 'firstName', 'lastName',
      'email', 'phone', 'gender', 'birthday', 'birthplace', 'nationality',
      'street', 'homeNumber', 'zipCode', 'city', 'country', 'residentSince',
      'familyStatus', 'professionalGroup', 'date', 'livingSituation',
      'income', 'rentIncludingHeating', 'category', 'creditAmount', 'duration',
      'deposit', 'consent', 'notes', 'source'
    ];

    if (format === 'xlsx') {
      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet('Leads');

      // Set up columns with proper headers
      sheet.columns = prefOrder.map(key => ({
        header: key.charAt(0).toUpperCase() + key.slice(1),
        key: key,
        width: key === 'email' ? 25 : key === 'notes' ? 40 : 15
      }));

      // Add data rows
      leads.forEach(lead => {
        const row = {};
        prefOrder.forEach(key => {
          row[key] = lead[key] ?? '';
        });
        sheet.addRow(row);
      });

      // Style the header row
      sheet.getRow(1).font = { bold: true };
      sheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFE0E0E0' }
      };

      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.setHeader('Content-Disposition', `attachment; filename="leads-${new Date().toISOString().split('T')[0]}.xlsx"`);
      await workbook.xlsx.write(res);
      res.end();
    } else {
      // CSV export
      const headers = prefOrder.map(key => key.charAt(0).toUpperCase() + key.slice(1));
      const csvRows = [headers.join(',')];

      leads.forEach(lead => {
        const row = prefOrder.map(key => {
          const value = lead[key] ?? '';
          // Escape CSV values
          return typeof value === 'string' && (value.includes(',') || value.includes('"') || value.includes('\n'))
            ? `"${value.replace(/"/g, '""')}"`
            : value;
        });
        csvRows.push(row.join(','));
      });

      const csv = csvRows.join('\n');
      res.setHeader('Content-Type', 'text/csv; charset=utf-8');
      res.setHeader('Content-Disposition', `attachment; filename="leads-${new Date().toISOString().split('T')[0]}.csv"`);
      res.send('\ufeff' + csv); // Add BOM for proper UTF-8 encoding in Excel
    }
  } catch (error) {
    console.error('Export error:', error);
    res.status(500).json({ error: 'Failed to export leads' });
  }
});
// Serve admin SPA (authentication handled by React app)
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Serve static files from the React app
const buildPath = path.join(__dirname, 'build');
app.use(express.static(buildPath));

// Handle all requests by serving the React index.html file
app.get('*', (req, res) => {
  const indexPath = path.join(buildPath, 'index.html');

  // Check if the file exists
  if (require('fs').existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({
      error: 'Build files not found',
      buildPath: buildPath,
      indexPath: indexPath,
      exists: require('fs').existsSync(buildPath)
    });
  }
});

const port = process.env.PORT || 5000;

// For Vercel, we need to export the app instead of listening
if (process.env.VERCEL) {
  module.exports = app;
} else {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
