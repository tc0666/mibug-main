import React from 'react';
import {Box, Typography, Container, generateUtilityClasses, Theme, Link, List, ListItem} from '@mui/material';
import clsx from 'clsx';

import Header, {HeaderProps} from './components/Header';
import santander from "../../icons/partnerBanks/santander.svg";
import skg from "../../icons/partnerBanks/skg.svg";
import swkbanklogo from "../../icons/partnerBanks/swkbanklogo.png";
import direkt from "../../icons/partnerBanks/direkt-logo.svg";
import auxmoney from "../../icons/partnerBanks/auxmoney.svg";
import bankofscotland from "../../icons/partnerBanks/bankofscotland.svg";
import barclays from "../../icons/partnerBanks/barclays.svg";
import carcredit from "../../icons/partnerBanks/carcredit.svg";
import creditplus from "../../icons/partnerBanks/creditplus.svg";
import dkb from "../../icons/partnerBanks/dkb.svg";
import dslbank from "../../icons/partnerBanks/dslbank.svg";
import vvrb from "../../icons/partnerBanks/vvrb.svg";
import ingdiba from "../../icons/partnerBanks/ingdiba.svg";
import kredit2day from "../../icons/partnerBanks/kredit2day.svg";
import norisbank from "../../icons/partnerBanks/norisbank.svg";
import oyak from "../../icons/partnerBanks/oyak.svg";
import postbank from "../../icons/partnerBanks/postbank.svg";
import psd from "../../icons/partnerBanks/psd.svg";
import qlick from "../../icons/partnerBanks/qlick.svg";
import partnerprogramm from '../../icons/Partnerprogramm/partnerprogramm.png';
import pan from '../../icons/Partnerprogramm/pan.png';
import coffee from '../../icons/Partnerprogramm/coffee.png';
import woman from '../../icons/Partnerprogramm/woman.png';
import laptop from '../../icons/Partnerprogramm/laptop.png';
import guarantee from '../../icons/guarantee.svg';
import tuev from '../../icons/tuev.svg';
import preissieger from "../../icons/credit/preissieger.png";
import SliderSection from './components/SliderSection';
import FlipCardList from "./components/FlipCardList";
import file from "../../icons/file.svg";
import help from "../../icons/help.svg";
import desktop from "../../icons/desktop.svg";
import conditions from "../../icons/conditions.svg";
import users from "../../icons/users.svg";
import experience from "../../icons/experience.svg";
import AccordionItem from "../../components/AccordionItem";

interface SectionProps {
  bg: string;
  bgImage: string;
  content: React.ReactNode;
  index: number;
}

