import React from "react";
import { Box, Theme } from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import clsx from "clsx";

const classes = {
  ...generateUtilityClasses("TrustImages", [
    "root",
    "avatar",
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "row",
    height: 110,
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  [`& .${classes.avatar}`]: {
    width: "inherit",
    marginRight: "26px",
    boxSizing: "border-box",
    maxWidth: "100%",
    height: "inherit",
    "&:first-of-type": {
      marginLeft: 0, // Remove margin for the first child
    },
    "&:last-of-type": {
      marginRight: "0", // Remove margin for the first child
    },
  },
});

interface ProfileImagesProps {
  className?: string;
  profileImages: string[];
}

const TrustImages = ({ profileImages, className }: ProfileImagesProps) => (
  <Box className={clsx(classes.root, className)} sx={styles}>
    {profileImages.map((url, index) => (
      <img
        key={index}
        src={url}
        alt={`Profile ${index + 1}`}
        className={classes.avatar}
      />
    ))}
  </Box>
);

export default TrustImages;
