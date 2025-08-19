import React from "react";
import {
  Box,
  Typography,
  Button,
  Container,
  generateUtilityClasses,
  Theme, useMediaQuery,
} from "@mui/material";
import circle4 from "../../icons/home/circle4.png";
import family from "../../icons/home/family.png";
import interest from '../../icons/home/interest.svg';
import neutral from '../../icons/home/neutral.svg';
import free from '../../icons/home/free.svg';
import dataSafety from '../../icons/home/dataSafety.svg';
import tuev from "../../icons/tuev.svg";
import auxmoney from "../../icons/partnerBanks/auxmoney.svg";
import bankofscotland from "../../icons/partnerBanks/bankofscotland.svg";
import commerzbank from "../../icons/partnerBanks/commerzbank.svg";
import creditplus from "../../icons/partnerBanks/creditplus.svg";
import deutschebank from "../../icons/partnerBanks/deutschebank.svg";
import dkb from "../../icons/partnerBanks/dkb.svg";
import hvb from "../../icons/partnerBanks/hvb.svg";
import ingdiba from "../../icons/partnerBanks/ingdiba.svg";
import norisbank from "../../icons/partnerBanks/norisbank.svg";
import postbank from "../../icons/partnerBanks/postbank.svg";
import santander from "../../icons/partnerBanks/santander.svg";
import skreditpartnerkredit from "../../icons/partnerBanks/skreditpartnerkredit.svg";
import targobank from "../../icons/partnerBanks/targobank.svg";
import vonessensubprime from "../../icons/partnerBanks/vonessensubprime.svg";
import FAQSection from "./components/FAQSection";
import PartnerLogos from "./components/PartnerLogos";
import SliderSection from "./components/SliderSection";
import FeatureSection from "./components/FeatureSection";
import HeaderSection from "./components/LeftHeaderSection";
import CreditForm from "./components/CreditForm";
import CreditCondition from "./components/CreditCondition";
import ProfileImages from "./components/ProfileImages";
import {useNavigate} from "react-router-dom";

