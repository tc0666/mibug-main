import React, {useState} from "react";
import {Accordion, AccordionSummary, AccordionDetails, Typography, Container, Theme} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";

const classes = generateUtilityClasses("FAQSection", [
  "root",
  "answer",
  "accordion",
  "AccordionSummary",
  "AccordionDetails",
  "Accordion",
  "title",
  "question"
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    marginTop: "60px",
    [`& .Mui-expanded`]: {
      margin: 0
    },
  },
  [`& .${classes.title}`]: {
    fontFamily: "Roboto,-apple-system,BlinkMacSystemFont,sans-serif",
    fontWeight: 700,
    fontSize: "1.75rem",
    lineHeight: "2.5rem",
    marginBottom: "30px",
    textAlign: "start",
    letterSpacing: 0,
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.AccordionSummary}`]: {
    margin: 0,
    padding: "0 16px 0 0 !important",
    svg: {
      color: theme.palette.primary.main,
      fill: theme.palette.primary.main,
    }
  },
  [`& .${classes.accordion}`]: {
    margin: 0,
    padding: "0 !important",
  },
  [`& .${classes.AccordionDetails}`]: {
    margin: 0,
    padding: "0 16px 16px 0 !important"
  },
  [`& .${classes.answer}`]: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "1.5rem",
    padding: "0 !important",
    color: "#6E6E6E",
  },
  [`& .${classes.Accordion}`]: {
    margin: "0!important",
    borderBottom: "1px solid #e0e0e0",
    background: 'transparent',
    borderRadius: 0,
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  [`& .${classes.question}`]: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 500,
    fontSize: "1rem",
    lineHeight: "1.50rem",
    letterSpacing: "0.01rem",
    color: theme.palette.primary.main,
  },
});


const FAQSection = ({ faqs }: { faqs: { question: string; answer: string }[] }) => {
const [expanded, setExpanded] = useState<number | false>(false);

const handleChange = (panel: number) => (_: any, isExpanded: boolean) => {
  setExpanded(isExpanded ? panel : false);
};

return (
  <Container maxWidth="md" className={classes.root} sx={styles}>
    <Typography
      variant="h2"
      className={classes.title}
    >
      Die häufigsten Fragen zum Kreditvergleich
    </Typography>
    {faqs.map((faq, index) => (
      <Accordion
        key={index}
         elevation={0}
         className={classes.accordion}
         expanded={expanded === index}
         onChange={handleChange(index)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${index}-content`}
          id={`panel${index}-header`}
          className={classes.AccordionSummary}
        >
          <Typography
            className={classes.question}
          >
            {faq.question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.AccordionDetails}>
          <Typography
            className={classes.answer}
          >
            {faq.answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
  </Container>
)};

export default FAQSection;
