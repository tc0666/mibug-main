import React from "react";
import { Box, generateUtilityClasses, Container, Theme } from "@mui/material";
import LoanCalculator from "./components/LoanCalculator";
import SliderSection from "./components/SliderSection";
import ScrollSpy from "./components/ScrollSpy";
import SingleAuthorList from "./components/SingleAuthorList";
import dugan from "../../icons/credit/dugan.png";
import logo from "../../icons/credit/logo.svg";
import sofortkredit from "../../icons/sofortkredit.png";
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
import SofortkreditComponent from "./components/SofortkreditComponent";
import SofortkreditSteps from "./components/SofortkreditSteps";
import SofortkreditStepByStep from "./components/SofortkreditStepByStep";
import BenefitsSection from "./components/BenefitsSection";
import LoanRepaymentPlan from "./components/LoanRepaymentPlan";
import RadioIconSelect from "./components/RadioIconSelect";
import FlipCardList from "./components/FlipCardList";
import Info from "./components/Info";
import FAQAccordion from "../../components/FAQAccordion";
import CreditRequirements from "./components/CreditRequirements";
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
import phone from "../../icons/phone.svg";
import phoneSign from "../../icons/phoneSign.svg";
import creditRequirements from "../../icons/credit/creditRequirements.png";

const classes = generateUtilityClasses("CreditPage", [
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

const authors = [
  {
    name: "Quang Dung Ta",
    role: "Geschrieben von",
    title: "Spezialist für Ratenkredite und Bankenprodukte",
    description:
      "Quang-Dung Ta, ein erfahrener Bankkaufmann und Senior Key Account Manager bei mibug, arbeitet seit 2016 in der Finanzbranche. Mit Spezialisierung auf Kreditwesen und Finanzprodukte verfügt er über tiefgehende Kenntnisse in Finanzthemen.",
    image: dugan,
  },
  {
    name: "Mibug Content Team",
    role: "Geprüft durch",
    title: "Editor",
    description:
      "Das mibug Content-Team besteht aus erfahrenen und kompetenten Fachleuten, die gewissenhaft und mit Bedacht Artikel auf mibug.de vor ihrer Veröffentlichung inspizieren und gegenprüfen.",
    image: logo,
  },
];

const benefits = [
  {
    icon: clock,
    title: "Sie sparen Zeit",
    description:
      "Wir ermitteln für Sie die günstigen Angebote des Kreditmarktes, und Sie sparen sich die Wege zu den einzelnen Banken – keine Termine vor Ort und keine langen Wartezeiten. Unseren Vergleichsrechner können Sie bequem von zuhause mit dem PC, Tablet oder Smartphone nutzen.",
  },
  {
    icon: db,
    title: "Eine Anfrage: zahlreiche Angebote",
    description:
      "Mibug Credit-Kunden erhalten mit nur einer einzigen Dateneingabe die Angebote von mehr als 20 Partnern und Banken. Und zwar genau auf die eigenen Bedürfnisse zugeschnitten. Also zu Konditionen, die Sie mit Ihren Voraussetzungen bei einer Beantragung auch tatsächlich bekommen.",
  },
  {
    icon: file,
    title: "SCHUFA-neutraler Vergleich",
    description:
      "Ob nun bei der SCHUFA oder einer anderen Auskunftei: Wenn Sie mit unserem Vergleichsrechner Konditionen für Sofortkredite anfragen, hat das keine Auswirkungen auf Ihren Bonitätsscore. Denn Konditionenanfragen werden bei Auskunfteien nicht gespeichert. Dies ist erst der Fall, wenn ein Angebot schriftlich beantragt wird. Dabei handelt es sich dann um eine verbindliche Kreditanfrage.",
  },
  {
    icon: report,
    title: "Rund um die Uhr vergleichen",
    description:
      "Mit wenigen Mausklicks können Sie sich jederzeit einen optimalen Überblick über günstige Sofortkredite verschaffen. Denn unseren Vergleichsrechner können Sie unabhängig von Ort und Zeit rund um die Uhr nutzen – egal, ob unter der Woche oder am Wochenende. So bieten wir Ihnen größtmögliche Flexibilität bereits bei der Beantragung.",
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
  checklistTitle: "Das Wichtigste zum Sofortkredit",
  checklistItems: [
    {
      text: "Bei vollständiger Nutzung der Online-Verfahren (Kontoblick, Video-Ident-Verfahren, QES) erfolgt die Auszahlung oft innerhalb von 24-48 Stunden."
    },
    {
      text: "Kreditbetrag und Laufzeit können je nach Bedarf individuell angepasst werden."
    },
    {
      text: "Angebote können ohne Einfluss auf den Bonitätsscore verglichen werden."
    },
    {
      text: "Online-Abwicklung spart Zeit und ermöglicht flexible, rund-um-die-Uhr-Antragstellung."
    }
  ],
  guaranteeText: "Ihr Günstiger Sofortkredit – Unsere Garantie",
  guaranteeDescription: [
    "Wir überweisen Ihnen eine Einmalzahlung, wenn das günstigste über Mibug Credit.de gefundene Kreditangebot nicht günstiger sein sollte als ein vergleichbares, nicht über mibugcredit.de vermitteltes Kreditangebot einer inländischen Bank (Referenzangebot) und Sie Ihren Kredit trotzdem über mibugcredit.de abschließen.",
    "Durch die Einmalzahlung unterbieten wir das Referenzangebot. Die tatsächliche Höhe der Einmalzahlung richtet sich nach den Kreditangeboten, die Ihnen die Banken auf mibugcredit.de auf Basis der von Ihnen im Kreditvergleich gemachten Angaben unterbreiten."
  ]
}

const steps = [
  {
    label: 'Kreditkonditionen',
    description:
      'Geben Sie an, in welcher Höhe Sie einen Sofortkredit online beantragen möchten. Egal, ob 1.000 Euro für einen neuen Kühlschrank oder 30.000 Euro für den Autokauf – Sie entscheiden je nach Bedarf. Auch die Vertragslaufzeit wählen Sie flexibel – je nach Kreditgeber sind 12 bis 96 Monate oder noch <span>längere Laufzeiten</span> möglich. Beachten Sie: je länger die <span>Laufzeit</span>, desto niedriger die <span>monatlichen Raten</span>. Gleichzeitig steigen aber die Gesamtkosten. Wichtig ist, dass die Konditionen zu Ihrem Budget passen.',
  },
  {
    label: 'Ihre persönlichen Daten',
    description:
      'Tragen Sie in diesem Schritt zunächst Ihren Namen und Ihr Geburtsdatum ein. Zudem werden Ihre Kontaktdaten abgefragt. Dazu gehören Ihre E-Mail- Adresse und eine Telefon- bzw. Mobilfunknummer, über die Sie erreichbar sind. Die aktuelle Anschrift ist ebenfalls einzutragen. Darüber hinaus sind auch Ihre Staatsangehörigkeit und der Familienstand relevant.'
  },
  {
    label: 'Einnahmen und Ausgaben',
    description:
      'Im dritten Schritt stellen Sie Ihre Einnahmen und Ausgaben gegenüber. Hierfür kann ebenfalls ein <span>Kontoblick</span> genutzt werden, um noch schneller zu optimalen Angeboten zu gelangen. Diese Auflistung hilft Ihnen und dem Kreditgeber, Ihre finanzielle Situation einzuschätzen. So wird sichergestellt, dass nur Sofortkredite ermittelt werden, die Sie auch tatsächlich zurückzahlen können.'
  },
  {
    label: 'Angebotsübersicht und Vertragsabschluss',
    description:
      'Anhand Ihrer Dateneingabe erstellen wir für Sie eine individuelle Angebotsübersicht. Auf einen Blick können Sie darin alle Angebotsdetails einsehen. Tipp: achten Sie insbesondere auf den  <span>effektiven Jahreszins</span>, denn der zeigt die jährlichen Gesamtkosten des Kredits an. Die Sofortkredite in der Übersicht sind auf Ihre persönlichen und finanziellen Voraussetzungen abgestimmt. Sie wählen nur noch Ihren Wunschkredit aus und können diesen direkt beantragen. Ist die dafür erforderliche Legitimation abgeschlossen und haben Sie die Zusage erhalten, wird die Auszahlung angewiesen.'
  },
];

const sofortkreditSteps = {
  title: "So klappt die schnelle Auszahlung Ihres Sofortkredits",
  description: "Wer bei der Beantragung alle verfügbaren Online-Verfahren nutzt und seine Unterlagen zügig einreicht, kann das Geld im Idealfall bereits nach 48 Stunden auf seinem Konto haben. Je nach Kreditgeber und Einzelfall ist auch eine Auszahlung innerhalb von 24 Stunden möglich. Nutzen Sie dafür folgende Online- Abwicklungen:",
  steps: [
    {
      icon: phone,
      title: "Digitaler Kontoblick",
      description:
        "Beim digitalen Kontocheck, auch <span>Kontoblick</span> genannt, bestätigen Sie der kreditgebenden Bank unter anderem Ihren Gehaltseingang. Dazu werden Sie über unseren Check-out zu Ihrem Online-Banking-Login weitergeleitet. Der digitale Kontocheck ist Voraussetzung, um Sofortkredite zu vergleichen und beantragen zu können.",
    },
    {
      icon: desktop,
      title: "Video-Ident-Verfahren nutzen",
      description:
        "Mit dem <span>Video-Ident-Verfahren</span> können Sie zu einer schnellen Abwicklung des Sofortkredits beitragen. Der entscheidende Vorteil des Video-Ident-Verfahrens ist, dass Sie sich jederzeit bequem von zu Hause aus legitimieren können. Das Verfahren funktioniert per Videoanruf. Sie benötigen lediglich einen Laptop, ein Smartphone oder ein Tablet, eine stabile Internetverbindung sowie einen gültigen Lichtbildausweis."
    },
    {
      icon: phoneSign,
      title: "Per QES unterschreiben",
      description:
        "Eine <span>qualifizierte elektronische Signatur</span> (QES) ist keine eigenhändige Unterschrift, die eingescannt und an der dafür vorgesehenen Stelle im Kreditvertrag platziert werden muss. Wer digital unterschreibt, setzt seine Unterschrift auch nicht mit einem Stift unter den Kreditvertrag, sondern unterschreibt per Mausklick und Tastendruck. Das spart viel Zeit und bietet sich daher für den Sofortkredit an."
    },
  ]
};

const sections = [
  { id: "kreditrechner", label: "Ihre Vorteile", component:
      <SofortkreditComponent
        checklistTitle={creditComponent.checklistTitle}
        checklistItems={creditComponent.checklistItems}
        guaranteeText={creditComponent.guaranteeText}
        guaranteeDescription={creditComponent.guaranteeDescription}
      />,
    bg: "white"
  },
  { id: "antragsprozess", label: "Kreditrechner", component:
      <SofortkreditSteps
        title={sofortkreditSteps.title}
        description={sofortkreditSteps.description}
        steps={sofortkreditSteps.steps}
      />,
    bg: "white"
  },
  { id: "rechenbeispiel", label: "Rechenbeispiele", component:
      <SofortkreditStepByStep
        title="Schritt für Schritt zum Sofortdarlehen"
        subTitle="Finden Sie Ihren günstigen Kredit mit Sofortzusage in vier einfachen Schritten. So funktioniert unsere digitale Antragsstrecke:"
        steps={steps}
        buttonName="Sofortkredite beantragen"
      />,
    bg: "#F0F0F0"
  },
  { id: "ablauf", label: "Verwendungszwecke", component: <BenefitsSection title="Darum lohnt sich unser Sofortkredit-Vergleich" benefits={benefits}/>, bg: "white"  },
  { id: "unterlagen", label: "Legitimation", component: <LoanRepaymentPlan />, bg: "#F0F0F0"  },
  { id: "vorteile", label: "Voraussetzungen", component: <RadioIconSelect />, bg: "white"  },
  { id: "2", label: "Benötigte Unterlagen", component: <FlipCardList items={flipCardData} />, bg: "#F0F0F0"  },
  { id: "4", label: "Benötigte Unterlagen", component:
      <CreditRequirements
        title="Kredit Umschuldung trotz steigender Zinsen"
        description="Um möglichst sicher zu sein, dass ein Kreditnehmer den beantragten Sofortkredit zurückzahlen kann, setzen Kreditgeber einige Annahmekriterien voraus. Dies schützt auch Sie als Kreditnehmer."
        list={[
          'Volljährigkeit',
          'Wohnsitz in Deutschland',
          'Bankkonto in Deutschland',
          'Regelmäßiges Einkommen',
          'Ausreichende Bonität (= Zahlungsverhalten und Zahlungsfähigkeit)',
        ]}
        buttonText="Umschuldung passend gemacht"
        backgroundImage={creditRequirements}
      />
    ,
    bg: ''
  },
  { id: "3", label: "Kundenbewertungen", component: <Info />, bg: "white"  },
  { id: "faqs", label: "FAQs", component: <FAQAccordion/>, bg: "#F0F0F0"  },
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


const CreditPage = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <LoanCalculator
        subTitle="SCHUFA-neutraler Kreditvergleich mit Sofortauszahlung"
        teaser="Schnell und einfach online beantragen"
        title="Sofortkredit in wenigen Minuten abschließen"
        backgroundImage={sofortkredit}
      />
      <SliderSection partnerIcons={partnerIcons} />
      <Box className={classes.scrollSpyContainer}>
        <Box className={classes.scrollSpy}>
          <ScrollSpy sections={sections} />
        </Box>
      </Box>
      <Container maxWidth="lg">
        <SingleAuthorList authors={authors} />
      </Container>
    </Box>
  );
};

export default CreditPage;
