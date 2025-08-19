import React from 'react';
import {Box, generateUtilityClasses, Theme} from '@mui/material';
import money from "../../../icons/credit/money.svg";
import car from "../../../icons/credit/car.svg";
import building from "../../../icons/credit/building.svg";
import tools from "../../../icons/credit/tools.svg";
import balance from "../../../icons/credit/balance.svg";
import briefcase from "../../../icons/credit/briefcase.svg";
import ProfileCard from "./ProfileCard";
import BenefitsSection from "./BenefitsSection";
import latter from "../../../icons/latter.svg";
import phone from "../../../icons/phone.svg";
import unsplash from "../../../icons/credit/unsplash.png";
import ChecklistSection from "./ChecklistSection";
import LoanCards, { LoanCardOption, LoanCardsOptionsEnum } from "./LoanCards";

const classes = generateUtilityClasses('RadioIconSelect', [
  'root',
  'wrap',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.wrap}`]: {
    margin: "30px 0"
  },
});

const checklistItems = [
  { text: "eine dringende Auto-Reparatur," },
  { text: "eine unerwartet hohe Nebenkostennachzahlung," },
  { text: "unerwartete Steuernachzahlungen," },
  { text: "Kosten für dringende Reparaturen in den eigenen vier Wänden," },
  { text: "den Ausgleich des Kontos, um die hohen Dispo-Zinsen zu vermeiden." },
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

const profileCard = {
  content: "Gerade bei finanziellen Engpässen ist es wichtig, den Kreditbetrag schnell ausgezahlt zu bekommen. Bei einem Online-Sofortkredit können Sie alle notwendigen Schritte bis zum Kreditabschluss online erledigen. Dadurch geht die Prüfung Ihres Kreditantrags besonders schnell und bei einer Zusage erhalten Sie das Geld direkt auf Ihr Konto überwiesen.",
  name: "Felix Tillmann",
  role: "Spezialist für Ratenkredite und Bankenprodukte",
  avatar: unsplash,
}

const benefits = [
  {
    icon: phone,
    title: "Video-Ident-Verfahren",
    description:
    'Bestätigen Sie die Angaben zu Ihrem Kreditantrag sowie Ihre <span>Identität einfach per Video-Anruf</span>. Dafür benötigen Sie neben Ihrem gültigen Lichtbildausweis lediglich eine stabile Internetverbindung sowie ein entsprechendes Endgerät. Während des Anrufs werden Sie gebeten, Ihr Ausweisdokument zur Identifizierung vor der Kamera auszurichten. Abschließend erhalten Sie per SMS eine TAN zugeschickt, die Sie nur noch eingeben müssen, um den Vorgang abzuschließen.'
  },
  {
    icon: latter,
    title: "Post-Ident-Verfahren",
    description:
    'Legitimieren können Sie sich mit Ihrem Personalausweis und Ihren Unterlagen (inklusive Post-Ident-Coupon) auch bei der nächstgelegenen Postfiliale. Hier prüft ein Postangestellter, ob alle Angaben korrekt sind und sämtliche Unterlagen vorliegen. Anschließend gibt er eine <span>Bestätigung</span> an die Bank weiter. Diese prüft dann Ihrerseits, ob alles passt. Anschließend kann die Auszahlung im Falle einer Kreditzusage erfolgen.'
  },
];

const RadioIconSelect: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <ChecklistSection
        title="Dafür sind Sofortkredite geeignet"
        description="Manchmal muss das Geld einfach schnell verfügbar sein. Daher eignet sich ein Kredit mit Sofortzusage und schneller Auszahlung insbesondere für:"
        items={checklistItems}
      />

      <Box className={classes.wrap}>
        <LoanCards
          title="Wie möchten Sie Ihren Sofortkredit einsetzen?"
          buttonName="Jetzt starten"
          options={options}
        />
      </Box>



      <ProfileCard
        content={profileCard.content}
        name={profileCard.name}
        role={profileCard.role}
        avatar={profileCard.avatar}
      />

      <BenefitsSection benefits={benefits} title="So legitimieren Sie sich gegenüber dem Kreditgeber" />
    </Box>
  );
};

export default RadioIconSelect;