const classes = generateUtilityClasses("HomeComponent", [
  "root",
  "calculator",
  "calculatorFields",
  "featuresSection",
  "featuresGrid",
  "loanTypesGrid",
  "card",
  "placeholder",
  "stars",
  "avatarWrap",
  "avatar",
  "rating",
  "ratingTitle",
  "headerRight",
  "header",
  "personalInfo",
  "personalInfoTitle",
  "personalInfoDescription",
  "personalInfoImage",
  "economicSection",
  "economicTitle",
  "callCenter",
  "callCenterWrap",
  "callCenterTitle",
  "callCenterButton",
  "personalInfoWrap",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "0",
  },
  [`& .${classes.callCenterButton}`]: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
    fontSize: "1rem",
    textTransform: "none",
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    width: "256px",
    height: "48px",
    boxShadow: `0px 1px 5px 0px #0000001F,
                0px 2px 2px 0px #00000024,
                0px 3px 1px -2px #00000033`,
    borderRadius: "2px",
    [theme.breakpoints.down(900)]: {
      maxWidth: "420px",
      width: "100%",
    },
  },
  [`& .${classes.callCenterTitle}`]: {
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '40px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    color: '#303030',
    [theme.breakpoints.down(900)]: {
      marginBottom: "20px",
      fontSize: "28px",
    },
  },
  [`& .${classes.callCenterWrap}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingBottom: "20px",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
    },
  },
  [`& .${classes.headerRight}`]: {
    flex: 1,
    display: "flex",
    maxWidth: "510px",
    height: "auto",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    [theme.breakpoints.down(900)]: {
      flex: "unset",
      maxWidth: "100%",
      width: "100%",
      padding: "16px",
      marginBottom: "10px"
    },
  },
  [`& .${classes.header}`]: {
    display: "flex",
    marginTop: "100px",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "start",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down(900)]: {
      marginTop: "1rem",
    },
  },
  [`& .${classes.calculator}`]: {
    margin: `${theme.spacing(4)} 0`,
    textAlign: "center",
  },
  [`& .${classes.calculatorFields}`]: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    gap: theme.spacing(2),
  },
  [`& .${classes.featuresSection}`]: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  [`& .${classes.featuresGrid}`]: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    gap: theme.spacing(3),
  },
  [`& .${classes.loanTypesGrid}`]: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr 1fr",
    },
    gap: theme.spacing(3),
  },
  [`& .${classes.card}`]: {
    height: "100%",
  },
  [`& .${classes.placeholder}`]: {
    margin: `${theme.spacing(4)} 0`,
    textAlign: "center",
  },
  [`& .${classes.personalInfoTitle}`]: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
    fontSize: "1.5rem",
    lineHeight: "2rem",
    letterSpacing: "0.02rem",
    marginBottom: "1rem",
    textAlign: "start",
  },
  [`& .${classes.personalInfoImage}`]: {
    marginTop: "3rem",
    display: "flex",
    justifyContent: "center",
    img: {
      borderRadius: "8px",
      width: "auto",
      maxWidth: "100%"
    },
    [theme.breakpoints.down(900)]: {
      marginTop: "1rem",
    },
  },
  [`& .${classes.personalInfoDescription}`]: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    lineHeight: "1.5rem",
    letterSpacing: "0.02rem",
    maxWidth: "700px",
    textAlign: "start",
    marginBottom: "15px",
    color: "#323232",
  },
  [`& .${classes.economicTitle}`]: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '22px',
    textAlign: 'left',
    textUnderlinePosition: 'from-font',
    textDecorationSkipInk: 'none',
    color: '#ABABAB',
    marginBottom: "20px",
  },
  [`& .${classes.callCenter}`]: {
    paddingTop: "40px",
  },
  [`& .${classes.economicSection}`]: {
    margin: "100px 0 150px 0",
  },
  [`& .${classes.personalInfoWrap}`]: {
    marginTop: "4rem",
    textAlign: "center",
    [theme.breakpoints.down(900)]: {
      marginTop: 0,
    },
  },
  [`& .${classes.personalInfo}`]: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    boxSizing: "border-box",
    borderRadius: "8px",
    display: "grid",
    columnGap: "11%",
    rowGap: "32px",
    gridTemplateColumns: "1fr 40%",
    margin: "100px 0",
    [theme.breakpoints.down(900)]: {
      margin: 0,
      display: "flex", // Use flexbox on mobile
      flexDirection: "column-reverse", // Reverse the order of the items in column layout
      alignItems: "center", // Center the content horizontally on mobile
    },
  },
});

const LendingPage = () => {
  const profileImages = [
    tuev,
    circle4,
  ];
  const isMobile = useMediaQuery('(min-width:900px)');
  const navigate = useNavigate();

  const creditCondition = [
    {
      label: "Zinssätze:",
      value: "Min. -0,40 % bis Max. 19,90 % effektiver Jahreszins (APR)",
    },
    { label: "Laufzeit:", value: "Min. 6 bis Max. 120 Monate" },
    { label: "Nettodarlehensbetrag:", value: "von 1.000 € bis 150.000 €" },
    { label: "Gesamtbetrag:", value: "von 995,83 € bis 181.247,51 €" },
  ];
  const partnerIcons = [
    { src: targobank, alt: "Targo Bank" },
    { src: norisbank, alt: "Norisbank" },
    { src: creditplus, alt: "Creditplus" },
    { src: ingdiba, alt: "ING Diba" },
    { src: santander, alt: "Santander" },
    { src: postbank, alt: "Postbank" },
    { src: skreditpartnerkredit, alt: "S Kreditpartner Kredit" },
    { src: commerzbank, alt: "Commerzbank" },
    { src: auxmoney, alt: "Auxmoney" },
    { src: hvb, alt: "HypoVereinsbank" },
    { src: bankofscotland, alt: "Bank of Scotland" },
    { src: dkb, alt: "DKB" },
    { src: vonessensubprime, alt: "Von Essen Subprime" },
    { src: deutschebank, alt: "Deutsche Bank" },
  ];
  const features = [
    {
      icon: interest,
      title: 'Günstige Zinsen',
      description:
        'Unvergleichliche Konditionen dank besonders günstiger Vereinbarungen mit unseren Partnerbanken.',
    },
    {
      icon: neutral,
      title: 'SCHUFA-neutral',
      description:
        'Der Mibug Credit Kreditvergleich hat keine negativen Auswirkungen auf Ihren SCHUFA-Score.',
    },
    {
      icon: free,
      title: 'Kostenlos & unverbindlich',
      description:
        'Es warten keine versteckten Kosten auf Sie und Sie können die Anfrage jederzeit widerrufen.',
    },
    {
      icon: dataSafety,
      title: 'Datensicherheit',
      description:
        'Für eine sichere Übermittlung Ihrer persönlichen Daten sorgen unsere strengen Datenschutzrichtlinien.',
    },
  ];

  const faqs = [
    {
      question: "Was muss ich tun, um einen Kredit aufzunehmen?",
      answer: "Füllen Sie die Online-Kreditanfrage aus, entscheiden Sie sich für das passende Angebot und reichen Sie alle geforderten Unterlagen ein.Füllen Sie die Online-Kreditanfrage aus, entscheiden Sie sich für das passende Angebot und reichen Sie alle geforderten Unterlagen ein.",
    },
    {
      question: "Wie lange dauert es, bis meine Kreditanfrage bearbeitet wird?",
      answer: "Maximal 48 Stunden. Innerhalb kürzester Zeit erhalten Sie Ihre persönlichen Kreditangebote. Die Prüfung Ihrer Unterlagen bei Kreditantrag dauert lediglich wenige Werktage..",
    },
    {
      question: "Was kostet die Kreditanfrage mit Mibug Credit?",
      answer: "Die Kreditanfrage ist kostenlos.",
    },
    {
      question: "Welche Unterlagen muss ich für einen Kreditantrag einreichen?",
      answer: "In der Regel wird nach Kontoauszügen, Gehaltsnachweisen, Selbstauskunft und einer Kopie Ihres Personalausweises gefragt. Sollten weitere Dokumente verlangt werden, ist dies im jeweiligen Kreditangebot vermerkt.",
    },
  ];

  const handleNavigate = () => {
    navigate(`/antrag`);
  }


  return (
    <Box className={classes.root} sx={styles}>
      <Container maxWidth="lg">
        <Box className={classes.header}>
          <HeaderSection profileImages={profileImages} />
          <Box className={classes.headerRight}>
            <CreditForm />
          </Box>
          {!isMobile ? (<ProfileImages profileImages={profileImages} />) : null}
        </Box>
        <PartnerLogos logos={partnerIcons}/>
      </Container>
      <CreditCondition creditCondition={creditCondition}/>
      <SliderSection />
      <Container maxWidth="lg">
        <Box className={classes.personalInfo}>
          <Box className={classes.personalInfoWrap}>
            <Typography
              className={classes.personalInfoTitle}
            >
              Wir erklären, warum wir Ihre persönlichen Angaben benötigen
            </Typography>
            <Typography
              className={classes.personalInfoDescription}
            >
              Kreditinstitute sind dazu verpflichtet, Ihre Identität zu überprüfen.
              Nur mit den Angaben zu Ihrer Person kann das bestmögliche Angebot für
              Sie ermittelt werden.
            </Typography>
            <Typography
              className={classes.personalInfoDescription}
            >
              Vertrauenswürdige Angebote gibt es nur nach
              einer Kreditwürdigkeitsprüfung. Dafür benötigen wir Informationen zu
              Ihrer Person und finanziellen Situation.
            </Typography>
            <Typography
              className={classes.personalInfoDescription}
            >
              Ihre Angaben werden von
              Mibug Credit vertraulich behandelt und verschlüsselt
              übermittelt. Der Schutz Ihrer persönlichen Daten hat für uns höchste
              Bedeutung.
            </Typography>
          </Box>
          <Box
            className={classes.personalInfoImage}
          >
            <img
              src={family}
              alt="Happy family in car"
            />
          </Box>
        </Box>
      </Container>
      <FeatureSection features={features}/>
      <FAQSection faqs={faqs}/>
      <Container maxWidth="lg">
        <Box className={classes.economicSection}>
          <Typography
            className={classes.economicTitle}
          >
            <b>Sparen Sie über 35% mit Mibug Credit:</b>Vgl. der eff. Jahreszinssätze neu vergebener Konsumentenkredite (lt. dt. Bundesbank) mit den eff. Jahreszinssätzen von über Mibug Credit neu vermittelten Krediten 2020.
          </Typography>
          <Typography
            className={classes.economicTitle}
          >
            2/3 aller Kunden erhalten: Nettodarlehensbetrag 20.000,00€, 60 Monate Laufzeit, 2.2% effektiver Jahreszins, 2.09% p.a.
            gebundener Sollzins, 60mtl. Raten zu je 386, 94E, 23.216,38€ Gesamtbetrag. Solaris SE, Cuvrystr, 10997 Berlin.          </Typography>
        </Box>
      </Container>
      <Box sx={{backgroundColor: "#f5f5f5"}}>
        <Container maxWidth="lg" className={classes.callCenter}>
          <Box
            className={classes.callCenterWrap}
          >
            <Typography
              className={classes.callCenterTitle}
            >
              Wenn´s schnell sein muss,
              <br/>dann mit Mibug Credit
            </Typography>
            <Button
              variant="contained"
              color="primary"
              className={classes.callCenterButton}
              onClick={handleNavigate}
            >
              Zum Kreditrechner
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LendingPage;
