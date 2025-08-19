import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  IconButton,
  Tooltip,
  Menu,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Badge
} from '@mui/material';
import {
  Search as SearchIcon,
  FilterList as FilterIcon,
  GetApp as ExportIcon,
  Delete as DeleteIcon,
  Label as LabelIcon,
  MoreVert as MoreVertIcon,
  Refresh as RefreshIcon,
  ViewColumn as ViewColumnIcon,
  Add as AddIcon,
  ImportExport as ImportIcon
} from '@mui/icons-material';

interface LeadsToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedCount: number;
  totalCount: number;
  onBulkDelete: () => void;
  onBulkLabelChange: (label: string) => void;
  onExport: (format: 'csv' | 'xlsx') => void;
  onRefresh: () => void;
  onNewLead: () => void;
  filters: {
    status: string;
    label: string;
    dateRange: string;
  };
  onFilterChange: (filters: any) => void;
}

const statusOptions = [
  { value: '', label: 'Alle Status' },
  { value: 'New', label: 'Neu', color: '#2196f3' },
  { value: 'Follow-Up', label: 'Follow-Up', color: '#ff9800' },
  { value: 'Warm', label: 'Warm', color: '#4caf50' },
  { value: 'Cold', label: 'Kalt', color: '#9e9e9e' },
  { value: 'Qualified', label: 'Qualifiziert', color: '#8bc34a' },
  { value: 'Disqualified', label: 'Disqualifiziert', color: '#f44336' },
  { value: 'High-Value', label: 'Hochwertig', color: '#9c27b0' }
];

const labelOptions = [
  { value: '', label: 'Alle Labels' },
  { value: 'New', label: 'Neu' },
  { value: 'Follow-Up', label: 'Follow-Up' },
  { value: 'Warm', label: 'Warm' },
  { value: 'Cold', label: 'Kalt' },
  { value: 'Qualified', label: 'Qualifiziert' },
  { value: 'Disqualified', label: 'Disqualifiziert' },
  { value: 'High-Value', label: 'Hochwertig' }
];

const dateRangeOptions = [
  { value: '', label: 'Alle Zeiträume' },
  { value: 'today', label: 'Heute' },
  { value: 'yesterday', label: 'Gestern' },
  { value: 'this-week', label: 'Diese Woche' },
  { value: 'last-week', label: 'Letzte Woche' },
  { value: 'this-month', label: 'Dieser Monat' },
  { value: 'last-month', label: 'Letzter Monat' },
  { value: 'this-year', label: 'Dieses Jahr' }
];

