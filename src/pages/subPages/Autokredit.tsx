import React from "react";
import { Box, generateUtilityClasses, Theme } from "@mui/material";
import LoanCalculator from "./components/LoanCalculator";
import SliderSection from "./components/SliderSection";
import ScrollSpy from "./components/ScrollSpy";
import autocredit from "../../icons/autocredit.png";
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
import AutoCreditComparison from "./components/AutoCreditComparison";
import AutoKreditTable from "./components/autokredit/AutoKreditTable";
import ZinsInfoSection from "./components/autokredit/ZinsInfoSection";
import ContentCard from "./components/ContentCard";
import Alert from "../../components/Alert";
import Requirements from "./components/autokredit/Requirements";
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

const classes = generateUtilityClasses("Autocredit", [
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
    title: "Barzahlerrabatt",
    description:
    'Wenn Sie eine händlerunabhängige <span>Autofinanzierung</span> abschließen, profitieren Sie nicht nur von guten Konditionen. Denn mit der Kreditsumme können Sie Ihren Traumwagen sofort beim Händler bezahlen und so von einem Barzahlerrabatt profitieren. Dieser liegt häufig zwischen 10 und 20 Prozent.',
  },
  {
    icon: db,
    title: "Autokredit zu Top-Zinsen",
    description:
    'Mit einem händlerunabhängigen Autokredit erhalten Sie oft bessere Konditionen. Ein großer Vorteil ist auch, dass Sie im Vorfeld verschiedene Autofinanzierungen miteinander vergleichen können. So können Sie ein Angebot finden, dass zu Ihren Voraussetzungen passt und günstige Zinsen bietet.',
  },
  {
    icon: file,
    title: "Autokredit zu Hause abschließen",
    description:
    'Der gesamte Prozess vom Vergleich verschiedener Kreditangebote bis zum Kreditabschluss kann <span>online abgewickelt werden</span>. Sie müssen also keine Bankfilialeaufsuchen. Stattdessen erhalten Sie nach dem Ausfüllen des Online-Antrags eine Übersicht verschiedener Angebote für einen Autokredit. So können Sie unverbindlich vergleichen und das passende Angebot bequem von zu Hause aus abschließen.',
  },
  {
    icon: report,
    title: "Zweckbindung ermöglicht niedrige Zinsen",
    description:
    'Durch die Angabe eines Verwendungszwecks können Sie beim Autokredit von günstigen Zinsen profitieren. Denn die Bank kann das Fahrzeug als Sicherheit eintragen lassen und bei Zahlungsausfall verkaufen. Mit dem Erlös können dann die offenen <span>Kreditkosten</span> beglichen werden. Deshalb sind die Konditionen bei einem Autokredit günstiger als bei einem Darlehen ohne Zweckbindung.',
  },
];

