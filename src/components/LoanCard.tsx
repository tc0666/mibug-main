import React from "react";
import { Box, Typography, Button, useTheme, generateUtilityClasses } from "@mui/material";
import money from "../icons/money.svg";
import car from "../icons/car.svg";
import building from "../icons/building.svg";
import leaptope from "../icons/leaptope.svg";
import checkCircle from "../icons/checkCircle.svg";

const classes = {
  ...generateUtilityClasses("LoanCard", [
    "root",
    "iconWrapper",
    "title",
    "subtitle",
    "featuresList",
    "featureItem",
    "featureItemIcon",
    "button",
  ]),
};

const loanItems = [
  {
    title: "Sofort sorglos flüssig sein",
    subtitle: "Sofortkredit",
    features: [
      "Unkomplizierte Online-Abwicklung",
      "Wenn sich finanzielle Bedürfnisse kurzfristig ändern",
      "Kurze Bearbeitungszeit, schnelle Verfügbarkeit",
    ],
    buttonLabel: "Zum Sofortkredit",
    icon: money,
  },
  {
    title: "Flexible Finanzierung für Ihr Projekt",
    subtitle: "Projektkredit",
    features: [
      "Individuelle Laufzeit und Ratenhöhe",
      "Attraktive Konditionen",
      "Perfekt für große Pläne",
    ],
    buttonLabel: "Jetzt beantragen",
    icon: car,
  },
  {
    title: "Flüssig bleiben und Träume erfüllen",
    subtitle: "Privatkredit",
    features: [
      "Schnelle Genehmigung",
      "Geringe Zinssätze",
      "Anpassbar an Ihre Wünsche",
    ],
    buttonLabel: "Mehr erfahren",
    icon: building,
  },
  {
    title: "Unternehmerische Freiheit genießen",
    subtitle: "Business-Kredit",
    features: [
      "Kapital für Wachstum und Expansion",
      "Flexible Rückzahlungsoptionen",
      "Schnelle und einfache Abwicklung",
    ],
    buttonLabel: "Jetzt starten",
    icon: leaptope,
  },
];

const LoanCard: React.FC = () => {
  const theme = useTheme();
  const styles = {
    [`&.${classes.root}`]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "16px",
      borderRadius: "8px",
      padding: "24px",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[1],
      width: "600px",
      height: "420px",
      boxSizing: "border-box",
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    [`& .${classes.iconWrapper}`]: {
      width: "100px",
      height: "80px",
      borderRadius: "8px",
      backgroundColor: theme.palette.secondary.light,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    [`& .${classes.title}`]: {
      fontWeight: 500,
      fontSize: "30px",
      lineHeight: "30px",
      color: theme.palette.secondary.contrastText,
      [theme.breakpoints.down(900)]: {
        fontSize: "24px",
      },
    },
    [`& .${classes.subtitle}`]: {
      fontWeight: 400,
      fontSize: "16px",
      color: theme.palette.secondary.dark,
    },
    [`& .${classes.featuresList}`]: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
    },
    [`& .${classes.featureItemIcon}`]: {
      fill: "none",
    },
    [`& .${classes.featureItem}`]: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "16px",
      color: theme.palette.secondary.main,
      marginBottom: "10px",
    },
    [`& .${classes.button}`]: {
      marginTop: "16px",
      padding: "12px",
      borderRadius: "24px",
      backgroundColor: theme.palette.success.light,
      color: theme.palette.primary.main,
      border: `1px solid ${theme.palette.primary.main}`,
      textTransform: "none",
      fontWeight: 600,
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
      },
    },
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={3}>
      {loanItems.map((item, index) => (
        <Box key={index} className={classes.root} sx={styles}>
          {/* Icon */}
          <Box className={classes.iconWrapper}>
            <img src={item.icon} alt="Money icon" width="64" height="64" />
          </Box>

          {/* Subtitle */}
          <Typography className={classes.subtitle}>{item.subtitle}</Typography>

          {/* Title */}
          <Typography className={classes.title}>{item.title}</Typography>

          {/* Features */}
          <Box className={classes.featuresList}>
            {item.features.map((feature, i) => (
              <Typography key={i} className={classes.featureItem}>
                <img src={checkCircle} alt="Money icon" width="19" height="19" />
                {feature}
              </Typography>
            ))}
          </Box>

          {/* Button */}
          <Button className={classes.button} fullWidth>
            {item.buttonLabel}
          </Button>
        </Box>
      ))}
    </Box>
  );
};

export default LoanCard;
