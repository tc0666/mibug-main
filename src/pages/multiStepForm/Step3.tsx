import React from 'react';
import {
  Box,
  generateUtilityClasses,
} from '@mui/material';
import SelectField from "../../components/SelectField";

const classes = generateUtilityClasses('Step3', ['root', 'livingSituation']);

const styles = () => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
    },
    [`& .MuiFormLabel-root`]: {
      color: '#3E3E3E',
    },
  },
  [`& .${classes.livingSituation}`]: {
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
      font: 'inherit',
      letterSpacing: 'inherit',
      boxSizing: 'content-box', // Corrected 'x-sizing' to 'boxSizing'
      background: 'none',
      height: '1.4375em',
      margin: 0,
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      minWidth: 0,
      width: '100%',
      animationName: 'mui-auto-fill-cancel',
      animationDuration: '10ms',
      color: 'rgb(50, 50, 50)',
      padding: '12.5px 0 12.5px 8px',
      border: 0,
    },
  },
});

export const livingSituationOptions = [
  { label: 'zur Miete', value: 'RENTING' },
  { label: 'mietfrei', value: 'RENTFREE' },
  { label: 'bei den Eltern', value: 'PARENTS' },
  { label: 'im Wohneigentum', value: 'PROPERTY' },
];

const Step3: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <SelectField
        name="livingSituation"
        label="Wohnsituation"
        options={livingSituationOptions}
      />
    </Box>
  );
};

export default Step3;
