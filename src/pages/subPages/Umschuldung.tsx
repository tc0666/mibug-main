import React from "react";
import { Box, generateUtilityClasses, Theme } from "@mui/material";
import LoanCalculator from "./components/LoanCalculator";
import SliderSection from "./components/SliderSection";
import ScrollSpy from "./components/ScrollSpy";
import umschuldung from "../../icons/credit/umschuldung.png";
import SofortkreditComponent from "./components/SofortkreditComponent";
import SofortkreditStepByStep from "./components/SofortkreditStepByStep";
import BenefitsSection from "./components/BenefitsSection";
import FlipCardList from "./components/FlipCardList";
import FAQAccordion from "../../components/FAQAccordion";
import clock from "../../icons/clock.svg";
import db from "../../icons/db.svg";
import file from "../../icons/file.svg";
import report from "../../icons/report.svg";
import help from "../../icons/help.svg";
import desktop from "../../icons/desktop.svg";
import conditions from "../../icons/conditions.svg";
import users from "../../icons/users.svg";
import experience from "../../icons/experience.svg";
import awards from "../../icons/awards.svg";
import TrustSection from "./components/TrustSection";
import Advice from "./components/umschuldung/Advice";
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
import CreditRequirements from "./components/CreditRequirements";
import woman from "../../icons/credit/woman.png";
import Calculator from "./components/umschuldung/Calculator";
import Plan from "./components/umschuldung/Plan";

const classes = generateUtilityClasses("Umschuldung", [
  "root",
  "scrollSpy",
  "scrollSpyContainer",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "0",
    backgroundColor: "white",
  },
  [`& .${classes.scrollSpyContainer}`]: {
    position: "relative", // Ensure the scrollSpyContainer is the bounding box
    display: "flex",
    flexDirection: "column",
    zIndex: 1, // Ensure it's not behind any other components
    minHeight: "100vh", // Make sure the parent container is tall enough
  },
  [`& .${classes.scrollSpy}`]: {
    position: "sticky", // Sticky positioning for fixed-like behavior
    top: "0", // Sticks to the top of the parent container
    backgroundColor: "white", // Optional: ensure it doesn't overlap content visually
    zIndex: 10, // Optional: adjust if needed for stacking context
  },
});

const benefits = [
  {
    icon: clock,
    title: "Kreditkonditionen anpassen",
    description:
    'Wenn Sie Ihre Kredite zusammenlegen, wird ein neuer Kreditvertrag aufgesetzt. Somit haben Sie die Möglichkeit, die Rahmenbedingungen neu festzulegen. Hat sich Ihre Einkommenssituation deutlich verbessert, so dass Sie monatlich mehr Geld zur Verfügung haben? Dann können Sie die Monatsrate entsprechend erhöhen. Dadurch verkürzen Sie die Laufzeit Ihrer Finanzierung und können Ihren Kredit schneller zurückzahlen. Somit sinken automatisch die Gesamtkosten.'
  },
  {
    icon: db,
    title: "Den Bonitätsscore positiv beeinflussen",
    description:
      'Mit einem händlerunabhängigen Autokredit erhalten Sie oft bessere Konditionen. Ein großer Vorteil ist auch, dass Sie im Vorfeld verschiedene Autofinanzierungen miteinander vergleichen können. So können Sie ein Angebot finden, dass zu Ihren Voraussetzungen passt und günstige Zinsen bietet.',
  },
  {
    icon: file,
    title: "Die eigenen Finanzen besser überblicken",
    description:
    'Zahlen Sie nicht mehr zwei oder drei, sondern nur noch einen Kredit zurück, verschafft Ihnen dies einen deutlich besseren Überblick über Ihre Finanzen. Denn statt mehreren monatlichen Raten in unterschiedlicher Höhe, tilgen Sie nach einer Umschuldung nur noch eine einzige Monatsrate.'
  },
  {
    icon: report,
    title: "Sparpotenziale nutzen",
    description:
    'Eine Umschuldung lohnt sich insbesondere dann, wenn der Umschuldungskredit günstigere Zinsen aufweist, als der bestehende Kredit, der abgelöst werden soll. Denn ein niedrigerer Zinssatz sorgt automatisch für geringere Kreditkosten.'
  },
];

