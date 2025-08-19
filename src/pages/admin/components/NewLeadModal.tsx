import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

interface NewLeadModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (leadData: any) => void;
}

const statusOptions = [
  { value: 'New', label: 'Neu' },
  { value: 'Follow-Up', label: 'Follow-Up' },
  { value: 'Warm', label: 'Warm' },
  { value: 'Cold', label: 'Kalt' },
  { value: 'Qualified', label: 'Qualifiziert' },
  { value: 'Disqualified', label: 'Disqualifiziert' }
];

const labelOptions = [
  { value: 'Employee', label: 'Angestellt' },
  { value: 'Self-Employed', label: 'Selbstständig' },
  { value: 'Student', label: 'Student' },
  { value: 'Pensioner', label: 'Rentner' },
  { value: 'Unemployed', label: 'Arbeitslos' }
];

export default function NewLeadModal({ open, onClose, onSave }: NewLeadModalProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: '',
    birthday: '',
    birthplace: '',
    nationality: '',
    street: '',
    homeNumber: '',
    zipCode: '',
    city: '',
    country: 'Deutschland',
    residentSince: '',
    familyStatus: '',
    professionalGroup: '',
    employmentDate: '',
    livingSituation: '',
    income: '',
    rentIncludingHeating: '',
    category: '',
    creditAmount: '',
    duration: '',
    deposit: '',
    label: 'Employee',
    status: 'New',
    notes: '',
    consent: true,
    source: 'Manual Entry'
  });

  const handleChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Bitte füllen Sie mindestens Vorname, Nachname und E-Mail aus.');
      return;
    }

    onSave(formData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      gender: '',
      birthday: '',
      birthplace: '',
      nationality: '',
      street: '',
      homeNumber: '',
      zipCode: '',
      city: '',
      country: 'Deutschland',
      residentSince: '',
      familyStatus: '',
      professionalGroup: '',
      employmentDate: '',
      livingSituation: '',
      income: '',
      rentIncludingHeating: '',
      category: '',
      creditAmount: '',
      duration: '',
      deposit: '',
      label: 'Employee',
      status: 'New',
      notes: '',
      consent: true,
      source: 'Manual Entry'
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6">Neuer Lead</Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      
      <DialogContent dividers>
        <Grid container spacing={3}>
          {/* Personal Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, fontWeight: 600 }}>
              Persönliche Daten
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Vorname *"
              value={formData.firstName}
              onChange={(e) => handleChange('firstName', e.target.value)}
              size="small"
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Nachname *"
              value={formData.lastName}
              onChange={(e) => handleChange('lastName', e.target.value)}
              size="small"
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="E-Mail *"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              size="small"
            />
          </Grid>
          
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Telefon"
              value={formData.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Geschlecht</InputLabel>
              <Select
                value={formData.gender}
                label="Geschlecht"
                onChange={(e) => handleChange('gender', e.target.value)}
              >
                <MenuItem value="male">Männlich</MenuItem>
                <MenuItem value="female">Weiblich</MenuItem>
                <MenuItem value="other">Divers</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Geburtsdatum"
              type="date"
              value={formData.birthday}
              onChange={(e) => handleChange('birthday', e.target.value)}
              size="small"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>

          {/* Address Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, mt: 2, fontWeight: 600 }}>
              Adresse
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Straße"
              value={formData.street}
              onChange={(e) => handleChange('street', e.target.value)}
              size="small"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              label="Hausnummer"
              value={formData.homeNumber}
              onChange={(e) => handleChange('homeNumber', e.target.value)}
              size="small"
            />
          </Grid>

          <Grid item xs={4}>
            <TextField
              fullWidth
              label="PLZ"
              value={formData.zipCode}
              onChange={(e) => handleChange('zipCode', e.target.value)}
              size="small"
            />
          </Grid>

          <Grid item xs={8}>
            <TextField
              fullWidth
              label="Stadt"
              value={formData.city}
              onChange={(e) => handleChange('city', e.target.value)}
              size="small"
            />
          </Grid>

          {/* Credit Information */}
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 2, mt: 2, fontWeight: 600 }}>
              Kreditinformationen
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Kreditbetrag (€)"
              type="number"
              value={formData.creditAmount}
              onChange={(e) => handleChange('creditAmount', e.target.value)}
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Laufzeit (Monate)"
              type="number"
              value={formData.duration}
              onChange={(e) => handleChange('duration', e.target.value)}
              size="small"
            />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Status</InputLabel>
              <Select
                value={formData.status}
                label="Status"
                onChange={(e) => handleChange('status', e.target.value)}
              >
                {statusOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth size="small">
              <InputLabel>Label</InputLabel>
              <Select
                value={formData.label}
                label="Label"
                onChange={(e) => handleChange('label', e.target.value)}
              >
                {labelOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Notizen"
              multiline
              rows={3}
              value={formData.notes}
              onChange={(e) => handleChange('notes', e.target.value)}
              size="small"
            />
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} color="inherit">
          Abbrechen
        </Button>
        <Button onClick={handleSubmit} variant="contained">
          Lead erstellen
        </Button>
      </DialogActions>
    </Dialog>
  );
}
