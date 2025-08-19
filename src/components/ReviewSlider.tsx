import React from "react";
import { Box, Typography, useTheme, generateUtilityClasses } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ekonomiLogo from "../icons/ekonomiLogo.svg";
import "keen-slider/keen-slider.min.css";
import clsx from 'clsx';

const classes = {
  ...generateUtilityClasses("ReviewCard", [
    "root",
    "header",
    "stars",
    "ratingText",
    "reviewText",
    "badgeWrapper",
  ]),
};

// Array of reviews
const reviews = [
  { id: 1, rating: 5, reviewText: "Ich habe bisher nur positive Erfahrungen gemacht..." },
  { id: 2, rating: 5, reviewText: "Sehr schnelle Bearbeitung und freundliches Personal..." },
  { id: 3, rating: 5, reviewText: "Die Beratung war hervorragend und meine Anliegen wurden gelöst." },
  { id: 4, rating: 5, reviewText: "Sehr gute Konditionen und hervorragender Kundenservice." },
  { id: 5, rating: 5, reviewText: "Eine Bank, bei der ich mich immer gut aufgehoben fühle!" },
];

const ReviewSlider: React.FC = () => {
  const theme = useTheme();

  const styles = {
    [`&.${classes.root}`]: {
      display: "flex",
      flexDirection: "column",
      borderRadius: "16px",
      padding: "24px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[2],
      border: `1px solid ${theme.palette.grey[300]}`,
      boxSizing: "border-box",
    },
    [`& .${classes.header}`]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    [`& .${classes.stars}`]: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
      flexDirection: "column",
      p: {
        color: "#222",
      }
    },
    [`& .${classes.ratingText}`]: {
      fontSize: "14px",
      color: theme.palette.secondary.main,
    },
    [`& .${classes.reviewText}`]: {
      fontSize: "16px",
      lineHeight: "20px",
      color: theme.palette.text.primary,
      paragraph: "6px",
    },
    [`& .${classes.badgeWrapper}`]: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };

  return (
    <Box className="keen-slider">
      {reviews.map((review) => (
        <Box sx={styles} key={review.id} className={clsx(`keen-slider__slide number-slide${review.id}`, classes.root)}>
            <Box className={classes.header} sx={styles}>
              <Box className={classes.stars} sx={styles}>
                <Box>
                  {Array(review.rating)
                    .fill(null)
                    .map((_, index) => (
                      <StarIcon
                        key={index}
                        fontSize="small"
                        sx={{ color: theme.palette.warning.main }}
                      />
                    ))}
                </Box>
                <Typography className={classes.ratingText} sx={styles}>
                  {review.rating} von 5 Sterne
                </Typography>
              </Box>
              <Box className={classes.badgeWrapper} sx={styles}>
                <img
                  src={ekonomiLogo}
                  alt="eKomi badge"
                  width="48"
                  height="48"
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Box>

            {/* Review Text */}
            <Typography className={classes.reviewText} sx={styles}>
              {review.reviewText}
            </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default ReviewSlider;