const flipCardData = [
  {
    icon: file,
    frontTitle: "SCHUFA-neutral & unverbindlich",
    backTitle: "SCHUFA-neutral",
    backDescription: "Der mibug Kreditvergleich hat keinerlei Einfluss auf Ihren Schufa-Score. Mit Mibug Credit vergleichen Sie Kredite ganz unverbindlich.",
  },
  {
    icon: help,
    frontTitle: "Kostenlose Kreditberatung",
    backTitle: "Kostenlos",
    backDescription: "Nehmen Sie bei Fragen gerne die Hilfe unserer Kreditspezialisten in Anspruch. Sie erreichen sie von Mo-Fr von 8-20h.",
  },
  {
    icon: desktop,
    frontTitle: "Sichere Datenübertragung",
    backTitle: "Sicher",
    backDescription: "Ihre Daten werden sicher verschlüsselt übertragen und ausschließlich an unsere Banken & Partner übermittelt.",
  },
  {
    icon: conditions,
    frontTitle: "Besonders günstige Konditionen",
    backTitle: "Günstig",
    backDescription: "Mehr als 20 Partner und Banken kooperieren mit mibug. Dank der großen Auswahl finden Sie besonders Mibug Credit.",
  },
  {
    icon: users,
    frontTitle: "300.000 zufriedene Kunden",
    backTitle: "Zufriedenheit",
    backDescription:
      'mibug vermittelt Kredite mit niedrigen Zinsen und kann inzwischen über 300.000 zufriedene Kunden verzeichnen.'
  },
  {
    icon: experience,
    frontTitle: "Über 10 Jahre Erfahrung",
    backTitle: "Erfahrung",
    backDescription:
      'mibug ist auf Mibug Credit spezialisiert und vermittelt Verbrauchern sowie Gewerbetreibenden bereits seit 2007 Kredite mit niedrigen Zinsen.'
  },
  {
    icon: awards,
    frontTitle: "Mehrfach ausgezeichnet",
    backTitle: "Auszeichnungen",
    backDescription:
      'mibug wurde in der Vergangenheit unter anderem als bestes Kreditportal und fairster Kreditanbieter ausgezeichnet.'
  },
  {
    icon: clock,
    frontTitle: "Schnell zum günstigen Kredit",
    backTitle: "Schnell",
    backDescription:
      'Mit dem Kreditvergleich von mibug erhalten Sie in kürzester Zeit einen Überblick über günstige Kreditangebote.'
  },
];

const creditComponent = {
  checklistTitle: "Das Wichtigste zur Umschuldung von Krediten",
  checklistItems: [
    {
      text:
      'Ein laufendes Darlehen wird durch einen neuen Kredit abbezahlt.'
    },
    {
      text:
      'Umschuldung kann Zinsen reduzieren und Ihre monatliche Rate senken.'
    },
    {
      text:
      'Kredite bündeln für mehr Übersicht und Planungssicherheit.'
    },
    {
      text:
      'Sparen Sie mit unserem kostenlosen und unverbindlichen Umschuldungsvergleich!'
    },
  ],
  guaranteeText: "Ihr Günstiger Sofortkredit – Unsere Garantie",
  guaranteeDescription: [
    'Wir überweisen Ihnen eine Einmalzahlung, wenn das günstigste über mibugcredit.de <span>gefundene</span> Kreditangebot nicht günstiger sein sollte als ein vergleichbares, nicht über mibugcredit.de vermitteltes Kreditangebot einer inländischen Bank (Referenzangebot) und Sie Ihren Kredit trotzdem über Mibugcredit.de abschließen.\n' +
    'Durch die Einmalzahlung unterbieten wir das Referenzangebot.\n' +
    'Die tatsächliche Höhe der Einmalzahlung richtet sich nach den Kreditangeboten, die Ihnen die Banken auf mibugcredit.de auf Basis der von Ihnen im Kreditvergleich gemachten Angaben unterbreiten.'
  ]
}

