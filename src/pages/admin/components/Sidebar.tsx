import React, { useState } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Divider,
  Collapse,
  Badge,
  Chip
} from '@mui/material';
import siteLogo from '../../../icons/logo.svg';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
  Assessment as AssessmentIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  PersonAdd as PersonAddIcon,
  Group as GroupIcon,
  Star as StarIcon,
  Schedule as ScheduleIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Assignment as AssignmentIcon,
  Analytics as AnalyticsIcon,
  AccountBalance as AccountBalanceIcon,
  CreditCard as CreditCardIcon,
  Receipt as ReceiptIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Help as HelpIcon
} from '@mui/icons-material';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  leadCounts?: {
    total: number;
    new: number;
    qualified: number;
    followUp: number;
  };
}

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: DashboardIcon,
    badge: null
  },
  {
    id: 'leads',
    label: 'Leads',
    icon: PeopleIcon,
    badge: 8,
    subItems: [
      { id: 'leads-all', label: 'Alle Leads', icon: GroupIcon },
      { id: 'leads-new', label: 'Neue Leads', icon: PersonAddIcon, badge: 3 },
      { id: 'leads-qualified', label: 'Qualifiziert', icon: StarIcon, badge: 2 },
      { id: 'leads-follow-up', label: 'Follow-Up', icon: ScheduleIcon, badge: 1 }
    ]
  },
  {
    id: 'activities',
    label: 'Aktivitäten',
    icon: AssignmentIcon,
    badge: 5,
    subItems: [
      { id: 'activities-calls', label: 'Anrufe', icon: PhoneIcon },
      { id: 'activities-emails', label: 'E-Mails', icon: EmailIcon },
      { id: 'activities-meetings', label: 'Termine', icon: ScheduleIcon }
    ]
  },
  {
    id: 'analytics',
    label: 'Analytics',
    icon: AnalyticsIcon,
    subItems: [
      { id: 'analytics-overview', label: 'Übersicht', icon: TrendingUpIcon },
      { id: 'analytics-reports', label: 'Berichte', icon: AssessmentIcon },
      { id: 'analytics-performance', label: 'Performance', icon: TrendingUpIcon }
    ]
  },
  {
    id: 'finance',
    label: 'Finanzen',
    icon: AccountBalanceIcon,
    subItems: [
      { id: 'finance-credits', label: 'Kredite', icon: CreditCardIcon },
      { id: 'finance-payments', label: 'Zahlungen', icon: ReceiptIcon },
      { id: 'finance-reports', label: 'Finanzberichte', icon: AssessmentIcon }
    ]
  }
];

const bottomMenuItems = [
  {
    id: 'settings',
    label: 'Einstellungen',
    icon: SettingsIcon,
    subItems: [
      { id: 'settings-general', label: 'Allgemein', icon: SettingsIcon },
      { id: 'settings-security', label: 'Sicherheit', icon: SecurityIcon },
      { id: 'settings-notifications', label: 'Benachrichtigungen', icon: NotificationsIcon }
    ]
  },
  {
    id: 'help',
    label: 'Hilfe & Support',
    icon: HelpIcon
  }
];

