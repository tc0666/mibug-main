const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');

class Database {
  constructor() {
    // Database connection configuration
    const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;

    if (!databaseUrl) {
      console.log('⚠️  No database URL configured. Running in demo mode with JSON fallback.');
      this.pool = null;
      this.useFallback = true;
      this.fallbackData = [];
      return;
    }

    this.pool = new Pool({
      connectionString: databaseUrl,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
    });

    // Handle pool errors
    this.pool.on('error', (err) => {
      console.error('Unexpected error on idle client', err);
      this.fallbackToJSON();
    });

    this.useFallback = false;
    this.initializeDatabase();
  }

  fallbackToJSON() {
    console.log('🔄 Falling back to JSON file storage...');
    this.useFallback = true;
    this.pool = null;

    // Load existing JSON data if available
    const fs = require('fs');
    const path = require('path');
    const dataPath = path.join(__dirname, '..', 'data', 'leads.json');

    try {
      if (fs.existsSync(dataPath)) {
        this.fallbackData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        console.log(`📁 Loaded ${this.fallbackData.length} leads from JSON file`);
      } else {
        this.fallbackData = [];
      }
    } catch (error) {
      console.error('Error loading JSON fallback:', error);
      this.fallbackData = [];
    }
  }

  async initializeDatabase() {
    if (this.useFallback) {
      console.log('📁 Using JSON fallback mode - no database initialization needed');
      return;
    }

    try {
      // Check if database is already initialized
      const result = await this.pool.query(`
        SELECT EXISTS (
          SELECT FROM information_schema.tables
          WHERE table_schema = 'public'
          AND table_name = 'leads'
        );
      `);

      if (!result.rows[0].exists) {
        console.log('Initializing database schema...');
        const schemaSQL = fs.readFileSync(path.join(__dirname, 'schema.sql'), 'utf8');
        await this.pool.query(schemaSQL);
        console.log('Database schema initialized successfully');

        // Create default admin user if none exists
        await this.createDefaultAdminUser();

        // Migrate existing JSON data if it exists
        await this.migrateExistingData();
      }
    } catch (error) {
      console.error('Database initialization error:', error);
      console.log('🔄 Switching to JSON fallback mode...');
      this.fallbackToJSON();
    }
  }

  async createDefaultAdminUser() {
    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminUser || !adminPassword) {
      console.log('No admin credentials provided, skipping default user creation');
      return;
    }

