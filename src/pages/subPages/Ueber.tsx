import React from 'react';
import {
  Box,
  generateUtilityClasses,
  Theme,
  Typography,
  Container,
  CardMedia,
  CardContent,
  Card,
} from '@mui/material';
import Header from "./components/Header";
import logo from '../../icons/ueber/logo.png'
import group from '../../icons/ueber/group.png'
import deck from '../../icons/ueber/deck.png'
import money from '../../icons/ueber/money.png'
import ColorGreen from '../../icons/ueber/ColorGreen.png'
import ColorGreen2 from '../../icons/ueber/ColorGreen-2.png'
import ColorGreen3 from '../../icons/ueber/ColorGreen-3.png'
import Grid from '@mui/material/Grid2';
import clsx from 'clsx';
import credit from "../../icons/credit/credit.png";
import AccordionItem from "../../components/AccordionItem";
import BenefitsSection, {BenefitsSectionClasses} from "./components/BenefitsSection";

const classes = generateUtilityClasses('Ueber', [
  'root',
  'wrap',
  'contentSection',
  'title',
  'subTitle',
  'imageSection',
  'gridItem',
  'contentBox',
  'title',
  'description',
  'button',
  'list',
  'line',
  'content',
  'sectionTitle',
  'sectionDescription',
  'textWrapper',
  'image',
  'textBlackWrapper',
  'contentDescription',
  'whiteTitle',
  'greenTitle',
  'factsItem',
  'factsTitle',
  'factsDescription',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.title}`]: {
    fontSize: "36px",
    color: "#172507",
    lineHeight: "40px",
    marginBottom: "24px",
    fontWeight: 400,
    span: {
      fontWeight: 600,
      color: "#009933"
    },
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.line}`]: {
    backgroundColor: "#fff",
    position: "absolute",
    top: "40px",
    height: "4px",
    width: "75px",
    display: "block"
  },
  [`& .${classes.subTitle}`]: {
    fontSize: "20px",
    color: "#172507",
    lineHeight: "40px",
    marginBottom: "5px",
    fontWeight: 400,
    textAlign: "start",
  },
  [`& .${classes.factsItem}`]: {
    marginBottom: "30px",
    paddingRight: "30px",
  },
  [`& .${classes.factsTitle}`]: {
    fontSize: "24px",
    color: "#fff",
    lineHeight: "32px",
    marginBottom: "14px",
    fontWeight: 700,
  },
  [`& .${classes.factsDescription}`]: {
    fontSize: "16px",
    color: "#fff",
    lineHeight: "1.43",
    marginBottom: "12px",
    fontWeight: 400,
  },
  [`& .${BenefitsSectionClasses.grid}`]: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  [`& .${BenefitsSectionClasses.gridItem}`]: {
    flex: "unset !important",
    border: "1px solid #E8E8E8",
    width: "calc(33.33% - 12px)",
    padding: "32px !important",
    boxSizing: "border-box",
    [theme.breakpoints.down(900)]: {
      flex: "1 !important",
      width: "100%",
    },
  },
  [`& .${classes.whiteTitle}`]: {
    color: "#fff",
    marginBottom: "24px"
  },
  [`& .${classes.contentSection}`]: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    width: "100%",
    padding: '60px 220px 88px 51px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    [theme.breakpoints.down(950)]: {
      padding: "16px 24px 56px 24px",
    },
  },
  [`& .${classes.imageSection}`]: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    paddingTop: '56px',
    flex: "0 0 50%",
    maxWidth: "50%",
    minHeight: "429px",
    [theme.breakpoints.down(950)]: {
      maxWidth: "100%",
      minHeight: "223px"
    },
  },
  [`& .${classes.contentDescription}`]: {
    fontSize: "16px",
    color: "#172507",
    lineHeight: "24px",
    fontWeight: 400,
  },
  [`& .${classes.wrap}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: "-24px",
    marginLeft: "-24px",
    [theme.breakpoints.down(950)]: {
      margin: 0,
      flexDirection: "column"
    },
  },
  [`& .${classes.sectionTitle}`]: {
    marginTop: "15px",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: 0,
    marginBottom: "15px",
    color: "#fff",
  },
  [`& .${classes.sectionDescription}`]: {
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: '21px',
    height: 'calc(5 * 21px)',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    color: "#fff"
  },
  [`& .${classes.content}`]: {
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    padding: "60px 0",
  },
  [`& .${classes.description}`]: {
    fontSize: "16px",
    color: "#172507",
    lineHeight: "24px",
    marginBottom: "20px",
    fontWeight: 400,
  },
  [`& .${classes.list}`]: {
    li: {
      paddingLeft: 0
    },
    b: {
      marginRight: "16px",
      fontSize: "1.5rem",
    }
  },
  [`& .${classes.textWrapper}`]: {
    height: "199px",
    boxSizing: "border-box",
    padding: "40px",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.image}`]: {
    height: "315px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#fafafa",
    objectFit: "none",
  },
  [`& .${classes.button}`]: {
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: "40px",
    textAlign: "center",
    height: "40px",
    width: "304px",
    fontWeight: 500,
    marginBottom: "40px",
    backgroundColor:  theme.palette.primary.main,
    color: "#fff",
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
  },
  [`& .${classes.textBlackWrapper}`]: {
    backgroundColor: '#e8e8e8',
    [`& .${classes.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
    [`& .${classes.sectionDescription}`]: {
      color: '#172507', //172507
    },
    [`& .${classes.sectionTitle}`]: {
      color: '#172507', //172507
    },
  },
});

const accordionItems = [
  {
    "question": "2007: Start als erster Kreditmarktplatz in Deutschland",
    "answer": "Dadurch haben Verbraucher*innen die Möglichkeit, direkt von privaten Anleger*innen und ohne Banken finanziert zu werden."
  },
  {
    "question": "2012: Integration von Bankkrediten in den Marktplatz & Start des Kreditvergleichs",
    "answer": "Seitdem können Kreditinteressent*innen Kredite von mehreren Banken vergleichen und direkt abschließen."
  },
  {
    "question": "2013: Start der persönlichen Kreditberatung & der Scoring Engine",
    "answer": "Bei Bedarf helfen seit 2013 Kreditspezialist*innen per Telefon oder E-Mail den passenden Kredit zu finden. Die Scoring Engine hilft, Kredite mit niedrigen Zinsen und hoher Auszahlungswahrscheinlichkeit zu finden."
  },
  {
    "question": "2015: Start der kostenlosen Bonitätsprüfung & erster 0-Prozent-Kredit",
    "answer": "Kreditinteressent*innen können sich seitdem umfassend über ihre Bonität informieren und sich besser auf die Kreditaufnahme vorbereiten. Zudem hat Mibugcredit 2015 als erste Online-Kreditplattform in Deutschland einen 0-Prozent-Kredit mit freier Verwendung angeboten."
  },
  {
    "question": "2016: Erster vollautomatisierter Digital-Kredit (Kredit2Go) in Deutschland",
    "answer": "2016: ERSTER VOLLAUTOMATISIERTER DIGITAL-KREDIT (KREDIT2GO) IN DEUTSCHLAND\nDurch einen vollautomatisierten digitalen Antrags-, Bearbeitungs- und Auszahlungsprozess dauert es von der Beantragung bis zur Auszahlung seitdem nur noch wenige Minuten."
  },
  {
    "question": "2017: Erster Ratenkredit mit Negativzins in Deutschland",
    "answer": "Verbraucher*innen konnten erstmals in Deutschland einen Kredit über 1.000 Euro aufnehmen, bei dem sie weniger zurückzahlen mussten, als sie sich geliehen haben."
  },
  {
    "question": "2018: Minus 5 Prozent – Mibugcredit senkt Zinssatz seines Negativzins-Kredits",
    "answer": "Für einen begrenzten Zeitraum konnten sich Kreditnehmer*innen mithilfe des Mibugcredit-Negativzins-Kredits 1.000 Euro leihen und mussten lediglich 923 Euro zurückzahlen."
  },
  {
    "question": "2019: Mibugcredit gibt Günstiger-Geht-Nicht-Garantie",
    "answer": "Sollte das günstigste über Mibugcredit verfügbare Kreditangebot teurer sein als das einer Bank, unterbietet Mibugcredit das Kreditangebot der Bank durch eine Einmalzahlung."
  },
  {
    "question": "2019: Mibugcredit wird zum klimaneutralen Kreditportal",
    "answer": "Gemeinsam mit Planetly analysiert Mibugcredit fortlaufend den eigenen CO2-Fußabdruck und ergreift Maßnahmen zur CO2-Reduktion und -Kompensation. Seit 2019 ist Mibugcredit klimaneutral."
  },
  {
    "question": "2021: Mibugcredit kauft Araratbank",
    "answer": "Mibugcredit wird durch den Kauf die führende, auf Konsumentenkredite spezialisierte Plattform in Deutschland."
  }
];

const facts = [
  {
    header: '#1',
    text: 'mibugcredit ist seit 2007 als erstes deutsches Fintech gestartet',
  },
  {
    header: '20+',
    text: 'mibugcredit vergleicht Kredite von mehr als 20 Banken und Kreditvergabepartnern.',
  },
  {
    header: '~600',
    text: 'mibugcredit beschäftigt rund 600 Mitarbeiter*innen. Die Mitarbeiter*innen stammen aus mehr als 50 Nationen.',
  },
];

const benefits = [
    {
      "title": "Verbraucher*innen sparen Geld",
      "icon": ColorGreen3,
      "description": "Kreditinteressent*innen erhalten mithilfe des Kreditvergleichs auf Basis digitaler Prozesse einen Überblick über Kreditangebote verschiedener Banken, die zu ihrem Kreditwunsch und ihrer Kreditwürdigkeit passen. So können Kreditinteressent*innen den passenden Kredit auswählen und direkt abschließen. Dadurch sparten Sie im Schnitt über 35 % im Vergleich zum Bundesdurchschnitt."
    },
    {
      "title": "Banken gewinnen Kund*innen",
      "icon": ColorGreen2,
      "description": `
      Immer mehr Deutsche schließen ihre Kredite online und über Kreditportale wie mibugcredit ab, weil sie dort
        <ul>
        <li>mehr Kreditprodukte als bei einer
          einzelnen Bank finden</li>
         <li>Kredite verschiedener Banken einfach
          vergleichen und direkt beantragen
          können</li>
        </ul>
        mibugcredit hilft Banken somit die vermeintlich verlorenen Kund*innen doch für sich zu gewinnen.
      `
    },
    {
      "title": "Mibugcredit erhält Provision",
      "icon": ColorGreen,
      "description": "Mibugcredit erhält Provisionen von Banken, wenn Kreditinteressent*innen einen Kredit über Mibugcredit bei einer Bank aufnehmen. Durch diese Provisionen ist der Kreditvergleich für Verbraucher*innen kostenfrei. Die Provisionen haben keinen Einfluss auf die angebotenen Zinssätze sowie die Sortierung und Reihenfolge der Kreditangebote im Angebotsüberblick."
    }
  ];

const Ueber: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Header imageUrl={logo} title="Wir machen Kredite transparent, fair und günstig"/>
        <Box className={classes.content}>
          <Container maxWidth="lg">
          <Typography className={classes.title}>Wenn Kredit, dann <span>mibugcredit</span>.</Typography>
          <Grid container>
            <Grid size={{ xs: 12, sm: 6, md: 4 }} padding="10px">
              <Card>
                <CardMedia
                  className={classes.image}
                  component="img"
                  alt={'deck'}
                  image={deck}
                />
                <CardContent className={classes.textWrapper}>
                  <Box className={classes.line} />
                  <Typography className={classes.sectionTitle}>
                    Bankenübergreifender Überblick
                  </Typography>
                  <Typography className={classes.sectionDescription}>
                    Ausgehend vom individuellen Kreditwunsch,
                    vergleicht mibugcredit Kreditangebote von mehr als 20 Banken & Kreditvergabepartnern.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }} padding="10px">
              <Card>
                <CardMedia
                  className={classes.image}
                  component="img"
                  alt={'group'}
                  image={group}
                />
                <CardContent className={clsx(classes.textWrapper, classes.textBlackWrapper)}>
                  <Box className={classes.line} />
                  <Typography className={classes.sectionTitle}>
                    Produktübergreifende Beratung
                  </Typography>
                  <Typography className={classes.sectionDescription}>
                    Unsere kompetenten Kreditspezialist*innen
                    helfen unter den Angeboten den passenden
                    Kredit zu finden.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid size={{ xs: 12, sm: 6, md: 4 }} padding="10px">
              <Card>
                <CardMedia
                  className={classes.image}
                  component="img"
                  alt={'money'}
                  image={money}
                />
                <CardContent className={classes.textWrapper}>
                  <Box className={classes.line} />
                  <Typography className={classes.sectionTitle}>
                    Ersparnis von über 35 % im Schnitt
                  </Typography>
                  <Typography className={classes.sectionDescription}>
                    Wer über mibugcredit einen Kredit abschloss, zahlte im Schnitt über 35 Prozent weniger als im Bundesdurchschnitt.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
          </Container>
        </Box>

      <Container maxWidth="lg">
        <BenefitsSection
          benefits={benefits}
        />
      </Container>
      <Box className={classes.wrap}>
        <Box
          className={classes.imageSection}
          sx={{ backgroundImage: `url(${credit})` }}
        ></Box>
        <Box className={classes.contentSection}>
          <Typography variant="h5" className={clsx(classes.title, classes.whiteTitle)}>
            mibugcredit in Zahlen
          </Typography>
            {facts.map(({ header, text }, index) => (
              <Box key={index} className={clsx(classes.factsItem)}>
                <Typography className={clsx(classes.factsTitle)}>{header}</Typography>
                <Typography className={clsx(classes.factsDescription)}>{text}</Typography>
              </Box>
            ))}
        </Box>
      </Box>
      <Box className={classes.content}>
        <Container maxWidth="md">
          <Typography className={classes.title}>
            mibugcredits <b>Meilensteine</b>
          </Typography>
          <Typography className={classes.subTitle}>
            Seit <b>2007</b> macht mibugcredit Kredite für Verbraucher*innen <b>transparent, fair und günstig</b>.
          </Typography>
          <AccordionItem accordionItems={accordionItems}/>
        </Container>
      </Box>
    </Box>
  );
};

export default Ueber;
