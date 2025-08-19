import React from "react";
import { Typography, Box, Theme } from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import clsx from "clsx";

const classes = {
  ...generateUtilityClasses("ProfileImages", [
    "root",
    "avatar",
    "stars",
    "rating",
    "ratingTitle",
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "row",
    marginTop: "30px",
    [theme.breakpoints.down(900)]: {
      margin: "0 auto",
    },
  },
  [`& .${classes.ratingTitle}`]: {
    fontSize: "12px",
    lineHeight: "15px",
    fontWeight: 400,
    color: theme.palette.other.snackbarBackground,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: 0,
  },
  [`& .${classes.stars}`]: {
    color: theme.palette.info.light,
    width: 20,
    height: 20,
    fontSize: "18px",
  },
  [`& .${classes.rating}`]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    small: {
      fontSize: "7px"
    },
  },
  [`& .${classes.avatar}`]: {
    width: "inherit",
    height: 53,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    marginRight: "30px",
    boxSizing: "border-box",
    "&:first-of-type": {
      marginLeft: 0, // Remove margin for the first child
    },
    "&:last-of-type": {
      marginRight: "10px", // Remove margin for the first child
    },
  },
});

const RATING = 4.9;

interface ProfileImagesProps {
  className?: string;
  profileImages: string[];
}

const ProfileImages = ({ profileImages, className }: ProfileImagesProps) => (
  <Box className={clsx(classes.root, className)} sx={styles}>
    {profileImages.map((url, index) => (
      <img
        key={index}
        src={url}
        alt={`Profile ${index + 1}`}
        className={classes.avatar}
      />
    ))}
    <Box className={classes.rating}>
      <Typography className={classes.ratingTitle} fontSize="13px" mt="5px">
        mibugcredit.de - 4,9/5
      </Typography>
      <Typography className={classes.ratingTitle}>
          <span>
            <span className={classes.stars}>
              {"★".repeat(Math.floor(RATING))}
              {RATING % 1 !== 0 && "★ "}
            </span>
            {RATING}
          </span>
      </Typography>
      <small>aus 937 Bewertungen</small>
    </Box>
  </Box>
);

export default ProfileImages;