    try {
      const existingUser = await this.pool.query(
        'SELECT id FROM admin_users WHERE username = $1',
        [adminUser]
      );

      if (existingUser.rows.length === 0) {
        const passwordHash = await bcrypt.hash(adminPassword, 12);
        await this.pool.query(`
          INSERT INTO admin_users (username, password_hash, email, is_active)
          VALUES ($1, $2, $3, true)
        `, [adminUser, passwordHash, `${adminUser}@example.com`]);
        
        console.log(`Default admin user '${adminUser}' created successfully`);
      }
    } catch (error) {
      console.error('Error creating default admin user:', error);
    }
  }

  async migrateExistingData() {
    const dataPath = path.join(__dirname, '..', 'data', 'leads.json');
    
    if (!fs.existsSync(dataPath)) {
      console.log('No existing data to migrate');
      return;
    }

    try {
      const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
      
      if (!Array.isArray(existingData) || existingData.length === 0) {
        console.log('No valid data to migrate');
        return;
      }

      console.log(`Migrating ${existingData.length} existing leads...`);
      
      for (const lead of existingData) {
        await this.createLead({
          ...lead,
          // Ensure required fields have defaults
          consent: lead.consent || false,
          source: 'migrated_data'
        });
      }
      
      console.log('Data migration completed successfully');
      
      // Backup the original file
      const backupPath = dataPath + '.backup.' + Date.now();
      fs.renameSync(dataPath, backupPath);
      console.log(`Original data backed up to: ${backupPath}`);
      
    } catch (error) {
      console.error('Error migrating existing data:', error);
    }
  }

  // Lead management methods
  async createLead(leadData, clientInfo = {}) {
    if (this.useFallback) {
      const { v4: uuidv4 } = require('uuid');
      const newLead = {
        id: uuidv4(),
        createdAt: new Date().toISOString(),
        firstName: leadData.firstName || leadData.first_name,
        lastName: leadData.lastName || leadData.last_name,
        email: leadData.email,
        phone: leadData.phone,
        gender: leadData.gender,
        birthday: leadData.birthday,
        birthplace: leadData.birthplace,
        nationality: leadData.nationality,
        street: leadData.street,
        homeNumber: leadData.homeNumber || leadData.home_number,
        zipCode: leadData.zipCode || leadData.zip_code,
        city: leadData.city,
        country: leadData.country,
        residentSince: leadData.residentSince || leadData.resident_since,
        familyStatus: leadData.familyStatus || leadData.family_status,
        professionalGroup: leadData.professionalGroup || leadData.professional_group,
        date: leadData.date,
        livingSituation: leadData.livingSituation || leadData.living_situation,
        income: leadData.income,
        rentIncludingHeating: leadData.rentIncludingHeating || leadData.rent_including_heating,
        category: leadData.category,
        creditAmount: leadData.creditAmount || leadData.credit_amount,
        duration: leadData.duration,
        deposit: leadData.deposit || 0,
        label: leadData.label || 'New',
        status: leadData.status || 'New',
        notes: leadData.notes || '',
        consent: leadData.consent || false,
        source: leadData.source || 'web_form'
      };

      this.fallbackData.unshift(newLead);
      this.saveFallbackData();
      return { id: newLead.id, created_at: newLead.createdAt };
    }

    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');

      const result = await client.query(`
        INSERT INTO leads (
          first_name, last_name, email, phone, gender, birthday, birthplace, nationality,
          street, home_number, zip_code, city, country, resident_since,
          family_status, professional_group, employment_date, living_situation,
          income, rent_including_heating, category, credit_amount, duration, deposit,
          label, status, notes, consent, created_by, ip_address, user_agent, source
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18,
          $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32
        ) RETURNING id, created_at
      `, [
        leadData.firstName || leadData.first_name,
        leadData.lastName || leadData.last_name,
        leadData.email,
        leadData.phone,
        leadData.gender,
        leadData.birthday,
        leadData.birthplace,
        leadData.nationality,
        leadData.street,
        leadData.homeNumber || leadData.home_number,
        leadData.zipCode || leadData.zip_code,
        leadData.city,
        leadData.country,
        leadData.residentSince || leadData.resident_since,
        leadData.familyStatus || leadData.family_status,
        leadData.professionalGroup || leadData.professional_group,
        leadData.date ? new Date(leadData.date + '-01') : null,
        leadData.livingSituation || leadData.living_situation,
        leadData.income,
        leadData.rentIncludingHeating || leadData.rent_including_heating,
        leadData.category,
        leadData.creditAmount || leadData.credit_amount,
        leadData.duration,
        leadData.deposit || 0,
        leadData.label || 'New',
        leadData.status || 'New',
        leadData.notes || '',
        leadData.consent || false,
        clientInfo.userId || 'system',
        clientInfo.ip,
        clientInfo.userAgent,
        leadData.source || 'web_form'
      ]);

      await client.query('COMMIT');
      return result.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  saveFallbackData() {
    if (!this.useFallback) return;

    const fs = require('fs');
    const path = require('path');
    const dataDir = path.join(__dirname, '..', 'data');
    const dataPath = path.join(dataDir, 'leads.json');

    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      fs.writeFileSync(dataPath, JSON.stringify(this.fallbackData, null, 2));
    } catch (error) {
      console.error('Error saving fallback data:', error);
    }
  }

  async getLeads(filters = {}, pagination = {}, sorting = {}) {
    if (this.useFallback) {
      const { search, label, status, excludeReadLeads, from, to } = filters;
      const { page = 1, limit = 20 } = pagination;
      const { field = 'createdAt', direction = 'desc' } = sorting;

      let filtered = [...this.fallbackData];

      // Apply filters
      if (search) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter(lead =>
          (lead.firstName && lead.firstName.toLowerCase().includes(searchLower)) ||
          (lead.lastName && lead.lastName.toLowerCase().includes(searchLower)) ||
          (lead.email && lead.email.toLowerCase().includes(searchLower)) ||
          (lead.phone && lead.phone.toLowerCase().includes(searchLower))
        );
      }

      if (label) {
        filtered = filtered.filter(lead => lead.label === label);
      }

      if (status) {
        filtered = filtered.filter(lead => lead.status === status);
      }

      // Exclude read leads (for "New" leads section)
      if (excludeReadLeads && Array.isArray(excludeReadLeads)) {
        filtered = filtered.filter(lead => !excludeReadLeads.includes(lead.id));
      }



      if (from) {
        filtered = filtered.filter(lead => new Date(lead.createdAt) >= new Date(from));
      }

      if (to) {
        filtered = filtered.filter(lead => new Date(lead.createdAt) <= new Date(to));
      }

      // Apply sorting
      filtered.sort((a, b) => {
        let aVal, bVal;

        // Handle special field mappings
        if (field === 'name') {
          aVal = a.firstName || '';
          bVal = b.firstName || '';
        } else {
          aVal = a[field];
          bVal = b[field];
        }

        // Handle date fields
        if (field === 'createdAt' || field === 'updatedAt') {
          aVal = new Date(aVal);
          bVal = new Date(bVal);
        }

        // Handle string fields
        if (typeof aVal === 'string' && typeof bVal === 'string') {
          aVal = aVal.toLowerCase();
          bVal = bVal.toLowerCase();
        }

        // Handle null/undefined values
        if (aVal == null && bVal == null) return 0;
        if (aVal == null) return direction === 'asc' ? -1 : 1;
        if (bVal == null) return direction === 'asc' ? 1 : -1;

        // Compare values
        if (aVal < bVal) return direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return direction === 'asc' ? 1 : -1;
        return 0;
      });

      // Paginate
      const total = filtered.length;
      const offset = (page - 1) * limit;
      const items = filtered.slice(offset, offset + limit);

      return {
        items: items.map(item => this.formatLeadForAPI(item)),
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit)
      };
    }

    const { search, label, status, excludeReadLeads, from, to } = filters;
    const { page = 1, limit = 20 } = pagination;
    const { field = 'createdAt', direction = 'desc' } = sorting;
    const offset = (page - 1) * limit;

    let whereConditions = [];
    let params = [];
    let paramCount = 0;

    if (search) {
      paramCount++;
      whereConditions.push(`(
        first_name ILIKE $${paramCount} OR
        last_name ILIKE $${paramCount} OR
        email ILIKE $${paramCount} OR
        phone ILIKE $${paramCount}
      )`);
      params.push(`%${search}%`);
    }

    if (label) {
      paramCount++;
      whereConditions.push(`label = $${paramCount}`);
      params.push(label);
    }

    if (status) {
      paramCount++;
      whereConditions.push(`status = $${paramCount}`);
      params.push(status);
    }

    // Exclude read leads (for "New" leads section)
    if (excludeReadLeads && Array.isArray(excludeReadLeads) && excludeReadLeads.length > 0) {
      const placeholders = excludeReadLeads.map((_, index) => `$${paramCount + index + 1}`).join(', ');
      whereConditions.push(`id NOT IN (${placeholders})`);
      params.push(...excludeReadLeads);
      paramCount += excludeReadLeads.length;
    }



    if (from) {
      paramCount++;
      whereConditions.push(`created_at >= $${paramCount}`);
      params.push(from);
    }

    if (to) {
      paramCount++;
      whereConditions.push(`created_at <= $${paramCount}`);
      params.push(to);
    }

    const whereClause = whereConditions.length > 0 ? 'WHERE ' + whereConditions.join(' AND ') : '';

    // Get total count
    const countQuery = `SELECT COUNT(*) FROM leads ${whereClause}`;
    const countResult = await this.pool.query(countQuery, params);
    const total = parseInt(countResult.rows[0].count);

    // Get paginated results
    paramCount++;
    params.push(limit);
    paramCount++;
    params.push(offset);

    // Map API field names to database column names for sorting
    const sortFieldMap = {
      'createdAt': 'created_at',
      'updatedAt': 'updated_at',
      'firstName': 'first_name',
      'lastName': 'last_name',
      'name': 'first_name', // Sort by first name when sorting by "name"
      'email': 'email',
      'phone': 'phone',
      'creditAmount': 'credit_amount',
      'status': 'status',
      'label': 'label'
    };

    const dbSortField = sortFieldMap[field] || 'created_at';
    const sortDirection = direction.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';

    const dataQuery = `
      SELECT
        id, created_at, updated_at, first_name, last_name, email, phone, gender,
        birthday, birthplace, nationality, street, home_number, zip_code, city,
        country, resident_since, family_status, professional_group, employment_date,
        living_situation, income, rent_including_heating, category, credit_amount,
        duration, deposit, label, status, notes, consent, source
      FROM leads
      ${whereClause}
      ORDER BY ${dbSortField} ${sortDirection}
      LIMIT $${paramCount-1} OFFSET $${paramCount}
    `;

    const result = await this.pool.query(dataQuery, params);

    return {
      items: result.rows.map(row => this.formatLeadForAPI(row)),
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  }

  formatLeadForAPI(row) {
    // Handle both database rows and fallback objects
    if (this.useFallback || !row.first_name) {
      // Fallback format (already in correct format)
      return {
        id: row.id,
        createdAt: row.createdAt || row.created_at,
        updatedAt: row.updatedAt || row.updated_at,
        firstName: row.firstName || row.first_name,
        lastName: row.lastName || row.last_name,
        email: row.email,
        phone: row.phone,
        gender: row.gender,
        birthday: row.birthday,
        birthplace: row.birthplace,
        nationality: row.nationality,
        street: row.street,
        homeNumber: row.homeNumber || row.home_number,
        zipCode: row.zipCode || row.zip_code,
        city: row.city,
        country: row.country,
        residentSince: row.residentSince || row.resident_since,
        familyStatus: row.familyStatus || row.family_status,
        professionalGroup: row.professionalGroup || row.professional_group,
        date: row.date,
        livingSituation: row.livingSituation || row.living_situation,
        income: row.income,
        rentIncludingHeating: row.rentIncludingHeating || row.rent_including_heating,
        category: row.category,
        creditAmount: row.creditAmount || row.credit_amount,
        duration: row.duration,
        deposit: row.deposit,
        label: row.label,
        status: row.status,
        notes: row.notes,
        consent: row.consent,
        source: row.source
      };
    }

    // Database format
    return {
      id: row.id,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
      firstName: row.first_name,
      lastName: row.last_name,
      email: row.email,
      phone: row.phone,
      gender: row.gender,
      birthday: row.birthday,
      birthplace: row.birthplace,
      nationality: row.nationality,
      street: row.street,
      homeNumber: row.home_number,
      zipCode: row.zip_code,
      city: row.city,
      country: row.country,
      residentSince: row.resident_since,
      familyStatus: row.family_status,
      professionalGroup: row.professional_group,
      date: row.employment_date ? row.employment_date.toISOString().slice(0, 7) : null,
      livingSituation: row.living_situation,
      income: row.income,
      rentIncludingHeating: row.rent_including_heating,
      category: row.category,
      creditAmount: row.credit_amount,
      duration: row.duration,
      deposit: row.deposit,
      label: row.label,
      status: row.status,
      notes: row.notes,
      consent: row.consent,
      source: row.source
    };
  }

  async updateLead(id, updates, clientInfo = {}) {
    if (this.useFallback) {
      // Fallback mode: update JSON file
      const leadIndex = this.fallbackData.findIndex(lead => lead.id === id);
      if (leadIndex === -1) {
        throw new Error('Lead not found');
      }

      // Update the lead with new values
      Object.keys(updates).forEach(key => {
        if (updates[key] !== undefined) {
          this.fallbackData[leadIndex][key] = updates[key];
        }
      });

      // Update timestamp
      this.fallbackData[leadIndex].updatedAt = new Date().toISOString();

      // Save to file
      await this.saveFallbackData();

      return { id, updated_at: this.fallbackData[leadIndex].updatedAt };
    }

    // Database mode
    const client = await this.pool.connect();
    try {
      await client.query('BEGIN');

      const setClause = [];
      const params = [];
      let paramCount = 0;

      // Build dynamic update query
      Object.keys(updates).forEach(key => {
        if (updates[key] !== undefined) {
          paramCount++;
          const dbColumn = this.mapAPIFieldToDBColumn(key);
          setClause.push(`${dbColumn} = $${paramCount}`);
          params.push(updates[key]);
        }
      });

      if (setClause.length === 0) {
        throw new Error('No valid fields to update');
      }

      paramCount++;
      params.push(id);

      const query = `
        UPDATE leads
        SET ${setClause.join(', ')}, updated_at = NOW()
        WHERE id = $${paramCount}
        RETURNING id, updated_at
      `;

      const result = await client.query(query, params);

      if (result.rows.length === 0) {
        throw new Error('Lead not found');
      }

      await client.query('COMMIT');
      return result.rows[0];
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  }

  mapAPIFieldToDBColumn(apiField) {
    const mapping = {
      firstName: 'first_name',
      lastName: 'last_name',
      homeNumber: 'home_number',
      zipCode: 'zip_code',
      residentSince: 'resident_since',
      familyStatus: 'family_status',
      professionalGroup: 'professional_group',
      livingSituation: 'living_situation',
      rentIncludingHeating: 'rent_including_heating',
      creditAmount: 'credit_amount'
    };
    return mapping[apiField] || apiField;
  }

  async deleteLead(id) {
    if (this.useFallback) {
      const initialLength = this.fallbackData.length;
      this.fallbackData = this.fallbackData.filter(lead => lead.id !== id);
      const deleted = this.fallbackData.length < initialLength;
      if (deleted) {
        await this.saveFallbackData();
      }
      return deleted;
    }

    const result = await this.pool.query('DELETE FROM leads WHERE id = $1 RETURNING id', [id]);
    return result.rows.length > 0;
  }

  async bulkDeleteLeads(ids) {
    if (this.useFallback) {
      const initialLength = this.fallbackData.length;
      this.fallbackData = this.fallbackData.filter(lead => !ids.includes(lead.id));
      const deletedCount = initialLength - this.fallbackData.length;
      if (deletedCount > 0) {
        await this.saveFallbackData();
      }
      return deletedCount;
    }

    const result = await this.pool.query('DELETE FROM leads WHERE id = ANY($1) RETURNING id', [ids]);
    return result.rows.length;
  }

  async bulkUpdateLeads(ids, updates) {
    if (this.useFallback) {
      let updatedCount = 0;
      this.fallbackData.forEach(lead => {
        if (ids.includes(lead.id)) {
          Object.keys(updates).forEach(key => {
            if (updates[key] !== undefined) {
              lead[key] = updates[key];
            }
          });
          lead.updatedAt = new Date().toISOString();
          updatedCount++;
        }
      });

      if (updatedCount > 0) {
        await this.saveFallbackData();
      }
      return updatedCount;
    }

    const setClause = [];
    const params = [];
    let paramCount = 0;

    Object.keys(updates).forEach(key => {
      if (updates[key] !== undefined) {
        paramCount++;
        const dbColumn = this.mapAPIFieldToDBColumn(key);
        setClause.push(`${dbColumn} = $${paramCount}`);
        params.push(updates[key]);
      }
    });

    if (setClause.length === 0) {
      return 0;
    }

    paramCount++;
    params.push(ids);

    const query = `
      UPDATE leads
      SET ${setClause.join(', ')}, updated_at = NOW()
      WHERE id = ANY($${paramCount})
      RETURNING id
    `;

    const result = await this.pool.query(query, params);
    return result.rows.length;
  }

  // Session management
  async createSession(sessionId, userId, expiresAt, clientInfo = {}) {
    if (this.useFallback) {
      // Use in-memory session storage for fallback
      if (!this.fallbackSessions) this.fallbackSessions = new Map();
      this.fallbackSessions.set(sessionId, {
        sessionId,
        userId,
        expiresAt,
        createdAt: new Date(),
        lastActivity: new Date(),
        isActive: true,
        ...clientInfo
      });
      return;
    }

    await this.pool.query(`
      INSERT INTO admin_sessions (session_id, user_id, expires_at, ip_address, user_agent)
      VALUES ($1, $2, $3, $4, $5)
    `, [sessionId, userId, expiresAt, clientInfo.ip, clientInfo.userAgent]);
  }

  async getSession(sessionId) {
    if (this.useFallback) {
      if (!this.fallbackSessions) this.fallbackSessions = new Map();
      const session = this.fallbackSessions.get(sessionId);

      if (!session || new Date() > session.expiresAt || !session.isActive) {
        this.fallbackSessions.delete(sessionId);
        return null;
      }

      // Update last activity
      session.lastActivity = new Date();
      return session;
    }

    const result = await this.pool.query(`
      SELECT * FROM admin_sessions
      WHERE session_id = $1 AND expires_at > NOW() AND is_active = true
    `, [sessionId]);

    if (result.rows.length > 0) {
      // Update last activity
      await this.pool.query(`
        UPDATE admin_sessions
        SET last_activity = NOW()
        WHERE session_id = $1
      `, [sessionId]);
    }

    return result.rows[0];
  }

  async deleteSession(sessionId) {
    if (this.useFallback) {
      if (!this.fallbackSessions) this.fallbackSessions = new Map();
      this.fallbackSessions.delete(sessionId);
      return;
    }

    await this.pool.query('DELETE FROM admin_sessions WHERE session_id = $1', [sessionId]);
  }

  async cleanExpiredSessions() {
    const result = await this.pool.query('SELECT clean_expired_sessions()');
    return result.rows[0].clean_expired_sessions;
  }

  // Admin user management
  async authenticateUser(username, password) {
    if (this.useFallback) {
      // Use environment variables for fallback authentication
      const adminUser = process.env.ADMIN_USER;
      const adminPassword = process.env.ADMIN_PASSWORD;

      if (!adminUser || !adminPassword) {
        console.log('No admin credentials configured in environment');
        return null;
      }

      if (username === adminUser && password === adminPassword) {
        return {
          id: 'fallback-admin',
          username: adminUser,
          isActive: true
        };
      }

      return null;
    }

    const result = await this.pool.query(`
      SELECT id, username, password_hash, is_active, failed_login_attempts, locked_until
      FROM admin_users
      WHERE username = $1
    `, [username]);

    if (result.rows.length === 0) {
      return null;
    }

    const user = result.rows[0];

    // Check if account is locked
    if (user.locked_until && new Date() < user.locked_until) {
      throw new Error('Account is temporarily locked due to too many failed login attempts');
    }

    // Verify password
    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      // Increment failed login attempts
      const newFailedAttempts = user.failed_login_attempts + 1;
      const lockUntil = newFailedAttempts >= 5 ? new Date(Date.now() + 15 * 60 * 1000) : null; // Lock for 15 minutes after 5 failed attempts

      await this.pool.query(`
        UPDATE admin_users
        SET failed_login_attempts = $1, locked_until = $2
        WHERE id = $3
      `, [newFailedAttempts, lockUntil, user.id]);

      return null;
    }

    // Reset failed login attempts on successful login
    await this.pool.query(`
      UPDATE admin_users
      SET failed_login_attempts = 0, locked_until = NULL, last_login = NOW()
      WHERE id = $1
    `, [user.id]);

    return {
      id: user.id,
      username: user.username,
      isActive: user.is_active
    };
  }

  async close() {
    if (this.pool) {
      await this.pool.end();
    }
  }
}

module.exports = Database;
