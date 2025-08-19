import React from "react";
import {
  Typography,
  Box,
  Theme,
} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import BenefitsSection from "../BenefitsSection";
import clock from "../../../../icons/clock.svg";
import db from "../../../../icons/db.svg";
import file from "../../../../icons/file.svg";
import report from "../../../../icons/report.svg";
import Alert from "../../../../components/Alert";

const classes = generateUtilityClasses("Digitaler", [
  "container",
  "header",
  "footer",
  "highlightText",
  "root",
  "title",
  "table",
  "tableHeader",
  "highlightCell",
  "borderCell",
  "footerText",
  "button",
  "wrap",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    [theme.breakpoints.down(900)]: {
      padding: "20px 0",
    }
  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
  },
  [`& .${classes.title}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "24px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.table}`]: {
    margin: "40px 0",
    borderCollapse: "collapse",
    b: {
      fontWeight: "bolder",
    }
  },
  [`& .${classes.tableHeader}`]: {
    backgroundColor: "#fff",
    fontWeight: 700,
    border: "1px solid #ccc",
    [`& .${classes.borderCell}`]: {
      fontWeight: 700,
      backgroundColor: "#DEEDE0"
    },
  },
  [`& .${classes.borderCell}`]: {
    border: "1px solid #BEBFBD",
    fontSize: "14px",
    fontWeight: 300,
    color: "#172507",
    lineHeight: "1.33",
    padding: "16px",
    verticalAlign: "top",
  },
  [`& .${classes.highlightCell}`]: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  [`& .${classes.footerText}`]: {
    fontSize: "14px",
    lineHeight: "20px",
    color: "#172507",
    span: {
      color: theme.palette.primary.main,
    },
  },
  [`& .${classes.button}`]: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    padding: "10px 20px",
    minWidth: "265px",
  },
});

const benefits = [
  {
    icon: clock,
    title: "Digitaler Kontoblick",
    description:
    'Der <span>digitale Kontoblick</span> ermöglicht es, einen Online-Kreditprozess deutlich zu beschleunigen. Indem der Kreditgeber einen einmaligen Blick auf Ihr Girokonto erhält, können relevante Informationen wie Einkommen und Ausgaben direkt ausgewertet werden. Der digitale Prozess ist sicher und verschlüsselt, sodass Ihre Daten geschützt bleiben. Nutzen Sie diese Option, um Ihren Kredit schneller und bequemer abzuschließen und die Auszahlung möglicherweise noch am selben Tag zu erhalten.'
  },
  {
    icon: db,
    title: "Dokumente online hochladen",
    description:
    `Dank unserem digitalen Antragsprozess können Sie die erforderlichen Unterlagen für Ihren Kredit einfach online hochladen. Die meisten mibugcredit-Partner bieten diesen sogenannten <span>Dokumenten-Upload</span> an, um Kredite noch schneller abwickeln und auszahlen zu können. Scannen Sie die Unterlagen einfach ein oder fotografieren Sie diese ab und laden sie diese als Datei hoch.`
  },
  {
    icon: file,
    title: "Identität per Video-Anruf bestätigen",
    description:
    'Zudem gibt es bei vielen unserer Banken und Partner die Möglichkeit, sich mithilfe des <span>Video-Ident-Verfahrens</span> noch schneller auszuweisen. Hierfür werden eine Smartphone-Kamera oder eine Webcam sowie eine stabile Internetverbindung benötigt, um einen Video-Anruf durchzuführen. Ein Mitarbeiter des jeweiligen Video-Ident-Anbieters überprüft dabei Ihre Identität, indem Sie Ihren gültigen Personalausweis oder Reisepass vor der Kamera ausrichten. Anschließend bekommt auch hier die Bank eine Bestätigung.'
  },
  {
    icon: report,
    title: "Qualifizierte elektronische Signatur",
    description:
    'Je nach Kreditgeber müssen Sie Ihren Vertrag nicht mehr handschriftlich signieren, sondern können auf eine <span>digitale Unterschrift</span> zurückgreifen. Wie das funktioniert? Sie bekommen eine TAN zugeschickt und tragen diese im vorgesehenen Bereich ein, um Ihre rechtsgültige Unterschrift zu leisten. Stift und Papier werden somit durch die TAN ersetzt, die Sie per Tastendruck schnell und einfach eingeben. Ein digital unterzeichneter Kreditvertrag ist somit genauso rechtssicher und gültig wie handsignierte Dokumente und Sie sparen Zeit.'
  },
];


const Digitaler = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>
        Digitaler Kreditabschluss mit mibugcredit.de
      </Typography>

      <Typography variant="body2" className={classes.footerText}>
        Durch die <span>Ablösung bestehender Kredite</span>  lässt sich oft bares Geld sparen.
        Eine Umschuldung ermöglicht es, von niedrigeren Zinsen und besseren Konditionen
        zu profitieren – egal, ob es sich um einen Dispokredit, Ratenkredit, Baufinanzierung oder Autokredit handelt. Wie Sie am besten vorgehen und worauf zu achten
        ist, erfahren Sie auf unserer Ratgeberseite zur Kreditablösung.
      </Typography>
      <Box className={classes.wrap}>

      </Box>
      <BenefitsSection
        benefits={benefits}
      />
      <Alert
        title="Hinweis"
        description="Ein Kredit bei mibugcredit.de muss nicht unbedingt digital abgeschlossen werden. Für die Verifizierung, also die Bestätigung Ihrer
      Identität gegenüber dem Kreditgeber, können Sie alternativ das <span>Post-Ident-Verfahren</span> nutzen. Ihre Dokumente und den Vertrag
      können Sie wie gewohnt auch als Brief an das Kreditinstitut schicken."
      />
    </Box>
  );
};

export default Digitaler;
