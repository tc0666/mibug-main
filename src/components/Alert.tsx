import React from "react";
import {Box, Theme, Typography} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import clsx from "clsx";
import InfoIcon from '@mui/icons-material/Info';

const classes = {
  ...generateUtilityClasses("Alert", [
    "root",
    "infoText",
    "infoDescription",
    "info",
    "error",
    "success",
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    margin: "24px 0",
    [theme.breakpoints.down(900)]: {
      margin: "12px 0",
    }
  },
  [`& .${classes.info}`]: {
    backgroundColor: "#F3F4FC",
    padding: "20px",
    borderLeft: "4px solid",
    borderRadius: "3px",
    display: "flex",
    alignItems: "start",
  },
  [`& .${classes.infoDescription}`]: {
    fontSize: "16px",
    color: "#172507",
    lineHeight: "22px",
    marginBottom: "20px",
    fontWeight: 400,
    span: {
      color: theme.palette.primary.main,
    }
  },
  [`& .${classes.infoText}`]: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "16px",
  },
  [`& .${classes.error}`]: {
    fill: "#ca3131",
    borderColor: "#ca3131",
  },
  [`& .${classes.success}`]: {
    fill: "#4988DF",
    borderColor: "#4988DF",
  },
});

interface InfoProps {
  className?: string;
  title?: string;
  description: string;
  type?: string;
}

const Alert = ({ className, title, description, type }: InfoProps) => (
  <Box className={clsx(classes.root, className)} sx={styles}>
    <Box className={clsx(classes.info, type !== 'error' ? classes.success : classes.error)}>
      <InfoIcon className={type !== 'error' ? classes.success : classes.error} />
      <Box className={classes.infoText}>
        <Typography>
          <b>{title}</b>
        </Typography>
        <Typography className={classes.infoDescription} dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
    </Box>
  </Box>
);

export default Alert;
