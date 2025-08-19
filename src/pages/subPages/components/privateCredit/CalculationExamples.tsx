import React from 'react';
import { Box, Typography, generateUtilityClasses, Theme } from '@mui/material';
import BenefitsSection from "../BenefitsSection";
import clock from "../../../../icons/clock.svg";
import report from "../../../../icons/report.svg";

const classes = generateUtilityClasses('CalculationExamples', [
  'root',
  'benefit',
  'sectionTitle',
  'checklist',
  'checklistItem',
  'checklistIcon',
  'checklistText',
  'guaranteeTitle',
  'guaranteeText',
  'guaranteeWrap',
  'guaranteeIcon',
  'sectionWrap',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.sectionWrap}`]: {
    margin: '24px 0 40px 0'
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "20px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.checklist}`]: {
    padding: "40px",
    boxShadow: "0px 3px 8px 0px #2C322740",
    marginBottom: "60px",
  },
  [`& .${classes.checklistItem}`]: {
    display: "flex",
    alignItems: "center",
  },
  [`& .${classes.guaranteeWrap}`]: {
    display: "flex",
    alignItems: "center",
  },
  [`& .${classes.benefit}`]: {
    margin: '24px 0 40px 0'
  },
  [`& .${classes.guaranteeIcon}`]: {
    width: "150px",
    height: "150px",
  },
  [`& .${classes.checklistText}`]: {
    fontSize: "14px",
    color: "#172507",
    span: {
      fontWeight: 500,
      color: theme.palette.primary.main,
      cursor: "pointer",
    }
  },
});

const benefits = [
  {
    icon: clock,
    title: "Privatdarlehen sind günstiger als der Dispo",
    description:
    'Grundsätzlich ist ein Privatkredit immer dann sinnvoll, wenn Sie ein günstiges Angebot für eine Anschaffung gefunden haben oder sich in einer finanziellen Notlage befinden. Der große Vorteil eines Privatkredits ist, dass Sie nicht auf den teuren Dispokredit zurückgreifen müssen. Denn die Zinsen für einen Dispokredit liegen nicht selten im hohen zweistelligen Bereich. Wer sich also günstig zusätzlichen finanziellen Spielraum verschaffen möchte, ist mit einem Privatkredit zu guten Konditionen besser beraten.'
  },
  {
    icon: report,
    title: "Privatkredit statt 0-Prozent-Finanzierung",
    description:
    'Eine 0-Prozent-Finanzierung bedeutet nicht unbedingt, dass das Angebot tatsächlich günstiger ist als ein händlerunabhängiger Privatkredit. Bei Händlerfinanzierungen müssen Sie häufig versteckte Kosten in Form von Bearbeitungsgebühren oder einer obligatorischen Restschuldversicherung in Kauf nehmen. Oft wird auch der Kaufpreis der Ware von vornherein höher angesetzt, wenn es sich um eine 0-Prozent-Finanzierung handelt. Zudem kann die Finanzierung in der Regel nicht vorzeitig abgelöst werden. Bei einem Privatkredit ist dies hingegen möglich.'
  },
];

const CalculationExamples = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.sectionWrap}>
        <Typography className={classes.sectionTitle}>
          Zinsen und Privatkredit: Worauf Sie achten sollten
        </Typography>
        <Typography className={classes.checklistText}>
          Die <span>Zinsen eines Privatkredits</span> bestimmen maßgeblich die Gesamtkosten Ihrer Finanzierung.
          Faktoren wie die gewählte Kreditsumme, die Laufzeit und Ihre persönliche Bonität beeinflussen die Konditionen.
          Auch der effektive Jahreszins, der alle Kosten einschließt, ist entscheidend für den Vergleich.
          Trotz gestiegener <span>Leitzinsen</span> können Privatkredite immer noch attraktive Finanzierungsoptionen sein.
          Wer Angebote sorgfältig prüft, findet oft vorteilhafte Zinsen, die sich flexibel an das eigene Budget anpassen lassen.
        </Typography>
      </Box>


      <Box className={classes.sectionWrap}>
        <BenefitsSection
          benefits={benefits}
          title="Privatkredit statt Dispo-Nutzung oder 0 %-Finanzierung"
          className={classes.benefit}
        />
      </Box>
    </Box>
  );
};

export default CalculationExamples;
