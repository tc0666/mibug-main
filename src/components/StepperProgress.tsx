import React from "react";
import {Box, Typography, Stack, LinearProgress, Theme} from "@mui/material";
import { generateUtilityClasses } from "@mui/material";

interface StepperProgressProps {
  currentStep: number;
  totalSteps: number;
}

const classes = generateUtilityClasses("StepperProgress", [
  "root",
  "progressBar",
  "progressTitle",
  "progressBarBackground",
  "progressBarFill",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    marginBottom: "32px",
  },
  [`& .${classes.progressBar}`]: {
    height: "8px",
    borderRadius: "2px",
  },
  [`& .${classes.progressBarBackground}`]: {
    backgroundColor: "#B3DEB9",
  },
  [`& .${classes.progressBarFill}`]: {
    borderRadius: "2px",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.progressTitle}`]: {
    margin: "0",
    color: "#5B5B5B",
    fontWeight: 300,
    fontSize: "11px",
    lineHeight: "20px",
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, sans-serif, helvetica, arial",
    letterSpacing: "0.0075em",
  },
});

const StepperProgress: React.FC<StepperProgressProps> = ({ currentStep, totalSteps }) => {
  const percentSteps = Math.round(((currentStep + 1) / totalSteps) * 100);

  const getTitleText = () => {
    if (currentStep === totalSteps - 2) return "Nur noch 2 Schritte";
    return `${percentSteps} % geschafft`;
  };

  return (
    <Box className={classes.root} sx={styles}>
      <Stack spacing={1}>
        <LinearProgress
          variant="determinate"
          value={percentSteps}
          classes={{
            root: classes.progressBar,
            colorPrimary: classes.progressBarBackground,
            bar: classes.progressBarFill,
          }}
        />
        <Typography className={classes.progressTitle}>{getTitleText()}</Typography>
      </Stack>
    </Box>
  );
};

export default StepperProgress;
