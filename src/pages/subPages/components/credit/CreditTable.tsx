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

const classes = generateUtilityClasses("CreditTable", [
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
    marginBottom: "12px",
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
  { nettokreditbetrag: '25.000 €', laufzeit: 72, jahreszins: '4,5 %', monatlicheRate: '396,85 €', gesamtZinsaufwand: '3.573,25 €' },
  { nettokreditbetrag: '25.000 €', laufzeit: 96, jahreszins: '4,5 %', monatlicheRate: '310,58 €', gesamtZinsaufwand: '4.815,76 €' },
  { nettokreditbetrag: '25.000 €', laufzeit: 72, jahreszins: '5 %', monatlicheRate: '402,62 €', gesamtZinsaufwand: '3.988,88 €' },
  { nettokreditbetrag: '25.000 €', laufzeit: 96, jahreszins: '5 %', monatlicheRate: '316,50 €', gesamtZinsaufwand: '5.383,81 €' },
];

const CreditTable = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>Rechenbeispiele für Ihren Online-Kredit</Typography>

      <Typography variant="body2" className={classes.footerText}>
        Die Tabelle veranschaulicht, wie <b>Kreditsumme, Kreditlaufzeit</b> und der effektive <b>Jahreszins</b> die Kreditkosten beeinflussen können.
        Letztendlich bestimmen jedoch der Kreditgeber selbst sowie Ihre finanzielle Situation, wie hoch der effektive Jahreszins, die monatliche
        Rate und somit der gesamte Zinsaufwand tatsächlich ausfallen. Unsere Beispielrechnungen sind daher für eine erste Orientierung gedacht.
        Für konkrete Angebote nutzen Sie anschließend einfach den <span>Kreditvergleich</span>
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.borderCell}>Nettokreditbetrag</TableCell>
              <TableCell className={classes.borderCell}>Laufzeit (Monate)</TableCell>
              <TableCell className={classes.borderCell}>Eff. Jahreszins</TableCell>
              <TableCell className={classes.borderCell}>Monatliche Rate</TableCell>
              <TableCell className={classes.borderCell}>Gesamter Zinsaufwand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={row.gesamtZinsaufwand}>
                <TableCell className={classes.borderCell}>{row.nettokreditbetrag}</TableCell>
                <TableCell className={classes.borderCell}>{row.laufzeit}</TableCell>
                <TableCell className={classes.borderCell}>{row.jahreszins}</TableCell>
                <TableCell className={classes.borderCell}>{row.monatlicheRate}</TableCell>
                <TableCell className={classes.borderCell}>{row.gesamtZinsaufwand}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CreditTable;
