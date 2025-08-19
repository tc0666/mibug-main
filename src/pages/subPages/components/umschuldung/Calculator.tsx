import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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

const classes = generateUtilityClasses("AutoKreditTable", [
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

const tableData = [
  {
    kreditart: 'Dispokredit',
    altkredit: 'Kreditbetrag: 5.000 € <br />Zinssatz: 12 % <br />Laufzeit: 1 Jahr <br /> Gesamtkosten: 600 €',
    neuerKredit: 'Kreditbetrag: 5.000 € <br />Zinssatz: 5 % <br />Laufzeit: 1 Jahr <br /> Gesamtkosten: 250 €',
    ersparnis: '<b>350 €</b> weniger Zinskosten',
  },
  {
    kreditart: 'Ratenkredit',
    altkredit: 'Kreditbetrag: 15.000 €<br /> Zinssatz: 8 % <br />Restlaufzeit: 3 Jahre <br />Gesamtkosten: 1.800 €',
    neuerKredit: 'Kreditbetrag: 15.000 €<br /> Zinssatz: 4 % <br />Laufzeit: 3 Jahre <br /> Gesamtkosten: 900 €',
    ersparnis: '<b>900 €</b> weniger Zinskosten',
  },
  {
    kreditart: 'Baufinanzierung',
    altkredit: 'Kreditbetrag: 200.000 € <br />Zinssatz: 3,5 % <br />Laufzeit: 10 Jahre<br /> Gesamtkosten: 35.000 €',
    neuerKredit: 'Kreditbetrag: 200.000 € <br /> Zinssatz: 2 % <br />Laufzeit: 10 Jahre <br />Gesamtkosten: 20.000 €',
    ersparnis: '<b>15.000 €</b> weniger Zinskosten',
  },
  {
    kreditart: 'Autokredit',
    altkredit: 'Kreditbetrag: 10.000 € <br /> Zinssatz: 6 %<br />Restlaufzeit: 4 Jahre <br />Gesamtkosten: 2.400 €',
    neuerKredit: 'Kreditbetrag: 10.000 €<br />Zinssatz: 3 % <br />Laufzeit: 4 Jahre <br />Gesamtkosten: 1.200 €',
    ersparnis: '<b>1.200 €</b> weniger Zinskosten',
  },
];

const benefits = [
  {
    icon: clock,
    title: "Dispokredit",
    description:
    'Wer seinen Dispokredit kündigt, kann in der Regel viel Geld sparen. Denn ist das Konto im Minus, berechnet die Bank nicht selten Zinsen im zweistelligen Bereich. Ist in Ihrem Fall absehbar, dass Sie Ihr Konto nicht rechtzeitig ausgleichen können, sollten Sie den Dispokredit so schnell wie möglich durch einen günstigeren Ratenkredit ablösen. Das hat neben der erheblichen Zinsersparnis noch einen weiteren Vorteil. Beim Ratenkredit ist die Rückzahlung im Gegensatz zum Dispokredit vertraglich genau vereinbart. Das schafft mehr Planungssicherheit, denn Sie zahlen das Darlehen jeden Monat in gleichbleibenden Beträgen zurück.'
  },
  {
    icon: db,
    title: "Ratenkredit",
    description:
    'Wer einen Ratenkredit aufgenommen hat, sollte regelmäßig prüfen, ob es inzwischen bessere Konditionen am Markt gibt. Ist dies der Fall, kann sich eine Umschuldung durchaus lohnen. Entscheidend für die Höhe der Zinsersparnis durch eine Umschuldung sind unter anderem der vereinbarte Zinssatz des bestehenden Kredits, die Restlaufzeit sowie die Restschuld. Was viele Verbraucherinnen und Verbraucher nicht wissen: Auch bei Ratenkäufen in Möbelhäusern oder Autohäusern ist eine Umschuldung möglich. Denn auch hier handelt es sich um Ratenfinanzierungen, die abgelöst werden können.'
  },
  {
    icon: file,
    title: "Baufinanzierung",
    description:
    'Bei Baufinanzierungen handelt es sich um größere Summen, die am Ende der Laufzeit noch nicht vollständig getilgt sind. In der Regel ist daher eine <span>Anschlussfinanzierung</span> erforderlich. Für Verbraucher in Deutschland ist gesetzlich geregelt, dass nach Ablauf der Sollzinsbindung oder nach einer Mindestlaufzeit von 10 Jahren keine Vorfälligkeitsentschädigung mehr anfällt. Das Sparpotenzial bei der <span>Baufinanzierung Umschuldung</span>  ist dagegen oft erheblich. Denn aufgrund hoher Kreditsummen und langer Laufzeiten können schon bei geringen Zinsunterschieden mehrere tausend Euro gespart werden.'
  },
  {
    icon: report,
    title: "Autokredit",
    description:
    'Wenn Sie einen bestehenden <span>Autokredit umschulden</span>, können Sie häufig viel Geld sparen. Sie können zusätzlich auch eine ungünstige Restschuldversicherung der laufenden Autofinanzierung loswerden und damit ebenfalls Kosten senken. Alternativ können Sie auch von einer Umschuldung profitieren, wenn eine Verbesserung oder Anpassung der Rahmenbedingungen erreicht wird. Denkbar sind eine passendere Ratenhöhe sowie eine verkürzte oder verlängerte Laufzeit. Vor einer Umschuldung sollten die Vertrags- und Ablösebedingungen des bestehenden Autokredits genau geprüft werden.'
  },
];


const Calculator = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>Rechenbeispiele für einen Autokredit</Typography>

      <Typography variant="body2" className={classes.footerText}>
        Die Tabelle zeigt beispielhaft, wie sich durch eine Umschuldung in verschiedenen Kreditarten erhebliche Zinsersparnisse erzielen lassen. Dabei spielen der
        aktuelle<b>Zinssatz</b>, die<b>Restlaufzeit</b>sowie die bestehende <b>Restschuld</b> eine entscheidende Rolle. Die tatsächlichen Einsparungen hängen jedoch von den
        individuellen Kreditbedingungen und den persönlichen Voraussetzungen ab.
      </Typography>

      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.borderCell}>Kreditart</TableCell>
              <TableCell className={classes.borderCell}>Altkredit</TableCell>
              <TableCell className={classes.borderCell}>Neuer Kredit (Umschuldung)</TableCell>
              <TableCell className={classes.borderCell}>
                Ersparnis
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={row.ersparnis}>
                <TableCell className={classes.borderCell}>{row.kreditart}</TableCell>
                <TableCell className={classes.borderCell} dangerouslySetInnerHTML={{ __html: row.altkredit }} />
                <TableCell className={classes.borderCell} dangerouslySetInnerHTML={{ __html: row.neuerKredit }} />
                <TableCell className={classes.borderCell} dangerouslySetInnerHTML={{ __html: row.ersparnis }} />
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography className={classes.title}>
        Diese Altkredite können Sie ablösen
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
        title="Vorfälligkeitsentschädigung prüfen"
        description="Wer plant, seinen Kredit vorzeitig abzulösen, sollte sich zunächst eine detaillierte Aufstellung aller anfallenden Kosten zusenden lassen, besonders bei höheren Kreditsummen. Es ist ratsam, diese Kosten zu prüfen. Banken berücksichtigen möglicherweise nicht alle Sondertilgungen bei der Berechnung. Bei großen Abweichungen lohnt es sich, die Berechnung der <span>Vorfälligkeitsentschädigung</span> von einer unabhängigen Stelle überprüfen zu lassen."
      />
    </Box>
  );
};

export default Calculator;
