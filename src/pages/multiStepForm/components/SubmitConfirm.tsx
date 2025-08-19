import React from 'react';
import { Box, Typography, CircularProgress, Theme } from '@mui/material';
import clsx from 'clsx';
import { generateUtilityClasses } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

const classes = generateUtilityClasses('SubmitConfirmPage', [
  'root',
  'icon',
  'status',
  'note',
  'footer',
  'submitStatus',
  'submitStatusRow',
  'submitStatusBorder',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: '16px',
  },
  [`& .${classes.icon}`]: {
    color: theme.palette.primary.main,
    marginRight: '16px',
    fontSize: '40px',
  },
  [`& .${classes.status}`]: {
    marginTop: '16px',
    marginBottom: '16px',
  },
  [`& .${classes.note}`]: {
    fontSize: '12px',
    margin: '16px 0',
    fontWeight: '400',
    color: '#515151',
  },
  [`& .${classes.footer}`]: {
    marginTop: '32px',
    backgroundColor: '#ffffff',
    padding: '16px',
  },
  [`& .${classes.submitStatus}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: '14px',
    padding: '16px',
    margin: 'auto',
    marginBottom: '20px',
    boxSizing: 'border-box',
    '& :last-child': {
      padding: '0px',
    },
  },
  [`& .${classes.submitStatusRow}`]: {
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    '& :last-child': {
      padding: '0px',
    },
  },
  [`& .${classes.submitStatusBorder}`]: {
    borderBottom: '1px solid #E4E4E4',
    marginBottom: '10px',
  },
});

const SubmitConfirmPage: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography marginBottom="40px" variant="h4">
        Ihre Anfrage wurde erfolgreich gesendet und wird nun geprüft.
      </Typography>
      <Box className={classes.submitStatus} alignItems="center" justifyContent="center">
        <Box className={clsx(classes.submitStatusRow, classes.submitStatusBorder)}>
          <Box textAlign="left">
            <Typography variant="body2" fontWeight={400}>
              Status
            </Typography>
          </Box>
          <Box textAlign="right" display="flex" alignItems="center">
            <CircularProgress size={20} sx={{ marginRight: '8px' }} />
            <Typography fontWeight={400} variant="body2">
              wird geprüft
            </Typography>
          </Box>
        </Box>
        <Box className={classes.submitStatusRow}>
          <Box textAlign="left">
            <Typography fontWeight={300} variant="body2">
              Antragsnummer
            </Typography>
          </Box>
          <Box textAlign="left">
            <Typography fontWeight={300} variant="body2">
              {uuidv4()?.toString()?.substring(0, 5)}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box>
        <span className={classes.note}>
          Drucken Sie bitte nicht den Zurück-Button Ihres Browsers und laden Sie diese Seite nicht
          neu.
        </span>
      </Box>
    </Box>
  );
};

export default SubmitConfirmPage;
