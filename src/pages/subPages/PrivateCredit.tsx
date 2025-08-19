import React from "react";
import { Box, generateUtilityClasses, Theme } from "@mui/material";
import LoanCalculator from "./components/LoanCalculator";
import SliderSection from "./components/SliderSection";
import ScrollSpy from "./components/ScrollSpy";
import privatkredit from "../../icons/credit/privatkredit.png";
import SofortkreditStepByStep from "./components/SofortkreditStepByStep";
import FlipCardList from "./components/FlipCardList";
import FAQAccordion from "../../components/FAQAccordion";
import clock from "../../icons/clock.svg";
import file from "../../icons/file.svg";
import help from "../../icons/help.svg";
import desktop from "../../icons/desktop.svg";
import conditions from "../../icons/conditions.svg";
import users from "../../icons/users.svg";
import experience from "../../icons/experience.svg";
import awards from "../../icons/awards.svg";
import TrustSection from "./components/TrustSection";
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
import PrivateCreditComponent from "./components/privateCredit/PrivateCreditComponent";
import LoanCards, {LoanCardOption, LoanCardsOptionsEnum} from "./components/LoanCards";
import money from "../../icons/credit/money.svg";
import car from "../../icons/credit/car.svg";
import building from "../../icons/credit/building.svg";
import tools from "../../icons/credit/tools.svg";
import balance from "../../icons/credit/balance.svg";
import briefcase from "../../icons/credit/briefcase.svg";
import PrepareSection from "./components/privateCredit/PrepareSection";
import PrivateCreditTable from "./components/privateCredit/PrivateCreditTable";
import CalculationExamples from "./components/privateCredit/CalculationExamples";
import CustomerReviews from "./components/privateCredit/CustomerReviews";
import turkey from "../../icons/countries/turkey.svg";
import poland from "../../icons/countries/poland.svg";
import Italy from "../../icons/countries/Italy.svg";
import uk from "../../icons/countries/uk.svg";
import russia from "../../icons/countries/russia.svg";
import romania from "../../icons/countries/romania.svg";
import ukraine from "../../icons/countries/ukraine.svg";
import netherlands from "../../icons/countries/netherlands.png";
import spain from "../../icons/countries/spain.png";
import portugal from "../../icons/countries/portugal.png";
import hungary from "../../icons/countries/hungary.png";
import france from "../../icons/countries/france.png";
import bulgaria from "../../icons/countries/bulgaria.png";
import Footer from "./components/privateCredit/Footer";

