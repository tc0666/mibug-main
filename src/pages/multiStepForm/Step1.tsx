import React from 'react';
import {
  Box,
  generateUtilityClasses,
} from '@mui/material';
import SelectField from "../../components/SelectField";

const classes = generateUtilityClasses('Step1', ['root', 'familyStatus']);

const styles = () => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
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
  [`& .${classes.familyStatus}`]: {
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
export const familyStatusOptions = [
  { label: 'ledig', value: 'SINGLE' },
  { label: 'verheiratet', value: 'MARRIED' },
  { label: 'verwitwet', value: 'WIDOWED' },
  { label: 'geschieden', value: 'DIVORCED' },
  { label: 'eheähnliche Lebensgemeinschaft', value: 'PARTNERSHIP' },
  { label: 'getrennt lebend', value: 'SEPARATED' },
];

const Step1: React.FC = () => {


  return (
    <Box className={classes.root} sx={styles}>
      <SelectField
        name="familyStatus"
        label="Familienstand"
        options={familyStatusOptions}
      />
    </Box>
  );
};

export default Step1;
