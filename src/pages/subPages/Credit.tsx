import React from "react";
import {Box, generateUtilityClasses, Theme, Typography} from "@mui/material";
import LoanCalculator from "./components/LoanCalculator";
import SliderSection from "./components/SliderSection";
import ScrollSpy from "./components/ScrollSpy";
import umschuldung from "../../icons/credit/umschuldung.png";
import SofortkreditComponent, {SofortkreditComponentClasses} from "./components/SofortkreditComponent";
import SofortkreditStepByStep from "./components/SofortkreditStepByStep";
import BenefitsSection from "./components/BenefitsSection";
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
import CustomerReviews from "./components/privateCredit/CustomerReviews";
import turkey from "../../icons/countries/turkey.svg";
import poland from "../../icons/countries/poland.svg";
import Italy from "../../icons/countries/Italy.svg";
import uk from "../../icons/countries/uk.svg";
import russia from "../../icons/countries/russia.svg";
import romania from "../../icons/countries/romania.svg";
import ukraine from "../../icons/countries/ukraine.svg";
import Digitaler from "./components/credit/Digitaler";
import credit from "../../icons/credit/credit.png";
import Advantages from "./components/credit/Advantages";
import CreditTable from "./components/credit/CreditTable";
import InterestRates from "./components/credit/InterestRates";
import FlipCardList from "./components/FlipCardList";
import OurTips from "./components/credit/OurTips";

const classes = generateUtilityClasses("Credit", [
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
    title: "Ratenkredit",
    description:
    'Wenn von einem Kredit die Rede ist, handelt es sich in den meisten Fällen um einen <a href="/kredit/ratenkredit" tabindex="0">Ratenkredit</a>. Die Höhe des Geldbetrages wird bei Ratenkrediten vorab festgelegt und anschließend in monatlich gleichbleibenden Beträgen an den Kreditgeber zurückgezahlt. Die Laufzeit kann hierbei an die eigenen Voraussetzungen bzw. Möglichkeiten angepasst werden. Die Höhe des Zinssatzes richtet sich vor allem nach der finanziellen Ausgangslage des jeweiligen Kreditnehmers.'
  },
  {
    icon: db,
    title: "Autokredit",
    description:
    'Mit einem <a href="/autokredit" tabindex="-1">Autokredit</a> können Sie Ihr gewünschtes Fahrzeug finanzieren – egal, ob Neu-, Gebrauchtwagen oder Motorrad. Nicht nur Autohändler, sondern auch externe Banken bieten Autofinanzierungen an. Der Vorteil bei der unabhängigen Finanzierung ist, dass Sie sich gegenüber dem Händler Barzahlerrabatte sichern können – nicht selten in Höhe von 10 bis 20 Prozent. Außerdem profitieren Sie von der freien Anbieterwahl, wenn Sie Ihr Auto über unser Portal finanzieren. Hingegen kooperieren Händler meistens nur mit 1 – 2 Vertragsbanken.'
  },
  {
    icon: file,
    title: "Umschuldungskredit",
    description:
    'Banken und Wirtschaftsauskunfteien bewerten es in der Regel als negativ, wenn Verbraucher mehrere kleine Kredite parallel nutzen. Durch eine <a href="/umschuldung" tabindex="-1">Umschuldung</a> können Sie alle bestehenden Darlehen zu einem einzigen Kredit zusammenfassen und Ihre Bonität somit wiederherstellen. Zudem sparen Sie durch die Zinssenkung bares Geld. Gleichzeitig verschaffen Sie sich einen besseren Überblick über Ihre Finanzen.<'
  },
  {
    icon: report,
    title: "Immobilienkredit",
    description:
    'Wer ein Haus bauen oder eine Immobilie kaufen möchte, kann sich mit einer <a href="/baufinanzierung/" tabIndex="-1">Baufinanzierung</a> auch mit wenig Eigenkapital den Traum von den eigenen vier Wänden erfüllen. Ob klassisches Annuitätendarlehen oder andere Modelle wie Volltilger- oder Forward-Darlehen. Für Ihre individuellen Bedürfnisse gibt es die passende Finanzierung.'
  },
  {
    icon: file,
    title: "Privatkredit",
    description:
    'Ein <a href="/privatkredit/" tabIndex="-1">Privatkredit</a> ist ein zweckfreies Darlehen, das Privatpersonen von Banken oder Finanzdienstleistern erhalten können. Der Kreditnehmer zahlt den Betrag in festen monatlichen Raten zurück, die durch den Zinssatz und die Laufzeit bestimmt werden. Privatkredite werden häufig für größere Anschaffungen oder zur Umschuldung genutzt.'
  },
  {
    icon: report,
    title: "Sofortkredit",
    description:
    'Ein <a href="/kredit/sofortkredit/" tabindex="-1">Sofortkredit</a> ist ein schnell verfügbarer Online-Kredit, bei dem die Kreditanfrage und -bewilligung rasch erfolgt. Nach der Übermittlung der erforderlichen Unterlagen wird der Kredit oft innerhalb weniger Werktage ausgezahlt. Er eignet sich besonders für kurzfristige finanzielle Engpässe und bietet flexible Laufzeiten und Zinssätze.'
  },
];

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
    backDescription: "Mehr als 20 Partner und Banken kooperieren mit mibug. Dank der großen Auswahl finden Sie besonders günstige Kredite.",
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
  checklistTitle: "Das Wichtigste zum Online Kredit bei mibugcredit",
  checklistItems: [
    {
      text:
      'Über mibugcredit können Sie kostenlos Kredite von über 20 Banken vergleichen, ohne dass Ihr SCHUFA-Score beeinflusst wird. Sie erhalten maßgeschneiderte Angebote mit exklusiven Konditionen.'
    },
    {
      text:
      'Der digitale Antragsprozess ermöglicht eine schnelle Kreditvergabe, bei der Sie Unterlagen online hochladen und Ihre Identität per Video-Ident bestätigen können. Der digitale Kontoblick beschleunigt die Bearbeitung zusätzlich.'
    },
    {
      text:
      'mibugcredit bietet eine Günstiger-Geht-Nicht-Garantie, bei der Sie eine Einmalzahlung erhalten, falls Sie woanders ein günstigeres Kreditangebot finden.'
    },
    {
      text:
      'Über 250 qualifizierte Kreditberater stehen Ihnen bei Fragen zur Seite und helfen Ihnen, den passenden Kredit zu finden – telefonisch und kostenlos.'
    },
  ],
  guaranteeText: "Ihr Günstiger Sofortkredit – Unsere Garantie",
  guaranteeDescription: [
    'Wir überweisen Ihnen eine Einmalzahlung, wenn das günstigste über  mibugcredit.de <span>gefundene</span> Kreditangebot nicht günstiger sein sollte als ein vergleichbares, nicht über mibugcredit.de vermitteltes Kreditangebot einer inländischen Bank (Referenzangebot) und Sie Ihren Kredit trotzdem über Mibugcredit.de abschließen.\n' +
    'Durch die Einmalzahlung unterbieten wir das Referenzangebot.\n' +
    'Die tatsächliche Höhe der Einmalzahlung richtet sich nach den Kreditangeboten, die Ihnen die Banken auf mibugcredit.de auf Basis der von Ihnen im Kreditvergleich gemachten Angaben unterbreiten.'
  ]
}

