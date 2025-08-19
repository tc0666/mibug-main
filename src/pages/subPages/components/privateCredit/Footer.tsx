import React from "react";
import {Box, Typography, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import SingleAuthorList, {SingleAuthorListClasses} from "../SingleAuthorList";
import dugan from "../../../../icons/credit/dugan.png";
import logo from "../../../../icons/credit/logo.svg";
import kreditportal from "../../../../icons/credit/kreditportal.png";
import { Button } from "../../../../components/Button";

const classes = generateUtilityClasses("Footer", [
  "root",
  "wrap",
  "description",
  "title",
  "content",
  "image",
]);


const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "0 0 60px 0",
    [theme.breakpoints.down(950)]: {
      padding: 0,
    },
  },
  [`& .${classes.content}`]: {
    flex: "0 0 50%",
    [theme.breakpoints.down(950)]: {
      flex: 1,
      marginBottom: "24px",
    },
  },
  [`& .${classes.image}`]: {
    flex: "0 0 50%",
    maxWidth: "50%",
    [theme.breakpoints.down(950)]: {
      flex: 1,
      maxWidth: "100%",
    },
  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "48px 0",
    justifyContent: "space-between",
    [theme.breakpoints.down(950)]: {
      flexWrap: "wrap",
      flexDirection: "column",
    },
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
    marginBottom: '20px',
  },
  [`& .${SingleAuthorListClasses.root}`]: {
    marginLeft: "0px !important",
  },
});

const singleAuthorList = [
  {
    name: "Stefanie Willheim",
    role: "Geschrieben von",
    title: "Spezialist für Ratenkredite und Bankenprodukte",
    description:
    'Quang-Dung Ta, ein erfahrener Bankkaufmann und Senior Key Account Manager bei mibugcredit, arbeitet seit 2016 in der' +
      ' Finanzbranche. Mit Spezialisierung auf Kreditwesen und Finanzprodukte verfügt er über tiefgehende Kenntnisse in Finanzthemen. Seine Zusatzausbildung bei mibugcredit im Bereich Ratenkredite qualifiziert ihn, praxisrelevante Finanzinhalte zu vermitteln. Sein Ziel ist es, komplexe Finanzthemen verständlich zu machen und Lesern bei Entscheidungen zu unterstützen.',
    image: dugan,
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

const Footer = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <SingleAuthorList authors={singleAuthorList} />
      <Box className={classes.wrap}>
        <Box className={classes.content}>
          <Typography className={classes.title}>
            Warum mibugcredit für Ihren Privatkredit?
          </Typography>
          <Typography className={classes.description}>
            Mit mibugcredit können Sie schnell und einfach günstige Privatkredite von verschiedenen Banken online vergleichen. So finden Sie genau das Angebot, das Ihren Wünschen entspricht. Mit unserem Online-Antragsprozess können Sie Ihren Privatkredit in wenigen Minuten abschließen. So profitieren Sie von einer schnellen Kreditauszahlung – ganz ohne Papierkram.
          </Typography>
          <Button active={true}>
            Jetzt Privatkredite vergleichen
          </Button>
        </Box>
        <Box className={classes.image}>
          <Box
            component="img"
            src={kreditportal}
            alt="kreditportal"
            maxWidth="100%"
          />
        </Box>
      </Box>

    </Box>
  );
};

export default Footer;