export default function Sidebar({ activeSection, onSectionChange, leadCounts }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['leads']);

  // Dynamic menu items with real lead counts
  const dynamicMenuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: DashboardIcon,
      badge: null
    },
    {
      id: 'leads',
      label: 'Leads',
      icon: PeopleIcon,
      badge: leadCounts?.total || 0,
      subItems: [
        { id: 'leads-all', label: 'Alle Leads', icon: GroupIcon },
        { id: 'leads-new', label: 'Neue Leads', icon: PersonAddIcon, badge: leadCounts?.new || 0 },
        { id: 'leads-qualified', label: 'Qualifiziert', icon: StarIcon, badge: leadCounts?.qualified || 0 },
        { id: 'leads-follow-up', label: 'Follow-Up', icon: ScheduleIcon, badge: leadCounts?.followUp || 0 }
      ]
    },
    {
      id: 'activities',
      label: 'Aktivitäten',
      icon: AssignmentIcon,
      badge: 5, // TODO: Make this dynamic
      subItems: [
        { id: 'activities-calls', label: 'Anrufe', icon: PhoneIcon },
        { id: 'activities-emails', label: 'E-Mails', icon: EmailIcon },
        { id: 'activities-meetings', label: 'Termine', icon: ScheduleIcon }
      ]
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: AnalyticsIcon,
      subItems: [
        { id: 'analytics-overview', label: 'Übersicht', icon: TrendingUpIcon },
        { id: 'analytics-reports', label: 'Berichte', icon: AssessmentIcon },
        { id: 'analytics-performance', label: 'Performance', icon: TrendingUpIcon }
      ]
    },
    {
      id: 'finance',
      label: 'Finanzen',
      icon: AccountBalanceIcon,
      subItems: [
        { id: 'finance-credits', label: 'Kredite', icon: CreditCardIcon },
        { id: 'finance-payments', label: 'Zahlungen', icon: ReceiptIcon },
        { id: 'finance-reports', label: 'Finanzberichte', icon: AssessmentIcon }
      ]
    }
  ];

  const handleItemClick = (itemId: string, hasSubItems: boolean = false) => {
    if (hasSubItems) {
      setExpandedItems(prev => 
        prev.includes(itemId) 
          ? prev.filter(id => id !== itemId)
          : [...prev, itemId]
      );
    } else {
      onSectionChange(itemId);
    }
  };

  const renderMenuItem = (item: any, isSubItem: boolean = false) => {
    const isActive = activeSection === item.id;
    const isExpanded = expandedItems.includes(item.id);
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const IconComponent = item.icon;

    return (
      <React.Fragment key={item.id}>
        <ListItem disablePadding sx={{ pl: isSubItem ? 2 : 0 }}>
          <ListItemButton
            selected={isActive}
            onClick={() => handleItemClick(item.id, hasSubItems)}
            sx={{
              borderRadius: 2,
              mx: 1,
              mb: 0.5,
              '&.Mui-selected': {
                backgroundColor: '#e3f2fd',
                color: '#1976d2',
                '& .MuiListItemIcon-root': {
                  color: '#1976d2'
                }
              },
              '&:hover': {
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            <ListItemIcon sx={{ minWidth: 40 }}>
              <IconComponent fontSize={isSubItem ? 'small' : 'medium'} />
            </ListItemIcon>
            <ListItemText 
              primary={item.label}
              primaryTypographyProps={{
                fontSize: isSubItem ? '0.875rem' : '0.95rem',
                fontWeight: isActive ? 600 : 400
              }}
            />
            {item.badge && (
              <Badge 
                badgeContent={item.badge} 
                color="primary"
                sx={{ mr: hasSubItems ? 1 : 0 }}
              />
            )}
            {hasSubItems && (
              isExpanded ? <ExpandLess /> : <ExpandMore />
            )}
          </ListItemButton>
        </ListItem>
        
        {hasSubItems && (
          <Collapse in={isExpanded} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subItems.map((subItem: any) => renderMenuItem(subItem, true))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Box
      sx={{
        width: 280,
        height: '100vh',
        backgroundColor: 'white',
        borderRight: '1px solid #e0e0e0',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      }}
    >
      {/* Header */}
      <Box sx={{ p: 3, borderBottom: '1px solid #e0e0e0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', marginBottom: '16px' }}>
          <img src={siteLogo} alt="MibugCredit" style={{ height: 40 }} />
        </a>
        <Chip
          label="16 aktive Leads"
          size="small"
          color="success"
          variant="outlined"
        />
      </Box>

      {/* Main Navigation */}
      <Box sx={{ flexGrow: 1, overflow: 'auto', py: 1 }}>
        <List>
          {dynamicMenuItems.map(item => renderMenuItem(item))}
        </List>
      </Box>

      {/* Bottom Navigation */}
      <Box sx={{ borderTop: '1px solid #e0e0e0', py: 1 }}>
        <List>
          {bottomMenuItems.map(item => renderMenuItem(item))}
        </List>
      </Box>

      {/* Footer */}
      <Box sx={{ p: 2, borderTop: '1px solid #e0e0e0', backgroundColor: '#fafafa' }}>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          MibugCredit CRM v2.0
        </Typography>
        <Typography variant="caption" color="text.secondary" align="center" display="block">
          © 2025 Alle Rechte vorbehalten
        </Typography>
      </Box>
    </Box>
  );
}
