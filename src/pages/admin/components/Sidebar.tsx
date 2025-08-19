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
  Chip,
  IconButton,
  Tooltip,
  Menu,
  MenuItem
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
  Help as HelpIcon,
  Clear as ClearIcon,
  ClearAll as ClearAllIcon
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
  onMarkAllLeadsAsRead?: () => void;
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



export default function Sidebar({
  activeSection,
  onSectionChange,
  leadCounts,
  onMarkAllLeadsAsRead
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['leads']);
  const [notificationMenuAnchor, setNotificationMenuAnchor] = useState<null | HTMLElement>(null);

  // Dynamic menu items with notifications only on main Leads section
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
      badge: (leadCounts?.new || 0) + (leadCounts?.qualified || 0) + (leadCounts?.followUp || 0), // Total unread notifications
      subItems: [
        { id: 'leads-all', label: 'Alle Leads', icon: GroupIcon },
        { id: 'leads-new', label: 'Neue Leads', icon: PersonAddIcon },
        { id: 'leads-qualified', label: 'Qualifiziert', icon: StarIcon },
        { id: 'leads-follow-up', label: 'Follow-Up', icon: ScheduleIcon }
      ]
    },
    {
      id: 'activities',
      label: 'Aktivitäten',
      icon: AssignmentIcon,
      badge: null, // No notifications on Activities
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
      badge: null, // No notifications on Analytics
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
      badge: null, // No notifications on Finance
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

  const handleNotificationMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setNotificationMenuAnchor(event.currentTarget);
  };

  const handleNotificationMenuClose = () => {
    setNotificationMenuAnchor(null);
  };

  const handleMarkAllAsRead = () => {
    if (onMarkAllLeadsAsRead) {
      onMarkAllLeadsAsRead();
    }
    handleNotificationMenuClose();
  };

  // Dynamic bottom menu items (no notifications)
  const dynamicBottomMenuItems = [
    {
      id: 'settings',
      label: 'Einstellungen',
      icon: SettingsIcon,
      badge: null, // No notifications on Settings
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

  // Calculate total lead notifications (only for leads)
  const totalNotifications = (leadCounts?.new || 0) + (leadCounts?.qualified || 0) + (leadCounts?.followUp || 0);

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

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
          <Chip
            label={`${leadCounts?.total || 0} aktive Leads`}
            size="small"
            color="success"
            variant="outlined"
          />

          {totalNotifications > 0 && (
            <Tooltip title="Alle Leads als gelesen markieren">
              <IconButton
                size="small"
                onClick={handleNotificationMenuOpen}
                sx={{ p: 0.5 }}
              >
                <Badge badgeContent={totalNotifications} color="error" max={99}>
                  <NotificationsIcon fontSize="small" />
                </Badge>
              </IconButton>
            </Tooltip>
          )}
        </Box>

        {/* Notification Management Menu */}
        <Menu
          anchorEl={notificationMenuAnchor}
          open={Boolean(notificationMenuAnchor)}
          onClose={handleNotificationMenuClose}
          PaperProps={{
            sx: { minWidth: 200 }
          }}
        >
          <MenuItem onClick={handleMarkAllAsRead} disabled={totalNotifications === 0}>
            <ListItemIcon>
              <ClearAllIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Alle Leads als gelesen markieren" />
          </MenuItem>
        </Menu>
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
          {dynamicBottomMenuItems.map(item => renderMenuItem(item))}
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
