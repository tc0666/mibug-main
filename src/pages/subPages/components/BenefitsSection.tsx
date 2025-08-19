import React from "react";
import {Box, Typography, useMediaQuery} from "@mui/material";
import { generateUtilityClasses, Theme } from "@mui/material";
import SlickSlider from "./SlickSlider";

const classes = generateUtilityClasses("BenefitsSection", [
  "root",
  "sectionTitle",
  "gridItem",
  "grid",
  "icon",
  "headline",
  "description",
  "titleWrap",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    boxSizing: "border-box",
    margin: "0 auto",
    padding: "24px 0",
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "24px ",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.grid}`]: {
    display: "flex",
    flexWrap: "wrap",
  },
  [`& .${classes.gridItem}`]: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    textAlign: "center",
    padding: "10px",
    flex: "1 1 calc(33.333% - 16px)",
    [theme.breakpoints.down(1024)]: {
      flex: 1,
      width: "100%",
    },
    [theme.breakpoints.down(900)]: {
      padding: 0,
    },
  },
  [`& .${classes.icon}`]: {
    width: "45px",
    height: "45px",
    marginRight: "16px",
  },
  [`& .${classes.headline}`]: {
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "32px",
    textAlign: "left",
  },
  [`& .${classes.description}`]: {
    fontSize: "14px",
    color: "#4A4A4A",
    lineHeight: "20px",
    textAlign: "left",
    [`span, a`]: {
      color: theme.palette.primary.main,
    }
  },
  [`& .${classes.titleWrap}`]: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(900)]: {
      marginBottom: "8px",
    },
  },
});

export interface Benefit {
  icon?: string;
  title: string;
  description: string;
}

interface BenefitsSectionProps {
  benefits: Benefit[];
  className?: string;
  title?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ benefits, title, className }) => {
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down(900));

  return (
    <Box className={`${classes.root} ${className || ""}`} sx={styles}>
      <Typography className={classes.sectionTitle}>
        {title}
      </Typography>
      { !isMobileOrTablet ? (
        <Box className={classes.grid}>
          {benefits?.map((benefit, index) => (
            <Box key={index} className={classes.gridItem}>
              <Box className={classes.titleWrap}>
                {benefit.icon && (<img className={classes.icon} src={benefit.icon} alt="icon" />)}
                <Typography className={classes.headline}>{benefit.title}</Typography>
              </Box>
              <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: benefit.description }} />
            </Box>
          ))}
        </Box>
      ) : (
        <SlickSlider slidesToShow={1} autoplay={false}>
          {benefits?.map((benefit, index) => (
            <Box key={index} className={classes.gridItem}>
              <Box className={classes.titleWrap}>
                {benefit.icon && (<img className={classes.icon} src={benefit.icon} alt="icon" />)}
                <Typography className={classes.headline}>{benefit.title}</Typography>
              </Box>
              <Typography className={classes.description} dangerouslySetInnerHTML={{ __html: benefit.description }} />
            </Box>
          ))}
        </SlickSlider>
      )}

    </Box>
  );
};

export default BenefitsSection;

export { classes as BenefitsSectionClasses}
