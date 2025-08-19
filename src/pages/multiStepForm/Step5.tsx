import React from 'react';
import {
  Typography,
  generateUtilityClasses,
  Box,
} from '@mui/material';
import CurrencyTextField from "../../components/CurrencyTextField";

const classes = generateUtilityClasses('Step5', [
  'root',
]);

const styles = () => ({
  [`&.${classes.root}`]: {},
});

const Step5: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <CurrencyTextField
        name="rentIncludingHeating"
        label="Warmmiete"
        placeholder="z.B. 1.745"
        max={30000}
        helperText="Der Wert darf maximal 30000 betragen."
        requiredMessage="Nettoeinkommen erforderlich"
        showHintMessage="Hinweis für Mieter: Bitte geben Sie als Warmmiete den Betrag ein, den Sie monatlich an
          Ihren Vermieter überweisen. Hinweis, wenn Sie mietfrei oder bei den Eltern wohnen: Bitte
          geben Sie die Höhe der ggf. monatlich von Ihnen zu zahlenden Kosten ein."
        inputProps={{
          endAdornment: (
            <Typography sx={{ color: 'isDirty' ? 'text.disabled' : 'text.primary', paddingRight: '8px' }}>
              €/Monat
            </Typography>
          ),
        }}
      />
    </Box>
  );
};

export default Step5;
