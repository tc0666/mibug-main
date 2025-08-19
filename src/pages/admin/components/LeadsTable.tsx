import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Checkbox,
  IconButton,
  Chip,
  Avatar,
  Box,
  Typography,
  Menu,
  MenuItem,
  Tooltip,
  Paper,
  useMediaQuery,
  useTheme
} from '@mui/material';
import {
  MoreVert as MoreVertIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Euro as EuroIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon
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

// Translation function
const translateField = (key: string, value: any): string => {
  if (value == null || value === '') return '-';
  const v = String(value);
  switch (key) {
    case 'familyStatus': return familyStatusMap[v] || v;
    case 'professionalGroup': return professionalGroupMap[v] || v;
    case 'livingSituation': return livingSituationMap[v] || v;
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
  creditAmount: number;
  status: string;
  label: string;
  createdAt: string;
  familyStatus: string;
  professionalGroup: string;
  livingSituation: string;
  income: number;
}

interface LeadsTableProps {
  leads: Lead[];
  selected: string[];
  onSelectAll: (checked: boolean) => void;
  onSelectLead: (id: string, checked: boolean) => void;
  onSort: (field: string) => void;
  sortField: string;
  sortDirection: 'asc' | 'desc';
  onLeadClick: (lead: Lead) => void;
  onStatusChange: (id: string, status: string) => void;
  onLabelChange: (id: string, label: string) => void;
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

const labelColors: Record<string, string> = {
  'New': 'default',
  'Follow-Up': 'warning',
  'Warm': 'success',
  'Cold': 'default',
  'Qualified': 'primary',
  'Disqualified': 'error',
  'High-Value': 'secondary'
};

export default function LeadsTable({
  leads,
  selected,
  onSelectAll,
  onSelectLead,
  onSort,
  sortField,
  sortDirection,
  onLeadClick,
  onStatusChange,
  onLabelChange
}: LeadsTableProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedLeadId, setSelectedLeadId] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>, leadId: string) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
    setSelectedLeadId(leadId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedLeadId(null);
  };

  const handleStatusChange = (status: string) => {
    if (selectedLeadId) {
      onStatusChange(selectedLeadId, status);
    }
    handleMenuClose();
  };

  const handleLabelChange = (label: string) => {
    if (selectedLeadId) {
      onLabelChange(selectedLeadId, label);
    }
    handleMenuClose();
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
      year: 'numeric'
    });
  };

  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const isAllSelected = leads.length > 0 && selected.length === leads.length;
  const isIndeterminate = selected.length > 0 && selected.length < leads.length;

  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: 'none',
        border: '1px solid #e0e0e0',
        overflowX: 'auto',
        '& .MuiTable-root': {
          minWidth: isMobile ? 800 : 'auto'
        }
      }}
    >
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={{ '& .MuiTableCell-head': { backgroundColor: '#fafafa', fontWeight: 600 } }}>
            <TableCell padding="checkbox">
              <Checkbox
                indeterminate={isIndeterminate}
                checked={isAllSelected}
                onChange={(e) => onSelectAll(e.target.checked)}
                size="small"
              />
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === 'name'}
                direction={sortField === 'name' ? sortDirection : 'asc'}
                onClick={() => onSort('name')}
              >
                Kontakt
              </TableSortLabel>
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={sortField === 'status'}
                direction={sortField === 'status' ? sortDirection : 'asc'}
                onClick={() => onSort('status')}
              >
                Status
              </TableSortLabel>
            </TableCell>
            {!isMobile && (
              <TableCell>
                <TableSortLabel
                  active={sortField === 'label'}
                  direction={sortField === 'label' ? sortDirection : 'asc'}
                  onClick={() => onSort('label')}
                >
                  Label
                </TableSortLabel>
              </TableCell>
            )}
            <TableCell>
              <TableSortLabel
                active={sortField === 'creditAmount'}
                direction={sortField === 'creditAmount' ? sortDirection : 'asc'}
                onClick={() => onSort('creditAmount')}
              >
                Kreditbetrag
              </TableSortLabel>
            </TableCell>
            {!isMobile && (
              <TableCell>Beruf & Wohnsituation</TableCell>
            )}
            {!isTablet && (
              <TableCell>
                <TableSortLabel
                  active={sortField === 'createdAt'}
                  direction={sortField === 'createdAt' ? sortDirection : 'asc'}
                  onClick={() => onSort('createdAt')}
                >
                  Erstellt
                </TableSortLabel>
              </TableCell>
            )}
            <TableCell width={50}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {leads.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="body1" color="text.secondary">
                  Keine Leads gefunden
                </Typography>
              </TableCell>
            </TableRow>
          ) : (
            leads.map((lead) => (
            <TableRow
              key={lead.id}
              hover
              selected={selected.includes(lead.id)}
              onClick={() => onLeadClick(lead)}
              sx={{ 
                cursor: 'pointer',
                '&:hover': { backgroundColor: '#f8f9fa' },
                '&.Mui-selected': { backgroundColor: '#e3f2fd' }
              }}
            >
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selected.includes(lead.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    onSelectLead(lead.id, e.target.checked);
                  }}
                  size="small"
                />
              </TableCell>
              
              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{ 
                      width: 40, 
                      height: 40, 
                      backgroundColor: statusColors[lead.status] || '#2196f3',
                      fontSize: '0.875rem'
                    }}
                  >
                    {getInitials(lead.firstName, lead.lastName)}
                  </Avatar>
                  <Box>
                    <Typography variant="body2" fontWeight={600}>
                      {lead.firstName} {lead.lastName}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                      <EmailIcon sx={{ fontSize: 14, color: '#666' }} />
                      <Typography variant="caption" color="text.secondary">
                        {lead.email}
                      </Typography>
                    </Box>
                    {lead.phone && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.25 }}>
                        <PhoneIcon sx={{ fontSize: 14, color: '#666' }} />
                        <Typography variant="caption" color="text.secondary">
                          {lead.phone}
                        </Typography>
                      </Box>
                    )}
                    {lead.city && (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.25 }}>
                        <LocationIcon sx={{ fontSize: 14, color: '#666' }} />
                        <Typography variant="caption" color="text.secondary">
                          {lead.city}
                        </Typography>
                      </Box>
                    )}
                  </Box>
                </Box>
              </TableCell>

              <TableCell>
                <Chip
                  label={lead.status}
                  size="small"
                  sx={{
                    backgroundColor: statusColors[lead.status] || '#2196f3',
                    color: 'white',
                    fontWeight: 500,
                    minWidth: 80
                  }}
                />
              </TableCell>

              {!isMobile && (
                <TableCell>
                  <Chip
                    label={lead.label}
                    size="small"
                    color={labelColors[lead.label] as any || 'default'}
                    variant="outlined"
                  />
                </TableCell>
              )}

              <TableCell>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <EuroIcon sx={{ fontSize: 16, color: '#4caf50' }} />
                  <Typography variant="body2" fontWeight={600} color="#4caf50">
                    {formatCurrency(lead.creditAmount)}
                  </Typography>
                </Box>
                {lead.income && !isMobile && (
                  <Typography variant="caption" color="text.secondary">
                    Einkommen: {formatCurrency(lead.income)}
                  </Typography>
                )}
                {/* Show label on mobile in credit amount column */}
                {isMobile && (
                  <Chip
                    label={lead.label}
                    size="small"
                    color={labelColors[lead.label] as any || 'default'}
                    variant="outlined"
                    sx={{ mt: 0.5 }}
                  />
                )}
              </TableCell>

              {!isMobile && (
                <TableCell>
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                      <PersonIcon sx={{ fontSize: 14, color: '#666' }} />
                      <Typography variant="caption">
                        {translateField('professionalGroup', lead.professionalGroup)}
                      </Typography>
                    </Box>
                    <Typography variant="caption" color="text.secondary">
                      {translateField('familyStatus', lead.familyStatus)} • {translateField('livingSituation', lead.livingSituation)}
                    </Typography>
                  </Box>
                </TableCell>
              )}

              {!isTablet && (
                <TableCell>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CalendarIcon sx={{ fontSize: 14, color: '#666' }} />
                    <Typography variant="caption" color="text.secondary">
                      {formatDate(lead.createdAt)}
                    </Typography>
                  </Box>
                </TableCell>
              )}

              <TableCell>
                <Tooltip title="Aktionen">
                  <IconButton
                    size="small"
                    onClick={(e) => handleMenuClick(e, lead.id)}
                  >
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          )))}
        </TableBody>
      </Table>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        PaperProps={{
          sx: { minWidth: 200 }
        }}
      >
        <MenuItem disabled sx={{ fontWeight: 600, color: 'text.primary' }}>
          Status ändern
        </MenuItem>
        {Object.keys(statusColors).map((status) => (
          <MenuItem key={status} onClick={() => handleStatusChange(status)}>
            <Chip
              label={status}
              size="small"
              sx={{
                backgroundColor: statusColors[status],
                color: 'white',
                mr: 1,
                minWidth: 80
              }}
            />
          </MenuItem>
        ))}
        
        <MenuItem disabled sx={{ fontWeight: 600, color: 'text.primary', mt: 1 }}>
          Label ändern
        </MenuItem>
        {Object.keys(labelColors).map((label) => (
          <MenuItem key={label} onClick={() => handleLabelChange(label)}>
            <Chip
              label={label}
              size="small"
              color={labelColors[label] as any}
              variant="outlined"
              sx={{ mr: 1, minWidth: 80 }}
            />
          </MenuItem>
        ))}
      </Menu>
    </TableContainer>
  );
}
