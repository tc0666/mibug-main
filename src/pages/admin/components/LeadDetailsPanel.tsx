import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Avatar,
  Chip,
  Divider,
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Tab,
  Tabs,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tooltip,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  Close as CloseIcon,
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Euro as EuroIcon,
  Person as PersonIcon,
  Home as HomeIcon,
  Work as WorkIcon,
  CalendarToday as CalendarIcon,
  Notes as NotesIcon,
  History as HistoryIcon,
  Attachment as AttachmentIcon
} from '@mui/icons-material';

// Translation maps for German display
const familyStatusMap: Record<string, string> = {
  SINGLE: 'ledig',
  MARRIED: 'verheiratet',
  WIDOWED: 'verwitwet',
  DIVORCED: 'geschieden',
  PARTNERSHIP: 'eheähnliche Lebensgemeinschaft',
};

const livingSituationMap: Record<string, string> = {
  RENT: 'zur Miete',
  OWN: 'im Wohneigentum',
  RENTING: 'zur Miete',
  RENTFREE: 'mietfrei',
  PARENTS: 'bei den Eltern',
  PROPERTY: 'im Wohneigentum',
};

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
  SELF_EMPLOYED: 'Selbstständige/r',
  FREELANCER: 'Freiberufler/in',
  STUDENT: 'Student/in',
};

const genderMap: Record<string, string> = {
  MALE: 'Herr',
  FEMALE: 'Frau',
};

// Translation function
const translateField = (key: string, value: any): string => {
  if (value == null || value === '') return '-';
  const v = String(value);
  switch (key) {
    case 'familyStatus': return familyStatusMap[v] || v;
    case 'professionalGroup': return professionalGroupMap[v] || v;
    case 'livingSituation': return livingSituationMap[v] || v;
    case 'gender': return genderMap[v] || v;
    case 'consent': return (v === 'true' || v === '1') ? 'Ja' : 'Nein';
    default: return v;
  }
};

interface Lead {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  street: string;
  zipCode: string;
  country: string;
  creditAmount: number;
  duration: number;
  income: number;
  rentIncludingHeating: number;
  status: string;
  label: string;
  createdAt: string;
  familyStatus: string;
  professionalGroup: string;
  livingSituation: string;
  gender: string;
  residentSince: number;
  notes: string;
  consent: boolean;
}

interface LeadDetailsPanelProps {
  open: boolean;
  lead: Lead | null;
  onClose: () => void;
  onUpdate: (id: string, updates: Partial<Lead>) => void;
}

const statusColors: Record<string, string> = {
  'New': '#2196f3',
  'Follow-Up': '#ff9800',
  'Warm': '#4caf50',
  'Cold': '#9e9e9e',
  'Qualified': '#8bc34a',
  'Disqualified': '#f44336',
  'High-Value': '#9c27b0'
};

