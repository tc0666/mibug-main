import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  Divider,
  Box,
  generateUtilityClasses, Theme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const classes = generateUtilityClasses("FAQAccordion", [
  "root",
  "question",
  "title",
  "accordion",
  "accordionSummary",
  "answer",
  "divider",
  "icon",
]);

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Was bietet mir der Kreditrechner?",
    answer:
    'Welchen Kreditbetrag Sie sich mit Ihrem frei verfügbaren Einkommen leisten können, wie hoch die Monatsrate sein sollte und welche Laufzeit für Sie geeignet ist – diese drei zentralen Fragen beantwortet unser Kreditrechner. Zudem ermittelt er anhand der von Ihnen eingegebenen Daten, wie hoch der Zinsaufwand und die Gesamtkosten für den Kredit sein können. Beachten Sie jedoch, dass es sich dabei um Beispielrechnungen handelt. Denn die Angaben zu Ihrer Person ergänzen Sie anschließend im Online-Antrag, um konkrete Kreditangebote zu erhalten',
  },
  {
    question: "Woraus setzen sich die Kreditkosten zusammen?",
    answer:
    'Sie geben den Nettokreditbetrag, die Laufzeit und den effektiven Jahreszins ein und der Rechner ermittelt daraus die Monatsrate, den Zinsaufwand sowie die Gesamtkosten. Die Monatsrate besteht aus Zins- und Tilgungsanteil. Nach Abschluss eines Kredits erhalten Sie vom Kreditgeber einen detaillierten Tilgungsplan, dem Sie genau entnehmen können, wie viel Sie monatlich tilgen und wie hoch dabei der Zinsaufwand ist. Welcher Zinssatz für Ihr Darlehen angeboten wird, bestimmen unter anderem diese Faktoren:'
  },
  {
    question: "Was ist der Unterschied zwischen Sollzins und Effektivzins?\n",
    answer:
    'Der effektive Jahreszins beinhaltet die jährlichen Gesamtkosten für einen Kredit. Daher eignet sich dieser Wert für den Vergleich verschiedener Kreditangebote. Im Gegensatz zum Sollzins deckt der Effektivzins nicht nur die reine Verzinsung durch den Kreditgeber ab. Denn darüber hinaus werden auch weitere preisbestimmende Faktoren wie die Laufzeit oder die Verrechnung der Monatsrate mit Ihrer Restschuld berücksichtigt.'
  },
  {
    question: "Kann ich den Kreditrechner kostenlos und ohne Anmeldung nutzen?",
    answer:
    'Ja. Sie nutzen unseren Kreditrechner kostenlos, ohne Anmeldung und unverbindlich. Kreditbetrag, Laufzeit und effektiver Jahreszins können dabei beliebig verändert werden, um so viele Beispielrechnung zu erhalten wie Sie möchten. Zudem ist die Nutzung per Smartphone, Laptop oder Tablet jederzeit möglich.',
  },
  {
    question: "Hat der Kreditrechner Einfluss auf meine SCHUFA?\n",
    answer:
    'Bei mibug können Sie Ihren Kredit neutral berechnen, ohne negative Folgen für den SCHUFA-Score befürchten zu müssen. Wenn Verbraucher über unser Portal online Kredite berechnen, wird zunächst nur eine Konditionenanfrage gestellt. Erst bei konkretem Interesse bzw. Einreichung des unterschriebenem Kreditvertrags, kommt es zur Kreditanfrage. Erst dann können Informationen zum Antragsteller bei der SCHUFA eingeholt werden.'
  },
  {
    question: "Wie kann ich die Zinsen für einen Kredit berechnen?",
    answer:
    'Um die Zinsen und die Kosten für Ihren Wunschkredit zu berechnen, nutzen Sie einfach unseren kostenlosen Kreditrechner. Geben Sie einfach Ihren gewünschten Kreditbetrag, eine passende Laufzeit sowie einen möglichen effektiven Jahreszins ein und der Rechner ermittelt die Zinsen sowie die Gesamtkosten des Kredits. Außerdem können Sie so auch die monatliche Rate beim Kredit berechnen.'
  },
  {
    question: "Wie kann mir der Kreditrechner helfen?",
    answer:
    'Ein Kreditrechner hilft Ihnen, das optimale Verhältnis zwischen Kreditbetrag, Laufzeit und monatlicher Rate zu finden. So stellen Sie sicher, dass Sie sich nicht überschulden und den Kredit effizient zurückzahlen. Er hilft Ihnen, die langfristigen Kosten und die Auswirkungen auf Ihre Finanzen zu überblicken.'
  },
];
const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "30px 0"
  },
  [`& .${classes.title}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "16px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "8px ",
    },
  },
  [`& .${classes.divider}`]: {
    borderColor: "#BEBFBD",
  },
  [`& .${classes.accordion}`]: {
    background: 'none',
  },
  [`& .${classes.accordionSummary}`]: {
    padding: 0,
    margin: 0,
    svg: {
      color: theme.palette.primary.main,
      fill: theme.palette.primary.main,
    }
  },
  [`& .${classes.question}`]: {
    fontSize: "20px",
    lineHeight: 1.6,
    fontWeight: 500,
    margin: 0,
    color: theme.palette.primary.main,
    cursor: "pointer",
    padding: "4px 40px 4px 0",
    fontStyle: "normal",
    [theme.breakpoints.down(900)]: {
      fontSize: "18px",
    }
  },
  [`& .${classes.answer}`]: {
    fontSize: "16px",
    lineHeight: 1.43,
    fontWeight: "300",
    color: "#172507",
    marginBottom: 0,
    fontStyle: "normal",
    paddingBottom: "20px",
  },
});

const FAQAccordion: React.FC = () => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>
        Häufige Fragen zum Sofortkredit
      </Typography>
      {faqItems.map((item, index) => (
        <Box key={index}>
          <Accordion
            elevation={0}
            expanded={expanded === index}
            onChange={handleChange(index)}
            className={classes.accordion}
          >
            <AccordionSummary className={classes.accordionSummary} expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.question}>{item.question}</Typography>
            </AccordionSummary>
            <Typography className={classes.answer}>{item.answer}</Typography>
          </Accordion>
          <Divider className={classes.divider} />
        </Box>
      ))}
    </Box>
  );
};

export default FAQAccordion;
