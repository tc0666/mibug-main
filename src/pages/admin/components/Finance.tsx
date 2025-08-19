import React, { useState } from 'react';
import {
  Box,
  Grid,
  Paper,
  Typography,
  Card,
  CardContent,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Avatar,
  LinearProgress,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider
} from '@mui/material';
import {
  AccountBalance as AccountBalanceIcon,
  CreditCard as CreditCardIcon,
  Receipt as ReceiptIcon,
  TrendingUp as TrendingUpIcon,
  AttachMoney as MoneyIcon,
  Assessment as AssessmentIcon,
  CheckCircle as CheckCircleIcon,
  Schedule as ScheduleIcon,
  Warning as WarningIcon
} from '@mui/icons-material';

interface FinanceProps {
  leads: any[];
  totalCount: number;
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
      id={`finance-tabpanel-${index}`}
      aria-labelledby={`finance-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function Finance({ leads, totalCount }: FinanceProps) {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // Calculate financial data
  const financeData = {
    totalVolume: leads.reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0),
    averageAmount: leads.length > 0 ? leads.reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0) / leads.length : 0,
    qualifiedVolume: leads.filter(lead => lead.status === 'Qualified').reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0),
    pendingVolume: leads.filter(lead => lead.status === 'Follow-Up').reduce((sum, lead) => sum + (parseFloat(lead.creditAmount) || 0), 0)
  };

  // Mock credit data
  const creditData = [
    { id: 1, customer: 'Thomas Müller', amount: 25000, duration: 60, status: 'approved', rate: 3.5 },
    { id: 2, customer: 'Julia Fischer', amount: 18000, duration: 48, status: 'pending', rate: 3.8 },
    { id: 3, customer: 'Michael Hoffmann', amount: 35000, duration: 72, status: 'approved', rate: 3.2 },
    { id: 4, customer: 'Sofia Maier', amount: 12000, duration: 36, status: 'review', rate: 4.1 },
    { id: 5, customer: 'Jonas Weber', amount: 28000, duration: 60, status: 'approved', rate: 3.6 }
  ];

  // Mock payment data
  const paymentData = [
    { id: 1, customer: 'Lena Keller', amount: 450, date: '2024-01-15', status: 'paid', type: 'monthly' },
    { id: 2, customer: 'Markus Schmidt', amount: 620, date: '2024-01-14', status: 'pending', type: 'monthly' },
    { id: 3, customer: 'Anna Becker', amount: 380, date: '2024-01-13', status: 'paid', type: 'monthly' },
    { id: 4, customer: 'Peter Schneider', amount: 520, date: '2024-01-12', status: 'overdue', type: 'monthly' }
  ];

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getStatusChip = (status: string) => {
    const statusConfig = {
      approved: { label: 'Genehmigt', color: 'success' as const },
      pending: { label: 'Ausstehend', color: 'warning' as const },
      review: { label: 'Prüfung', color: 'info' as const },
      rejected: { label: 'Abgelehnt', color: 'error' as const },
      paid: { label: 'Bezahlt', color: 'success' as const },
      overdue: { label: 'Überfällig', color: 'error' as const }
    };

    const config = statusConfig[status as keyof typeof statusConfig] || { label: status, color: 'default' as const };
    return <Chip label={config.label} color={config.color} size="small" />;
  };

  return (
    <Box sx={{ p: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          Finanzen
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Finanzielle Übersicht und Kreditverwaltung
        </Typography>
      </Box>

      {/* Financial Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#2196f3', mr: 2, width: 48, height: 48 }}>
                  <MoneyIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    {formatCurrency(financeData.totalVolume)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Gesamtvolumen
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={85}
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
                  <CheckCircleIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    {formatCurrency(financeData.qualifiedVolume)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Genehmigt
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={65}
                sx={{ height: 8, borderRadius: 4, bgcolor: '#e8f5e8' }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ height: '100%' }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                <Avatar sx={{ bgcolor: '#ff9800', mr: 2, width: 48, height: 48 }}>
                  <ScheduleIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    {formatCurrency(financeData.pendingVolume)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Ausstehend
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={45}
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
                  <TrendingUpIcon />
                </Avatar>
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 700, fontSize: '1.5rem' }}>
                    {formatCurrency(financeData.averageAmount)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.875rem' }}>
                    Durchschnitt
                  </Typography>
                </Box>
              </Box>
              <LinearProgress
                variant="determinate"
                value={70}
                sx={{ height: 8, borderRadius: 4, bgcolor: '#f3e5f5' }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Finance Tabs */}
      <Paper sx={{ borderRadius: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange} sx={{ px: 3 }}>
            <Tab icon={<CreditCardIcon />} label="Kredite" iconPosition="start" />
            <Tab icon={<ReceiptIcon />} label="Zahlungen" iconPosition="start" />
            <Tab icon={<AssessmentIcon />} label="Berichte" iconPosition="start" />
          </Tabs>
        </Box>

        {/* Credits Tab */}
        <TabPanel value={tabValue} index={0}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Kreditübersicht
          </Typography>
          
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Kunde</TableCell>
                  <TableCell align="right">Betrag</TableCell>
                  <TableCell align="right">Laufzeit</TableCell>
                  <TableCell align="right">Zinssatz</TableCell>
                  <TableCell align="right">Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {creditData.map((credit) => (
                  <TableRow key={credit.id}>
                    <TableCell>{credit.customer}</TableCell>
                    <TableCell align="right">{formatCurrency(credit.amount)}</TableCell>
                    <TableCell align="right">{credit.duration} Monate</TableCell>
                    <TableCell align="right">{credit.rate}%</TableCell>
                    <TableCell align="right">
                      {getStatusChip(credit.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </TabPanel>

        {/* Payments Tab */}
        <TabPanel value={tabValue} index={1}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Zahlungsübersicht
          </Typography>
          
          <List>
            {paymentData.map((payment, index) => (
              <React.Fragment key={payment.id}>
                <ListItem sx={{ px: 0 }}>
                  <ListItemIcon>
                    <Avatar sx={{ width: 40, height: 40 }}>
                      <ReceiptIcon />
                    </Avatar>
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.5 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                          {payment.customer}
                        </Typography>
                        {getStatusChip(payment.status)}
                      </Box>
                    }
                    secondary={
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 500 }}>
                          {formatCurrency(payment.amount)} • {payment.type}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          Fällig: {payment.date}
                        </Typography>
                      </Box>
                    }
                  />
                  <Box sx={{ textAlign: 'right' }}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {formatCurrency(payment.amount)}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {payment.date}
                    </Typography>
                  </Box>
                </ListItem>
                {index < paymentData.length - 1 && <Divider />}
              </React.Fragment>
            ))}
          </List>
        </TabPanel>

        {/* Reports Tab */}
        <TabPanel value={tabValue} index={2}>
          <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
            Finanzberichte
          </Typography>
          
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Monatliche Einnahmen
                  </Typography>
                  <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Einnahmen Chart wird hier angezeigt
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Kreditverteilung
                  </Typography>
                  <Box sx={{ height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                      Verteilungs Chart wird hier angezeigt
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
                    Finanz-KPIs
                  </Typography>
                  
                  <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                      <Box sx={{ textAlign: 'center', p: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: '#2196f3' }}>
                          3.7%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Ø Zinssatz
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={6} md={3}>
                      <Box sx={{ textAlign: 'center', p: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: '#4caf50' }}>
                          94.2%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Zahlungsrate
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={6} md={3}>
                      <Box sx={{ textAlign: 'center', p: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: '#ff9800' }}>
                          52
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Ø Laufzeit (Monate)
                        </Typography>
                      </Box>
                    </Grid>
                    
                    <Grid item xs={6} md={3}>
                      <Box sx={{ textAlign: 'center', p: 2 }}>
                        <Typography variant="h4" sx={{ fontWeight: 600, color: '#9c27b0' }}>
                          2.1%
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Ausfallrate
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
      </Paper>
    </Box>
  );
}
