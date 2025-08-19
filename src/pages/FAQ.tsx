import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { generateUtilityClasses, Theme } from "@mui/material";
import AccordionItem, {AccordionItemClasses} from "../components/AccordionItem";

const classes = generateUtilityClasses("FAQ", [
  "root",
  "header",
  "content",
  "button",
  "container",
  "box",
  'faq'
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    backgroundColor: theme.palette.primary.main,
    clipPath: "polygon(50% 0%, 100% 0, 100% 90%, 81% 83%, 63% 91%, 41% 83%, 23% 92%, 10% 87%, 0 100%, 0 0)",
    padding: "6rem 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  [`& .${classes.header}`]: {
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: "1rem"
  },
  [`& .${classes.content}`]: {
    color: "#fff",
    textAlign: "center",
    marginTop: "1rem"
  },
  [`& .${classes.button}`]: {
    marginTop: "2rem",
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
    padding: "0.5rem 2rem",
    textTransform: "none",
    borderRadius: "4px",
    '&:hover': {
      backgroundColor: "#f5f5f5"
    }
  },
  [`& .${classes.container}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  [`& .${AccordionItemClasses.question}`]: {
    color: "#3E3E3E",
    fontWeight: 500,
  },
  [`& .${classes.faq}`]: {
    backgroundColor: "red !important",
  },
  [`& .${classes.box}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4rem 0"
  }
});

const faqItems = [
  {
    "question": "Welche Voraussetzungen muss ich für einen Kredit erfüllen?",
    "answer": "Die Annahmekriterien sind nicht immer klar definiert. Fakt ist, dass ein negativer Schufa-Eintrag nicht gleich zu einer Ablehnung bei einem Kreditantrag führen muss. Es müssen verschiedene Faktoren ausgewertet werden, um einen passenden Kredit für dich zu finden."
  },
  {
    "question": "Für welchen Zweck darf ich den Kredit verwenden?",
    "answer": "Es gibt bei uns keinen fixen Verwendungszweck für deinen Kreditbetrag. Du kannst das Geld zum Tilgen von Schulden oder für Anschaffungen wie z.B. ein Auto verwenden. Immobilien-Kredite sind von diesem freien Verwendungszweck ausgenommen."
  },
  {
    "question": "Mit welchen Kosten muss ich rechnen?",
    "answer": "Die Anfrage und auch das Aussuchen eines Kredites sind komplett kostenlos!"
  },
  {
    "question": "Wie lange dauert die Bearbeitung meines Antrags?",
    "answer": "Die Bearbeitungszeit variiert je nach Kreditanbieter. Normalerweise bekommst du innerhalb weniger Stunden bis maximal 48 Stunden eine Rückmeldung."
  },
  {
    "question": "Wie funktioniert die Rückzahlung?",
    "answer": "Die Rückzahlung erfolgt in monatlichen Raten, deren Höhe von der gewählten Laufzeit und dem Kreditbetrag abhängt. Wir bieten flexible Laufzeiten und Rückzahlungsmodelle an."
  },
  {
    "question": "Kann ich den Kredit vorzeitig zurückzahlen?",
    "answer": "Ja, eine vorzeitige Rückzahlung ist möglich. In vielen Fällen fallen keine zusätzlichen Kosten an, aber dies hängt vom jeweiligen Kreditvertrag ab."
  },
  {
    "question": "Was passiert, wenn ich eine Rate nicht zahlen kann?",
    "answer": "Sollte es zu Zahlungsschwierigkeiten kommen, ist es wichtig, uns sofort zu kontaktieren. Wir können gemeinsam eine Lösung finden, um die Situation zu klären und eine passende Vereinbarung zu treffen."
  },
  {
    "question": "Welche Unterlagen benötige ich für einen Kreditantrag?",
    "answer": "In der Regel benötigen wir Einkommensnachweise, einen gültigen Personalausweis und eventuell weitere Dokumente, je nach Art des Kredits. Details erfährst du während des Antragsprozesses."
  }
];


export const FAQ = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/antrag')
  };

  return (
    <>
      <Box sx={styles} className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
          <Typography className={classes.header} variant="h4">
            Ahhhh!?
          </Typography>
          <Typography className={classes.header} variant="h3">
            So viele Fragen!
          </Typography>
          <Typography className={classes.content} variant="body1">
            Eine Kreditvergabe muss nicht kompliziert sein! Wir haben alle wichtigen Fragen auf dieser Seite für dich zusammengestellt.
          </Typography>
          <Typography className={classes.content} variant="body1">
            Sollte für dich dennoch etwas unklar sein, kannst du dich jederzeit an uns wenden.
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button className={classes.button} onClick={handleNavigate}>
              Jetzt direkt beantragen
            </Button>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="md" className={classes.container}>
        <Box my={4} className={classes.box}>
          <Typography className={classes.header} variant="h4" component="h1">
            Die wichtigsten Antworten für dich
          </Typography>
          <Typography className={classes.content} paragraph>
            Solltest du noch weitere Fragen haben, stehen dir unsere Kreditberater jederzeit zur Verfügung.
          </Typography>
          <AccordionItem accordionItems={faqItems} className={classes.faq} sx={styles} />
        </Box>
      </Container>
    </>
  );
};
