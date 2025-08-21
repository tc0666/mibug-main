import React from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Alert,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Divider
} from '@mui/material';
import {
  Help as HelpIcon,
  ExpandMore as ExpandMoreIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  Chat as ChatIcon,
  Book as BookIcon,
  VideoLibrary as VideoLibraryIcon,
  BugReport as BugReportIcon,
  Feedback as FeedbackIcon,
  Support as SupportIcon
} from '@mui/icons-material';

export default function Help() {
  const [expandedFaq, setExpandedFaq] = React.useState<string | false>(false);

  const handleFaqChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedFaq(isExpanded ? panel : false);
  };

  const faqItems = [
    {
      id: 'faq1',
      question: 'Wie kann ich einen neuen Lead hinzufügen?',
      answer: 'Klicken Sie auf den "Neuer Lead" Button in der Leads-Übersicht. Füllen Sie alle erforderlichen Felder aus und speichern Sie den Lead.'
    },
    {
      id: 'faq2',
      question: 'Wie ändere ich den Status eines Leads?',
      answer: 'Öffnen Sie die Lead-Details durch Klicken auf einen Lead in der Tabelle. Dort können Sie den Status über das Dropdown-Menü ändern.'
    },
    {
      id: 'faq3',
      question: 'Wie kann ich Leads exportieren?',
      answer: 'Verwenden Sie den "Export" Button in der Leads-Toolbar. Sie können zwischen verschiedenen Formaten wählen (CSV, Excel, PDF).'
    },
    {
      id: 'faq4',
      question: 'Wie funktioniert die Lead-Filterung?',
      answer: 'Nutzen Sie die Filter-Optionen oberhalb der Lead-Tabelle. Sie können nach Status, Label, Zeitraum und anderen Kriterien filtern.'
    },
    {
      id: 'faq5',
      question: 'Wie kann ich mein Passwort ändern?',
      answer: 'Gehen Sie zu Einstellungen > Sicherheit und klicken Sie auf "Passwort ändern". Folgen Sie den Anweisungen zur sicheren Passwort-Erstellung.'
    }
  ];

  const supportChannels = [
    {
      title: 'E-Mail Support',
      description: 'Senden Sie uns eine E-Mail für detaillierte Anfragen',
      icon: EmailIcon,
      contact: 'support@mibug-credit.de',
      responseTime: '24 Stunden',
      color: '#1976d2'
    },
    {
      title: 'Telefon Support',
      description: 'Rufen Sie uns für dringende Angelegenheiten an',
      icon: PhoneIcon,
      contact: '+49 (0) 123 456 789',
      responseTime: 'Sofort',
      color: '#4caf50'
    },
    {
      title: 'Live Chat',
      description: 'Chatten Sie direkt mit unserem Support-Team',
      icon: ChatIcon,
      contact: 'Chat starten',
      responseTime: '5 Minuten',
      color: '#ff9800'
    }
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Hilfe & Support
      </Typography>

      {/* Quick Actions */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {supportChannels.map((channel, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Card sx={{ 
              height: '100%',
              cursor: 'pointer',
              transition: 'all 0.2s',
              '&:hover': { 
                transform: 'translateY(-2px)',
                boxShadow: 3 
              }
            }}>
              <CardContent sx={{ textAlign: 'center', py: 3 }}>
                <channel.icon sx={{ fontSize: 48, color: channel.color, mb: 2 }} />
                <Typography variant="h6" gutterBottom>
                  {channel.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {channel.description}
                </Typography>
                <Typography variant="body2" fontWeight={600} sx={{ mb: 1 }}>
                  {channel.contact}
                </Typography>
                <Chip 
                  label={`Antwortzeit: ${channel.responseTime}`}
                  size="small"
                  color="primary"
                  variant="outlined"
                />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        {/* FAQ Section */}
        <Grid item xs={12} lg={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <HelpIcon />
              Häufig gestellte Fragen (FAQ)
            </Typography>
            <Divider sx={{ mb: 3 }} />
            
            {faqItems.map((item) => (
              <Accordion
                key={item.id}
                expanded={expandedFaq === item.id}
                onChange={handleFaqChange(item.id)}
                sx={{ mb: 1 }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="body1" fontWeight={500}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" color="text.secondary">
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Paper>
        </Grid>

        {/* Resources & Contact */}
        <Grid item xs={12} lg={4}>
          <Paper sx={{ p: 3, mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Ressourcen
            </Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <BookIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Benutzerhandbuch"
                  secondary="Vollständige Dokumentation"
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Video-Tutorials"
                  secondary="Schritt-für-Schritt Anleitungen"
                />
              </ListItem>
            </List>
          </Paper>

          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Feedback & Bugs
            </Typography>
            <List>
              <ListItem button>
                <ListItemIcon>
                  <BugReportIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Bug melden"
                  secondary="Technische Probleme melden"
                />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <FeedbackIcon />
                </ListItemIcon>
                <ListItemText 
                  primary="Feedback geben"
                  secondary="Verbesserungsvorschläge"
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>

      {/* Contact Form */}
      <Paper sx={{ p: 3, mt: 3 }}>
        <Typography variant="h6" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SupportIcon />
          Support-Anfrage senden
        </Typography>
        <Divider sx={{ mb: 3 }} />
        
        <Alert severity="info" sx={{ mb: 3 }}>
          Beschreiben Sie Ihr Problem so detailliert wie möglich, damit wir Ihnen schnell helfen können.
        </Alert>
        
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Betreff"
              variant="outlined"
              placeholder="Kurze Beschreibung Ihres Problems"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              label="Priorität"
              select
              variant="outlined"
              defaultValue="medium"
              SelectProps={{
                native: true,
              }}
            >
              <option value="low">Niedrig</option>
              <option value="medium">Mittel</option>
              <option value="high">Hoch</option>
              <option value="urgent">Dringend</option>
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Beschreibung"
              multiline
              rows={4}
              variant="outlined"
              placeholder="Beschreiben Sie Ihr Problem oder Ihre Frage detailliert..."
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" size="large" startIcon={<EmailIcon />}>
              Support-Anfrage senden
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
