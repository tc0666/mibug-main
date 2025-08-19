import React from "react";
import {Typography, Box, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import SliderSection, {SliderSectionClasses} from "../SliderSection";

const classes = generateUtilityClasses("CustomerReviews", [
  "root",
  "title",
  "content",
]);


const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.title}`]: {
    fontSize: "36px",
    color: "#172507",
    lineHeight: "40px",
    marginBottom: "24px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${SliderSectionClasses.root}`]: {
    img: {
      filter: "none",
      opacity: 1,
      border: "1px solid #aaa",
    }
  },
  [`& .${SliderSectionClasses.imageContent}`]: {
    height: "auto",
  },
  [`& .${classes.content}`]: {
    fontSize: "14px",
    color: "#172507",
    lineHeight: "20.02px",
    marginBottom: "20px",
    fontWeight: 400,
    span: {
      color: theme.palette.primary.main,
    }
  },
});


interface PartnerIcon {
  src: string;
  alt: string;
}

interface CustomerReviewsProps {
  partnerIcon: PartnerIcon[];
  title: string;
}

const CustomerReviews = ({partnerIcon, title}: CustomerReviewsProps) => {

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1" className={classes.content}>
        Unsere kostenlose Kreditberatung (<span>+49 89 41435700</span>)
        unterstützt Sie beim Abschluss Ihres Kredits. Wir beantworten Ihnen <b>unverbindlich</b> alle Fragen zu unseren Kreditangeboten und helfen Ihnen, Ihren Wunschkredit zu realisieren.
      </Typography>
      <Typography variant="body1" className={classes.content}>
        Über 250 qualifizierte Kreditberater helfen Ihnen dabei, das für Sie <b>beste Umschuldungsangebot</b> zu erhalten. Ihr Kreditberater ist ein echter Experte auf seinem Gebiet. Dank seiner fundierten
        <b>Ausbildung</b> und mehrjährigen <b>Berufserfahrung</b> kann er Ihnen alle Fragen rund um die
        Kreditaufnahme beantworten. Unsere Berater sind gerne für Sie da: Montag bis Freitag von 8:00 bis 20:00
        Uhr und Samstag von 10:00 bis 15:00 Uhr.
      </Typography>

      <SliderSection partnerIcons={partnerIcon} showText={true} />
    </Box>
  );
};

export default CustomerReviews;