const steps = [
  {
    label: 'Unverbindliche Konditionenanfrage stellen',
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




const SofortComponent = () => (
  <SofortkreditComponent
    checklistTitle={creditComponent.checklistTitle}
    checklistItems={creditComponent.checklistItems}
    guaranteeText={creditComponent.guaranteeText}
    guaranteeDescription={creditComponent.guaranteeDescription}
  >
    <Typography className={SofortkreditComponentClasses.sectionTitle}>Kredite von über 20 Banken kostenlos vergleichen</Typography>
    <Typography className={SofortkreditComponentClasses.checklistText}>Durch unsere langjährige <b>Zusammenarbeit mit über 20 Banken</b>  können wir Ihnen exklusive Konditionen für Ihren Kredit anbieten. Der Kreditvergleich und die
      damit verbundene Konditionenanfrage sind SCHUFA-neutral. So sparen Sie bares Geld und haben beste Chancen auf Ihren <b>Wunschkredit</b>. Unser
      maßgeschneiderter Kreditvergleich erstellt für Sie eine <b>persönliche Angebotsübersicht</b>, die perfekt zu Ihren individuellen Voraussetzungen passt. Dadurch sind
      die monatlichen Raten ideal auf Ihr Budget abgestimmt.</Typography>
    <Typography className={SofortkreditComponentClasses.checklistText}>Zudem garantieren wir höchste Sicherheit: wir unterliegen dem Bankgeheimnis und lassen uns regelmäßig vom <span>TÜV Saarland</span> auf den Datenschutz überprüfen. Ihre Informationen sind bei uns also in besten Händen. Und dank unseres <span>Online-Verfahrens</span> können Sie Ihren Kredit schnell und unkompliziert beantragen.
      Die Auszahlung erfolgt dann zügig – ohne langes Warten.
    </Typography>
  </SofortkreditComponent>
);

const partnerReviews = [
  { src: turkey, alt: "Türkçe" },
  { src: poland, alt: "Polski" },
  { src: Italy, alt: "Italiano" },
  { src: uk, alt: "English" },
  { src: russia, alt: "Русский" },
  { src: romania, alt: "Românesc" },
  { src: ukraine, alt: "Українська" },
];


const sections = [
  { id: "der-antragsprozess", label: "Der Antragsprozess", component:
    <SofortComponent />,
    bg: "white"
  },
  { id: "digitaler", label: "Digitaler Kreditabschluss", component: <TrustSection />, bg: "#F0F0F0"  },
  { id: "kreditberatung", label: "Kreditberatung", component:
      <CustomerReviews
        title="Kreditberatung auf Deutsch und weiteren Sprachen"
        partnerIcon={partnerReviews}
      />,
    bg: "white"
  },
  { id: "voraussetzungen", label: "Voraussetzungen", component:
      <SofortkreditStepByStep
        title="In 3 Schritten günstige Kreditzinsen vergleichen"
        steps={steps}
        subTitle="Mit wenigen Klicks können Sie bei uns passende und günstige Kreditangebote vergleichen, die Ihren Bedürfnissen und Plänen entsprechen. Nutzen Sie unseren Online-Kreditvergleich und erhalten Sie eine <b>individuelle Übersicht</b> Ihrer Angebote und des effektiven Jahreszins. So funktioniert’s:"
        buttonName="Jetzt zum günstigen Kredit"
      />,
    bg: "white"
  },
  { id: "verwendungszwecke", label: "Verwendungszwecke", component:
    <Digitaler />
    ,
    bg: 'white'
  },
  { id: "unterlagen", label: "Benötigte Unterlagen", component:
      <CreditRequirements
        title="Benötigte Unterlagen für einen Kredit"
        description="Welche Dokumente für die Prüfung der Voraussetzungen angefordert werden, variiert je nach Kreditgeber. Was für Ihren Kredit gilt, steht in Ihrem Kreditvertrag. In vielen Fällen sind es jedoch die folgenden Nachweise:"
        list={[
          'Gehaltsabrechnungen',
          'Kontoauszüge mit Gehaltseingang',
          'Kopie des Arbeitsvertrags (z. B. bei Berufseinsteigern)',
          'Steuerbescheide (bei Selbstständigen bzw. Freiberuflern, die ihr Einkommen nicht über Gehaltsnachweise belegen können)',
        ]}
        backgroundImage={credit}
      />,
    bg: ""
  },
  { id: "rechenbeispiele", label: "Rechenbeispiele", component: <Advantages />, bg: "white"  },
  { id: "4", label: "Benötigte Unterlagen", component:
      <CreditTable />,
    bg: "#F0F0F0"
  },
  { id: "aktuelle", label: "Aktuelle Zinsen", component:
      <InterestRates />,
    bg: "white"
  },
  { id: "zinskonditionen", label: "Exklusive Zinskonditionen", component:
      <FlipCardList items={flipCardData} />,
    bg: "#F0F0F0"
  },
  { id: "vorteile", label: "Ihre Vorteile", component:
      <BenefitsSection benefits={benefits} title="Unsere günstigen Kreditarten" />,
    bg: "white"
  },
  { id: "faqs", label: "FAQs", component: <FAQAccordion/>, bg: "#F0F0F0"  },
  { id: "unsere-tipps", label: "Unsere Tipps", component: <OurTips/>, bg: "white"  },
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

const Credit = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <LoanCalculator
        teaser="Mibug Credit mit Sofortauszahlung"
        title="Der Online-Kredit, der genau zu Ihnen passt"
        backgroundImage={umschuldung}
        subTitle="Vergleichen Sie unverbindlich, schnell und SCHUFA-neutral"
      />
      <SliderSection partnerIcons={partnerIcons} />
      <Box className={classes.scrollSpyContainer}>
        <Box className={classes.scrollSpy}>
          <ScrollSpy sections={sections} />
        </Box>
      </Box>
    </Box>
  );
};

export default Credit;
