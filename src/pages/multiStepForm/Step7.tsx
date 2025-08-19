import React from 'react';
import {
  Box,
  FormControl,
  generateUtilityClasses,
} from '@mui/material';
import InputField from "../../components/InputField";
import DateInputField from "../../components/DateInputField";
import SelectField from "../../components/SelectField";
import {useFormContext} from "react-hook-form";

const classes = generateUtilityClasses('Step7', [
  'root',
  'formControl',
  'formControlRow',
  'input',
  'tip',
  'formTitle',
  'formControlLeft',
  'formControlRight',
]);

const styles = () => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
      textAlign: "start",
      display: "block",
      width: "100%",
    },
    [`& .MuiFormLabel-root`]: {
      color: '#3E3E3E',
    },
  },
  [`& .${classes.formControl}`]: {
    marginBottom: '16px',
  },
  [`& .${classes.formTitle}`]: {
    cursor: 'pointer',
    width: 'min-content',
  },
  [`& .${classes.tip}`]: {
    color: 'rgb(91, 91, 91)',
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    transition: '0.2s ease-in-out',
    marginBottom: '8px',
  },
  [`& .${classes.formControlRow}`]: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  [`& .${classes.formControlLeft}`]: {
    marginRight: '20px',
    width: '100%',
    flex: 3,
  },
  [`& .${classes.formControlRight}`]: {
    width: '100%',
    flex: 1.5,
  },
  [`& .${classes.input}`]: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    letterSpacing: '0.00938em',
    color: 'rgb(50, 50, 50)',
    boxSizing: 'border-box',
    display: 'inline-flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    borderRadius: '2px',
    paddingRight: 0,
    lineHeight: '1.4375em',
    input: {
      padding: '12.5px 0 12.5px 8px',
    },
  },
});

const Step7 = () => {
  const options = [
    { label: 'Deutschland', value: 'germany' },
    { label: 'Österreich', value: 'austria' },
    { label: 'Schweiz', value: 'swiss' },
  ];

  const {
    watch,
    setValue,
  } = useFormContext();

  const handleChange = (name: string, value: string) => {
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <Box className={classes.root} sx={styles}>
      <InputField
        name="zipCode"
        label="PLZ"
        placeholder="z.B. 11011"
        type="text"
        requiredMessage="PLZ erforderlich"
        onChange={(newValue) => handleChange('zipCode', newValue)}
        value={watch('zipCode')}
      />

      <InputField
        name="city"
        label="Wohnort"
        placeholder="z.B. Mustermann"
        type="text"
        requiredMessage="Wohnort erforderlich"
        onChange={(newValue) => handleChange('city', newValue)}
        value={watch('city')}
      />

      <FormControl fullWidth className={classes.formControlRow}>
        <Box className={classes.formControlLeft}>
          <InputField
            name="street"
            label="Straße"
            placeholder="z.B. Musterstraße"
            type="text"
            requiredMessage="Straße erforderlich"
            onChange={(newValue) => handleChange('street', newValue)}
            value={watch('street')}
          />
        </Box>
        <Box className={classes.formControlRight}>
          <InputField
            name="homeNumber"
            label="Hausnummer"
            placeholder="zz.B. 73"
            type="text"
            requiredMessage="Hausnummer erforderlich"
            onChange={(newValue) => handleChange('homeNumber', newValue)}
            value={watch('homeNumber')}
          />
        </Box>
      </FormControl>

      <SelectField
        name="country"
        label="Land"
        options={options}
      />

      <DateInputField
        name="residentSince"
        label="Dort wohnhaft seit (Jahr)"
        views={['year']}
        format="YYYY"
        requiredMessage="Dort wohnhaft seit (Monat und Jahr) erforderlich"
      />
    </Box>
  );
};

export default Step7;
