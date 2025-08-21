import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  LinearProgress,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar
} from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  Assessment as AssessmentIcon,
  Timeline as TimelineIcon,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  ShowChart as ShowChartIcon
} from '@mui/icons-material';

interface AnalyticsProps {
  leads: any[];
  totalCount: number;
  activeSection: string;
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
      id={`analytics-tabpanel-${index}`}
      aria-labelledby={`analytics-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Analytics({ leads, totalCount, activeSection }: AnalyticsProps) {
  // Map activeSection to tab index
  const getTabIndexFromSection = (section: string) => {
    switch (section) {
      case 'analytics-overview': return 0;
      case 'analytics-reports': return 1;
      case 'analytics-performance': return 2;
      default: return 0;
    }
  };

  const [tabValue, setTabValue] = useState(getTabIndexFromSection(activeSection));

  // Update tab when activeSection changes
  useEffect(() => {
    setTabValue(getTabIndexFromSection(activeSection));
  }, [activeSection]);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Calculate analytics data
  const analytics = {
    conversionRate: totalCount > 0 ? (leads.filter(lead => lead.status === 'Qualified').length / totalCount * 100) : 0,
    averageCreditAmount: leads.length > 0 ? leads.reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0) / leads.length : 0,
    totalVolume: leads.reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0),
    leadsByStatus: {
      new: leads.filter(lead => lead.status === 'New').length,
      qualified: leads.filter(lead => lead.status === 'Qualified').length,
      followUp: leads.filter(lead => lead.status === 'Follow-Up').length,
      cold: leads.filter(lead => lead.status === 'Cold').length
    },
    leadsByLabel: {
      employee: leads.filter(lead => lead.label === 'Employee').length,
      selfEmployed: leads.filter(lead => lead.label === 'Self-Employed').length,
      student: leads.filter(lead => lead.label === 'Student').length,
      pensioner: leads.filter(lead => lead.label === 'Pensioner').length
    }
  };

  // Different KPI sets for each tab
  const overviewKPIs = [
    { metric: 'Gesamt Leads', value: totalCount.toString(), trend: '+15%', color: 'primary' },
    { metric: 'Neue Leads', value: analytics.leadsByStatus.new.toString(), trend: '+8%', color: 'success' },
    { metric: 'Qualifiziert', value: analytics.leadsByStatus.qualified.toString(), trend: '+12%', color: 'info' },
    { metric: 'Follow-Up', value: analytics.leadsByStatus.followUp.toString(), trend: '-3%', color: 'warning' }
  ];

  const reportsKPIs = [
    { metric: 'Conversion Rate', value: `${analytics.conversionRate.toFixed(1)}%`, trend: '+2.3%', color: 'success' },
    { metric: 'Durchschnittlicher Kreditbetrag', value: `€${Math.round(analytics.averageCreditAmount).toLocaleString('de-DE')}`, trend: '+5.7%', color: 'success' },
    { metric: 'Gesamtvolumen', value: `€${analytics.totalVolume.toLocaleString('de-DE')}`, trend: '+12.4%', color: 'success' },
    { metric: 'Abschlussrate', value: `${((analytics.leadsByStatus.qualified / totalCount) * 100).toFixed(1)}%`, trend: '+4.1%', color: 'info' }
  ];

  const performanceKPIs = [
    { metric: 'Leads pro Tag', value: (totalCount / 30).toFixed(1), trend: '-1.2%', color: 'error' },
    { metric: 'Bearbeitungszeit', value: '2.3 Tage', trend: '-8%', color: 'success' },
    { metric: 'Antwortrate', value: '87%', trend: '+5%', color: 'success' },
    { metric: 'Kundenzufriedenheit', value: '4.2/5', trend: '+0.3', color: 'info' }
  ];

  // Get current KPIs based on active tab
  const getCurrentKPIs = () => {
    switch (tabValue) {
      case 0: return overviewKPIs;
      case 1: return reportsKPIs;
      case 2: return performanceKPIs;
      default: return overviewKPIs;
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
    <Box sx={{ p: 0 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Analytics
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Detaillierte Analysen und Performance-Metriken
        </Typography>
      </Box>

      {/* Key Performance Indicators */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {getCurrentKPIs().map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ p: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Avatar sx={{ bgcolor: index === 0 ? '#2196f3' : index === 1 ? '#4caf50' : index === 2 ? '#9c27b0' : '#ff9800', mr: 2, width: 48, height: 48 }}>
                    {index === 0 ? <TrendingUpIcon /> : index === 1 ? <AssessmentIcon /> : index === 2 ? <PieChartIcon /> : <BarChartIcon />}
                  </Avatar>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.75rem' }}>
                      {item.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                      {item.metric}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <LinearProgress
                    variant="determinate"
                    value={75}
                    sx={{ flexGrow: 1, mr: 2, height: 8, borderRadius: 4 }}
                  />
                  <Chip
                    label={item.trend}
                    color={item.color as any}
                    size="small"
                    variant="outlined"
                  />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Analytics Tabs */}
      <Paper sx={{ borderRadius: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 3 }}>
            <Tab icon={<ShowChartIcon />} label="Übersicht" iconPosition="start" />
            <Tab icon={<AssessmentIcon />} label="Berichte" iconPosition="start" />
            <Tab icon={<TimelineIcon />} label="Performance" iconPosition="start" />
          </Tabs>
        </Box>

        {/* Overview Tab */}
        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {/* Lead Status Distribution */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                Lead Status Verteilung
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Neue Leads</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {analytics.leadsByStatus.new}
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(analytics.leadsByStatus.new / totalCount) * 100} 
                  sx={{ height: 8, borderRadius: 4 }}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Qualifiziert</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {analytics.leadsByStatus.qualified}
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(analytics.leadsByStatus.qualified / totalCount) * 100} 
                  sx={{ height: 8, borderRadius: 4 }}
                  color="success"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Follow-Up</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {analytics.leadsByStatus.followUp}
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(analytics.leadsByStatus.followUp / totalCount) * 100} 
                  sx={{ height: 8, borderRadius: 4 }}
                  color="warning"
                />
              </Box>
            </Grid>

            {/* Lead Label Distribution */}
            <Grid item xs={12} md={6}>
              <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                Lead Kategorien
              </Typography>
              
              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Angestellt</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {analytics.leadsByLabel.employee}
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(analytics.leadsByLabel.employee / totalCount) * 100} 
                  sx={{ height: 8, borderRadius: 4 }}
                  color="primary"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Selbstständig</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {analytics.leadsByLabel.selfEmployed}
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(analytics.leadsByLabel.selfEmployed / totalCount) * 100} 
                  sx={{ height: 8, borderRadius: 4 }}
                  color="secondary"
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                  <Typography variant="body2">Student</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600 }}>
                    {analytics.leadsByLabel.student}
                  </Typography>
                </Box>
                <LinearProgress 
                  variant="determinate" 
                  value={(analytics.leadsByLabel.student / totalCount) * 100} 
                  sx={{ height: 8, borderRadius: 4 }}
                  color="info"
                />
              </Box>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Reports Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Lead Performance Bericht
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Metrik</TableCell>
                  <TableCell align="right">Wert</TableCell>
                  <TableCell align="right">Trend</TableCell>
                  <TableCell align="right">Ziel</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Conversion Rate</TableCell>
                  <TableCell align="right">{analytics.conversionRate.toFixed(1)}%</TableCell>
                  <TableCell align="right">+2.3%</TableCell>
                  <TableCell align="right">15%</TableCell>
                  <TableCell align="right">
                    <Chip label="Gut" color="success" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Durchschnittlicher Kreditbetrag</TableCell>
                  <TableCell align="right">{formatCurrency(analytics.averageCreditAmount)}</TableCell>
                  <TableCell align="right">+5.7%</TableCell>
                  <TableCell align="right">€25.000</TableCell>
                  <TableCell align="right">
                    <Chip label="Sehr gut" color="success" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gesamtvolumen</TableCell>
                  <TableCell align="right">{formatCurrency(analytics.totalVolume)}</TableCell>
                  <TableCell align="right">+12.4%</TableCell>
                  <TableCell align="right">€500.000</TableCell>
                  <TableCell align="right">
                    <Chip label="Exzellent" color="success" size="small" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Leads pro Tag</TableCell>
                  <TableCell align="right">8.5</TableCell>
                  <TableCell align="right">-1.2%</TableCell>
                  <TableCell align="right">10</TableCell>
                  <TableCell align="right">
                    <Chip label="Verbesserung nötig" color="warning" size="small" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Performance Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Performance Metriken
          </Typography>

          <Grid container spacing={3}>
            {/* Lead Processing Time */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Bearbeitungszeiten
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Erstbearbeitung</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>2.3 Std</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 4 }} color="success" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Qualifizierung</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>1.8 Tage</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={70} sx={{ height: 8, borderRadius: 4 }} color="info" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Abschluss</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>4.2 Tage</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={60} sx={{ height: 8, borderRadius: 4 }} color="warning" />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Lead Sources Performance */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Lead Quellen Performance
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Web Formular</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>{totalCount} Leads</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={100} sx={{ height: 8, borderRadius: 4 }} color="primary" />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Direktanfragen</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>0 Leads</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={0} sx={{ height: 8, borderRadius: 4 }} />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2">Empfehlungen</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>0 Leads</Typography>
                      </Box>
                      <LinearProgress variant="determinate" value={0} sx={{ height: 8, borderRadius: 4 }} />
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Team Performance */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Team Performance
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Mitarbeiter</TableCell>
                          <TableCell align="right">Bearbeitete Leads</TableCell>
                          <TableCell align="right">Conversion Rate</TableCell>
                          <TableCell align="right">Durchschn. Bearbeitungszeit</TableCell>
                          <TableCell align="right">Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>System (Automatisch)</TableCell>
                          <TableCell align="right">{totalCount}</TableCell>
                          <TableCell align="right">{analytics.conversionRate.toFixed(1)}%</TableCell>
                          <TableCell align="right">Sofort</TableCell>
                          <TableCell align="right">
                            <Chip label="Aktiv" color="success" size="small" />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Box>
  );
}
