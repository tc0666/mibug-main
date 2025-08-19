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
    marginBottom: "20px",
    borderCollapse: "collapse",
  },
  [`& .${classes.tableHeader}`]: {
    backgroundColor: "#fff",
    fontWeight: 700,
    border: "1px solid #ccc",
    [`& .${classes.borderCell}`]: {
      border: "1px solid #BEBFBD",
      fontSize: "13px",
      fontWeight: 600,
      color: "#172507",
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
    price: "20.000 EUR",
    deposit: "2.000 EUR",
    duration: 60,
    discount: "20 %",
    rate: "2,5 %",
    monthly: "265,20 EUR",
    totalCost: "15.911,88 EUR",
  },
  {
    price: "20.000 EUR",
    deposit: "4.000 EUR",
    duration: 72,
    discount: "20 %",
    rate: "3,1 %",
    monthly: "206,14 EUR",
    totalCost: "14.842,31 EUR",
  },
  {
    price: "30.000 EUR",
    deposit: "2.000 EUR",
    duration: 60,
    discount: "20 %",
    rate: "2,8 %",
    monthly: "412,53 EUR",
    totalCost: "24.751,81 EUR",
  },
  {
    price: "30.000 EUR",
    deposit: "4.000 EUR",
    duration: 72,
    discount: "20 %",
    rate: "2,8 %",
    monthly: "334,98 EUR",
    totalCost: "24.118,75 EUR",
  },
  {
    price: "40.000 EUR",
    deposit: "2.000 EUR",
    duration: 60,
    discount: "20 %",
    rate: "2,4 %",
    monthly: "559,86 EUR",
    totalCost: "33.591,74 EUR",
  },
  {
    price: "40.000 EUR",
    deposit: "4.000 EUR",
    duration: 72,
    discount: "20 %",
    rate: "2,5 %",
    monthly: "463,82 EUR",
    totalCost: "33.395,19 EUR",
  },
];

// Component
const AutoKreditTable = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>Rechenbeispiele für einen Autokredit</Typography>

      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.borderCell}>Kaufpreis</TableCell>
              <TableCell className={classes.borderCell}>Anzahlung</TableCell>
              <TableCell className={classes.borderCell}>Laufzeit</TableCell>
              <TableCell className={classes.borderCell}>
                Barzahlerrabatt
              </TableCell>
              <TableCell className={classes.borderCell}>Zinssatz</TableCell>
              <TableCell className={classes.borderCell}>Monatsrate</TableCell>
              <TableCell className={classes.borderCell}>Kreditkosten</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={row.monthly}>
                <TableCell className={classes.borderCell}>{row.price}</TableCell>
                <TableCell className={classes.borderCell}>{row.deposit}</TableCell>
                <TableCell className={classes.borderCell}>{row.duration}</TableCell>
                <TableCell className={classes.borderCell}>{row.discount}</TableCell>
                <TableCell className={classes.borderCell}>{row.rate}</TableCell>
                <TableCell className={classes.borderCell}>{row.monthly}</TableCell>
                <TableCell className={classes.borderCell}>{row.totalCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box className={classes.wrap}>
        <Typography variant="body2" className={classes.footerText}>
          Die Tabelle veranschaulicht, wie die Anzahlung, Kreditlaufzeit und der
          effektive Jahreszins die Kreditkosten beeinflussen können. Die Zinsen
          für einen Autokredit unterscheiden sich je nach Kreditinstitut und
          Bonität. Ein Vergleich ist daher unerlässlich. Achten Sie dabei
          auf<b>Laufzeit, effektiven Jahreszins</b>und<b>Sondertilgungen</b>.
          Bitte beachten Sie, dass es sich hierbei nicht um konkrete
          Finanzierungsangebote handelt. Für Ihren individuellen Autokredit nutzen
          Sie bitte unseren <span>unverbindlichen Online-Antrag</span>.
        </Typography>
      </Box>
    </Box>
  );
};

export default AutoKreditTable;
