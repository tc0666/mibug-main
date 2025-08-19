import React from "react";
import {Box, Theme, Typography} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import clsx from "clsx";
import Alert from "../../../components/Alert";

const classes = {
  ...generateUtilityClasses("Info", [
    "root",
    "title",
    "infoText",
    "infoDescription",
    "textDescription",
    "info",
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
  },
  [`& .${classes.title}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "24px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.info}`]: {
    backgroundColor: "#F3F4FC",
    padding: "20px",
    borderLeft: "4px solid #4988DF",
    borderRadius: "3px",
    display: "flex",
    alignItems: "start",
    marginTop: "36px",
    svg: {
      fill: "#4988DF",
    }
  },
  [`& .${classes.infoDescription}`]: {
    fontSize: "16px",
    color: "#172507",
    lineHeight: "22px",
    marginBottom: "20px",
    fontWeight: 400,
    marginTop: "8px",
  },
  [`& .${classes.textDescription}`]: {
    fontSize: "14px",
    color: "#172507",
    lineHeight: "22px",
    marginBottom: "20px",
    fontWeight: 400,
  },
  [`& .${classes.infoText}`]: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginLeft: "16px",
  },
});

interface InfoProps {
  className?: string;
}

const Info = ({ className }: InfoProps) => (
  <Box className={clsx(classes.root, className)} sx={styles}>
    <Box>
      <Typography className={classes.title}>
        Ist ein Sofortkredit ohne SCHUFA möglich?
      </Typography>
      <Typography className={classes.textDescription}>
        Bei mäßiger Kreditwürdigkeit suchen einige Kreditnehmer nach einem Sofortkredit trotz SCHUFA-Eintrag. Bei Mibug ist das grundsätzlich möglich, denn ein
        Vermerk bei einer Auskunftei ist nicht automatisch gleichbedeutend mit einer Kreditabsage. Dennoch möchte jeder Kreditgeber vor der Vergabe von einem
        Sofortkredit solide und möglichst genau abschätzen, ob die monatlichen Raten pünktlich und vollständig bezahlt werden. Zu diesem Zweck wird der SCHUFA-
        Score abgefragt. Denn dieser gibt Auskunft über das Zahlungsverhalten von Verbrauchern. Ein Sofortkredit gänzlich ohne Einbezug der SCHUFA ist also nur
        seriös, wenn stattdessen eine andere Auskunftei die Kreditwürdigkeit ermittelt. Ist dies nicht der Fall handelt es sich um ein unseriöses Kreditangebot, das Sie
        nicht abschließen sollten. Sonst drohen zum Beispiel versteckte Kosten oder die unerlaubte Weitergabe Ihrer persönlichen Daten.
      </Typography>
    </Box>

    <Alert title="Hinweis" description="Bei Mibug Credit vergleichen Sie Sofortfinanzierungen sowie alle anderen Darlehen ohne Einfluss auf den SCHUFA-Score. Dieser verändert sich erst, wenn Sie durch die Einreichung von unterschriebenen Unterlagen einen konkreten Sofortkredit beantragen. Dann wird aus der Konditionsanfrage, die beim reinen Vergleich ausgelöst wird, eine Kreditanfrage. Diese wird von der Auskunftei vermerkt und hat somit Auswirkungen auf den SCHUFA-Score." />
  </Box>
);

export default Info;