const benefits2 = [
  {
    icon: clock,
    title: "Ballonfinanzierung",
    description:
    'Bei einer <span>Ballonfinanzierung</span> zahlen Sie den Kredit zunächst in gleichbleibenden monatlichen Raten zurück. In den meisten Fällen wird bei einem Ballonkredit keine oder nur eine sehr geringe Anzahlung geleistet. Am Ende der Vertragslaufzeit bleibt ein Restbetrag, der dem Restwert des Autos entspricht. Für den Autokäufer wird also eine Schlussrate fällig. Die Ballonfinanzierung wird daher auch als Autokredit mit Schlussrate bezeichnet. Der große Vorteil sind dabei die relativ niedrigen monatlichen Raten. Allerdings ist am Ende der Vertragslaufzeit ein Restbetrag zu zahlen.'
  },
  {
    icon: db,
    title: "3-Wege-Finanzierung",
    description:
    'Bei der <span>3-Wege-Finanzierung</span> haben Sie am Ende der Kreditlaufzeit verschiedene Möglichkeiten. Die erste Möglichkeit ist, wie unter „Ballonfinanzierung“ beschrieben, die Zahlung einer Schlussrate. Die zweite Möglichkeit besteht darin, das Fahrzeug an den Händler zurückzugeben, um die Restschuld zu begleichen. Die dritte und letzte Möglichkeit, das Auto weiter zu finanzieren, ist die Anschlussfinanzierung. Die 3-Wege- Finanzierung eignet sich also vor allem dann, wenn Sie sich noch nicht sicher sind, ob Sie das Fahrzeug am Ende behalten wollen oder nicht.'
  },
  {
    icon: file,
    title: "Leasing",
    description:
    '<span>Leasing</span> ist eine beliebte Finanzierungsoption, bei der Sie das Fahrzeug für einen bestimmten Zeitraum nutzen, ohne es zu kaufen. Sie zahlen feste monatliche Raten, die sich nach der Nutzung des Fahrzeugs richten. Am Ende der Vertragslaufzeit geben Sie das Fahrzeug zurück, verlängern den Vertrag zu neuen Konditionen oder kaufen es zum Restwert. Leasing ist besonders für Personen interessant, die regelmäßig ein neues Fahrzeug fahren möchten, da die monatlichen Raten oft niedriger sind als bei klassischen Finanzierungsmodellen. Zu beachten ist, dass Leasing nicht immer günstiger ist als der Kauf und die individuellen Vertragsbedingungen zu berücksichtigen sind.'
  },
  {
    icon: report,
    title: "Vario-Finanzierung",
    description:
    'Die <span>Vario-Finanzierung</span>kombiniert Elemente aus Leasing und klassischer Finanzierung. Während der Laufzeit zahlen Sie konstante monatliche Raten, die oft niedriger sind, da eine hohe Schlussrate anfällt, wenn Sie das Fahrzeug am Ende übernehmen möchten. Am Ende der Vertragslaufzeit haben Sie die Möglichkeit, das Fahrzeug entweder zurückzugeben, es durch eine Anschlussfinanzierung zu übernehmen oder es durch Zahlung der Schlussrate zu erwerben. Diese Option bietet eine hohe Flexibilität, da Sie am Ende der Laufzeit entscheiden können, wie Sie weiter vorgehen möchten – ähnlich der 3-Wege-Finanzierung, jedoch mit zusätzlichen Anpassungsmöglichkeiten je nach Ihren Bedürfnissen.'
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
  checklistTitle: "Das Wichtigste zu Autokrediten",
  checklistItems: [
    {
      text: "Mit einem unabhängigen Autokredit können Käufer im Vergleich zu Händlerfinanzierungen sparen, insbesondere durch Barzahlerrabatte und günstige Zinssätze."
    },
    {
      text: "Autokredite bieten durch die Zweckbindung oft niedrigere Zinssätze, da das Fahrzeug als Sicherheit dient."
    },
    {
      text: "Mit dem Autokredit-Rechner können Käufer die Kosten von Bank- und Händlerfinanzierungen vergleichen und potenzielle Einsparungen ermitteln."
    },
  ],
  guaranteeText: "Ihr Günstiger Sofortkredit – Unsere Garantie",
  guaranteeDescription: [
    "Wir überweisen Ihnen eine Einmalzahlung, wenn das günstigste über  Mibug Credit.de gefundene Kreditangebot nicht günstiger sein sollte als ein vergleichbares, nicht über mibugcredit.de vermitteltes Kreditangebot einer inländischen Bank (Referenzangebot) und Sie Ihren Kredit trotzdem über Mibug Credit.de abschließen. Durch die Einmalzahlung unterbieten wir das Referenzangebot.",
    "Die tatsächliche Höhe der Einmalzahlung richtet sich nach den Kreditangeboten, die Ihnen die Banken auf Mibug Credit.de auf Basis der von Ihnen im Kreditvergleich gemachten Angaben unterbreiten."
  ]
}

const autoCreditComparison = [
  {
    number: '1',
    title: 'Die Rolle der Zinsen',
    text:
    'Ein zentraler Aspekt bei jedem Autokredit-Vergleich sind die Zinsen. Der Autokredit-Vergleich der Zinsen ist entscheidend, da selbst kleine Unterschiede in den Zinssätzen über die gesamte Laufzeit des Kredits zu erheblichen Kostendifferenzen führen können. Beim Vergleich der Zinsen sollten Sie nicht nur auf den Nominalzins achten, sondern auch den <span>effektiven Jahreszins</span> berücksichtigen. Dieser gibt Aufschluss über die Gesamtkosten des Kredits, einschließlich aller Nebenkosten. Ein gründlicher Autokredit-Vergleich hinsichtlich der Zinsen kann Ihnen helfen, versteckte Kosten aufzudecken und das wirklich günstigste Angebot zu identifizieren. Bedenken Sie auch, dass die Zinsen bei einem Autokredit oft von Faktoren wie Ihrer Bonität, der Kredithöhe und der Laufzeit abhängen. Ein umfassender Autokredit-Vergleich berücksichtigt all diese Aspekte.',
  },
  {
    number: '2',
    title: 'Laufzeiten und Flexibilität',
    text:
    'Neben den Zinsen spielen auch die Laufzeiten eine wichtige Rolle im Autokredit-Vergleich. Längere Laufzeiten können zwar zu niedrigeren monatlichen Raten führen, erhöhen aber oft die Gesamtkosten des Kredits. Ein sorgfältiger Autokredit-Vergleich sollte daher verschiedene Laufzeitoptionen gegenüberstellen. Achten Sie bei Ihrem Autokredit- Vergleich auch auf die Flexibilität der Angebote. Möglichkeiten zur vorzeitigen Rückzahlung oder Sondertilgungen können langfristig viel Geld sparen. Ein guter Autokredit-Vergleich berücksichtigt diese Optionen und hilft Ihnen, einen Kredit zu finden, der sich an verändernde Lebensumstände anpassen lässt. Vergessen Sie nicht, dass ein Autokredit eine langfristige finanzielle Verpflichtung ist. Ein umfassender Autokredit-Vergleich, der Laufzeiten und Flexibilität einbezieht, kann Ihnen helfen, eine nachhaltige und komfortable Finanzierungslösung zu finden.'
  },
];

const steps = [
  {
    label: 'Antragsstrecke ausfüllen',
    description:
    'Damit wir für Sie passende Autokredite ermitteln können, geben Sie zunächst die Eckdaten Ihres gewünschten Autokredits ein. Falls Sie eine Anzahlung leisten möchten, können Sie auch den entsprechenden Betrag eingeben. Anschließend werden Angaben zu Ihren persönlichen und finanziellen Voraussetzungen abgefragt. Falls Sie einen zweiten Kreditnehmer eintragen möchten, ist dies ebenfalls in diesem Schritt möglich.',
  },
  {
    label: 'Autokredite vergleichen',
    description:
    'Nachdem Sie alle Eingaben für den Autokredit-Vergleich getätigt haben, erhalten Sie direkt im Anschluss eine personalisierte Angebotsübersicht. Alle aufgelisteten Autokredite sind auf Ihre persönlichen und finanziellen Voraussetzungen abgestimmt. Sie sehen auf einen Blick die Konditionen der Angebote, erkennen Sparpotenziale und können so einen Vergleich vornehmen. Wählen Sie anschließend einfach Ihren gewünschten Autokredit aus.'
  },
  {
    label: 'Finanzierung online abschließen',
    description:
    'Sie können Ihren Autokredit bei uns vollständig digital abschließen. Bei einer Kreditzusage profitieren Sie so von einer schnellen Auszahlung Ihres Autokredits. Für den Online-Vertragsabschluss nutzen Sie das Video-Ident-Verfahren per Smartphone oder PC, unterschreiben den Vertrag per elektronischer Signatur und senden die gewünschten Unterlagen per Dokumenten-Upload. Bei Kreditzusage wird der Kreditbetrag zeitnah auf Ihr angegebenes Konto überwiesen.'
  },
];


const sections = [
  { id: "video", label: "Video: Autokredit - So geht's", component:
      <SofortkreditComponent
        checklistTitle={creditComponent.checklistTitle}
        checklistItems={creditComponent.checklistItems}
        guaranteeText={creditComponent.guaranteeText}
        guaranteeDescription={creditComponent.guaranteeDescription}
      />,
    bg: "white"
  },
  { id: "antragsprozess", label: "Der Antragsprozess", component: <AutoCreditComparison sections={autoCreditComparison} />, bg: "white"  },

  { id: "autokreditrechner", label: "Autokreditrechner", component:
      <SofortkreditStepByStep
        title="In 3 Schritten zu Ihrem günstigen Autokredit"
        steps={steps}
        buttonName="Jetzt Autokredite holen"
      />,
    bg: "#F0F0F0"
  },
  { id: "rechenbeispiele", label: "Rechenbeispiele", component: <AutoKreditTable />, bg: "#F0F0F0"  },
  { id: "vorteile", label: "Ihre Vorteile", component: <ZinsInfoSection />, bg: "white"  },
  { id: "finanzierungen", label: "Alternative Finanzierungen", component:
      <BenefitsSection
        benefits={benefits}
        title="Ihre Vorteile beim Autokredit"
      />,
    bg: "white"
  },
  { id: "kundenbewertungen", label: "Kundenbewertungen", component: <ContentCard />, bg: "white"  },
  { id: "voraussetzungen", label: "Voraussetzungen", component:
      <BenefitsSection
        benefits={benefits2}
        title="Alternative Finanzierungen"
      />,
    bg: "white"
  },
  { id: "info", label: "Info", component:
      <Alert title="Jeder dritte Privatkäufer finanziert oder least bereits"
             description="Sowohl bei neuen als auch bei gebrauchten Autos spielt die <span>Finanzierung</span> eine bedeutende Rolle in Deutschland. Laut einer bevölkerungsrepräsentativen Studie des Bankenfachverbandes aus dem Jahr 2022 wurden etwa 35 Prozent aller privaten PKW durch Kredite oder Leasing erworben. Interessanterweise liegt der Anteil bei <span>Neuwagenkäufen</span> bei rund 47 Prozent, während bei <span>Neuwagenkäufen</span> Gebrauchtwagen die Finanzierungsquote bei etwa 27 Prozent liegt. <br/> <b>Quelle:</b> Statista (2024)"
      />
    , bg: "white"
  },
  { id: "gründe", label: "Gründe", component: <FlipCardList items={flipCardData} />, bg: "#F0F0F0"  },
  { id: "dafür", label: "Dafür", component: <Requirements />, bg: "white"  },
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

const Autokredit = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <LoanCalculator teaser="Schnell und einfach online beantragen" title="Autokredit" backgroundImage={autocredit} subTitle="SCHUFA-neutraler Kreditvergleich mit Sofortauszahlung" />
      <SliderSection partnerIcons={partnerIcons} />
      <Box className={classes.scrollSpyContainer}>
        <Box className={classes.scrollSpy}>
          <ScrollSpy sections={sections} />
        </Box>
      </Box>
    </Box>
  );
};

export default Autokredit;