const classes = generateUtilityClasses("Credit", [
  "root",
  "wrap",
  "header",
  "partnerLogos",
  "logoBox",
  "section",
  "backgroundImage",
  "contentBox",
  "title",
  "titleMode2",
  "text",
  "textMode2",
  "button",
  "buttonMode2",
  "contentTitle",
  "contentDescription",
  "flipCardList",
]);
const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  [`& .${classes.wrap}`]: {
    backgroundColor: "#f0f0f0",
    paddingTop: "60px",
  },
  [`& .${classes.contentTitle}`]: {
    fontSize: "36px",
    fontWeight: 700,
    letterSpacing: 0,
    lineHeight: "40px",
    marginBottom: "24px",
    color:  theme.palette.primary.main,
    textAlign: "center",
  },
  [`& .${classes.contentDescription}`]: {
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "1.43",
    marginBottom: "24px",
    color: "#172507",
  },
  [`& .${classes.flipCardList}`]: {
    maxWidth: "640px",
  },
  [`& .${classes.title}`]: {
    fontSize: "36px",
    fontWeight: 400,
    letterSpacing: 0,
    lineHeight: "40px",
    marginBottom: "24px",
    color: "#fff",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.titleMode2}`]: {
    color: "#172507"
  },
  [`& .${classes.text}`]: {
    fontSize: "16px",
    fontWeight: "normal",
    letterSpacing: 0,
    lineHeight: "1.43",
    color: "#fff",
    hyphens: "auto",
    h3: {
      marginBottom: 0,
    },
    li: {
      paddingTop: 0,
    }
  },
  [`& .${classes.textMode2}`]: {
    color: "#172507",
    marginBottom: "24px"
  },
  [`& .${classes.button}`]: {
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: "40px",
    textAlign: "center",
    height: "40px",
    width: "304px",
    fontWeight: 500,
    marginTop: "40px",
    backgroundColor: "#fff",
    color: theme.palette.primary.main,
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
  },
  [`& .${classes.buttonMode2}`]: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff"
  },
  [`& .${classes.contentBox}`]: {
    padding: "60px 51px 88px 24px",
    position: "relative",
    maxWidth: { xs: "100%", sm: "calc(1048px / 2)" },
  },
  [`& .${classes.section}`]: {
    display: "flex",
    minHeight: { xs: "auto", sm: "429px" },
  },
  [`& .${classes.backgroundImage}`]: {
    position: "absolute",
    top: 0,
    bottom: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: { xs: "200px", sm: "100%" },
    [theme.breakpoints.down("sm")]: {
      position: "unset",
      height: "230px",
    },
  },
});

const accordionItems = [
  {
    question: "Was genau ist ein Affiliate?",
    answer:
    'Ein Affiliate ist eine Person oder ein Unternehmen, das Produkte oder Dienstleistungen eines anderen Unternehmens bewirbt. Beim mibugcredit Kredit Partnerprogramm fungierst der Affiliate als Vermittler zwischen dem Kreditanbieter und potenziellen Kunden. Bei einem erfolgreichen Kreditabschluss durch einen über den Affiliate vermittelten Kunden erhält der Affiliate eine Provision.'
  },
  {
    question: "Wie viel kann man mit Affiliate verdienen?",
    answer:
    'Der Verdienst als Affiliate im mibugcredit Partnerprogramm hängt von der Anzahl der erfolgreich vermittelten Kredite ab. Grundsätzlich ist der Verdienst nach oben offen, daher lohnt es sich als Affiliate aktiv daran zu arbeiten, möglichst vielen Kunden bzw. Website-Besuchern einen Kreditvergleich über mibugcredit anzubieten.'
  },
  {
    question: "Für wen lohnt sich Affiliate Marketing?",
    answer:
    'Affiliate Marketing ist für Einzelpersonen und Unternehmen interessant, die über eine Plattform verfügen, um Produkte oder Dienstleistungen zu bewerben, z. B. eine Website, einen Blog oder soziale Medien. Aber auch ein lokales Geschäft mit höherpreisigen Produkten kann sich für eine Affiliate-Partnerschaft eignen. Affiliate Marketing ist besonders vorteilhaft für Unternehmen, die in bestimmten Nischenbereichen, wie z. B. Finanzdienstleistungen, über ein engagiertes Publikum verfügen.'
  },
  {
    question: "Kann man Affiliate Marketing ohne ein Gewerbe machen?",
    answer:
    'Die rechtlichen Anforderungen können vom jeweilig zuständigen Finanzamt unterschiedlich sein. In vielen Finanzämtern ist es erforderlich, ein Gewerbe anzumelden, wenn man regelmäßige Einnahmen aus Affiliate Marketing erzielt. Es wird empfohlen, sich über die spezifischen rechtlichen Anforderungen mithilfe eines Steuerberaters zu informieren. Das mibugcredit Kredit Partnerprogramm steht grundsätzlich aber auch Privatpersonen offen.'
  },
  {
    question: "Was braucht man, um Affiliate zu werden?",
    answer:
    'Um Affiliate zu werden, ist es von Vorteil, über eine Online-Plattform wie eine Website oder einen Social-Media-Kanal zu verfügen, um den Kreditvergleich effektiv zu bewerben. Es ist jedoch auch möglich, Affiliate-Links im persönlichen Kontakt zu teilen, z.B. per E-Mail, sofern dies nicht in Form eines Newsletters geschieht (Es gelten die AGBs). Darüber hinaus ist eine gewisse Vertrautheit mit Marketingprinzipien und die Fähigkeit zur gezielten Ansprache potenzieller Kunden von Vorteil.'
  },
];



const PartnerProgramm: React.FC = () => {
  const headerProps: HeaderProps = {
    imageUrl: partnerprogramm,
    title: "Deutschlands Top Kredit Partnerprogramm",
    subtitleItems: [
      "Umfassender Kreditvergleich für Deine Website",
      "Individuell konfigurierbare Affiliate-Werbemittel",
      "Exklusive Kreditoptionen für Kunden und Besucher",
    ],
    subtitle: "Lukratives Kredit-Programm für Deine Website und/oder vergleichbare Affiliate Webseiten.",
    trustLogos: [
      guarantee,
      preissieger,
      tuev,
    ],
  };

  const sections: SectionProps[] = [
    {
      bg: "#4CAF50",
      bgImage: laptop,
      content: (
        <>
          <Typography className={classes.title} variant="h4">
            Das Kredit Partnerprogramm von mibugcredit
          </Typography>
          <Typography className={classes.text} variant="body1">
            Unser Kredit Partnerprogramm bietet Dir einfache und kostenlose Möglichkeiten mit Krediten online und offline Geld zu verdienen. Egal ob Du eine Website betreibst oder als Affiliate agierst, eine Webseite hast oder Traffic betreibst: Viele Affiliate für Finanzprodukte im Kreditbereich und die besten Top-Provisionen ermöglichen einzigartige Verdienstmöglichkeiten.
          </Typography>
        </>
      ),
      index: 0,
    },
    {
      bg: "#FFFFFF",
      bgImage: coffee,
      content: (
        <>
          <Typography className={clsx(classes.title, classes.titleMode2)} variant="h4">
            Kredit Affiliate im Finanzbereich
          </Typography>
          <Typography
            className={clsx(classes.text, classes.textMode2)}
            variant="body1"
          >
            <p>Mit dem mibugcredit Kredit Partnerprogramm kannst Du als Affiliate Deinen Kunden eine Vielzahl von Kreditprodukten zur Verfügung stellen und flexibel an die Inhalte Deiner Seite anpassen. Ob Kredite zur
              <Link href="/umschuldung/"> Umschuldung</Link>,
              <Link href="/autokredit/"> Autokredite </Link>
              oder
              <Link href="/kredit/"> Kredite </Link>
              zur freien Verwendung, durch zusätzliche Voreinstellungen wird Transparenz geschaffen und ein passendes Angebot erstellt.
            </p>
            <h3>Die Vorteile unserer Kreditvergleich Werbemittel</h3>
            <List>
              <ListItem>✔ einfache und flexible Einbindung</ListItem>
              <ListItem>✔ einstellbare Default- &amp; SubID-Werte</ListItem>
              <ListItem>✔ hohe Konversionraten</ListItem>
              <ListItem>✔ White-Label-Rechner, Affiliate-Links und mehr</ListItem>
            </List>
          </Typography>
        </>
      ),
      index: 1,
    },
    {
      bg: "#08B578",
      bgImage: pan,
      content: (
        <>
          <Typography className={classes.title} variant="h4">
            Finanzprodukte im Kredit
            Partnerprogramm
          </Typography>
          <Typography className={classes.text} variant="body1">
            mibugcredit besitzt neben den Finanzierungsangeboten von über 20 führenden Banken als spezialisierter Kreditvermittler auch ein eigenes Produkt unter dem Namen Kredit2Day. Von dieser exklusiven Finanzierung profitiert auch das Partnerprogramm. Kredit2Day ist ein automatischer Sofortkredit bei dem unsere Kunden direkt erfahren, ob Sie den gewünschten Kredit erhalten. Das Geld wird unmittelbar nach Vertragsabschluss ausgezahlt. Dadurch ermöglichst Du als Kredit Affiliate Deinen Kunden einen schnellen Zugang zu einer günstigen Finanzierung.
          </Typography>
        </>
      ),
      index: 0,
    },
    {
      bg: "#FFFFFF",
      bgImage: woman,
      content: (
        <>
          <Typography className={clsx(classes.title, classes.titleMode2)}>
            Auszeichnungen im Finanzbereich
          </Typography>
          <Typography
            className={clsx(classes.text, classes.textMode2)}
            variant="body1"
          >
            Seit 2007 hat das Kredit Partnerprogramm von mibugcredit.de stets den Anspruch das lukrativste Affiliate Partnerprogramm im Finanzbereich zu sein. Dabei sind uns insbesondere Innovationsgeschwindigkeit und ein guter Support wichtig. Unsere Affiliate Finanzprodukte überzeugen seit Jahren auch unabhängige Tester und Finanzexperten.
          </Typography>
          <Typography className={clsx(classes.text, classes.textMode2)}>
            Die Finanzzeitschrift EURO hatte mibugcredit zum Testsieger aller deutschen Kreditportale gekürt. Im LangZeitTest 2019 von BankingCheck & eKomi erreichten wir mit einem Ranking von 4,9 den ersten Platz im Sektor
            Vermittler – Kredit und auch der renommierte Stiftung Warentest bewertete
            mibugcredit vier Jahre aufeinanderfolgend positiv.
          </Typography>
          <Typography className={clsx(classes.text, classes.textMode2)}>
            Worauf wartest Du also noch? Melden Dich noch heute bei unserem
            Kreditvermittler Partnerprogramm an und verdiene Geld als Affiliate für
            Kredite, Darlehen und Finanzierungen.
          </Typography>
        </>
      ),
      index: 1,
    },
  ];

  const partnerIcons = [
    { src: santander, alt: "Santander" },
    { src: skg, alt: "skg" },
    { src: swkbanklogo, alt: "swkbanklogo" },
    { src: direkt, alt: "direkt-logo" },
    { src: auxmoney, alt: "Auxmoney" },
    { src: bankofscotland, alt: "Bank of Scotland" },
    { src: barclays, alt: "Bank of barclays" },
    { src: carcredit, alt: "Bank of carcredit" },
    { src: creditplus, alt: "Creditplus" },
    { src: dkb, alt: "DKB" },
    { src: dslbank, alt: "dslbank" },
    { src: vvrb, alt: "vvrb" },
    { src: ingdiba, alt: "ING Diba" },
    { src: kredit2day, alt: "kredit2day" },
    { src: norisbank, alt: "Norisbank" },
    { src: oyak, alt: "oyak" },
    { src: postbank, alt: "Postbank" },
    { src: psd, alt: "psd" },
    { src: qlick, alt: "qlick" },
  ];

  const flipCardData = [
    {
      icon: file,
      frontTitle: "Über 10 Jahre Erfahrung",
    },
    {
      icon: help,
      frontTitle: "20+ Partnerbanken",
    },
    {
      icon: conditions,
      frontTitle: "Langjährige Expertise",
    },
    {
      icon: users,
      frontTitle: "Top Provisionen",
    },
    {
      icon: experience,
      frontTitle: "Echtzeit Prüfung",
    },
    {
      icon: desktop,
      frontTitle: "Kurze Wartezeite",
    },
    ]

  return (
    <Box className={classes.root} sx={styles}>
      <Header {...headerProps} />
      <Container maxWidth="lg">
        <SliderSection partnerIcons={partnerIcons} />
      </Container>

      {sections.map((section) => (
        <Box
          key={section.index}
          className={classes.section}
          sx={{
            backgroundColor: section.bg,
            flexDirection: { xs: "column", sm: section.index % 2 === 0 ? "row-reverse" : "row" },
            position: "relative",
          }}
        >
          <Box
            className={classes.backgroundImage}
            sx={{
              left: { xs: 0, sm: section.index % 2 === 0 ? "50%" : 0 },
              right: { xs: 0, sm: section.index % 2 === 0 ? 0 : "50%" },
              backgroundImage: `url(${section.bgImage})`,
            }}
          />
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Box
              className={classes.contentBox}
              sx={{
                right: { xs: 0, sm: section.index % 2 === 0 ? "50%" : 0 },
                left: { xs: 0, sm: section.index % 2 === 0 ? 0 : "50%" },
              }}
            >
              {section.content}
            </Box>
          </Container>
        </Box>
      ))}
      <Box className={classes.wrap}>
        <Container maxWidth="md">
          <Typography className={classes.contentTitle}>Kreditexperten seit 2007</Typography>
          <Typography className={classes.contentDescription}>
            <strong>Mibugcredit</strong> ist Deutschlands <strong>Online-Vergleichsportal für Kredite</strong>. Aus einer großen Auswahl aus Kreditangeboten von <strong>über 20 Partnerbanken</strong> erhalten Nutzer ihr <strong>kostenfreies Angebot</strong> – und das <strong>innerhalb von wenigen Sekunden</strong>. Mit unserer <strong>Günstiger-Geht-Nicht-Garantie</strong> sorgen wir zudem dafür, dass unsere Kunden zu jedem Zeitpunkt das <strong>günstigste Angebot bei uns</strong> erhalten. Exklusive Vereinbarungen mit unseren Partnerbanken ermöglichen uns zudem unseren Kunden <strong>unvergleichliche Konditionen</strong> anzubieten.
          </Typography>
          <Box className={classes.flipCardList}>
            <FlipCardList items={flipCardData} />,
          </Box>
        </Container>
      </Box>
      <Container maxWidth="md">
        <AccordionItem accordionItems={accordionItems} title="Häufige Fragen zum Kredit Partnerprogramm von mibugcredit"
        />
      </Container>
    </Box>
  );
};

export default PartnerProgramm;
