import React from 'react';
import {Box, generateUtilityClasses, Theme} from '@mui/material';
import money from "../../../../icons/credit/money.svg";
import car from "../../../../icons/credit/car.svg";
import building from "../../../../icons/credit/building.svg";
import tools from "../../../../icons/credit/tools.svg";
import balance from "../../../../icons/credit/balance.svg";
import briefcase from "../../../../icons/credit/briefcase.svg";
import phone from "../../../../icons/phone.svg";
import ChecklistSection from '../ChecklistSection';
import Alert from '../../../../components/Alert';
import BenefitsSection from "../BenefitsSection";
import LoanCards, {LoanCardOption, LoanCardsOptionsEnum} from "../LoanCards";

const classes = generateUtilityClasses('Advantages', [
  'root',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
});

const checklistItems = [
  { text: "Volljährigkeit" },
  { text: "Wohnsitz in Deutschland" },
  { text: "Konto in Deutschland" },
  { text: "Regelmäßiges Einkommen" },
  { text: "Ausreichende Bonität" },
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

const benefits = [
  {
    icon: phone,
    title: "Freie Verwendung",
    description:
    'Entscheiden Sie selbst, ob Sie mit Ihrem Kredit eine neue Waschmaschine kaufen, den nächsten Urlaub bezahlen oder Handwerkerrechnungen begleichen. Bei einem <span>Allzweckkredit</span> müssen Sie keinen Verwendungsnachweis erbringen und können das Geld frei verwenden. Das gibt Ihnen mehr Flexibilität, wenn Sie verschiedene Vorhaben mit dem Geld finanzieren möchten.'
  },
  {
    icon: money,
    title: "Fahrzeug",
    description:
    'Wenn Sie ein Auto, ein Motorrad oder ein anderes Fahrzeug finanzieren möchten, bieten Ihnen die Kreditgeber oft besonders Mibug Credit an. Denn bei dieser Art der Finanzierung gehen die Kreditgeber ein geringeres finanzielles Risiko ein, da das Fahrzeug als Sicherheit für den <span>Autokredit</span> dient. Der Fahrzeugbrief wird in der Regel von den Banken einbehalten.'
  },
  {
    icon: car,
    title: "Modernisierung",
    description:
    'Wenn Sie <span>Modernisierungskredite</span> vergleichen, gewähren unsere Banken und Partner in der Regel einen niedrigen Zinssatz. Wichtig ist, dass der Kredit werterhaltend oder wertsteigernd eingesetzt wird. Das führt letztlich zu besseren Konditionen und damit zu einem günstigen Kredit.'
  },
  {
    icon: phone,
    title: "Baufinanzierung",
    description:
    'Die <span>Baufinanzierung</span> oder auch eine Immobilienfinanzierung ist ein zweckgebundener, langfristiger Kredit. Die dafür notwendigen hohen Geldsummen werden oft zu guten Konditionen vergeben, allerdings ist hier eine hohe Zahlungsmoral erforderlich, da die Immobilie als Sicherheit für die Bank auch veräußert werden kann.'
  },
  {
    icon: building,
    title: "Umschuldung",
    description:
    'Bei einem <span>Umschuldungskredit</span> wird ein bereits bestehender Kredit mit einem neuen Kredit getilgt. Mit einer Umschuldung können Sie aber nicht nur Ihren alten Ratenkredit günstig ablösen, sondern auch teure Dispokredite ersetzen. Verbraucher, die den Dispo dauerhaft in Anspruch nehmen, können durch die deutlich niedrigeren Kreditzinsen eines Ratenkredits sparen.'
  },
  {
    icon: tools,
    title: "Gewerbe",
    description:
    'Die Ausgangslage bei Selbstständigen bzw. Unternehmern unterscheidet sich grundlegend von der einer Privatperson. mibugcredit.de hat sich mit bestimmten Kreditvergabepartnern auf die besonderen Bedürfnisse eingestellt. Daher können wir dieser Zielgruppe passende und günstige <span>Gewerbekredite</span> anbieten.'
  },
];

const Advantages: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <ChecklistSection
        title="Voraussetzungen für die Kreditaufnahme"
        description="Der Kreditgeber, der Ihnen das Geld zur Verfügung stellt, muss mit hoher Wahrscheinlichkeit von einer vertragsgemäßen Rückzahlung ausgehen können. Daher sind einige Kriterien zu erfüllen. Einige davon sind vom Gesetzgeber vorgeschrieben, denn Sie schützen letztlich nicht nur die Banken, sondern auch den Kreditnehmer selbst. Andere variieren je nach Bank. Das sind die wichtigsten Bedingungen:"
        items={checklistItems}
      />

      <Alert
        title="Hinweis"
        description="Die <span>Bonität</span> (= Kreditwürdigkeit) wird anhand eines sogenannten <span>Bonitätsscores</span> von verschiedenen Auskunfteien (z. B. der SCHUFA) ermittelt und an den Kreditgeber weitergegeben. Dabei geht es weniger um Ihren konkreten Kontostand, sondern vielmehr um ein ausgewogenes Verhältnis von Einnahmen und Ausgaben. Darüber hinaus spielt das Zahlungsverhalten in der Vergangenheit für die Bonität eine Rolle: wer seine Rechnungen immer regelmäßig und vollständig bezahlt hat, wird in der Regel einen guten Bonitätsscore haben."
      />


      <LoanCards
        title="Verwendungszwecke für Ihren Online-Kredit"
        buttonName="Jetzt starten"
        options={options}
      />

      <BenefitsSection benefits={benefits} />
    </Box>
  );
};

export default Advantages;
