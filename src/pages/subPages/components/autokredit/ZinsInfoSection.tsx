import React from "react";
import {Typography, Box, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import ProfileCard from "../ProfileCard";
import mariusMueller from "../../../../icons/credit/mariusMueller.png";


const profileCard = {
  content:
    'Viele Kunden sind überrascht zu erfahren, dass bei speziellen Fahrzeugfinanzierungen der Fahrzeugbrief nicht zwingend an die Bank übergeben werden muss. Unsere attraktiven Angebote bieten nicht nur oft bessere Konditionen als herkömmliche Privatkredite, sondern auch hohe Annahmewahrscheinlichkeiten und flexible Lösungen. Diese ermöglichen es Ihnen, die Kontrolle über Ihr Fahrzeug zu behalten. Lassen Sie uns gemeinsam einen Weg finden, der Ihren Traum vom eigenen Auto Wirklichkeit werden lässt, ohne unnötige Einschränkungen.',
  name: "Marius Müller",
  role: "Senior Kreditberater",
  avatar: mariusMueller,
};

const classes = generateUtilityClasses("ZinsSection", [
  "root",
  "title",
  "content",
  "sectionHeader",
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
  [`& .${classes.sectionHeader}`]: {
    fontSize: "24px",
    color: "#172507",
    lineHeight: "32px",
    fontWeight: 700,
    marginBottom: "10px",
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

const ZinsInfoSection = () => {

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>
        Günstige Zinsen durch die Zweckbindung Autokredit
      </Typography>
      <Typography variant="body1" className={classes.content}>
        Ein Autokredit ist ein Kredit für den Kauf oder die Reparatur eines Fahrzeugs. Die Zweckbindung ermöglicht es, dass die Zinsen günstiger sind als bei einem
        Ratenkredit, den man für alles verwenden kann. Das Risiko ist geringer, weil das Auto als Sicherheit dient. Kreditnehmer zahlen deshalb niedrigere monatliche
        Raten und insgesamt günstigere Zinsen.
      </Typography>

      <Typography className={classes.sectionHeader}>
        Aktuelle Zinssituation
      </Typography>
      <Typography variant="body1" className={classes.content}>
        Die Suche nach günstigen Zinsen für einen Autokredit kann sich in der
        aktuellen Marktsituation durchaus lohnen. Die Zinssätze für Autokredite
        unterliegen ständigen Schwankungen, die von verschiedenen
        wirtschaftlichen Faktoren beeinflusst werden. Aktuell bieten viele
        Kreditinstitute trotz des{" "}
        <span>Leitzinses von 3,25 %</span>{" "}
        aufgrund des Wettbewerbs attraktive Konditionen an. Ein Vergleich der
        aktuellen Zinsangebote ist daher unerlässlich, um die günstigsten
        Konditionen für Ihren Autokredit zu finden.
      </Typography>

      <Typography className={classes.sectionHeader}>
        Strategien zur Sicherung niedriger Zinsen
      </Typography>
      <Typography className={classes.content}>
        Um besonders günstige Zinsen für Ihren Autokredit zu erhalten, gibt es
        verschiedene Strategien. Zunächst einmal ist es wichtig, Ihre eigene
        Kreditwürdigkeit zu optimieren. Eine gute Bonität kann zu deutlich
        niedrigeren Zinssätzen führen. Achten Sie auch auf den richtigen
        Zeitpunkt für die Kreditaufnahme. Die Zinsen für Autokredite können
        saisonalen Schwankungen unterliegen, so dass es sich lohnen kann, den
        Markt über einen längeren Zeitraum zu beobachten. Ein weiterer wichtiger
        Faktor ist die Wahl der richtigen Laufzeit. Längere Laufzeiten senken
        zwar die Raten, aber erhöhen die Gesamtzinsbelastung. Ein ausgewogener
        Vergleich von Laufzeit und Zinssatz ist daher entscheidend.
      </Typography>

      <ProfileCard
        content={profileCard.content}
        name={profileCard.name}
        role={profileCard.role}
        avatar={profileCard.avatar}
      />
    </Box>
  );
};

export default ZinsInfoSection;
