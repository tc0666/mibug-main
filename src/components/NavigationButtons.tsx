import React from 'react';
import { Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import clsx from 'clsx';
import { Button } from './Button';
import { generateUtilityClasses } from '@mui/material';

interface NavigationButtonsProps {
  currentStep: number;
  totalSteps: number;
  disabled?: boolean;
  handleNextStep?: () => void;
  handlePrevStep?: () => void;
}

const classes = generateUtilityClasses('NavigationButtons', [
  'root',
  'button',
  'icon',
  'iconLeft',
  'buttonSubtitle',
]);

const styles = {
  [`&.${classes.root}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '16px',
    '@media (max-width: 650px)': {
      flexDirection: 'column-reverse',
    },
  },
  [`& .${classes.button}`]: {
    width: '66.6667%',
    marginLeft: '8px',
    lineHeight: 1,
    padding: '10px 0',
    '@media (max-width: 650px)': {
      width: '100%',
      margin: '0 0 8px 0',
    },
    '&:nth-of-type(1)': {
      maxWidth: "33.3333%",
      marginLeft: 0,
      '@media (max-width: 650px)': {
        maxWidth: '100%',
      },
    },
    '&:nth-of-type(2)': {
      maxWidth: "66.6667%",
      '@media (max-width: 650px)': {
        maxWidth: '100%',
      },
    },
  },
  [`& .${classes.icon}`]: {
    userSelect: 'none',
    width: '22px',
    height: '22px',
    display: 'inline-block',
    fill: 'currentcolor',
    flexShrink: 0,
    fontSize: '22px',
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1)',
    marginLeft: '8px',
  },
  [`& .${classes.iconLeft}`]: {
    marginLeft: '0',
    marginRight: '8px',
  },
  [`& .${classes.buttonSubtitle}`]: {
    fontSize: '12px',
    fontWeight: 'normal',
    display: 'block',
    color: '#ffffff',
  },
};

const NavigationButtons: React.FC<NavigationButtonsProps> = ({
   currentStep,
   totalSteps,
   handleNextStep,
   handlePrevStep,
   disabled
 }) => {
  return currentStep !== 0 ? (
    <Box className={classes.root} sx={styles}>
      <Button onClick={handlePrevStep} className={clsx(classes.button)}>
        <ArrowBackIcon className={clsx(classes.icon, classes.iconLeft)} />
        Zurück
      </Button>

      <Button onClick={handleNextStep}  disabled={disabled} className={clsx(classes.button)} active={true} type="button">
        Weiter
        <ArrowForwardIcon className={classes.icon} />
      </Button>
    </Box>
  ) : (
    <Button type="button" active={true} sx={{width: "100%"}} onClick={handleNextStep}>
      Jetzt Kreditanfrage starten
    </Button>
  );
};

export default NavigationButtons;
