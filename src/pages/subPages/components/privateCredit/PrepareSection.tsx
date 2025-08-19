import React from "react";
import {Typography, Box, Theme, IconButton, useMediaQuery} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import {SliderSectionClasses} from "../SliderSection";
import CheckIcon from "@mui/icons-material/Check";
import SlickSlider from "../SlickSlider";

const classes = generateUtilityClasses("PrepareSection", [
  "root",
  "sectionTitle",
  "title",
  "content",
  "card",
  "slider",
  "cardContainer",
  "titleWrap",
  "description",
  'checklistItem',
  'checklistIcon',
  'checklistText',
]);


const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "0 0 60px 0",
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#172507",
    lineHeight: "40px",
    marginBottom: "24px",
    fontWeight: 400,
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.slider}`]: {
    height: "max-content",
    border: "1px solid #e8e8e8",
    padding: "22px",
    boxSizing: "border-box",
  },
  [`& .${classes.title}`]: {
    fontSize: "20px",
    color: "#172507",
    lineHeight: "28px",
    marginBottom: "24px",
    fontWeight: 700,
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.cardContainer}`]: {
    display: "flex",
    backgroundColor: "#fff",
    width: "calc(33.33% - 12px)",
    padding: "20px 40px",
    border: "1px solid #E8E8E8",
    marginRight: "16px",
    flexDirection: "column",
    ":last-child": {
      marginRight: 0,
    }
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
  [`& .${classes.card}`]: {
    display: "flex",
    marginTop: "20px",
  },
  [`& .${classes.titleWrap}`]: {
    display: "flex",
    alignItems: "center",
    marginBottom: "16px",
    [theme.breakpoints.down(900)]: {
      marginBottom: 0
    },
  },
  [`& .${classes.description}`]: {
    fontSize: "16px",
    color: "#172507",
    fontWeight: 400,
    lineHeight: "24px",
    span: {
      color: theme.palette.primary.main,
      cursor: "pointer",
    }
  },
  [`& .${classes.checklistText}`]: {
    fontSize: "14px",
    color: "#172507",
    paddingLeft: "2px",
    span: {
      color: theme.palette.primary.main,
    }
  },
  [`& .${classes.checklistItem}`]: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
    marginBottom: "8px",
  },
  [`& .${classes.checklistIcon}`]: {
    color: theme.palette.primary.main,
    svg: {
      fontSize: "18px",
    },
    [theme.breakpoints.down(900)]: {
      padding: 0,
    },
  },
});

const steps = [
  {
    title: "Haushaltsrechnung aufstellen",
    description:
    'Bei der Kreditvergabe wird neben der <span>Bonität</span>auch das verfügbare Einkommen berücksichtigt. In unserem Online-Antrag geben Sie daher auch Ihre regelmäßigen Einnahmen und Ausgaben an. Anhand dieser <span>Haushaltsrechnung</span>ermitteln wir Privatkredite, die genau zu Ihrer finanziellen Situation passen. So werden Ihnen nur die Kredite angezeigt, die Sie sich auch leisten können, nachdem Ihre Einnahmen und Ausgaben abgeglichen wurden.'
  },
  {
    title: "Voraussetzungen für den Privatkredit",
    items: [
      'Volljährigkeit',
      'Wohnsitz in Deutschland',
      'Bankkonto in Deutschland',
      'Regelmäßiges Einkommen',
      'Gute Bonität',
    ],
  },
  {
    title: "Unterlagen für den Privatkredit",
    items: [
      'Kontoauszüge der letzten vier Wochen oder digitaler Kontoblick',
      'Kopie des gültigen Personalausweises oder Reisepasses',
      'Gegebenenfalls Meldebescheinigung',
      'Lohn- oder Gehaltsabrechnungen der letzten 2–5 Monate',
      'Nachweise über zusätzliche Einnahmen (z. B. Kindergeld, Mieteinnahmen, Unterhalt)',
    ],
  },
]


const PrepareSection = () => {
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.sectionTitle}>
        Privatkredit optimal vorbereiten
      </Typography>
      <Typography variant="body1" className={classes.content}>
        Ein Privatkredit erfordert eine gute Vorbereitung, um den Antrag reibungslos zu gestalten.
        Beginnen Sie mit einer Haushaltsrechnung, um Ihre finanzielle Situation zu überblicken.
        Prüfen Sie, ob Sie die Voraussetzungen wie Bonität und Einkommen erfüllen.
        Schließlich sollten alle notwendigen Unterlagen wie Kontoauszüge und Gehaltsnachweise vollständig vorliegen.
        Mit diesen drei Schritten legen Sie den Grundstein für eine erfolgreiche Kreditaufnahme.
      </Typography>

        {isMobileOrTablet ? (
          <SlickSlider slidesToShow={1} autoplay={false}>
            {steps.map((step) => (
              <Box key={step.title} className={classes.slider}>
                <Box className={classes.titleWrap}>
                  <Typography className={classes.title}>
                    {step.title}
                  </Typography>
                </Box>

                {step.description && (
                  <Typography className={classes.description} dangerouslySetInnerHTML={{__html: step.description}}/>
                )}

                {step.items && step.items.map((item, index) => (
                  <Box key={item} className={classes.checklistItem}>
                    <IconButton className={classes.checklistIcon}>
                      <CheckIcon/>
                    </IconButton>
                    <Typography className={classes.checklistText} dangerouslySetInnerHTML={{__html: item}}/>
                  </Box>
                ))}
              </Box>
            ))}
          </SlickSlider>
          ) : (
          <Box className={classes.card}>
          {steps.map((step) => (
            <Box className={classes.cardContainer} key={step.title}>
              <Box className={classes.titleWrap}>
                <Typography className={classes.title}>
                  {step.title}
                </Typography>
              </Box>

              {step.description && (
                <Typography className={classes.description} dangerouslySetInnerHTML={{__html: step.description}}/>
              )}

              {step.items && step.items.map((item, index) => (
                <Box key={item} className={classes.checklistItem}>
                  <IconButton className={classes.checklistIcon}>
                    <CheckIcon/>
                  </IconButton>
                  <Typography className={classes.checklistText} dangerouslySetInnerHTML={{__html: item}}/>
                </Box>
              ))}
            </Box>
            ))
          }
          </Box>
        )}
    </Box>
  );
};

export default PrepareSection;
