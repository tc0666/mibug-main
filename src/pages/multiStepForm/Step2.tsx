import React from 'react';
import {
  Box,
  generateUtilityClasses,
} from '@mui/material';
import DateInputField from "../../components/DateInputField";
import SelectField from "../../components/SelectField";

const classes = generateUtilityClasses('Step2', ['root', 'professionalGroup', 'formControl']);

const styles = () => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
      width: '100%',
      textAlign: 'start',
    },
    [`& .MuiFormLabel-root`]: {
      color: '#3E3E3E',
    },
  },
  [`& .${classes.formControl}`]: {
    marginBottom: '16px',
    padding: 0,
  },
  [`& .${classes.professionalGroup}`]: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    letterSpacing: '0.00938em',
    color: 'rgb(50, 50, 50)',
    boxSizing: 'border-box',
    cursor: 'text',
    display: 'inline-flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    borderRadius: '2px',
    paddingRight: 0,
    height: '48px',
    input: {
      padding: '12.5px 0 12.5px 8px',
    },
  },
});

export const professionalGroupOptions = [
  { label: 'Angestellte/r', value: 'EMPLOYEE' },
  { label: 'Angestellte/r in Kurzarbeit', value: 'EMPLOYEE_REDUCED_HOURS' },
  { label: 'Arbeiter/in', value: 'WORKER' },
  { label: 'Angestellte/r im öffent. Dienst', value: 'EMPLOYEE_PUBLIC_SERVICE' },
  { label: 'Facharbeiter/in', value: 'CRAFTSMAN' },
  { label: 'Leitende/r Angestellte/r', value: 'MANAGER' },
  { label: 'Rentner/in', value: 'RETIREE' },
  { label: 'Pensionär/in', value: 'PENSIONER' },
  { label: 'Angestellte/r in Elternzeit', value: 'EMPLOYEE_IN_PARENTAL_LEAVE' },
  { label: 'Angestellte/r über Zeitarbeitsfirma', value: 'EMPLOYEE_TEMPORARY_WORK' },
  { label: 'Angestellte/r im Ausland', value: 'EMPLOYEE_ABROAD' },
  { label: 'Angestelltes ärztliches Fachpersonal', value: 'EMPLOYEE_DOCTOR' },
  { label: 'Angestellte/r (Minijob 450 EUR Basis)', value: 'EMPLOYEE_MINIJOB' },
  { label: 'Angestellte/r (im Krankenstand / Krankengeldbezug)', value: 'EMPLOYEE_SICK' },
  { label: 'Arbeiter/in im öffent. Dienst', value: 'WORKER_PUBLIC_SERVICE' },
  { label: 'Arbeiter/in in Elternzeit', value: 'WORKER_PARENTAL_LEAVE' },
  { label: 'Arbeitslose, Sozialhilfeempfänger, ohne Beschäftigung', value: 'UNEMPLOYED' },
  { label: 'Auszubildende/r', value: 'APPRENTICE' },
  { label: 'Beamte/r im einfachen Dienst', value: 'OFFICER_LOWER_SERVICE' },
  { label: 'Beamte/r im gehobenen Dienst', value: 'OFFICER_UPPER_SERVICE' },
  { label: 'Beamte/r im höheren Dienst', value: 'OFFICER_HIGHER_SERVICE' },
  { label: 'Beamte/r im mittleren Dienst', value: 'OFFICER_MIDDLE_SERVICE' },
  { label: 'Hausfrau/-mann', value: 'HOUSEWIFE' },
  { label: 'Hilfsarbeiter/in', value: 'HELPER' },
  { label: 'Schüler/in', value: 'PUPIL' },
  { label: 'Selbst. Freiberufler/in', value: 'SELF_EMPLOYED_FREELANCER' },
  { label: 'Selbst. Geschäftsführer/in', value: 'SELF_EMPLOYED_CEO' },
  { label: 'Selbst. Gewerbetreibende/r', value: 'SELF_EMPLOYED_BUSINESSMAN' },
  { label: 'Soldat/in', value: 'SOLDIER' },
  { label: 'Soldat/in auf Zeit', value: 'SOLDIER_TEMPORARY' },
  { label: 'Studierende/r', value: 'STUDENT' },
  { label: 'Vorstand, Geschäftsführer/in', value: 'BOARD_MEMBER_OR_CEO' },
  { label: 'Wehrpflichtige/r', value: 'DRAFTEE' },
];

const Step2: React.FC = () => {

  return (
    <Box className={classes.root} sx={styles}>
      <SelectField
        name="professionalGroup"
        label="Berufsgruppe"
        options={professionalGroupOptions}
      />
      <DateInputField
        name="date"
        label="Beschäftigt seit"
        views={['year', 'month']}
        format="MM.YYYY"
        requiredMessage="Dort wohnhaft seit (Monat und Jahr) erforderlich"
      />
    </Box>
  );
};

export default Step2;
