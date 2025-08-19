import React from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Checkbox,
  Link,
  styled,
  FormControlLabelProps,
  FormGroup,
  FormHelperText,
  generateUtilityClasses,
  FormControl,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { FormTitle } from '../../components/FormTitle';
import InputField from "../../components/InputField";

interface StyledFormControlLabelProps extends FormControlLabelProps {
  checked?: boolean;
}

export const StyledFormControlLabel = styled((props: StyledFormControlLabelProps) => (
  <FormControlLabel
    {...props}
    value={props.value}
    label={props.label}
    control={props.control}
    checked={props.checked}
    onClick={props.onClick}
  />
))(({ theme, checked }) => ({
  backgroundColor: checked ? theme.palette.success.light : theme.palette.background.whiteOpacity,
  border: checked
    ? `1px solid ${theme.palette.success.main}`
    : `1px solid ${theme.palette.grey[400]}`,
  padding: theme.spacing(1, 2),
  margin: theme.spacing(0),
  transition: 'background-color 0.3s, border-color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.success.light,
  },
  width: '100%',
  flexWrap: 'nowrap',
  '& .MuiFormControlLabel-root:first-of-type': {
    marginRight: 0,
  },
  borderRadius: '4px',
}));

export const StyledRadioGroup = styled(RadioGroup)(() => ({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  flexWrap: 'nowrap',
}));

export const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    color: theme.palette.primary.main,
  },
}));

const classes = generateUtilityClasses('Step6', [
  'root',
  'formControl',
  'input',
  'tip',
  'formTitle',
]);

const styles = () => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
    },
    [`& .MuiFormLabel-root`]: {
      color: '#3E3E3E',
    },
  },
  [`& .${classes.formControl}`]: {
    marginBottom: '16px',
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
    borderRadius: '4px',
    paddingRight: 0,
    height: 'auto',
    maxHeight: '48px',
    lineHeight: '1.4375em',
    padding: '12.5px 0 12.5px 8px',
  },

});

const Step6 = () => {
  const {
    register,
    formState: { errors },
    watch,
    control,
    setValue,
  } = useFormContext();
  const checkedConsent = watch('consent');

  const handleChange = (name: string, value: string) => {
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <Box className={classes.root} sx={styles}>
      <FormControl fullWidth className={classes.formControl}>
        <FormTitle>Anrede</FormTitle>
        <Box
          sx={{
            position: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Controller
            rules={{ required: true }}
            control={control}
            name="gender"
            render={({ field }) => (
              <StyledRadioGroup {...field} row>
                <StyledFormControlLabel
                  sx={{ marginRight: '20px' }}
                  value="Herr" // Only specify value here
                  control={<StyledRadio />}
                  label="Herr"
                  className={classes.input}
                  checked={field.value === 'Herr'} // Manage checked state
                />
                <StyledFormControlLabel
                  value="Frau"
                  control={<StyledRadio />}
                  label="Frau"
                  className={classes.input}
                  checked={field.value === 'Frau'} // Manage checked state
                />
              </StyledRadioGroup>
            )}
          />
        </Box>
      </FormControl>

      <InputField
        name="firstName"
        label="Vorname(n)"
        placeholder="z.B. Max"
        type="text"
        requiredMessage="Vorname erforderlich"
        showHintMessage="Wichtig: Bitte achten Sie darauf, dass Ihre Angabe mit Ihrem Personalausweis oder Reisepass übereinstimmt."
        onChange={(newValue) => handleChange('firstName', newValue)}
        value={watch('firstName')}
      />

      <InputField
        name="lastName"
        label="Nachname"
        placeholder="z.B. Mustermann"
        type="text"
        requiredMessage="Nachname erforderlich"
        showHintMessage="Wichtig: Bitte achten Sie darauf, dass Ihre Angabe mit Ihrem Personalausweis oder Reisepass übereinstimmt."
        onChange={(newValue) => handleChange('lastName', newValue)}
        value={watch('lastName')}
      />

      <InputField
        name="phone"
        label="Mobilfunknummer (alternativ Festnetznummer)"
        placeholder="z.B. +49 172 995434"
        type="text"
        requiredMessage="Mobilfunknummer erforderlich"
        showHintMessage="Mobilfunknummer (alternativ Festnetznummer)"
        onChange={(newValue) => handleChange('phone', newValue)}
        value={watch('phone')}
      />

      <InputField
        name="email"
        label="E-mail"
        placeholder="z.B. max.muster@example.org"
        type="email"
        requiredMessage="Email erforderlich"
        onChange={(newValue) => handleChange('email', newValue)}
        value={watch('email')}
      />

      <FormControl fullWidth className={classes.formControl}>
        <Typography variant="h6">
          Mit Klick auf den "Weiter"-Button akzeptiere ich die{' '}
          <Link href="/agb" underline="hover">
            AGB
          </Link>{' '}
          und erteile einen kostenlosen Kreditvergleichs- und Vermittlungsauftrag. Ich habe die{' '}
          <Link href="/darlehensvermittlung" underline="hover">
            Pflichtinformationen
          </Link>{' '}
          und die{' '}
          <Link href="/datenschutz" underline="hover">
            Datenschutzhinweise
          </Link>{' '}
          erhalten.
        </Typography>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}>
          <Checkbox
            {...register('consent', { required: 'Sie müssen zustimmen, um fortzufahren' })}
            checked={checkedConsent}
            sx={{
              color: errors.consent ? 'rgb(174, 46, 46)' : '#BFBFBF80',
            }}
          />
          <Typography variant="h6">
            Ich möchte zudem über günstige Kreditangebote und Services von Mibug Credit
            informiert werden und willige ein, dass Mibug Credit meine Angaben zur
            Kontaktaufnahme nutzt. Ich kann meine{' '}
            <Link href="https://www.mibugcredit.de/einwilligungserklarung" underline="hover">
              freiwillige Einwilligung
            </Link>{' '}
            jederzeit mit Wirkung für die Zukunft widerrufen.
          </Typography>
        </FormGroup>
        {errors.consent ? (
          <FormHelperText sx={{}}>{errors.consent?.message as string}</FormHelperText>
        ) : null}
      </FormControl>
    </Box>
  );
};

export default Step6;
