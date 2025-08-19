import React from "react";
import {
  Box,
  Typography,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from "@mui/material";
import { generateUtilityClasses, Theme } from "@mui/material";

const classes = generateUtilityClasses("LoanRepaymentPlan", [
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
    marginBottom: "30px",
    borderCollapse: "collapse",
  },
  [`& .${classes.tableHeader}`]: {
    backgroundColor: "#fff",
    fontWeight: 700,
    border: "1px solid #ccc",
    [`& .${classes.borderCell}`]: {
      border: "1px solid #ccc",
      fontSize: "13px",
      fontWeight: 600,
      color: "#172507",
    },
  },
  [`& .${classes.borderCell}`]: {
    border: "1px solid #ccc",
    fontSize: "12px",
    fontWeight: 400,
    color: "#6D7278",
  },
  [`& .${classes.highlightCell}`]: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  [`& .${classes.footerText}`]: {
    fontSize: "12px",
    color: "#666",
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

interface RepaymentRow {
  year: number;
  rate: string;
  interest: string;
  repayment: string;
  remainingDebt: string;
}

interface LoanConditionRow {
  amount: string;
  duration: string;
  rate: string;
  monthlyPayment: string;
  interestCost: string;
}

const repaymentData: RepaymentRow[] = [
  { year: 1, rate: "4.403,08 €", interest: "204,00 €", repayment: "4.199,08 €", remainingDebt: "25.800,92 €" },
  { year: 2, rate: "4.403,08 €", interest: "175,45 €", repayment: "4.227,63 €", remainingDebt: "21.573,29 €" },
  { year: 3, rate: "4.403,08 €", interest: "146,70 €", repayment: "4.256,38 €", remainingDebt: "17.316,92 €" },
  { year: 4, rate: "4.403,08 €", interest: "117,76 €", repayment: "4.285,32 €", remainingDebt: "13.031,6 €" },
  { year: 5, rate: "4.403,08 €", interest: "88,61 €", repayment: "4.314,46 €", remainingDebt: "8.717,14 €" },
  { year: 6, rate: "4.403,08 €", interest: "59,28 €", repayment: "4.343,80 €", remainingDebt: "4.373,34 €" },
  { year: 7, rate: "4.403,08 €", interest: "29,74 €", repayment: "4.373,34 €", remainingDebt: "0 €" },
];

const loanConditionData: LoanConditionRow[] = [
  { amount: "25.000 EUR", duration: "84 Monate", rate: "4 %", monthlyPayment: "341,72 EUR", interestCost: "3.704,49 EUR" },
  { amount: "25.000 EUR", duration: "84 Monate", rate: "5 %", monthlyPayment: "353,35 EUR", interestCost: "4.681,21 EUR" },
  { amount: "25.000 EUR", duration: "72 Monate", rate: "4 %", monthlyPayment: "391,13 EUR", interestCost: "3.161,33 EUR" },
  { amount: "25.000 EUR", duration: "72 Monate", rate: "5 %", monthlyPayment: "402,62 EUR", interestCost: "3.988,88 EUR" },
];

const LoanRepaymentPlan: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>Tilgungsplan</Typography>
      <TableContainer component={Paper} className={classes.table}>
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
            {repaymentData.map((row) => (
              <TableRow key={row.year}>
                <TableCell className={classes.borderCell}>{row.year}</TableCell>
                <TableCell className={classes.borderCell}>{row.rate}</TableCell>
                <TableCell className={classes.borderCell}>{row.interest}</TableCell>
                <TableCell className={classes.borderCell}>{row.repayment}</TableCell>
                <TableCell className={classes.highlightCell}>{row.remainingDebt}</TableCell>
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
        <Button className={classes.button}>Tilgungsplan drucken</Button>
      </Box>


      <Typography className={classes.title}>
        Konditionenbeispiele für Sofortkredite
      </Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table>
          <TableHead>
            <TableRow className={classes.tableHeader}>
              <TableCell className={classes.borderCell}>Nettokreditbetrag</TableCell>
              <TableCell className={classes.borderCell}>Laufzeit</TableCell>
              <TableCell className={classes.borderCell}>Effektivzins</TableCell>
              <TableCell className={classes.borderCell}>Monatsrate</TableCell>
              <TableCell className={classes.borderCell}>Zinsaufwand</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loanConditionData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className={classes.borderCell}>{row.amount}</TableCell>
                <TableCell className={classes.borderCell}>{row.duration}</TableCell>
                <TableCell className={classes.borderCell}>{row.rate}</TableCell>
                <TableCell className={classes.borderCell}>{row.monthlyPayment}</TableCell>
                <TableCell className={classes.borderCell}>{row.interestCost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default LoanRepaymentPlan;