const steps = [
  {
    label: 'Laufende Kredite prüfen',
    description:
    'Prüfen Sie zunächst Ihren laufenden Kredit, den Sie umschulden, oder sämtliche bestehende Kredite, die Sie zusammenfassen möchten. Schauen Sie sich dazu die entsprechenden Vertragsunterlagen an. <span>Verschaffen Sie sich einen Überblick</span> über die bestehenden <b>Zinskosten</b>, die offene <b>Kreditsumme</b> sowie die verbleibende Vertragslaufzeit. Wichtig ist auch, welche Vereinbarung Sie mit Ihrem Kreditgeber bezüglich einer vorzeitigen Ablösung getroffen haben. In manchen Fällen wird dafür eine <span>Vorfälligkeitsentschädigung</span> verlangt. Haben Sie alle Informationen beisammen, starten Sie einfach den Kreditvergleich. Innerhalb weniger Minuten erhalten Sie eine individuelle Angebotsübersicht mit passenden Umschuldungskrediten.'
  },
  {
    label: 'Daten eingeben & Umschuldungskredite vergleichen',
    description:
    'Zunächst benötigen wir einige Angaben zu Ihrem Kreditwunsch. Wichtig ist, dass Sie die <b>Umschuldung als konkreten Verwendungszweck</b> angeben. Nur so kann die Bank nachvollziehen, dass Sie keinen zusätzlichen Kredit aufnehmen möchten. Im nächsten Schritt machen Sie Angaben zu Ihrer Person, Ihrem <b>Einkommen</b> und Ihrem <b>Beschäftigungsverhältnis</b>. Anschließend erhalten Sie Ihre persönlichen Kreditangebote, die Sie miteinander vergleichen können. Damit Sie für Ihre Umschuldung die beste beste Bank für sich ermitteln können, achten Sie beim Vergleich vor allem auf den effektiven Jahreszins. Dieser gibt an, wie hoch die jährlichen Gesamtkosten für Ihr Darlehen sind.',
  },
  {
    label: 'Altkredit kündigen & neues Darlehen abschließen',
    description:
    'Wenn Sie sich für einen Umschuldungskredit entschieden haben, können Sie diesen bequem online beantragen. Sie übermitteln der Bank den unterschriebenen Kreditvertrag zusammen mit allen erforderlichen Unterlagen. Zum Abschluss des Vertrags bestätigen Sie Ihre Identität gegenüber dem Kreditgeber bequem per <span>Video-Ident-Verfahren</span>. In einigen Fällen benötigen Sie zudem eine Ablösungsbestätigung der Bank Ihres alten Kredits. Wenn Ihr neuer Kreditgeber einen Kreditwechsel anbietet, wird er sich mit Ihrem alten Kreditgeber in Verbindung setzen, um den Vorgang abzuschließen. Andernfalls kündigen Sie einfach selbst.',
  },
];




const sections = [
  { id: "antragsprozess", label: "Der Antragsprozess", component:
      <SofortkreditComponent
        checklistTitle={creditComponent.checklistTitle}
        checklistItems={creditComponent.checklistItems}
        guaranteeText={creditComponent.guaranteeText}
        guaranteeDescription={creditComponent.guaranteeDescription}
      />,
    bg: "white"
  },
  { id: "beratung", label: "Unsere Beratung", component:
      <SofortkreditStepByStep
        title="Kredit Umschuldung in 3 einfachen Schritten"
        steps={steps}
        buttonName="Jetzt Umschuldungen vergleichen"
      />,
    bg: "white"
  },
  { id: "umschuldung", label: "Was ist eine Umschuldung?", component: <TrustSection />, bg: "#F0F0F0"  },
  { id: "eine", label: "Gründe für eine Umschuldung", component: <Advice />, bg: "white"  },
  { id: "voraussetzungen", label: "Voraussetzungen", component:
      <CreditRequirements
        title="Voraussetzungen für Kredite mit Sofortzusage"
        buttonText="Sofortkredit beantragen"
        backgroundImage={woman}
        description='Sie sollten während der gesamten Laufzeit Ihres Kredits die <a href="#">Zinsentwicklung</a>
                    am Markt im Auge behalten. Sind die Zinsen günstig, können Sie durch eine
                    Umschuldung Geld sparen. Doch auch bei steigenden Zinsen kann es sich
                    unter Umständen lohnen, Ihren alten Kredit umzuschulden. Zum Beispiel,
                      wenn sich Ihre Bonität deutlich verbessert hat. Ob sich das aktuell für Sie
                    lohnt, können Sie über unserem kostenlosen Kreditvergleich von
                    Umschuldungen einfach herausfinden.'
      />
    ,
    bg: ''
  },
  { id: "umschuldungsrechner", label: "Umschuldungsrechner", component:
      <Calculator />,
    bg: "white"
  },
  { id: "rechenbeispiele", label: "Rechenbeispiele", component: <FlipCardList items={flipCardData} />, bg: "#F0F0F0"  },
  { id: "kundenbewertungen", label: "Kundenbewertungen", component:
      <BenefitsSection
        title="Ihre Vorteile bei einer Umschuldung"
        benefits={benefits}
      />,
    bg: "white"
  },
  { id: "faqs", label: "FAQs", component: <FAQAccordion/>, bg: "#F0F0F0"  },
  { id: "tipps", label: "Unsere Tipps", component: <Plan />, bg: "white"  },
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

const Umschuldung = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <LoanCalculator teaser="Alten Kredit umschulden und sparen" title="Umschuldung leicht gemacht" backgroundImage={umschuldung} subTitle="Senken Sie jetzt Ihre monatlichen Raten" />
      <SliderSection partnerIcons={partnerIcons} />
      <Box className={classes.scrollSpyContainer}>
        <Box className={classes.scrollSpy}>
          <ScrollSpy sections={sections} />
        </Box>
      </Box>
    </Box>
  );
};

export default Umschuldung;
