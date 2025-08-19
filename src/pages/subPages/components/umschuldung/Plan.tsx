import React from "react";
import {Box, Typography, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import SingleAuthorList, {SingleAuthorListClasses} from "../SingleAuthorList";
import stefanie from "../../../../icons/credit/stefanie.png";
import logo from "../../../../icons/credit/logo.svg";
import womanPhone from "../../../../icons/credit/womanPhone.png";

const classes = generateUtilityClasses("Plan", [
  "root",
  "wrap",
  "description",
  "title",
]);


const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "60px 0",
  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
  },
  [`& .${classes.title}`]: {
    fontSize: '32px',
    fontWeight: 700,
    lineHeight: "40px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textSecorationSkipInk: "none",
    marginBottom: "24px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.description}`]: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: "20px",
      textAlign: "left",
      textUnderlinePosition: "from-font",
      textSecorationSkipInk: "none",
  },
  [`& .${SingleAuthorListClasses.root}`]: {
    marginLeft: "0px !important",
  },
});

const singleAuthorList = [
  {
    name: "Stefanie Willheim",
    role: "Geschrieben von",
    title: "Kreditberaterin",
    description:
    'Seit 2021 unterstützt die geprüfte Versicherungs- und Finanzanlagenfachfrau Stefanie Willheim mibugcredit-Kunden bei' +
      ' der Kreditaufnahme. Mit ihrem Blick fürs Detail ist sie eine geschätzte Ansprechpartnerin für die Ratenoptimierung der Kunden. Mit Einfühlungsvermögen und Fachwissen gleichermaßen weiß sie auf jede Kundenfrage die richtige Antwort. Als gefragte Autorin teilt sie ihr Wissen rund um das Thema Ratenkredit gerne mit den Besuchern der mibugcredit-Website.',
    image: stefanie,
  },
  {
    name: "mibug Content Team",
    role: "Geprüft durch",
    title: "Editor",
    description:
      "Das mibug Content-Team besteht aus erfahrenen und kompetenten Fachleuten, die gewissenhaft und mit Bedacht Artikel auf mibugcredit.de vor ihrer Veröffentlichung inspizieren und gegenprüfen.",
    image: logo,
  },
];

const Plan = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.wrap}>
        <Box>
          <Typography className={classes.title}>
            Jetzt Umschuldung planen und
            sparen
          </Typography>
          <Typography className={classes.description}>
            Nutzen Sie die Gelegenheit, Ihre Kreditkosten zu senken! Vergleichen Sie
            aktuelle Angebote für Ihre Umschuldung und finden Sie mit nur wenigen
            Klicks die besten Konditionen – ganz unkompliziert und individuell
            angepasst an Ihre Situation. Starten Sie jetzt und schaffen Sie sich mehr
            finanziellen Spielraum!
          </Typography>
        </Box>
        <img width={472} height={371} src={womanPhone} alt="womanPhone"/>
      </Box>

      <SingleAuthorList authors={singleAuthorList} />
    </Box>
  );
};

export default Plan;
