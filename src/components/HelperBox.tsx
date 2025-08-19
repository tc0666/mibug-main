import React from "react";
import {Box, Theme, Typography} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import clsx from "clsx";
import PaymentsIcon from "@mui/icons-material/Payments";

const classes = {
  ...generateUtilityClasses("HelperBox", [
    "root",
    "helperBoxText",
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    alignItems: "center",
    borderLeft: "8px solid #08B578",
    borderRadius: "4px",
    fontSize: "12px",
    gap: "16px",
    padding: "16px",
    boxShadow: "rgb(232, 232, 232) 0px 2px 16px",
    svg: {
      fill: theme.palette.primary.main,
    }
  },
  [`& .${classes.helperBoxText}`]: {
    fontSize: "12px",
  },
});

interface HelperBoxProps {
  className?: string;
  description: string;
}

const HelperBox = ({ className, description }: HelperBoxProps) => (
  <Box className={clsx(classes.root, className)} sx={styles}>
    <PaymentsIcon />
    <Typography className={classes.helperBoxText}>
      {description}
    </Typography>
  </Box>
);

export default HelperBox;