const classes = generateUtilityClasses("PrivateKredit", [
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

const flipCardData = [
  {
    icon: file,
    frontTitle: "SCHUFA-neutral & unverbindlich",
    backTitle: "SCHUFA-neutral",
    backDescription: "Der mibug Kreditvergleich hat keinerlei Einfluss auf Ihren Schufa-Score. Mit mibugcredit vergleichen Sie Kredite ganz unverbindlich.",
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

const steps = [
  {
    label: 'Unverbindliche Konditionsanfrage stellen',
    description:
    'Starten Sie im ersten Schritt einfach mit einer unverbindlichen Konditionenanfrage. Geben Sie den gewünschten Kreditbetrag, die Laufzeit und Ihre persönlichen Daten ein. Dank des<span>digitalen Kontoblicks</span>wird Ihre Bonität schnell und sicher geprüft, ohne dass Ihre SCHUFA negativ beeinflusst wird. Sie anschließend einen individuellen Überblick über die möglichen Kreditangebote – völlig kostenlos und unverbindlich.'
  },
  {
    label: 'Privatkredite vergleichen',
    description:
    'Im nächsten Schritt können Sie die Angebote der verschiedenen Banken miteinander vergleichen. Sie sehen auf einen Blick, welche Bank Ihnen die besten Konditionen bietet – vom Zinssatz über die monatliche Rate bis hin zur Laufzeit. So finden Sie den Privatkredit, der genau Ihren Bedürfnissen entspricht.'
  },
  {
    label: 'Privatkredit online abschließen',
    description:
    'Sie haben ein passendes Angebot gefunden? Dann können Sie Ihren Privatkredit einfach und bequem online abschließen. Dazu laden Sie die <span>erforderlichen Unterlagen</span> hoch, bestätigen Ihre Identität per <span>Video-Ident-Verfahren</span>  und unterzeichnen den Vertrag per <span>qualifizierter elektronischer Signatur</span>. Nach der abschließenden Prüfung durch den Kreditgeber wird Ihnen bei einer Zusage der Kreditbetrag innerhalb kürzester Zeit auf Ihr Konto überwiesen – schnell,sicher und direkt.'
  },
];

const steps2 = [
  {
    label: 'Verschiedene Verwendungszwecke',
    description:
    'Ob umschulden, ein Auto kaufen oder renovieren – wählen Sie im Kreditvergleich den passenden Verwendungszweck. Profitieren Sie so von günstigen Konditionen, da der Kreditgeber durch den Gegenwert (zum Beispiel das Auto oder eine Immobilie) mehr Sicherheit hat. Aber auch zur freien Verwendung bieten viele Banken Privatkredite an.'
  },
  {
    label: 'Erfahrung und Sicherheit',
    description:
    'Unsere langjährigen Bank- und Partnerbeziehungen ermöglichen uns, Sie fachgerecht zu beraten und zu unterstützen. Dabei stehen die Kreditspezialisten immer in direktem Kontakt mit den einzelnen Kreditgebern und können Sie kompetent beraten. Ihre Daten werden dabei nur für die Kreditanfrage verwendet und sicher verschlüsselt übertragen.'
  },
  {
    label: 'Große Auswahl & Exklusive Konditionen',
    description:
    'Mit über 70 Finanzprodukten bietet mibugcredit ein breites Angebot. So findet jeder den passenden Privatkredit. Darüber hinaus haben wir mit einigen Kreditpartnern besonders vorteilhafte Konditionen ausgehandelt, die nur für mibugcredit-Kunden gelten. Nutzen Sie diesen Vorteil, um bei Ihrem Privatkredit bares Geld zu sparen.'
  },
  {
    label: "Privatkredite für zahlreiche Zielgruppen",
    description:
    'Angestellte, Rentner, Beamte, Selbstständige oder auch Auszubildende – jeder, der die Voraussetzungen für einen Privatkredit erfüllt, kann einen Kreditantrag bei mibugcredit stellen. Darüber hinaus haben sich einige Partner in unserem Portfolio auf Privatkredite für Selbstständige und Freiberufler spezialisiert.'
  }
];

const IconMoney = () => <img src={money} alt="money" />;
const IconCar = () => <img src={car} alt="car" />;
const IconBuilding = () => <img src={building} alt="building" />;
const IconTools = () => <img src={tools} alt="tools" />;
const IconBalance = () => <img src={balance} alt="balance" />;
const IconBriefcase = () => <img src={briefcase} alt="briefcase" />;

const options: LoanCardOption[] = [
  { id: 1, label: LoanCardsOptionsEnum.FREIE_VERWENDUNG, icon: <IconMoney /> },
  { id: 2, label: LoanCardsOptionsEnum.FAHRZEUG, icon: <IconCar /> },
  { id: 3, label: LoanCardsOptionsEnum.BAUFINANZIERUNG, icon: <IconBuilding /> },
  { id: 4, label: LoanCardsOptionsEnum.MODERNISIERUNG, icon: <IconTools /> },
  { id: 5, label: LoanCardsOptionsEnum.UMSCHULDUNG, icon: <IconBalance /> },
  { id: 6, label: LoanCardsOptionsEnum.GEWERBE, icon: <IconBriefcase /> },
];

const customerIcons = [
  { src: Italy, alt: "Italiano" },
  { src: poland, alt: "Polski" },
  { src: romania, alt: "Românesc" },
  { src: russia, alt: "Русский" },
  { src: uk, alt: "English" },
  { src: turkey, alt: "Türkçe" },
  { src: bulgaria, alt: "Български" },
  { src: france, alt: "Français" },
  { src: hungary, alt: "Magyar" },
  { src: portugal, alt: "Português" },
  { src: spain, alt: "Español" },
  { src: netherlands, alt: "Nederlands" },
  { src: ukraine, alt: "Українська" },
];


const sections = [
  { id: "antragsprozess", label: "Der Antragsprozess", component:
      <PrivateCreditComponent />,
    bg: "white"
  },
  { id: "verwendungszweck", label: "Verwendungszweck", component:
      <SofortkreditStepByStep
        title="In 3 schnellen Schritten zum Privatdarlehen"
        steps={steps}
        buttonName="Privatkredite vergleichen"
      />,
    bg: "#F0F0F0"
  },
  { id: "vorteile", label: "Ihre Vorteile", component:
      <LoanCards
        title="Was möchten Sie günstig finanzieren?"
        buttonName="Jetzt starten"
        options={options}
      />,
    bg: "white"
  },
  { id: "vorbereiten", label: "Privatkredit vorbereiten", component:
      <SofortkreditStepByStep
        title="Privatkredite vergleichen mit mibugcredit – Ihre Vorteile"
        steps={steps2}
      />,
    bg: "white"
  },
  { id: "privatkreditrechner", label: "Privatkreditrechner", component: <TrustSection />, bg: "white"  },
  { id: "4", label: "Benötigte Unterlagen", component:
    <PrepareSection />
    ,
    bg: 'white'
  },
  { id: "rechenbeispiele", label: "Rechenbeispiele", component:
      <PrivateCreditTable />,
    bg: "#F0F0F0"
  },
  { id: "unterlagen", label: "Alternative Finanzierungen", component:
      <CalculationExamples />,
    bg: "white"
  },
  { id: "kundenbewertungen", label: "Kundenbewertungen", component: <FlipCardList items={flipCardData} />, bg: "#F0F0F0"  },
  { id: "privatkreditberatung", label: "Privatkreditberatung", component:
      <CustomerReviews
        title="Privatkreditberatung auf Deutsch und weiteren Sprachen"
        partnerIcon={customerIcons}
      />,
    bg: "white"
  },
  { id: "faqs", label: "FAQs", component: <FAQAccordion/>, bg: "#F0F0F0"  },
  { id: "tipps", label: "Unsere Tipps", component: <Footer />, bg: "white"  },
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

const PrivateCredit = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <LoanCalculator teaser="Schnelle Kreditauszahlung" title="Online-Privatkredit" backgroundImage={privatkredit} subTitle="Zinsen vergleichen und sparen" />
      <SliderSection partnerIcons={partnerIcons} />
      <Box className={classes.scrollSpyContainer}>
        <Box className={classes.scrollSpy}>
          <ScrollSpy sections={sections} />
        </Box>
      </Box>
    </Box>
  );
};

export default PrivateCredit;