export default function LeadsToolbar({
  search,
  onSearchChange,
  selectedCount,
  totalCount,
  onBulkDelete,
  onBulkLabelChange,
  onExport,
  onRefresh,
  onNewLead,
  filters,
  onFilterChange
}: LeadsToolbarProps) {
  const [exportMenuAnchor, setExportMenuAnchor] = useState<null | HTMLElement>(null);
  const [bulkMenuAnchor, setBulkMenuAnchor] = useState<null | HTMLElement>(null);
  const [moreMenuAnchor, setMoreMenuAnchor] = useState<null | HTMLElement>(null);

  const activeFiltersCount = Object.values(filters).filter(Boolean).length;

  const handleFilterChange = (key: string, value: string) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const clearFilters = () => {
    onFilterChange({ status: '', label: '', dateRange: '' });
  };

  return (
    <Box sx={{ p: 2, borderBottom: '1px solid #e0e0e0', backgroundColor: 'white' }}>
      {/* Main Toolbar */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
        {/* Search */}
        <TextField
          placeholder="Leads durchsuchen..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          size="small"
          sx={{ minWidth: 300 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            ),
          }}
        />

        {/* Filter Button */}
        <Badge badgeContent={activeFiltersCount} color="primary">
          <Button
            variant="outlined"
            startIcon={<FilterIcon />}
            onClick={() => {}}
            size="small"
          >
            Filter
          </Button>
        </Badge>

        {/* Spacer */}
        <Box sx={{ flexGrow: 1 }} />

        {/* Bulk Actions (when items selected) */}
        {selectedCount > 0 && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography variant="body2" color="primary" fontWeight={600}>
              {selectedCount} ausgewählt
            </Typography>
            
            <Tooltip title="Label ändern">
              <IconButton
                size="small"
                onClick={(e) => setBulkMenuAnchor(e.currentTarget)}
              >
                <LabelIcon />
              </IconButton>
            </Tooltip>

            <Tooltip title="Löschen">
              <IconButton
                size="small"
                color="error"
                onClick={onBulkDelete}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        )}

        {/* Action Buttons */}
        <Tooltip title="Aktualisieren">
          <IconButton size="small" onClick={onRefresh}>
            <RefreshIcon />
          </IconButton>
        </Tooltip>

        <Button
          variant="outlined"
          startIcon={<ExportIcon />}
          onClick={(e) => setExportMenuAnchor(e.currentTarget)}
          size="small"
        >
          Export
        </Button>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          size="small"
          sx={{ ml: 1 }}
          onClick={onNewLead}
        >
          Neuer Lead
        </Button>

        <Tooltip title="Mehr Aktionen">
          <IconButton
            size="small"
            onClick={(e) => setMoreMenuAnchor(e.currentTarget)}
          >
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
      </Box>

      {/* Filters Row */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap' }}>
        {/* Status Filter */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Status</InputLabel>
          <Select
            value={filters.status}
            label="Status"
            onChange={(e) => handleFilterChange('status', e.target.value)}
          >
            {statusOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  {option.color && (
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        backgroundColor: option.color
                      }}
                    />
                  )}
                  {option.label}
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Label Filter */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Label</InputLabel>
          <Select
            value={filters.label}
            label="Label"
            onChange={(e) => handleFilterChange('label', e.target.value)}
          >
            {labelOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Date Range Filter */}
        <FormControl size="small" sx={{ minWidth: 150 }}>
          <InputLabel>Zeitraum</InputLabel>
          <Select
            value={filters.dateRange}
            label="Zeitraum"
            onChange={(e) => handleFilterChange('dateRange', e.target.value)}
          >
            {dateRangeOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* Clear Filters */}
        {activeFiltersCount > 0 && (
          <Button
            variant="text"
            size="small"
            onClick={clearFilters}
            sx={{ color: 'text.secondary' }}
          >
            Filter zurücksetzen
          </Button>
        )}

        {/* Results Count */}
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="text.secondary">
          {totalCount} Leads gefunden
        </Typography>
      </Box>

      {/* Export Menu */}
      <Menu
        anchorEl={exportMenuAnchor}
        open={Boolean(exportMenuAnchor)}
        onClose={() => setExportMenuAnchor(null)}
      >
        <MenuItem onClick={() => { onExport('csv'); setExportMenuAnchor(null); }}>
          <ListItemIcon><ExportIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Als CSV exportieren</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => { onExport('xlsx'); setExportMenuAnchor(null); }}>
          <ListItemIcon><ExportIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Als Excel exportieren</ListItemText>
        </MenuItem>
      </Menu>

      {/* Bulk Actions Menu */}
      <Menu
        anchorEl={bulkMenuAnchor}
        open={Boolean(bulkMenuAnchor)}
        onClose={() => setBulkMenuAnchor(null)}
      >
        <MenuItem disabled>
          <Typography variant="subtitle2">Label ändern für {selectedCount} Leads</Typography>
        </MenuItem>
        <Divider />
        {labelOptions.slice(1).map((option) => (
          <MenuItem
            key={option.value}
            onClick={() => {
              onBulkLabelChange(option.value);
              setBulkMenuAnchor(null);
            }}
          >
            <Chip
              label={option.label}
              size="small"
              variant="outlined"
              sx={{ mr: 1 }}
            />
          </MenuItem>
        ))}
      </Menu>

      {/* More Actions Menu */}
      <Menu
        anchorEl={moreMenuAnchor}
        open={Boolean(moreMenuAnchor)}
        onClose={() => setMoreMenuAnchor(null)}
      >
        <MenuItem onClick={() => setMoreMenuAnchor(null)}>
          <ListItemIcon><ImportIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Leads importieren</ListItemText>
        </MenuItem>
        <MenuItem onClick={() => setMoreMenuAnchor(null)}>
          <ListItemIcon><ViewColumnIcon fontSize="small" /></ListItemIcon>
          <ListItemText>Spalten anpassen</ListItemText>
        </MenuItem>
        <Divider />
        <MenuItem onClick={() => setMoreMenuAnchor(null)}>
          <ListItemText>Einstellungen</ListItemText>
        </MenuItem>
      </Menu>
    </Box>
  );
}
