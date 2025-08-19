import React from "react";
import {Box, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import ChecklistSection, {ChecklistSectionClasses} from "../ChecklistSection";
import SingleAuthorList, {SingleAuthorListClasses} from "../SingleAuthorList";
import mariusMueller from "../../../../icons/credit/mariusMueller.png";
import logo from "../../../../icons/credit/logo.svg";

const classes = generateUtilityClasses("Requirements", [
  "root",
]);


const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${ChecklistSectionClasses.wrap}`]: {
    padding: "24px",
    borderRadius: "3px",
    marginBottom: "16px",
    boxSizing: "border-box",
    boxShadow: "0 3px 8px 0 rgba(44,50,39,.25)",
  },
  [`& .${SingleAuthorListClasses.root}`]: {
    marginLeft: "0px !important",
  },
});

const checklistItems = [
  { text: "Volljährigkeit" },
  { text: "Wohnsitz und Konto in Deutschland" },
  { text: "Regelmäßiges Einkommen" },
  { text: "Ausreichende Bonität" },
];

const checklistItems2 = [
  { text: "Gehaltsabrechnungen / Einkommensnachweise" },
  { text: "Steuerbescheide (z.B. bei Selbstständigen)" },
  { text: "Zulassungsbescheinigung Teil 2 des Fahrzeugs (dabei handelt es sich um den Fahrzeugbrief)" },
  { text: "Informationen und Nachweise zum Fahrzeug (Marke, Modell, Erstzulassung, Kilometerstand)" },
  { text: "BWA – Betriebswirtschaftliche Auswertung (bei Selbstständigen)" },
  { text: "<span>Sicherungsübereignungsvertrag</span>" },
];

const singleAuthorList = [
  {
    name: "Marius Müller",
    role: "Geschrieben von",
    title: "Spezialist für Ratenkredite und Bankenprodukte",
    description:
    'Der gelernte Kaufmann im Groß- und Außenhandel ist seit 2021 in der Mibug Credit Kreditberatung tätig. Als Senior Kreditberater bringt er die notwendige Erfahrung sowie das kundenorientierte Expertenwissen mit, um Mibug Credit-Kunden das bestmögliche Kreditangebot zu ermöglichen. Marius hat weitreichende Kenntnisse über jegliche Formen von Krediten und Finanzierungen, das Thema energetische Modernisierung liegt ihm jedoch besonders am Herzen. Auf der Mibug Credit-Website informiert er mit viel Sachverstand und Akribie über verschiedene Kreditthemen.',
    image: mariusMueller,
  },
  {
    name: "mibug Content Team",
    role: "Geprüft durch",
    title: "Editor",
    description:
      "Das mibug Content-Team besteht aus erfahrenen und kompetenten Fachleuten, die gewissenhaft und mit Bedacht Artikel auf Mibug Credit.de vor ihrer Veröffentlichung inspizieren und gegenprüfen.",
    image: logo,
  },
];

const Requirements = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <ChecklistSection
        title="Dafür sind Sofortkredite geeignet"
        subTitle="Voraussetzungen"
        description="Wer in Deutschland einen Autokredit beantragen möchte, muss verschiedene <span>Voraussetzungen</span>  erfüllen. Hierbei geht es um die Absicherung des Kreditgebers, aber auch des Kreditnehmers. Deshalb müssen folgende Kriterien geprüft werden:"
        items={checklistItems}
      />
      <ChecklistSection
        subTitle="Unterlagen"
        description="Welche Unterlagen für einen Autokredit erforderlich sind, hängt vom Kreditgeber ab. Die genauen Angaben finden Sie in Ihrem Kreditvertrag. Es gibt
jedoch einige Unterlagen, die in der Regel immer verlangt werden:"
        items={checklistItems2}
      />
      <SingleAuthorList authors={singleAuthorList} />
    </Box>
  );
};

export default Requirements;
