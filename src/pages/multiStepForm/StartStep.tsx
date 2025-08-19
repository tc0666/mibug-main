import React from 'react';
import {
  Box,
  Select,
  MenuItem,
  generateUtilityClasses,
  FormGroup,
  Theme,
} from '@mui/material';
import {useFormContext} from 'react-hook-form';
import {FormTitle} from "../../components/FormTitle";
import CurrencyTextField from "../../components/CurrencyTextField";
import {formatCurrency} from "../../utils/formatCurrency";

const classes = {
  ...generateUtilityClasses('StartStep', [
    'root',
    'formContainer',
    'formField',
    'formTextField',
    'submitButton',
    'logo',
    'formLabel',
    'form',
    'formHelperText',
    'menuItem',
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.form}`]: {
    height: 'auto',
    width: '100%',
  },
  [`& .${classes.formHelperText}`]: {
    color: 'rgb(91, 91, 91)',
    fontSize: '0.75rem',
  },
  [`& .${classes.logo}`]: {
    width: '100px',
    height: '100px',
    position: 'absolute',
    right: 0,
    top: '-48px',
    [theme.breakpoints.down(900)]: {
      img: {
        display: 'none',
      },
      display: 'none',
    },
  },
  [`& .${classes.formContainer}`]: {
    width: '100%',
    margin: '8px 0 16px 0',
    [`& .MuiSelect-select`]: {
      fontSize: '16px',
      padding: '10px 14px',
      fontWeight: 400,
      fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,sans-serif',
    },
  },
  [`& .${classes.formLabel}`]: {
    color: '#323232',
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: 1.4375,
    padding: 0,
    position: 'relative',
    display: 'block',
    transformOrigin: 'top left',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
    transition:
      'color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    [theme.breakpoints.down(900)]: {
      fontSize: '14px',
    },
  },
  [`& .${classes.formField}`]: {
    width: '100%',
    color: theme.palette.other.snackbarBackground,
    fontFamily: 'Roboto',
    height: '48px',
    fontSize: '14px',
  },
  [`& .${classes.formTextField}`]: {
    width: '100%',
    color: theme.palette.other.snackbarBackground,
    fontFamily: 'Roboto',
    fontSize: '1rem',
    padding: '14px',
    fontWeight: 400,
    [theme.breakpoints.down(900)]: {
      marginBottom: '10px',
      height: '48px',
      fontSize: '14px',
      padding: '0 14px',
      margin: '0',
    },
  },
  [`& .${classes.menuItem}`]: {
    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,sans-serif',
    color: theme.palette.other.snackbarBackground,
    minHeight: '24px',
    fontSize: '1rem',
    lineHeight: 1.5,
  },
  [`& .${classes.submitButton}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: '8px 16px',
    borderRadius: '4px',
    textTransform: 'none',
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    width: '100%',
    height: '48px',
    boxShadow: `0px 1px 5px 0px #0000001F,
                0px 2px 2px 0px #00000024,
                0px 3px 1px -2px #00000033`,
  },
});

export enum Category {
  FREIE_VERWENDUNG = 'Freie Verwendung',
  AUTO_MOTRAD = 'Auto / Motorrad',
  WOHNEN_MODERNISIERUNG = 'Wohnen / Modernisierung',
  BAU_IMMOBILIENFINANZIERUNG = 'Bau-/ Immobilienfinanzierung',
  UMSCHULDUNG = 'Umschuldung',
  GEWERBE = 'Gewerbe',
}

export interface CreditFormData {
  category: Category;
  creditAmount: number;
  duration: number;
  deposit?: number;
}

const generateCreditOptions = (category: Category): number[] =>
  category === Category.BAU_IMMOBILIENFINANZIERUNG
    ? Array.from({ length: 50 }, (_, i) => 100000 + i * 100000).concat([5000000])
    : Array.from({ length: 136 }, (_, i) => (i < 30 ? 500 + i * 250 : 15000 + (i - 30) * 1000));

const durationOptions: number[] = Array.from({ length: 10 }, (_, i) => 12 + i * 12);


const StartStep: React.FC = () => {
  const {
    register,
    watch,
  } = useFormContext();

  const creditAmount = watch('creditAmount');
  const category = watch('category');
  const duration = watch('duration');
  const categoryOptions = Object.values(Category);

  return (
    <Box sx={styles} className={classes.root}>
      <FormTitle className={classes.formLabel}>Verwendung</FormTitle>
      <FormGroup className={classes.formContainer}>
        <Select
          {...register('category')}
          className={classes.formField}
          value={category}
        >
          {categoryOptions.map((option) => (
            <MenuItem key={option} value={option} className={classes.menuItem}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormGroup>

      <FormTitle className={classes.formLabel}>Nettokreditbetrag</FormTitle>
      <FormGroup className={classes.formContainer}>
        <Select
          {...register('creditAmount', {
            setValueAs: (value) => Number(value),
          })}
          value={creditAmount}
          className={classes.formField}
        >
          {generateCreditOptions(watch('category')).map((amount) => (
            <MenuItem key={amount} value={amount} className={classes.menuItem}>
              {formatCurrency(amount)}
            </MenuItem>
          ))}
        </Select>
      </FormGroup>

      {watch('category') === Category.AUTO_MOTRAD && (
        <CurrencyTextField
          name="deposit"
          label="Anzahlung (€)"
          placeholder="z.B. 12.000"
          max={creditAmount - 500}
          defaultValue={creditAmount - 500}
          helperText={
            `Bei einem Kaufpreis von ${formatCurrency(creditAmount)} darf die Anzahlung höchstens ${(creditAmount - 500).toLocaleString()} € betragen.`
          }
          requiredMessage="Anzahlung erforderlich"
        />
      )}

      <FormTitle className={classes.formLabel}>Laufzeit</FormTitle>
      <FormGroup className={classes.formContainer}>
        <Select
          {...register('duration', {
            setValueAs: (value) => Number(value),
          })}
          value={duration}
          className={classes.formField}
        >
          {durationOptions.map((months) => (
            <MenuItem key={months} value={months} className={classes.menuItem}>
              {months} Monate
            </MenuItem>
          ))}
        </Select>
      </FormGroup>
    </Box>
  );
};

export default StartStep;
