import React, { useEffect, useMemo, useState } from 'react';
import { Box, Button, Toolbar, Typography, Paper, Container } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginForm from './LoginForm';
import LeadsTable from './components/LeadsTable';
import LeadsToolbar from './components/LeadsToolbar';
import LeadDetailsPanel from './components/LeadDetailsPanel';
import NewLeadModal from './components/NewLeadModal';
import Dashboard from './components/Dashboard';
import Activities from './components/Activities';
import Analytics from './components/Analytics';
import Finance from './components/Finance';
import Sidebar from './components/Sidebar';

interface LeadItem { [key: string]: any }

const labels = [
  { value: 'Neu', color: 'default' },
  { value: 'Follow-Up', color: 'warning' },
  { value: 'Warm', color: 'success' },
  { value: 'Kalt', color: 'default' },
  { value: 'Qualifiziert', color: 'primary' },
  { value: 'Disqualifiziert', color: 'default' },
  { value: 'Hochwertig', color: 'secondary' },
];
const fieldTitles: Record<string, string> = {
  familyStatus: 'Familienstand',
  professionalGroup: 'Berufsgruppe',
  date: 'Datum',
  livingSituation: 'Wohnsituation',
  income: 'Einkommen',
  rentIncludingHeating: 'Miete inkl. Heizung',
  gender: 'Geschlecht',
  firstName: 'Vorname',
  lastName: 'Nachname',
  phone: 'Telefon',
  email: 'E-Mail',
  consent: 'Einwilligung',
  zipCode: 'PLZ',
  city: 'Stadt',
  street: 'Straße',
  homeNumber: 'Hausnummer',
  country: 'Land',
  residentSince: 'Wohnhaft seit',
  category: 'Kategorie',
  creditAmount: 'Betrag',
  duration: 'Laufzeit',
  deposit: 'Anzahlung',
  createdAt: 'Erstellt am',
  label: 'Label',
  status: 'Status'
};

// Mapping of enum values to German labels for display in Details dialog
const familyStatusMap: Record<string, string> = {
  SINGLE: 'ledig',
  MARRIED: 'verheiratet',
  WIDOWED: 'verwitwet',
  DIVORCED: 'geschieden',
};

const livingSituationMap: Record<string, string> = {
  RENT: 'zur Miete', // legacy
  OWN: 'im Wohneigentum', // legacy
  RENTING: 'zur Miete',
  RENTFREE: 'mietfrei',
  PARENTS: 'bei den Eltern',
  PROPERTY: 'im Wohneigentum',
};

const genderMap: Record<string, string> = {
  FEMALE: 'Frau',
  MALE: 'Herr',
  Frau: 'Frau',
  Herr: 'Herr',
};

const countryMap: Record<string, string> = {
  DE: 'Deutschland',
  AT: 'Österreich',
  CH: 'Schweiz',
  germany: 'Deutschland',
  austria: 'Österreich',
  swiss: 'Schweiz',
};

const statusMap: Record<string, string> = {
  New: 'Neu',
  Cold: 'Kalt',
  Qualified: 'Qualifiziert',
  Disqualified: 'Disqualifiziert',
  'High-Value': 'Hochwertig',
};

// Built from Step2 professionalGroupOptions
const professionalGroupMap: Record<string, string> = {
  EMPLOYEE: 'Angestellte/r',
  EMPLOYEE_REDUCED_HOURS: 'Angestellte/r in Kurzarbeit',
  WORKER: 'Arbeiter/in',
  EMPLOYEE_PUBLIC_SERVICE: 'Angestellte/r im öffent. Dienst',
  CRAFTSMAN: 'Facharbeiter/in',
  MANAGER: 'Leitende/r Angestellte/r',
  RETIREE: 'Rentner/in',
  PENSIONER: 'Pensionär/in',
  EMPLOYEE_IN_PARENTAL_LEAVE: 'Angestellte/r in Elternzeit',
  EMPLOYEE_TEMPORARY_WORK: 'Angestellte/r über Zeitarbeitsfirma',
  EMPLOYEE_ABROAD: 'Angestellte/r im Ausland',
  EMPLOYEE_DOCTOR: 'Angestelltes ärztliches Fachpersonal',
  EMPLOYEE_MINIJOB: 'Angestellte/r (Minijob 450 EUR Basis)',
  EMPLOYEE_SICK: 'Angestellte/r (im Krankenstand / Krankengeldbezug)',
  WORKER_PUBLIC_SERVICE: 'Arbeiter/in im öffent. Dienst',
  WORKER_PARENTAL_LEAVE: 'Arbeiter/in in Elternzeit',
  UNEMPLOYED: 'Arbeitslose, Sozialhilfeempfänger, ohne Beschäftigung',
  APPRENTICE: 'Auszubildende/r',
  OFFICER_LOWER_SERVICE: 'Beamte/r im einfachen Dienst',
  OFFICER_UPPER_SERVICE: 'Beamte/r im gehobenen Dienst',
  OFFICER_HIGHER_SERVICE: 'Beamte/r im höheren Dienst',
  OFFICER_MIDDLE_SERVICE: 'Beamte/r im mittleren Dienst',
  HOUSEWIFE: 'Hausfrau/-mann',
};

