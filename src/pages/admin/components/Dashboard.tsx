import React from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar
} from '@mui/material';
import {
  // TrendingUp as TrendingUpIcon, // removed: no longer used in Lead Status Verteilung
  People as PeopleIcon,
  AttachMoney as MoneyIcon,
  Assignment as AssignmentIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Schedule as ScheduleIcon,
  Star as StarIcon
} from '@mui/icons-material';

interface DashboardProps {
  leads: any[];
  totalCount: number;
}

export default function Dashboard({ leads, totalCount }: DashboardProps) {
  // Calculate statistics
  const stats = {
    totalLeads: totalCount,
    newLeads: leads.filter(lead => lead.status === 'New').length,
    qualifiedLeads: leads.filter(lead => lead.status === 'Qualified').length,
    followUpLeads: leads.filter(lead => lead.status === 'Follow-Up').length,
    totalCreditAmount: leads.reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0),
    averageCreditAmount: leads.length > 0 ? leads.reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0) / leads.length : 0,
    conversionRate: totalCount > 0 ? (leads.filter(lead => lead.status === 'Qualified').length / totalCount * 100) : 0
  };

  // Get recent applications (last 5 leads)
  const recentApplications = leads
    .sort((a, b) => new Date(b.createdAt || b.timestamp || Date.now()).getTime() - new Date(a.createdAt || a.timestamp || Date.now()).getTime())
    .slice(0, 5)
    .map(lead => ({
      id: lead.id,
      name: `${lead.firstName} ${lead.lastName}`,
      amount: parseFloat(lead.creditAmount) || 0,
      status: lead.status,
      time: getTimeAgo(lead.createdAt || lead.timestamp),
      avatar: `${lead.firstName?.[0] || ''}${lead.lastName?.[0] || ''}`.toUpperCase()
    }));

  // Helper function to calculate time ago
  function getTimeAgo(timestamp: string | number) {
    if (!timestamp) return 'Gerade eben';
    const now = new Date().getTime();
    const time = new Date(timestamp).getTime();
    const diff = now - time;

    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (days > 0) return `vor ${days} Tag${days > 1 ? 'en' : ''}`;
    if (hours > 0) return `vor ${hours} Std`;
    if (minutes > 0) return `vor ${minutes} Min`;
    return 'Gerade eben';
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'New': return <AssignmentIcon />;
      case 'Qualified': return <StarIcon />;
      case 'Follow-Up': return <ScheduleIcon />;
      default: return <AssignmentIcon />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'New': return '#2196f3';
      case 'Qualified': return '#4caf50';
      case 'Follow-Up': return '#ff9800';
      default: return '#757575';
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate today's stats
  const today = new Date().toDateString();
  const todaysLeads = leads.filter(lead => {
    const leadDate = new Date(lead.createdAt || lead.timestamp || Date.now()).toDateString();
    return leadDate === today;
  });

  return (
    <Box sx={{ p: 0 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Übersicht über Ihre wichtigsten Kennzahlen
        </Typography>

        {/* Today's Summary */}
        {todaysLeads.length > 0 && (
          <Box sx={{ mt: 2, p: 2, bgcolor: '#f8f9fa', borderRadius: 2, border: '1px solid #e9ecef' }}>
            <Typography variant="body2" sx={{ fontWeight: 500, color: '#28a745' }}>
              📈 Heute: {todaysLeads.length} neue Anträge im Wert von €{todaysLeads.reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0).toLocaleString('de-DE')}
            </Typography>
          </Box>
        )}
      </Box>

      {/* Key Metrics */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#2196f3', mr: 2, width: 48, height: 48 }}>
                  <PeopleIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem' }}>
                    {stats.totalLeads}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Gesamt Leads
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={100}
                sx={{ height: 8, borderRadius: 4, bgcolor: '#e3f2fd' }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#4caf50', mr: 2, width: 48, height: 48 }}>
                  <StarIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem' }}>
                    {stats.qualifiedLeads}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Qualifiziert
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={stats.conversionRate}
                sx={{ height: 8, borderRadius: 4, bgcolor: '#e8f5e8' }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block', fontSize: '0.75rem' }}>
                {stats.conversionRate.toFixed(1)}% Conversion Rate
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#ff9800', mr: 2, width: 48, height: 48 }}>
                  <AssignmentIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '2rem' }}>
                    {stats.followUpLeads}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Follow-Up
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={(stats.followUpLeads / stats.totalLeads) * 100}
                sx={{ height: 8, borderRadius: 4, bgcolor: '#fff3e0' }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#9c27b0', mr: 2, width: 48, height: 48 }}>
                  <MoneyIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    {formatCurrency(stats.totalCreditAmount)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Gesamt Volumen
                  </Typography>
                </Box>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
                Ø {formatCurrency(stats.averageCreditAmount)} pro Lead
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
              Schnellzugriff
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Avatar sx={{ bgcolor: '#2196f3', mx: 'auto', mb: 2, width: 48, height: 48 }}>
                    <PeopleIcon />
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                    Alle Leads anzeigen
                  </Typography>
                  <Typography variant="body2" color="primary" sx={{ fontWeight: 500 }}>
                    {stats.totalLeads} Leads verwalten
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Avatar sx={{ bgcolor: '#4caf50', mx: 'auto', mb: 2, width: 48, height: 48 }}>
                    <StarIcon />
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                    Qualifizierte Leads
                  </Typography>
                  <Typography variant="body2" color="success.main" sx={{ fontWeight: 500 }}>
                    {stats.qualifiedLeads} bereit zur Bearbeitung
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Avatar sx={{ bgcolor: '#ff9800', mx: 'auto', mb: 2, width: 48, height: 48 }}>
                    <ScheduleIcon />
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                    Follow-Up Leads
                  </Typography>
                  <Typography variant="body2" color="warning.main" sx={{ fontWeight: 500 }}>
                    {stats.followUpLeads} benötigen Nachverfolgung
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  borderRadius: 2,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f5f5f5',
                    transform: 'translateY(-1px)'
                  }
                }}>
                  <Avatar sx={{ bgcolor: '#9c27b0', mx: 'auto', mb: 2, width: 48, height: 48 }}>
                    <MoneyIcon />
                  </Avatar>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                    Finanzübersicht
                  </Typography>
                  <Typography variant="body2" color="secondary.main" sx={{ fontWeight: 500 }}>
                    {formatCurrency(stats.totalCreditAmount)} Gesamtvolumen
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>

      {/* Charts and Recent Applications */}
      <Grid container spacing={3}>
        {/* Lead Status Distribution */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
              Lead Status Verteilung
            </Typography>

            {/* Status Overview Cards */}
            <Grid container spacing={2} sx={{ mb: 3 }}>
              <Grid item xs={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  bgcolor: '#f8f9fa',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  minHeight: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }
                }}>
                  {/* Removed icon avatar */}
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#2196f3', mb: 0.5, fontSize: '2rem' }}>
                    {stats.newLeads}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#333', mb: 0.5 }}>
                    Neue Leads
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stats.totalLeads > 0 ? ((stats.newLeads / stats.totalLeads) * 100).toFixed(1) : 0}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={stats.totalLeads > 0 ? (stats.newLeads / stats.totalLeads) * 100 : 0}
                    sx={{ height: 6, borderRadius: 4, mt: 1 }}
                    color="primary"
                  />
                </Box>
              </Grid>

              <Grid item xs={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  bgcolor: '#f8f9fa',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  minHeight: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }
                }}>
                  {/* Removed icon avatar */}
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#4caf50', mb: 0.5, fontSize: '2rem' }}>
                    {stats.qualifiedLeads}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#333', mb: 0.5 }}>
                    Qualifiziert
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stats.totalLeads > 0 ? ((stats.qualifiedLeads / stats.totalLeads) * 100).toFixed(1) : 0}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={stats.totalLeads > 0 ? (stats.qualifiedLeads / stats.totalLeads) * 100 : 0}
                    sx={{ height: 6, borderRadius: 4, mt: 1 }}
                    color="success"
                  />
                </Box>
              </Grid>

              <Grid item xs={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  bgcolor: '#f8f9fa',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  minHeight: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }
                }}>
                  {/* Removed icon avatar */}
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#ff9800', mb: 0.5, fontSize: '2rem' }}>
                    {stats.followUpLeads}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#333', mb: 0.5 }}>
                    Follow-Up
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    {stats.totalLeads > 0 ? ((stats.followUpLeads / stats.totalLeads) * 100).toFixed(1) : 0}%
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={stats.totalLeads > 0 ? (stats.followUpLeads / stats.totalLeads) * 100 : 0}
                    sx={{ height: 6, borderRadius: 4, mt: 1 }}
                    color="warning"
                  />
                </Box>
              </Grid>

              <Grid item xs={6} md={3}>
                <Box sx={{
                  textAlign: 'center',
                  p: 2.5,
                  bgcolor: '#f8f9fa',
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  minHeight: '100px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    bgcolor: '#f0f0f0',
                    transform: 'translateY(-1px)',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                  }
                }}>
                  {/* Removed icon avatar */}
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#9c27b0', mb: 0.5, fontSize: '2rem' }}>
                    {stats.conversionRate.toFixed(1)}%
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500, color: '#333', mb: 0.5 }}>
                    Conversion
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                    Erfolgsquote
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={stats.conversionRate}
                    sx={{ height: 6, borderRadius: 4, mt: 1 }}
                    color="secondary"
                  />
                </Box>
              </Grid>
            </Grid>

            {/* Summary Information */}
            <Box sx={{
              p: 2,
              bgcolor: '#ffffff',
              borderRadius: 2,
              border: '1px solid #e0e0e0',
              mt: 2
            }}>
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#333' }}>
                      {stats.totalLeads}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Gesamt Leads
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#333' }}>
                      €{stats.totalCreditAmount.toLocaleString('de-DE')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Gesamtvolumen
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h5" sx={{ fontWeight: 600, color: '#333' }}>
                      €{stats.averageCreditAmount.toLocaleString('de-DE')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 500 }}>
                      Ø pro Lead
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>

        {/* Recent Applications */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom sx={{ mb: 3, fontWeight: 600 }}>
              Neueste Anträge
            </Typography>

            <List sx={{
              maxHeight: '320px',
              overflowY: 'auto',
              overflowX: 'hidden',
              pr: 2, // Right padding for scrollbar space
              '&::-webkit-scrollbar': {
                width: '6px',
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#f1f1f1',
                borderRadius: '3px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#c1c1c1',
                borderRadius: '3px',
                '&:hover': {
                  backgroundColor: '#a8a8a8',
                },
              },
            }}>
              {recentApplications.length > 0 ? recentApplications.map((application, index) => (
                <ListItem key={application.id || index} sx={{ px: 0, mb: 1 }}>
                  <ListItemIcon>
                    <Avatar sx={{
                      width: 40,
                      height: 40,
                      fontSize: '0.875rem',
                      bgcolor: getStatusColor(application.status)
                    }}>
                      {application.avatar}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {application.name}
                        </Typography>
                        <Chip
                          label={application.status}
                          size="small"
                          color={
                            application.status === 'Qualified' ? 'success' :
                            application.status === 'New' ? 'primary' :
                            'warning'
                          }
                          variant="outlined"
                        />
                      </Box>
                    }
                    secondary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                          €{application.amount.toLocaleString('de-DE')} Kreditantrag
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {application.time}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              )) : (
                <ListItem sx={{ px: 0 }}>
                  <ListItemText
                    primary={
                      <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                        Noch keine Anträge vorhanden
                      </Typography>
                    }
                  />
                </ListItem>
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
