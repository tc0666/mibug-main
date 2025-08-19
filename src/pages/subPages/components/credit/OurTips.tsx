import React from "react";
import {Box, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import SingleAuthorList, {SingleAuthorListClasses} from "../SingleAuthorList";
import dugan from "../../../../icons/credit/dugan.png";
import logo from "../../../../icons/credit/logo.svg";
import BenefitsSection from "../BenefitsSection";

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
  },
  [`& .${classes.content}`]: {
    flex: "0 0 50%"
  },
  [`& .${classes.image}`]: {
    flex: "0 0 50%",
    maxWidth: "50%",
  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    margin: "48px 0",
    justifyContent: "space-between",
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
    name: "Quang Dung Ta",
    role: "Geschrieben von",
    title: "Spezialist für Ratenkredite und Bankenprodukte",
    description:
'Quang-Dung Ta, ein erfahrener Bankkaufmann und Senior Key Account Manager bei mibugcredit, arbeitet seit 2016 in der' +
      ' Finanzbranche. Mit Spezialisierung auf Kreditwesen und Finanzprodukte verfügt er über tiefgehende Kenntnisse' +
      ' in Finanzthemen. Seine Zusatzausbildung bei mibugcredit im Bereich Ratenkredite qualifiziert ihn, praxisrelevante Finanzinhalte zu vermitteln. Sein Ziel ist es, komplexe Finanzthemen verständlich zu machen und Lesern bei Entscheidungen zu unterstützen.',
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

const benefits = [
  {
    title: "Tipp 1: Den Kredit zu zweit aufnehmen",
    description:
    'Wird der <a href="/kredit/annahmewahrscheinlichkeit-zweiter-kreditnehmer/" tabIndex="0">Kreditantrag von zwei Personen unterzeichnet</a>, erhöht sich die Wahrscheinlichkeit, eine Zusage zu bekommen. Der Grund dafür ist, dass sich das monatlich verfügbare Einkommen durch Hinzunahme einer zweiten Person erhöht. So verbessern sich die Kreditvoraussetzungen, denn für den Kreditgeber sinkt das Ausfallrisiko. Oft gewähren unsere Banken und Partner dadurch auch günstigere Kreditkonditionen in Form von niedrigeren Zinsen.'
  },
  {
    title: "Tipp 2: Konkreten Verwendungszweck nutzen",
    description:
    'Versichern Sie dem Kreditgeber, dass Sie die beantragte Summe nur für einen vertraglich vereinbarten Zweck verwenden, können Sie damit Kosten sparen. Ein Fahrzeug oder eine Immobilie kann der Bank als Gegenwert dienen. Geben Sie daher den genauen <a href="/kredit/wofuer-kreditverwendung" tabIndex="-1">Verwendungszweck</a> an, wenn Sie Ihren Kredit beispielsweise für die Finanzierung eines neuen Fahrzeugs oder für die Modernisierung der eigenen vier Wände nutzen.'
  },
  {
    title: "Tipp 3: Sondertilgungsrecht beachten",
    description:
    '<a href="/kredit/sondertilgung" tabIndex="-1">Sondertilgungen</a> sind zusätzliche Zahlungen, die Sie während der Kreditlaufzeit tätigen können. Voraussetzung hierfür ist jedoch, dass ein solches Recht vertraglich festgeschrieben ist. Viele unserer Kreditgeber bieten diese Zusatzoption kostenlos an, bei manchen Banken muss eine <a href="/kredit/vorfaelligkeitsentschaedigung" tabIndex="-1">Vorfälligkeitsentschädigung</a> gezahlt werden. Da diese jedoch per Gesetz begrenzt ist, lohnen sich auch in diesem Fall die Sondertilgungen. Denn Sie verkürzen die Laufzeit, was für geringere Gesamtkosten sorgt.'
  },
  {
    title: "Tipp 4: Notwendigkeit der Restschuldversicherung prüfen",
    description:
    'Oft werben Banken mit <a href="/kredit/restschuldversicherung/" tabindex="-1">Restschuldversicherungen</a>, die für Kredite abgeschlossen werden können. Es handelt sich jedoch um eine freiwillige Leistung, die nicht zwingend genutzt werden muss. Da solche Policen zusätzliche Kosten verursachen, sollten Sie deren Notwendigkeit vorab prüfen. Insbesondere bei geringen Kreditsummen bzw. kurzen Laufzeiten ist eine Restschuldversicherung eher weniger sinnvoll. Bestimmte Berufsgruppen (z. B. Beamte) bieten dem Kreditgeber ohnehin genug Sicherheit für die Rückzahlung und können sich eine solche Zusatzversicherung ebenfalls sparen.'
  },
];


const OurTips = () => {
  return (
    <Box className={classes.root} sx={styles}>

      <BenefitsSection
        benefits={benefits}
        title="Tipps für eine mögliche Senkung der Kreditkosten"
      />
      <SingleAuthorList authors={singleAuthorList} />
    </Box>
  );
};

export default OurTips;
