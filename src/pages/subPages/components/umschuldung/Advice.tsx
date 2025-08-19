import React from "react";
import {Typography, Box, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import Alexander from "../../../../icons/credit/Alexander.jpg";
import ProfileCard from "../ProfileCard";
import {SliderSectionClasses} from "../SliderSection";
import Italy from "../../../../icons/countries/Italy.svg";
import poland from "../../../../icons/countries/poland.svg";
import romania from "../../../../icons/countries/romania.svg";
import russia from "../../../../icons/countries/russia.svg";
import turkey from "../../../../icons/countries/turkey.svg";
import uk from "../../../../icons/countries/uk.svg";
import ukraine from "../../../../icons/countries/ukraine.svg";
import phone from "../../../../icons/phone.svg";
import desktop from "../../../../icons/desktop.svg";
import atm from "../../../../icons/credit/atm.png";
import phoneSign from "../../../../icons/phoneSign.svg";
import SofortkreditSteps from "../SofortkreditSteps";
import CustomerReviews from "../privateCredit/CustomerReviews";


const profileCard = {
  content:
  'Es ist davon abzuraten, schnell vergängliche Dinge wie Geschenke oder Feiern zu finanzieren. Wer die Schulden nicht spätestens im Januar komplett zurückzahlen kann, sollte gänzlich auf eine Finanzierung verzichten. Wer länger braucht und die Festtagsausgaben dennoch finanzieren möchte, sollte die Finanzierungskosten genau prüfen. Je länger für die Rückzahlung gebraucht wird, desto eher sollte Abstand etwa von Dispokrediten, Kreditkarten, Buy now, pay later oder auch Ratenzahlungen genommen werden. Sie sind in der Regel nur für eine kurzzeitige Zwischenfinanzierung geeignet. Wer mehrere Monate für die Rückzahlung der Festtagsausgaben braucht, ist häufig mit einem Ratenkredit besser bedient.',
  name: "Giovanni Alic",
  role: "CEO der MIBUG UG & Co",
  avatar: Alexander,
};

const classes = generateUtilityClasses("Advice", [
  "root",
  "title",
  "content",
  "wrap",
  "atm",
  "section",
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
  [`& .${classes.section}`]: {
    margin: "30px 0",
  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    flexDirection: "row",
    margin: "40px 0",
    gap: "10px",
  },
  [`& .${classes.sectionHeader}`]: {
    fontSize: "24px",
    color: "#172507",
    lineHeight: "32px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  [`& .${classes.atm}`]: {
    flex: 2,
    paddingLeft: "40px",
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

const partnerIcons = [
  { src: turkey, alt: "Türkçe" },
  { src: poland, alt: "Polski" },
  { src: Italy, alt: "Italiano" },
  { src: uk, alt: "English" },
  { src: russia, alt: "Русский" },
  { src: romania, alt: "Românesc" },
  { src: ukraine, alt: "Українська" },
];

const sofortkreditSteps = {
  title: "Dann ist eine Umschuldung sinnvoll",
  steps: [
    {
      icon: phone,
      title: "Dispo oder Kreditkarte ausgleichen",
      description:
      'Unabhängig davon, bei welcher Bank Sie Ihr Konto haben, zahlen Sie für einen Dispokredit deutlich höhere' +
        ' Zinsen als für einen klassischen Ratenkredit. Eine Dispo-Umschuldung lohnt sich also immer. Gleiches gilt für Kreditkarten. Hier lohnt sich eine Umschuldung schon bei kleineren Raten. Ist die Kreditkarte beispielsweise mit 1.500 Euro zu einem Zinssatz von 15 Prozent belastet, sparen Sie bei einer Umschuldung zu niedrigen Zinsen bereits nach kurzer Zeit mehrere hundert Euro.',
    },
    {
      icon: desktop,
      title: "Kredit aufstocken",
      description:
      'Eine Umschuldung eignet sich auch, wenn Sie zusätzlich zu Ihrem bestehenden Kredit mehr finanziellen Spielraum benötigen. Die Aufnahme eines neuen Kredits wirkt sich auf die Bonität aus, wodurch es in der Regel schwieriger wird, einen neuen Kredit zu erhalten. Ein Umschuldungskredit ist dann oft die einzige Möglichkeit, eine weitere Finanzierung zu erhalten. Da der neue Kredit in diesem Fall nur den alten ablöst, gilt er nicht als zusätzliches Darlehen. Ziel ist es, Kosten zu sparen und die finanzielle Situation zu verbessern.'
    },
    {
      icon: phoneSign,
      title: "Anzahl bestehender Kredite reduzieren",
      description:
      'Bei der Umschuldung eines Privatkredits haben Sie die Möglichkeit, mehrere bestehende Kredite zu einem einzigen Kredit zusammenzufassen. Der Umschuldungskredit wird also aufgenommen, um die bestehenden Kredite mit einem einzigen Darlehen abzulösen. Künftig zahlen Sie nur noch den Umschuldungskredit zurück. Dadurch erhalten Sie einen deutlich besseren Überblick über Ihre persönliche Einnahmen-Ausgaben- Situation.'
    },
  ]
};


const Advice = () => {

  return (
    <Box className={classes.root} sx={styles}>
      <CustomerReviews
        title="Umschuldungsberatung auf Deutsch und weiteren Sprachen"
        partnerIcon={partnerIcons}
      />
      <Typography className={classes.title}>
        Was ist eine Umschuldung?
      </Typography>
      <Typography className={classes.content}>
        Eine Umschuldung bedeutet, dass Sie einen bestehenden Kredit durch einen neuen, günstigeren ablösen. Ziel ist es, durch niedrigere Zinsen oder günstigere
        Raten Ihre Kreditkosten zu senken und eventuell mehrere laufende Darlehen zu einem Kredit zusammenzufassen. Dabei nehmen Sie einen neuen Kredit in Höhe
        der offenen Restschuld auf, um den alten Kredit auf einen Schlag zu tilgen.
      </Typography>
      <ProfileCard
        content={profileCard.content}
        name={profileCard.name}
        role={profileCard.role}
        avatar={profileCard.avatar}
      />
      <Box className={classes.section}>
        <SofortkreditSteps
          title={sofortkreditSteps.title}
          steps={sofortkreditSteps.steps}
        />
      </Box>

      <Box className={classes.section}>
        <Typography className={classes.title}>
          Video: Dispo – So werden Sie teure Zinsen los
        </Typography>

        <Box className={classes.wrap}>
          <Box flex={1}>
            <img src={atm} alt="atm" width="411px" height="241px"/>
          </Box>
          <Box className={classes.atm}>
            <Typography className={classes.content}>
              Es passiert oft schneller, als man denkt: ein paar Kartenzahlungen, eine
              unerwartete Rechnung – und plötzlich ist das Konto im Minus. Ein
              kurzfristiger <span>Überziehungskredit</span>, auch Dispo genannt, kann in solchen
              Momenten praktisch sein. Für kurze Zeit ist er meist unproblematisch, doch
              für viele kann der Dispokredit zur <span>Schuldenfalle</span> werden. Hohe Zinssätze
              machen die Rückzahlung teuer und erschweren es, das Konto wieder
              auszugleichen. Tatsächlich gerät jeder dritte Disponutzer langfristig in
              Schwierigkeiten, das Minus auszugleichen.
            </Typography>
            <Typography className={classes.content}>
              Eine Umschuldung auf einen Ratenkredit mit niedrigeren Zinsen ist oft die
              bessere Lösung. So lassen sich nicht nur die Kosten senken, sondern auch
              die Rückzahlung klar planen, da die monatlichen Raten festgelegt sind und
              Sie dadurch mehr Übersicht über Ihre Finanzen gewinnen.
            </Typography>
          </Box>
        </Box>


        <Typography className={classes.title}>
          Aktuelle Umschuldungszinsen 11/24
        </Typography>
        <Box>
          <Typography className={classes.content}>
            Das aktuelle <span>Zinsniveau für Umschuldungen</span> bleibt im Jahr 2024 hoch, allerdings gibt es seit kurzem Anzeichen für eine Entlastung. Die Europäische Zentralbank
            (EZB) hat den <span>Leitzins</span>  im Oktober auf 3,25 % gesenkt, was künftig zu günstigeren Konditionen führen könnte. Laut Bundesbankdaten lag der Durchschnittszins
            für Umschuldungen im Jahr 2022 meist noch zwischen 4,08 % und 5,37 %, wohingegen die Werte im Jahr 2023 auf 6,01 % bis 7,29 % anstiegen. Dies zeigt, wie
            sich die anhaltend hohe Inflation und die geldpolitischen Maßnahmen auf die Kreditkosten auswirkten. Durch die Senkung des Leitzinses ist es möglich, dass
            Umschuldungskredite wieder zu günstigeren Konditionen verfügbar werden. Dennoch bieten Online-Kreditangebote oft schon jetzt die Möglichkeit, durch einen
            Vergleich attraktive Zinsen zu finden, die unter dem Marktdurchschnitt liegen. Ein Online-Vergleich lohnt sich daher besonders, um von den besten verfügbaren
            Angeboten zu profitieren und das Sparpotenzial in diesem Zinsumfeld zu maximieren
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Advice;
