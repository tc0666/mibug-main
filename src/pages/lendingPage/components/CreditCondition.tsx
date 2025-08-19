import React from "react";
import { Typography, Box, Theme } from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";

const classes = {
  ...generateUtilityClasses("CreditCondition", [
    "root",
    "creditBox",
    "titleTypography",
    "itemBox",
    "itemLabelTypography",
    "itemValueTypography",
    "exampleBox",
    "exampleTitleTypography",
    "exampleDetailTypography",
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "16px 24px",
    justifyContent: "space-between",
    flexWrap: "wrap",
    display: "flex",
    maxWidth: "1200px",
    margin: "0 auto",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column-reverse",
      maxWidth: "100%",
      padding: "0",
    },
  },
  [`& .${classes.creditBox}`]: {
    flex: "1",
    minWidth: "300px",
    marginRight: "25px",
    backgroundColor: "#F6F6F6",
    padding: "20px 30px",
    boxSizing: "border-box",
    [theme.breakpoints.down(900)]: {
      padding: "16px 25px",
      margin: 0,
      marginTop: "20px",
      minWidth: "100%",
    },
  },
  [`& .${classes.titleTypography}`]: {
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: 700,
    lineHeight: "28px",
    letterSpacing: "0.16px",
    textAlign: "left",
    marginBottom: "16px",
  },
  [`& .${classes.itemBox}`]: {
    marginBottom: "8px",
    display: "flex",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
    },
  },
  [`& .${classes.itemLabelTypography}`]: {
    margin: 0,
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 700,
    fontSize: "0.88rem",
    lineHeight: "1.25rem",
    letterSpacing: "0.02rem",
    minWidth: "200px",
  },
  [`& .${classes.itemValueTypography}`]: {
    margin: 0,
    fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, sans-serif",
    fontWeight: 400,
    width: "50%",
    fontSize: "0.88rem",
    lineHeight: "1.25rem",
    letterSpacing: "0.02rem",
    [theme.breakpoints.down(900)]: {
      width: "100%",
    },
  },
  [`& .${classes.exampleBox}`]: {
    flex: "1",
    minWidth: "300px",
    alignContent: "center",
    [theme.breakpoints.down(900)]: {
      padding: "16px 24px",
      width: "100%",
      boxSizing: "border-box",
    },
  },
  [`& .${classes.exampleTitleTypography}`]: {
    fontFamily: "Roboto",
    fontSize: "17px",
    fontWeight: 700,
    lineHeight: "28px",
    letterSpacing: "0.16px",
    textAlign: "left",
    marginBottom: "6px",
  },
  [`& .${classes.exampleDetailTypography}`]: {
    fontFamily: "Roboto",
    fontSize: "13px",
    fontWeight: 400,
    lineHeight: "20px",
    letterSpacing: "0.32px",
    textAlign: "left",
    textDecorationSkipInk: "none",
  },
});

const CreditCondition = ({ creditCondition }: { creditCondition: { label: string; value: string }[] }) => (
  <Box className={classes.root} sx={styles}>
    <Box className={classes.creditBox}>
      <Typography className={classes.titleTypography}>
        Ratenkredit Konditionen Übersicht
      </Typography>
      <Box>
        {creditCondition.map((item, index) => (
          <Box key={index} className={classes.itemBox}>
            <Typography className={classes.itemLabelTypography}>{item.label}</Typography>
            <Typography className={classes.itemValueTypography}>{item.value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
    <Box className={classes.exampleBox}>
      <Typography className={classes.exampleTitleTypography}>
        Beispielrechnung gemäß PAngV:
      </Typography>
      <Typography className={classes.exampleDetailTypography}>
        Nettodarlehensbetrag 20.000,00 €, 84 Monate <br />
        Laufzeit, 2,20 % effektiver Jahreszins, 2,76 % p.a. gebundener Sollzins,
        84 mtl. Raten zu je 285,14 €, 23.951,75 € Gesamtbetrag, Lloyds Bank
        GmbH, c/o Bank of Scotland, Karl-Liebknecht-Straße 5, 10178 Berlin
      </Typography>
    </Box>
  </Box>
);

export default CreditCondition;