export default function LeadDetailsPanel({ open, lead, onClose, onUpdate }: LeadDetailsPanelProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState<Partial<Lead>>({});
  const [activeTab, setActiveTab] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!lead) return null;

  const handleEdit = () => {
    setEditData(lead);
    setIsEditing(true);
  };

  const handleSave = () => {
    onUpdate(lead.id, editData);
    setIsEditing(false);
    setEditData({});
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditData({});
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('de-DE', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: isMobile ? '100vw' : 480,
          maxWidth: '100vw',
          height: '100vh'
        }
      }}
    >
      <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h6">Lead Details</Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {!isEditing ? (
                <Tooltip title="Bearbeiten">
                  <IconButton size="small" onClick={handleEdit}>
                    <EditIcon />
                  </IconButton>
                </Tooltip>
              ) : (
                <>
                  <Tooltip title="Speichern">
                    <IconButton size="small" color="primary" onClick={handleSave}>
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Abbrechen">
                    <IconButton size="small" onClick={handleCancel}>
                      <CancelIcon />
                    </IconButton>
                  </Tooltip>
                </>
              )}
              <IconButton size="small" onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Lead Header */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar
              sx={{
                width: 60,
                height: 60,
                backgroundColor: statusColors[lead.status] || '#2196f3',
                fontSize: '1.25rem'
              }}
            >
              {getInitials(lead.firstName, lead.lastName)}
            </Avatar>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h6">
                {lead.firstName} {lead.lastName}
              </Typography>
              <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
                <Chip
                  label={lead.status}
                  size="small"
                  sx={{
                    backgroundColor: statusColors[lead.status] || '#2196f3',
                    color: 'white'
                  }}
                />
                <Chip
                  label={lead.label}
                  size="small"
                  variant="outlined"
                />
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Tabs */}
        <Box sx={{ borderBottom: '1px solid #e0e0e0' }}>
          <Tabs value={activeTab} onChange={(_, value) => setActiveTab(value)}>
            <Tab label="Übersicht" />
            <Tab label="Notizen" />
            <Tab label="Aktivitäten" />
          </Tabs>
        </Box>

        {/* Content */}
        <Box sx={{ flexGrow: 1, overflow: 'auto', p: 2 }}>
          {activeTab === 0 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {/* Contact Information */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PersonIcon fontSize="small" />
                    Kontaktinformationen
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <EmailIcon fontSize="small" color="action" />
                        <Typography variant="body2">{lead.email}</Typography>
                      </Box>
                      {lead.phone && (
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                          <PhoneIcon fontSize="small" color="action" />
                          <Typography variant="body2">{lead.phone}</Typography>
                        </Box>
                      )}
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationIcon fontSize="small" color="action" />
                        <Typography variant="body2">
                          {lead.street && `${lead.street}, `}
                          {lead.zipCode} {lead.city}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Financial Information */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EuroIcon fontSize="small" />
                    Finanzinformationen
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" color="text.secondary">Kreditbetrag</Typography>
                      <Typography variant="h6" color="primary">
                        {formatCurrency(lead.creditAmount)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" color="text.secondary">Laufzeit</Typography>
                      <Typography variant="body1">
                        {lead.duration} Monate
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" color="text.secondary">Einkommen</Typography>
                      <Typography variant="body1">
                        {formatCurrency(lead.income)}
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <Typography variant="caption" color="text.secondary">Warmmiete</Typography>
                      <Typography variant="body1">
                        {formatCurrency(lead.rentIncludingHeating)}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Personal Information */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HomeIcon fontSize="small" />
                    Persönliche Informationen
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="text.secondary">Familienstand</Typography>
                      <Typography variant="body2">{translateField('familyStatus', lead.familyStatus)}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="text.secondary">Berufsgruppe</Typography>
                      <Typography variant="body2">{translateField('professionalGroup', lead.professionalGroup)}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="text.secondary">Wohnsituation</Typography>
                      <Typography variant="body2">{translateField('livingSituation', lead.livingSituation)}</Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="caption" color="text.secondary">Wohnhaft seit</Typography>
                      <Typography variant="body2">{lead.residentSince}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Timeline */}
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarIcon fontSize="small" />
                    Zeitlinie
                  </Typography>
                  <Typography variant="caption" color="text.secondary">Erstellt am</Typography>
                  <Typography variant="body2">{formatDate(lead.createdAt)}</Typography>
                </CardContent>
              </Card>
            </Box>
          )}

          {activeTab === 1 && (
            <Box>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <NotesIcon fontSize="small" />
                    Notizen
                  </Typography>
                  {isEditing ? (
                    <TextField
                      fullWidth
                      multiline
                      rows={6}
                      value={editData.notes || ''}
                      onChange={(e) => setEditData({ ...editData, notes: e.target.value })}
                      placeholder="Notizen hinzufügen..."
                    />
                  ) : (
                    <Typography variant="body2" sx={{ whiteSpace: 'pre-wrap', minHeight: 100 }}>
                      {lead.notes || 'Keine Notizen vorhanden.'}
                    </Typography>
                  )}
                </CardContent>
              </Card>
            </Box>
          )}

          {activeTab === 2 && (
            <Box>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="subtitle2" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <HistoryIcon fontSize="small" />
                    Aktivitätsverlauf
                  </Typography>
                  <List dense>
                    <ListItem>
                      <ListItemIcon>
                        <CalendarIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Lead erstellt"
                        secondary={formatDate(lead.createdAt)}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <EditIcon fontSize="small" />
                      </ListItemIcon>
                      <ListItemText
                        primary="Status geändert"
                        secondary={`Auf "${lead.status}" gesetzt`}
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Box>
          )}
        </Box>

        {/* Footer Actions */}
        <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
          <Box sx={{ display: 'flex', gap: 1 }}>
            <Button
              variant="outlined"
              startIcon={<PhoneIcon />}
              size="small"
              href={`tel:${lead.phone}`}
            >
              Anrufen
            </Button>
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              size="small"
              href={`mailto:${lead.email}`}
            >
              E-Mail
            </Button>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
