import React from "react";
import {Box, Theme, Typography, generateUtilityClasses, useMediaQuery} from "@mui/material";
import SlickSlider from "./SlickSlider";


const classes = generateUtilityClasses("SofortkreditSteps", [
  "root",
  "sectionTitle",
  "sectionDescription",
  "card",
  "cardContainer",
  "step",
  "icon",
  "titleWrap",
  "title",
  "description",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.title}`]: {
    color: "#212529",
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "28px",
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "20px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.icon}`]: {
    marginRight: "16px",
    width: "50px",
    height: "50px",
  },
  [`& .${classes.titleWrap}`]: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
  },
  [`& .${classes.cardContainer}`]: {
    display: "flex",
    backgroundColor: "#fff",
    flex: "1 1 calc(33.333% - 16px)",
    padding: "20px 40px",
    border: "1px solid #E8E8E8",
    marginRight: "16px",
    ":last-child": {
      marginRight: 0,
    },
    [theme.breakpoints.down(900)]: {
      padding: "22px",
      width: 'auto !important',
    },
  },
  [`& .${classes.description}`]: {
    fontSize: "16px",
    color: "#172507",
    fontWeight: 400,
    lineHeight: "24px",
    span: {
      color: theme.palette.primary.main,
      cursor: "pointer",
    }
  },
  [`& .${classes.card}`]: {
    display: "flex",
    marginTop: "20px",
  },
  [`& .${classes.sectionDescription}`]: {
    fontSize: "14px",
    color: "#172507",
    marginBottom: "12px",
    span: {
      fontWeight: 500,
      color: theme.palette.primary.main,
      cursor: "pointer",
    }
  },
});

interface Steps {
  title: string;
  description: string;
  icon?: string;
};

interface SofortkreditStepsProps {
  title?: string;
  description?: string;
  steps: Steps[];
}

const SofortkreditSteps = ({title, description, steps}: SofortkreditStepsProps) => {
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down(900));

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.sectionTitle}>
        {title}
      </Typography>
      <Typography className={classes.sectionDescription}>
        {description}
      </Typography>
      { isMobileOrTablet ? (
        <SlickSlider slidesToShow={1} autoplay={false}>
          {steps.map((step, index) => (
            <Box key={step.title} className={classes.cardContainer}>
              <Box className={classes.step}>
                <Box className={classes.titleWrap}>
                  {step.icon &&  <img className={classes.icon} src={step.icon} alt="icon"/>}
                  <Typography className={classes.title}>
                    {step.title}
                  </Typography>
                </Box>
                <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: step.description }} />
              </Box>
            </Box>
          ))}
        </SlickSlider>

        ) : (
        <Box className={classes.card}>

          {steps.map((step, index) => (
            <Box key={step.title} className={classes.cardContainer}>
              <Box className={classes.step}>
                <Box className={classes.titleWrap}>
                  {step.icon &&  <img className={classes.icon} src={step.icon} alt="icon"/>}
                  <Typography className={classes.title}>
                    {step.title}
                  </Typography>
                </Box>

                <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: step.description }} />
              </Box>
            </Box>
          ))}
        </Box>
      ) }

    </Box>
  );
};

export default SofortkreditSteps;
