import React from "react";
import { Box, Typography, useTheme, generateUtilityClasses } from "@mui/material";
import euro from '../icons/euro.svg';
import speed from '../icons/speed.svg';
import deposit from '../icons/deposit.svg';

const classes = {
  ...generateUtilityClasses("CreditCard", [
    "root",
    "iconWrapper",
    "header",
    "content",
  ]),
};

const items = [
  {
    title: "Bis 100.000 Euro",
    description: "Vom kleinen bis zum großen Traum. Wir können ihn gemeinsam erfüllen. Mit einem Kreditbetrag von 1.000 bis 100.000 Euro.",
    icon: euro,
  },
  {
    title: "Laufzeiten bis 120 Monate",
    description: "Sie geben den Rahmen vor. Bei der Mibug Credit können Sie die Laufzeit wählen, die zu Ihrer persönlichen Situation passt.",
    icon: speed,
  },
  {
    title: "Kostenlose Sonderzahlungen",
    description: "Sie wollen Ihren Kredit mit Sonderzahlungen schneller tilgen? Super. Bei uns ist das ohne Zusatzzinsen machbar.",
    icon: deposit,
  },
];

const CreditCard: React.FC = () => {
  const theme = useTheme();
  const styles = {
    [`&.${classes.root}`]: {
      borderRadius: "8px 0 0 0",
      width: "390px",
      padding: "40px 20px",
      boxSizing: 'border-box',
      height: "276px",
      boxShadow: '0px 3px 20px 0px #00000014',
      backgroundColor: theme.palette.background.paper,
      [theme.breakpoints.up("md")]: {
        maxWidth: "390px",
        maxHeight: "276px",
      },
      [theme.breakpoints.between("sm", "md")]: {
        maxWidth: "244px",
        maxHeight: "229px",
      },
      [theme.breakpoints.down("sm")]: {
        maxWidth: "345px",
        maxHeight: "188px",
        padding: "20px",
        borderRadius: 0,
      },
    },
    [`& .${classes.iconWrapper}`]: {
      display: "flex",
      justifyContent: "start",
      alignItems: "start",
      fontSize: "48px",
      color: theme.palette.primary.main,
      marginBottom: '30px',
    },
    [`& .${classes.header}`]: {
      fontWeight: 700,
      fontSize: "22px",
      color: theme.palette.secondary.contrastText,
      textAlign: "left",
      marginBottom: '20px',
    },
    [`& .${classes.content}`]: {
      fontSize: "14px",
      color: theme.palette.secondary.main,
      textAlign: "left",
      lineHeight: 1.5,
      marginTop: theme.spacing(1),
    },
  };

  return (
    <Box display="flex" flexWrap="wrap" gap={2}>
      {items.map((item, index) => (
        <Box key={index} className={classes.root} sx={styles}>
          <Box className={classes.iconWrapper}>
            <img src={item.icon} alt="euro" />
          </Box>

          <Typography className={classes.header}>{item.title}</Typography>

          <Typography className={classes.content}>{item.description}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CreditCard;
