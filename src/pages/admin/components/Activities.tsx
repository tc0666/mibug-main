import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Chip,
  Button,
  IconButton,
  Card,
  CardContent,
  Divider,
  Badge
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  Add as AddIcon,
  CallMade as CallMadeIcon,
  CallReceived as CallReceivedIcon,
  CallMissed as CallMissedIcon,
  Send as SendIcon,
  Drafts as DraftsIcon,
  Event as EventIcon,
  AccessTime as TimeIcon
} from '@mui/icons-material';

interface ActivitiesProps {
  leads: any[];
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`activities-tabpanel-${index}`}
      aria-labelledby={`activities-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Activities({ leads }: ActivitiesProps) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Mock data for activities
  const callActivities = [
    {
      id: 1,
      type: 'outgoing',
      contact: 'Thomas Müller',
      phone: '+49 173 999 8888',
      duration: '5:23',
      time: '10:30',
      date: 'Heute',
      status: 'completed',
      avatar: 'TM'
    },
    {
      id: 2,
      type: 'incoming',
      contact: 'Julia Fischer',
      phone: '+49 162 888 7777',
      duration: '12:45',
      time: '09:15',
      date: 'Heute',
      status: 'completed',
      avatar: 'JF'
    },
    {
      id: 3,
      type: 'missed',
      contact: 'Michael Hoffmann',
      phone: '+49 151 777 6666',
      duration: '0:00',
      time: '08:45',
      date: 'Gestern',
      status: 'missed',
      avatar: 'MH'
    }
  ];

  const emailActivities = [
    {
      id: 1,
      type: 'sent',
      contact: 'Sofia Maier',
      email: 'sofia.maier@email.de',
      subject: 'Kreditangebot - Nachfrage',
      time: '14:20',
      date: 'Heute',
      status: 'sent',
      avatar: 'SM'
    },
    {
      id: 2,
      type: 'received',
      contact: 'Jonas Weber',
      email: 'jonas.weber@business.de',
      subject: 'Re: Terminvereinbarung',
      time: '11:30',
      date: 'Heute',
      status: 'read',
      avatar: 'JW'
    },
    {
      id: 3,
      type: 'draft',
      contact: 'Lena Keller',
      email: 'lena.keller@consulting.de',
      subject: 'Kreditkonditionen Übersicht',
      time: '16:45',
      date: 'Gestern',
      status: 'draft',
      avatar: 'LK'
    }
  ];

  const appointmentActivities = [
    {
      id: 1,
      contact: 'Markus Schmidt',
      title: 'Beratungsgespräch Kredit',
      time: '14:00 - 15:00',
      date: 'Morgen',
      location: 'Büro Hamburg',
      status: 'scheduled',
      avatar: 'MS'
    },
    {
      id: 2,
      contact: 'Anna Becker',
      title: 'Vertragsunterzeichnung',
      time: '10:30 - 11:00',
      date: 'Freitag',
      location: 'Online Meeting',
      status: 'confirmed',
      avatar: 'AB'
    },
    {
      id: 3,
      contact: 'Peter Schneider',
      title: 'Nachbesprechung',
      time: '16:00 - 16:30',
      date: 'Nächste Woche',
      location: 'Telefon',
      status: 'pending',
      avatar: 'PS'
    }
  ];

  const getCallIcon = (type: string) => {
    switch (type) {
      case 'outgoing': return <CallMadeIcon color="success" />;
      case 'incoming': return <CallReceivedIcon color="primary" />;
      case 'missed': return <CallMissedIcon color="error" />;
      default: return <PhoneIcon />;
    }
  };

  const getEmailIcon = (type: string) => {
    switch (type) {
      case 'sent': return <SendIcon color="success" />;
      case 'received': return <EmailIcon color="primary" />;
      case 'draft': return <DraftsIcon color="warning" />;
      default: return <EmailIcon />;
    }
  };

  const getStatusChip = (status: string, type: string) => {
    const statusConfig = {
      completed: { label: 'Abgeschlossen', color: 'success' as const },
      missed: { label: 'Verpasst', color: 'error' as const },
      sent: { label: 'Gesendet', color: 'success' as const },
      read: { label: 'Gelesen', color: 'info' as const },
      draft: { label: 'Entwurf', color: 'warning' as const },
      scheduled: { label: 'Geplant', color: 'primary' as const },
      confirmed: { label: 'Bestätigt', color: 'success' as const },
      pending: { label: 'Ausstehend', color: 'warning' as const }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || { label: status, color: 'default' as const };
    return <Chip label={config.label} color={config.color} size="small" />;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
            Aktivitäten
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Verwalten Sie Anrufe, E-Mails und Termine
          </Typography>
        </Box>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ borderRadius: 2 }}
        >
          Neue Aktivität
        </Button>
      </Box>

      {/* Activity Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#2196f3', fontSize: '2rem' }}>
                    {callActivities.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Anrufe heute
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#e3f2fd', width: 48, height: 48 }}>
                  <PhoneIcon sx={{ color: '#2196f3' }} />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#4caf50', fontSize: '2rem' }}>
                    {emailActivities.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    E-Mails heute
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#e8f5e8', width: 48, height: 48 }}>
                  <EmailIcon sx={{ color: '#4caf50' }} />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#ff9800', fontSize: '2rem' }}>
                    {appointmentActivities.length}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Termine anstehend
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: '#fff3e0', width: 48, height: 48 }}>
                  <ScheduleIcon sx={{ color: '#ff9800' }} />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Activity Tabs */}
      <Paper sx={{ borderRadius: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 3 }}>
            <Tab 
              icon={<Badge badgeContent={callActivities.length} color="primary"><PhoneIcon /></Badge>} 
              label="Anrufe" 
              iconPosition="start"
            />
            <Tab 
              icon={<Badge badgeContent={emailActivities.length} color="primary"><EmailIcon /></Badge>} 
              label="E-Mails" 
              iconPosition="start"
            />
            <Tab 
              icon={<Badge badgeContent={appointmentActivities.length} color="primary"><ScheduleIcon /></Badge>} 
              label="Termine" 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {/* Calls Tab */}
        <TabPanel value={tabValue} index={0}>
          <List>
            {callActivities.map((call, index) => (
              <React.Fragment key={call.id}>
                <ListItem sx={{ px: 3 }}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 40, height: 40, fontSize: '0.875rem' }}>
                      {call.avatar}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        {getCallIcon(call.type)}
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {call.contact}
                        </Typography>
                        {getStatusChip(call.status, 'call')}
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" color="text.secondary">
                          {call.phone} • {call.duration} • {call.time}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {call.date}
                        </Typography>
                      </Box>
                    }
                  />
                  <IconButton size="small">
                    <PhoneIcon />
                  </IconButton>
                </ListItem>
                {index < callActivities.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </TabPanel>

        {/* Emails Tab */}
        <TabPanel value={tabValue} index={1}>
          <List>
            {emailActivities.map((email, index) => (
              <React.Fragment key={email.id}>
                <ListItem sx={{ px: 3 }}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 40, height: 40, fontSize: '0.875rem' }}>
                      {email.avatar}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        {getEmailIcon(email.type)}
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {email.contact}
                        </Typography>
                        {getStatusChip(email.status, 'email')}
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {email.subject}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {email.email} • {email.time}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {email.date}
                        </Typography>
                      </Box>
                    }
                  />
                  <IconButton size="small">
                    <EmailIcon />
                  </IconButton>
                </ListItem>
                {index < emailActivities.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </TabPanel>

        {/* Appointments Tab */}
        <TabPanel value={tabValue} index={2}>
          <List>
            {appointmentActivities.map((appointment, index) => (
              <React.Fragment key={appointment.id}>
                <ListItem sx={{ px: 3 }}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 40, height: 40, fontSize: '0.875rem' }}>
                      {appointment.avatar}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <EventIcon color="primary" />
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {appointment.contact}
                        </Typography>
                        {getStatusChip(appointment.status, 'appointment')}
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {appointment.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          <TimeIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'middle' }} />
                          {appointment.time} • {appointment.location}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {appointment.date}
                        </Typography>
                      </Box>
                    }
                  />
                  <IconButton size="small">
                    <ScheduleIcon />
                  </IconButton>
                </ListItem>
                {index < appointmentActivities.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </TabPanel>
      </Paper>
    </Box>
  );
}
