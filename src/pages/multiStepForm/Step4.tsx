import {
  Typography,
  generateUtilityClasses,
  Box,
} from '@mui/material';
import CurrencyTextField from "../../components/CurrencyTextField";
import React, {useState} from "react";
import HelperBox from "../../components/HelperBox";

const classes = generateUtilityClasses('Step4', [
  'root',
]);

const styles = () => ({
  [`&.${classes.root}`]: {},
});

const Step4: React.FC = () => {
  const [income, setIncome] = useState(0)

  const handleChange = (value: string) => {
    const newValue = parseInt(value.replace(".", ""), 10);
    setIncome(newValue)
  }

  return (
    <Box className={classes.root} sx={styles}>
      <CurrencyTextField
        name="income"
        label="Nettoeinkommen"
        placeholder="z.B. 1.745"
        max={30000}
        onChange={handleChange}
        helperText="Der Wert darf maximal 30000 betragen."
        requiredMessage="Nettoeinkommen erforderlich"
        showHintMessage="Das monatliche Einkommen wird für Ihre Haushaltsrechnung benötigt. Diese wird von den
           Banken durchgeführt, um Ihr Kreditangebot zu ermitteln."
        inputProps={{
          endAdornment: (
            <Typography sx={{ color: 'isDirty' ? 'text.disabled' : 'text.primary', paddingRight: '8px' }}>
              €/Monat
            </Typography>
          ),
        }}
      />

      {income >= 2500 ? (
        <HelperBox  description="Dank Ihres hohen Einkommens gehören Sie zu den Top 30 % aller Kreditnehmer."/>
      ): null}
    </Box>

  );
};

export default Step4;