const translateField = (key: string, value: any): string => {
  if (value == null || value === '') return '-';
  const v = String(value);
  switch (key) {
    case 'familyStatus': return familyStatusMap[v] || v;
    case 'professionalGroup': return professionalGroupMap[v] || v;
    case 'livingSituation': return livingSituationMap[v] || v;
    case 'gender': return genderMap[v] || v;
    case 'country': return countryMap[v] || v;
    case 'status': return statusMap[v] || v;
    case 'consent': return (v === 'true' || v === '1') ? 'Ja' : 'Nein';
    default: return v;
  }
};

export default function AdminApp() {
  const [leads, setLeads] = useState<LeadItem[]>([]);
  const [search, setSearch] = useState('');
  const [selectedLeads, setSelectedLeads] = useState<string[]>([]);
  const [detailsLead, setDetailsLead] = useState<LeadItem | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [isCheckingSession, setIsCheckingSession] = useState(true);
  const [sortField, setSortField] = useState('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [filters, setFilters] = useState({
    status: '',
    label: '',
    dateRange: ''
  });
  const [totalCount, setTotalCount] = useState(0);
  const [activeSection, setActiveSection] = useState('leads-all');
  const [showNewLeadModal, setShowNewLeadModal] = useState(false);

  // Notification management
  const [notifications, setNotifications] = useState({
    activities: 5,
    analytics: 0,
    finance: 0,
    settings: 0
  });

  // Calculate dynamic lead counts
  const leadCounts = useMemo(() => {
    const total = leads.length;
    const newLeads = leads.filter(lead => lead.status === 'New').length;
    const qualified = leads.filter(lead => lead.status === 'Qualified').length;
    const followUp = leads.filter(lead => lead.status === 'Follow-Up').length;

    return {
      total,
      new: newLeads,
      qualified,
      followUp
    };
  }, [leads]);

  const checkSession = async () => {
    const storedSession = localStorage.getItem('admin-session');
    if (!storedSession) {
      setIsCheckingSession(false);
      return;
    }

    try {
      const res = await fetch('/admin/api/session', {
        headers: { 'X-Session-Id': storedSession },
      });
      const data = await res.json();

      if (data.valid) {
        setSessionId(storedSession);
      } else {
        localStorage.removeItem('admin-session');
      }
    } catch (error) {
      localStorage.removeItem('admin-session');
    }
    setIsCheckingSession(false);
  };

  const fetchLeads = async () => {
    if (!sessionId) return;
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (filters.status) params.set('status', filters.status);
    if (filters.label) params.set('label', filters.label);

    // Convert dateRange to from/to dates
    if (filters.dateRange) {
      const now = new Date();
      let from: Date | undefined;
      let to: Date | undefined;

      switch (filters.dateRange) {
        case 'today':
          from = new Date(now.getFullYear(), now.getMonth(), now.getDate());
          to = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
          break;
        case 'yesterday':
          const yesterday = new Date(now);
          yesterday.setDate(yesterday.getDate() - 1);
          from = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
          to = new Date(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate(), 23, 59, 59);
          break;
        case 'last7days':
          from = new Date(now);
          from.setDate(from.getDate() - 7);
          to = now;
          break;
        case 'last30days':
          from = new Date(now);
          from.setDate(from.getDate() - 30);
          to = now;
          break;
        case 'thisMonth':
          from = new Date(now.getFullYear(), now.getMonth(), 1);
          to = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
          break;
        case 'lastMonth':
          from = new Date(now.getFullYear(), now.getMonth() - 1, 1);
          to = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);
          break;
      }

      if (from) params.set('from', from.toISOString());
      if (to) params.set('to', to.toISOString());
    }

    if (sortField) params.set('sortField', sortField);
    if (sortDirection) params.set('sortDirection', sortDirection);

    const res = await fetch(`/admin/api/leads?${params.toString()}`, {
      headers: { 'X-Session-Id': sessionId },
    });

    if (res.ok) {
      const json = await res.json();
      setLeads(json.items || []);
      setTotalCount(json.total || 0);
    } else if (res.status === 401) {
      handleLogout();
    }
  };

  useEffect(() => { checkSession(); }, []);
  useEffect(() => { if (sessionId) fetchLeads(); }, [sessionId, search, filters, sortField, sortDirection]);

  const handleBulkDelete = async () => {
    if (selectedLeads.length === 0 || !sessionId) return;

    if (!confirm(`${selectedLeads.length} Leads wirklich löschen?`)) return;

    const res = await fetch('/admin/api/bulk-delete', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify({ ids: selectedLeads })
    });
    if (res.ok) {
      setSelectedLeads([]);
      fetchLeads();
    } else if (res.status === 401) {
      handleLogout();
    }
  };

  const handleBulkLabelChange = async (label: string) => {
    if (selectedLeads.length === 0 || !sessionId) return;

    const res = await fetch('/admin/api/leads/bulk-label', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify({ ids: selectedLeads, label })
    });

    if (res.ok) {
      setSelectedLeads([]);
      fetchLeads();
    } else if (res.status === 401) {
      handleLogout();
    }
  };

  const handleExport = async (format: 'csv' | 'xlsx') => {
    if (!sessionId) return;

    const exportData = selectedLeads.length > 0
      ? { format, ids: selectedLeads }
      : { format, filter: { search, ...filters } };

    const res = await fetch('/admin/api/export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify(exportData)
    });

    if (!res.ok) return;

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = format === 'xlsx' ? 'leads.xlsx' : 'leads.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleStatusChange = async (id: string, status: string) => {
    if (!sessionId) return;
    const res = await fetch(`/admin/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify({ status })
    });
    if (res.ok) {
      fetchLeads();
    } else if (res.status === 401) {
      handleLogout();
    }
  };

  const handleLabelChange = async (id: string, label: string) => {
    if (!sessionId) return;
    const res = await fetch(`/admin/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify({ label })
    });
    if (res.ok) {
      fetchLeads();
    } else if (res.status === 401) {
      handleLogout();
    }
  };

  const handleLeadUpdate = async (id: string, updates: Partial<LeadItem>) => {
    if (!sessionId) return;
    const res = await fetch(`/admin/api/leads/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify(updates)
    });
    if (res.ok) {
      fetchLeads();
      setDetailsLead(null);
    } else if (res.status === 401) {
      handleLogout();
    }
  };

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedLeads(leads.map(lead => lead.id));
    } else {
      setSelectedLeads([]);
    }
  };

  const handleSelectLead = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedLeads(prev => [...prev, id]);
    } else {
      setSelectedLeads(prev => prev.filter(leadId => leadId !== id));
    }
  };

  const handleNewLead = () => {
    setShowNewLeadModal(true);
  };

  const handleCreateLead = async (leadData: any) => {
    if (!sessionId) return;

    const res = await fetch('/admin/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
      body: JSON.stringify(leadData)
    });

    if (res.ok) {
      fetchLeads();
      setShowNewLeadModal(false);
    } else if (res.status === 401) {
      handleLogout();
    } else {
      alert('Fehler beim Erstellen des Leads');
    }
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  // Notification management functions
  const clearNotifications = (section?: string) => {
    if (section) {
      setNotifications(prev => ({ ...prev, [section]: 0 }));
    } else {
      // Clear all notifications
      setNotifications({
        activities: 0,
        analytics: 0,
        finance: 0,
        settings: 0
      });
    }
  };

  const clearAllNotifications = () => clearNotifications();

  // Function to add notifications (for testing/demo purposes)
  const addNotification = (section: keyof typeof notifications, count: number = 1) => {
    setNotifications(prev => ({
      ...prev,
      [section]: prev[section] + count
    }));
  };

  const handleLogin = (newSessionId: string) => {
    setSessionId(newSessionId);
  };

  const handleLogout = async () => {
    if (sessionId) {
      try {
        await fetch('/admin/api/logout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'X-Session-Id': sessionId },
        });
      } catch (error) {
        // Ignore network errors during logout
      }
    }
    localStorage.removeItem('admin-session');
    setSessionId(null);
    setLeads([]);
    setSelectedLeads([]);
    setDetailsLead(null);
  };

  if (isCheckingSession) {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <Typography>Überprüfung der Sitzung...</Typography>
      </Box>
    );
  }

  if (!sessionId) {
    return <LoginForm onLogin={handleLogin} />;
  }

  const renderMainContent = () => {
    if (activeSection === 'dashboard') {
      return <Dashboard leads={leads} totalCount={totalCount} />;
    }

    if (activeSection.startsWith('activities')) {
      return <Activities leads={leads} />;
    }

    if (activeSection.startsWith('analytics')) {
      return <Analytics leads={leads} totalCount={totalCount} />;
    }

    if (activeSection.startsWith('finance')) {
      return <Finance leads={leads} totalCount={totalCount} />;
    }

    if (activeSection.startsWith('leads')) {
      return (
        <Box sx={{ p: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
              Leads
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Verwalten Sie Ihre Leads und verfolgen Sie den Fortschritt
            </Typography>
          </Box>

          {/* Leads Management Interface */}
          <Paper elevation={0} sx={{ borderRadius: 2, overflow: 'hidden' }}>
            <LeadsToolbar
              search={search}
              onSearchChange={setSearch}
              selectedCount={selectedLeads.length}
              totalCount={totalCount}
              onBulkDelete={handleBulkDelete}
              onBulkLabelChange={handleBulkLabelChange}
              onExport={handleExport}
              onRefresh={fetchLeads}
              onNewLead={handleNewLead}
              filters={filters}
              onFilterChange={setFilters}
            />

            <LeadsTable
              leads={leads}
              selected={selectedLeads}
              onSelectAll={handleSelectAll}
              onSelectLead={handleSelectLead}
              onSort={handleSort}
              sortField={sortField}
              sortDirection={sortDirection}
              onLeadClick={setDetailsLead}
              onStatusChange={handleStatusChange}
              onLabelChange={handleLabelChange}
            />
          </Paper>

          {/* Lead Details Panel */}
          <LeadDetailsPanel
            open={!!detailsLead}
            lead={detailsLead}
            onClose={() => setDetailsLead(null)}
            onUpdate={handleLeadUpdate}
          />

          {/* New Lead Modal */}
          <NewLeadModal
            open={showNewLeadModal}
            onClose={() => setShowNewLeadModal(false)}
            onSave={handleCreateLead}
          />
        </Box>
      );
    }

    // Placeholder for other sections
    return (
      <Box sx={{ p: 4, textAlign: 'center', py: 8 }}>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {activeSection === 'settings' && 'Einstellungen'}
          {activeSection === 'help' && 'Hilfe & Support'}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Diese Funktion wird bald verfügbar sein.
        </Typography>
      </Box>
    );
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        onSectionChange={setActiveSection}
        leadCounts={leadCounts}
        notifications={notifications}
        onClearNotifications={clearNotifications}
        onClearAllNotifications={clearAllNotifications}
      />

      {/* Main Content Area */}
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Paper elevation={0} sx={{ borderBottom: '1px solid #e0e0e0', zIndex: 1 }}>
          <Toolbar sx={{ px: 3, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              size="small"
              variant="outlined"
              startIcon={<ExitToAppIcon />}
              onClick={handleLogout}
              sx={{ borderRadius: 2 }}
            >
              Logout
            </Button>
          </Toolbar>
        </Paper>

        {/* Main Content */}
        <Container maxWidth={false} sx={{ p: 0, flexGrow: 1 }}>
          {renderMainContent()}
        </Container>
      </Box>
    </Box>
  );
}
