import React from "react";
import {Box, Typography, useTheme} from "@mui/material";
import { generateUtilityClasses } from "@mui/material";
import monitoring from '../icons/monitoring.svg';
import search from '../icons/search.svg';
import document from '../icons/document.svg';
import bag from '../icons/bag.svg';

// Array of Steps
const steps = [
  {
    id: 1,
    title: "Sofortkredit berechnen",
    description:
      "Berechnen Sie Ihren Sofortkredit direkt online. Nach der Vorabprüfung erfolgt die Legitimierung Ihrer Identität, um die Richtigkeit der Angaben sicherzustellen. Diese kann schnell und einfach über verschiedene Verfahren durchgeführt werden.",
    icon: monitoring,
  },
  {
    id: 2,
    title: "Identifizieren per Postident/Videoident",
    description:
      "Sobald Ihre Kreditanfrage erfolgreich genehmigt wurde, bitten wir Sie, die erforderliche Identitätsprüfung durchzuführen. Hierfür stehen Ihnen verschiedene, komfortable Verfahren zur Verfügung, die eine schnelle und sichere Legitimation gewährleisten.",
    icon: search,
  },
  {
    id: 3,
    title: "Nachweise einreichen",
    description:
      "Abhängig von Ihrem Kreditwunsch benötigen wir zur Feststellung Ihrer Bonität entsprechende Nachweise über Ihre finanzielle Situation (z. B. Gehaltsabrechnungen, Kontoauszüge etc.). Diese Unterlagen können Sie uns bequem digital über Ihren Kundenlogin oder in Papierform einreichen.",
    icon: document,
  },
  {
    id: 4,
    title: "Geld wird überwiesen",
    description:
      "Nach abschließender Prüfung Ihrer Unterlagen wird der Kreditbetrag zeitnah auf Ihr Konto überwiesen. Verlässlich, schnell und transparent – so können Sie Ihre Wünsche unmittelbar verwirklichen.",
    icon: bag,
  },
];

const classes = {
  ...generateUtilityClasses("StepsComponent", [
    "root",
    "stepWrapper",
    "stepIconWrapper",
    "stepCircle",
    "stepImage",
    "stepNumber",
    "title",
    "description",
  ]),
};

const StepsComponent: React.FC = () => {
  const theme = useTheme();
  const styles = {
    [`&.${classes.root}`]: {
      flexWrap: 'no-wrap',
      display: 'flex',
      justifyContent: 'center',
    },
    [`& .${classes.stepWrapper}`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      textAlign: 'start',
      gap: '16px',
      width: '285px',
      boxSizing: 'border-box',
      marginRight: '20px',
    },
    [`& .${classes.stepIconWrapper}`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "start",
      width: "100%",
    },
    [`& .${classes.stepCircle}`]: {
      width: "40px",
      height: "40px",
      backgroundColor: "#004d32",
      color: "#ffffff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "700",
      borderRadius: "50%",
      fontSize: "18px",
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,sans-serif",
    },
    [`& .${classes.stepImage}`]: {
      width: "120px",
      height: "80px",
      objectFit: "contain",
      marginLeft: '30px',
    },
    [`& .${classes.stepNumber}`]: {
      fontSize: "14px",
      color: "#003511",
      fontWeight: '400',
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,sans-serif",
    },
    [`& .${classes.title}`]: {
      fontSize: "22px",
      color: "#121212",
      fontWeight: '500',
      fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,sans-serif",
    },
    [`& .${classes.description}`]: {
      color: theme.palette.secondary.main,
    },
  };
  return (
    <Box className={classes.root} sx={styles}>
      {steps.map((step) => (
        <Box key={step.id} className={classes.stepWrapper}>
          <Box className={classes.stepIconWrapper}>
            <Box className={classes.stepCircle}>
              <span>{step.id}</span>
            </Box>
            <img
              src={step.icon}
              alt={`Step ${step.id} Icon`}
              className={classes.stepImage}
            />
          </Box>

          {/* Step Number */}
          <span className={classes.stepNumber}>
            Schritt {step.id}
          </span>

          {/* Step Title */}
          <span className={classes.title}>
            {step.title}
          </span>

          {/* Step Description */}
          <Typography variant="body2" className={classes.description}>
            {step.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default StepsComponent;
