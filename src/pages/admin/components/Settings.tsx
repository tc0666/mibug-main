import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Switch,
  FormControlLabel,
  Divider,
  Button,
  TextField,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from '@mui/material';
import {
  Settings as SettingsIcon,
  Security as SecurityIcon,
  Notifications as NotificationsIcon,
  Save as SaveIcon,
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  VisibilityOff as VisibilityOffIcon,
  Shield as ShieldIcon,
  Lock as LockIcon,
  Email as EmailIcon,
  Sms as SmsIcon,
  Computer as DesktopIcon
} from '@mui/icons-material';

interface SettingsProps {
  activeSection: string;
}

export default function Settings({ activeSection }: SettingsProps) {
  const [emailNotifications, setEmailNotifications] = React.useState(true);
  const [smsNotifications, setSmsNotifications] = React.useState(false);
  const [desktopNotifications, setDesktopNotifications] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);

  const renderGeneralSettings = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsIcon />
            Allgemeine Einstellungen
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Firmenname"
                defaultValue="MiBug Credit"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Administrator E-Mail"
                defaultValue="admin@mibug-credit.de"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Zeitzone"
                defaultValue="Europe/Berlin"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Sprache"
                defaultValue="Deutsch"
                variant="outlined"
              />
            </Grid>
          </Grid>
          
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" startIcon={<SaveIcon />}>
              Einstellungen speichern
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );

  const renderSecuritySettings = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SecurityIcon />
            Sicherheitseinstellungen
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Alert severity="info" sx={{ mb: 3 }}>
            Ihre Sicherheitseinstellungen helfen dabei, Ihr Konto und Ihre Daten zu schützen.
          </Alert>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <LockIcon />
              </ListItemIcon>
              <ListItemText
                primary="Passwort ändern"
                secondary="Letztes Update: vor 30 Tagen"
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" size="small">
                  Ändern
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <ShieldIcon />
              </ListItemIcon>
              <ListItemText
                primary="Zwei-Faktor-Authentifizierung"
                secondary="Zusätzliche Sicherheit für Ihr Konto"
              />
              <ListItemSecondaryAction>
                <Switch defaultChecked />
              </ListItemSecondaryAction>
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <VisibilityIcon />
              </ListItemIcon>
              <ListItemText
                primary="Anmeldeprotokoll"
                secondary="Übersicht der letzten Anmeldungen"
              />
              <ListItemSecondaryAction>
                <Button variant="outlined" size="small">
                  Anzeigen
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );

  const renderNotificationSettings = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <NotificationsIcon />
            Benachrichtigungseinstellungen
          </Typography>
          <Divider sx={{ mb: 3 }} />
          
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            Wählen Sie aus, wie Sie über wichtige Ereignisse benachrichtigt werden möchten.
          </Typography>
          
          <List>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary="E-Mail Benachrichtigungen"
                secondary="Erhalten Sie Updates per E-Mail"
              />
              <ListItemSecondaryAction>
                <Switch
                  checked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                />
              </ListItemSecondaryAction>
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <SmsIcon />
              </ListItemIcon>
              <ListItemText
                primary="SMS Benachrichtigungen"
                secondary="Wichtige Updates per SMS"
              />
              <ListItemSecondaryAction>
                <Switch
                  checked={smsNotifications}
                  onChange={(e) => setSmsNotifications(e.target.checked)}
                />
              </ListItemSecondaryAction>
            </ListItem>
            
            <ListItem>
              <ListItemIcon>
                <DesktopIcon />
              </ListItemIcon>
              <ListItemText
                primary="Desktop Benachrichtigungen"
                secondary="Browser-Benachrichtigungen aktivieren"
              />
              <ListItemSecondaryAction>
                <Switch
                  checked={desktopNotifications}
                  onChange={(e) => setDesktopNotifications(e.target.checked)}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          
          <Box sx={{ mt: 3 }}>
            <Button variant="contained" startIcon={<SaveIcon />}>
              Benachrichtigungen speichern
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );

  const renderMainSettings = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} md={4}>
        <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <SettingsIcon sx={{ fontSize: 48, color: '#1976d2', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Allgemeine Einstellungen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Grundlegende Systemkonfiguration
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <SecurityIcon sx={{ fontSize: 48, color: '#4caf50', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Sicherheit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Passwort und Sicherheitsoptionen
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      
      <Grid item xs={12} md={4}>
        <Card sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}>
          <CardContent sx={{ textAlign: 'center', py: 4 }}>
            <NotificationsIcon sx={{ fontSize: 48, color: '#ff9800', mb: 2 }} />
            <Typography variant="h6" gutterBottom>
              Benachrichtigungen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              E-Mail und Push-Benachrichtigungen
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Einstellungen
      </Typography>
      
      {activeSection === 'settings' && renderMainSettings()}
      {activeSection === 'settings-general' && renderGeneralSettings()}
      {activeSection === 'settings-security' && renderSecuritySettings()}
      {activeSection === 'settings-notifications' && renderNotificationSettings()}
    </Box>
  );
}
