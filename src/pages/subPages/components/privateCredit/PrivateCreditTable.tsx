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
  Theme, Button,
} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import {useNavigate} from "react-router-dom";

const classes = generateUtilityClasses("PrivateCreditTable", [
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
    margin: "20px 0",
    [theme.breakpoints.down(900)]: {
      flexWrap: "wrap",
    },
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
    [theme.breakpoints.down(900)]: {
      marginTop: "12px",
    },
  },
});

const tableData = [
  { jahr: 1, ratenzahlung: '4.103,88 €', zinskosten: '900,00 €', tilgung: '3.203,88 €', restbetrag: '21.796,12 €' },
  { jahr: 2, ratenzahlung: '4.103,88 €', zinskosten: '784,66 €', tilgung: '3.319,22 €', restbetrag: '18.476,89 €' },
  { jahr: 3, ratenzahlung: '4.103,88 €', zinskosten: '665,17 €', tilgung: '3.438,72 €', restbetrag: '15.038,18 €' },
  { jahr: 4, ratenzahlung: '4.103,88 €', zinskosten: '541,37 €', tilgung: '3.562,51 €', restbetrag: '11.475,67 €' },
  { jahr: 5, ratenzahlung: '4.103,88 €', zinskosten: '413,12 €', tilgung: '3.690,76 €', restbetrag: '7.784,91 €' },
  { jahr: 6, ratenzahlung: '4.103,88 €', zinskosten: '280,26 €', tilgung: '3.823,63 €', restbetrag: '3.961,28 €' },
  { jahr: 7, ratenzahlung: '4.103,88 €', zinskosten: '142,61 €', tilgung: '3.961,28 €', restbetrag: '0 €' },
];
const tableData2 = [
  { nettokreditbetrag: '25.000 €', laufzeit: 72, jahreszins: '4,5 %', monatlicheRate: '396,85 €', gesamtZinsaufwand: '3.573,25 €' },
  { nettokreditbetrag: '25.000 €', laufzeit: 96, jahreszins: '4,5 %', monatlicheRate: '310,58 €', gesamtZinsaufwand: '4.815,76 €' },
  { nettokreditbetrag: '25.000 €', laufzeit: 72, jahreszins: '5 %', monatlicheRate: '402,62 €', gesamtZinsaufwand: '3.988,88 €' },
  { nettokreditbetrag: '25.000 €', laufzeit: 96, jahreszins: '5 %', monatlicheRate: '316,50 €', gesamtZinsaufwand: '5.383,81 €' },
];

const PrivateCreditTable = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/antrag`);
  }

  return (
    <Box className={classes.root} sx={styles}>

      <Typography className={classes.title}>Tilgungsplan</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.borderCell}>Jahr</TableCell>
              <TableCell className={classes.borderCell}>Ratenzahlung p.a.</TableCell>
              <TableCell className={classes.borderCell}>Zinskosten</TableCell>
              <TableCell className={classes.borderCell}>Tilgung</TableCell>
              <TableCell className={classes.borderCell}>Restbetrag</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className={classes.borderCell}>{row.jahr}</TableCell>
                <TableCell className={classes.borderCell}>{row.ratenzahlung}</TableCell>
                <TableCell className={classes.borderCell}>{row.zinskosten}</TableCell>
                <TableCell className={classes.borderCell}>{row.tilgung}</TableCell>
                <TableCell className={`${classes.borderCell} ${classes.highlightCell}`}>
                  <span>{row.restbetrag}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>


      <Box className={classes.wrap}>
        <Typography className={classes.footerText}>
          Mit dem Kreditrechner können Sie im Vorfeld der Kreditbeantragung verschiedene Szenarien ausprobieren. So können Sie
          besser einschätzen, welche Rahmenbedingungen zu Ihren Voraussetzungen und Ihrem Vorhaben passen.
        </Typography>
        <Button onClick={handleNavigate} className={classes.button}>Tilgungsplan drucken</Button>
      </Box>



      <Typography className={classes.title}>Rechenbeispiel für Privatkredite</Typography>

      <Box className={classes.wrap}>
        <Typography variant="body2" className={classes.footerText}>
          Die Tabelle veranschaulicht, wie <b>Kreditsumme, Kreditlaufzeit</b> und der effektive <b>Jahreszins</b> die Kreditkosten beeinflussen können.
          Letztendlich bestimmen jedoch der Kreditgeber selbst sowie Ihre finanzielle Situation, wie hoch der effektive Jahreszins, die monatliche
          Rate und somit der gesamte Zinsaufwand tatsächlich ausfallen. Unsere Beispielrechnungen sind daher für eine erste Orientierung gedacht.
          Für konkrete Angebote nutzen Sie anschließend einfach den <span>Kreditvergleich</span>
        </Typography>
      </Box>


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
            {tableData2.map((row, index) => (
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

export default PrivateCreditTable;
