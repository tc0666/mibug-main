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
  TrendingUp as TrendingUpIcon,
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

  // Recent activities (mock data for now)
  const recentActivities = [
    { type: 'call', name: 'Thomas Müller', action: 'Anruf getätigt', time: '10 Min', avatar: 'TM' },
    { type: 'email', name: 'Julia Fischer', action: 'E-Mail gesendet', time: '25 Min', avatar: 'JF' },
    { type: 'meeting', name: 'Michael Hoffmann', action: 'Termin vereinbart', time: '1 Std', avatar: 'MH' },
    { type: 'call', name: 'Sofia Maier', action: 'Anruf verpasst', time: '2 Std', avatar: 'SM' }
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'call': return <PhoneIcon />;
      case 'email': return <EmailIcon />;
      case 'meeting': return <ScheduleIcon />;
      default: return <AssignmentIcon />;
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

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Dashboard
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Übersicht über Ihre wichtigsten Kennzahlen
        </Typography>
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

      {/* Charts and Activities */}
      <Grid container spacing={3}>
        {/* Lead Status Distribution */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '400px' }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Lead Status Verteilung
            </Typography>
            
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Neue Leads</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {stats.newLeads}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(stats.newLeads / stats.totalLeads) * 100} 
                    sx={{ height: 8, borderRadius: 4 }}
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Qualifiziert</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {stats.qualifiedLeads}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(stats.qualifiedLeads / stats.totalLeads) * 100} 
                    sx={{ height: 8, borderRadius: 4 }}
                    color="success"
                  />
                </Box>

                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Follow-Up</Typography>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      {stats.followUpLeads}
                    </Typography>
                  </Box>
                  <LinearProgress 
                    variant="determinate" 
                    value={(stats.followUpLeads / stats.totalLeads) * 100} 
                    sx={{ height: 8, borderRadius: 4 }}
                    color="warning"
                  />
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Chip 
                    label={`${stats.newLeads} Neue Leads`} 
                    color="primary" 
                    variant="outlined"
                    sx={{ justifyContent: 'flex-start' }}
                  />
                  <Chip 
                    label={`${stats.qualifiedLeads} Qualifiziert`} 
                    color="success" 
                    variant="outlined"
                    sx={{ justifyContent: 'flex-start' }}
                  />
                  <Chip 
                    label={`${stats.followUpLeads} Follow-Up`} 
                    color="warning" 
                    variant="outlined"
                    sx={{ justifyContent: 'flex-start' }}
                  />
                  <Chip 
                    label={`${stats.conversionRate.toFixed(1)}% Conversion`} 
                    color="info" 
                    variant="outlined"
                    sx={{ justifyContent: 'flex-start' }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Recent Activities */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: '400px' }}>
            <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
              Letzte Aktivitäten
            </Typography>
            
            <List sx={{ maxHeight: '320px', overflow: 'auto' }}>
              {recentActivities.map((activity, index) => (
                <ListItem key={index} sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 32, height: 32, fontSize: '0.875rem' }}>
                      {activity.avatar}
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {getActivityIcon(activity.type)}
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {activity.name}
                        </Typography>
                      </Box>
                    }
                    secondary={
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 0.5 }}>
                        <Typography variant="caption" color="text.secondary">
                          {activity.action}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          vor {activity.time}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
