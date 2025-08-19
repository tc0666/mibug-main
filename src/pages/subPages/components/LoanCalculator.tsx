import React from 'react';
import {Category, CreditFormData} from "../../lendingPage/components/CreditForm";
import {
  Box,
  FormGroup,
  generateUtilityClasses,
  Theme,
  Container,
  FormControl,
  Typography
} from "@mui/material";
import {FormProvider, useForm} from "react-hook-form";
import {FormTitle} from "../../../components/FormTitle";
import CurrencyTextField from "../../../components/CurrencyTextField";
import {Button} from "../../../components/Button";
import TrustImages from "./TrustImages";
import breand from "../../../icons/credit/breand.svg";
import tuev from "../../../icons/credit/tuev.svg";
import preissieger from "../../../icons/credit/preissieger.png";
import triangle from "../../../icons/credit/select-triangle-down.svg";
import {useNavigate} from "react-router-dom";
import {formatCurrency} from "../../../utils/formatCurrency";

const classes = generateUtilityClasses("LoanCalculator", [
  "root",
  "imageDesktop",
  "formGroup",
  "form",
  "title",
  "subTitle",
  "teaser",
  "wrap",
  "container",
  "formLabel",
  "menuItem",
  "formField",
  "submitButton",
]);

interface SubmitData {
  duration: number;
  creditAmount: number;
  category: string;
}

const categoryOptions = Object.values(Category);
const generateCreditOptions = (category: Category): number[] =>
  category === Category.BAU_IMMOBILIENFINANZIERUNG
    ? Array.from({ length: 50 }, (_, i) => 100000 + i * 100000).concat([5000000])
    : Array.from({ length: 136 }, (_, i) => (i < 30 ? 500 + i * 250 : 15000 + (i - 30) * 1000));

const profileImages = [
  breand,
  tuev,
  preissieger,
];
const durationOptions: number[] = Array.from({ length: 10 }, (_, i) => 12 + i * 12);


interface InterfaceProps {
  teaser: string;
  title: string;
  backgroundImage: string;
  subTitle: string;
}
const LoanCalculator = ({teaser, title, subTitle, backgroundImage}: InterfaceProps) => {
  const styles = (theme: Theme) => ({
    [`&.${classes.root}`]: {
      padding: "0",
      boxSizing: "border-box",
      position: "relative",
      height: "660px",
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover', // Ensure the image covers the entire container
      backgroundPosition: 'center', // Center the background image
      backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      [`& .MuiMenuItem-root`]: {
        fontSize: "20px",
        fontWeight: 700,
      },
      [theme.breakpoints.down(900)]: {
        padding: "0 12px",
      },
    },
    [`& .${classes.submitButton}`]: {
      [theme.breakpoints.down(900)]: {
        marginTop: "24px",
      },
    },
    [`& .${classes.subTitle}`]: {
      color: "#fff",
      fontSize: "20px",
      lineHeight: "30px",
      fontWeight: 500,
      marginBottom: "40px",
      [theme.breakpoints.down(900)]: {
        display: "none",
      },
    },
    [`& .${classes.menuItem}`]: {
      fontSize: "20px",
      fontWeight: 300,
    },
    [`& .${classes.formField}`]: {
      border: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      appearance: "none",
      msAppearance: "none",
      height: "24px",
      fontSize: "20px",
      fontWeight: "bold",
      fontStyle: "normal",
      fontStretch: "normal",
      lineHeight: "1.2",
      letterSpacing: "normal",
      color: "#172507",
      background: "transparent",
      borderRadius: "0",
      marginBottom: "7px",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      backgroundImage: `url(${triangle})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "11px 6px",
      backgroundPosition: "right center",
      paddingRight: "15px",
      cursor: "pointer",
      [theme.breakpoints.down(900)]: {
        fontSize: "16px",
        height: "19px",
      },
    },
    [`& .${classes.formLabel}`]: {
      fontSize: "16px",
      color: "#707070",
      "&::before": {
        content: '""', // Correct usage with quotes
        position: "absolute",
        left: 0,
        right: 0,
        height: "2px",
        backgroundColor: "#979797",
        bottom: "-35px",
      },
      [theme.breakpoints.down(900)]: {
        fontSize: "12.8px",
        marginBottom: "4px",
        marginTop: "20px",
      },
    },
    [`& .${classes.container}`]: {
      height: '100%',
    },
    [`& .${classes.wrap}`]: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: '100%',
      flexDirection: "column",
      [theme.breakpoints.down(900)]: {
        justifyContent: 'flex-start',
        paddingTop: "40px",
      },
    },
    [`& .${classes.teaser}`]: {
      height: '28px',
      lineHeight: '28px',
      backgroundColor: theme.palette.primary.main,
      display: 'inline-block',
      fontSize: '20px',
      fontWeight: 500,
      fontStyle: 'normal',
      fontStretch: 'normal',
      letterSpacing: 'normal',
      textAlign: 'center',
      color: '#fff',
      padding: '0 5px',
      marginBottom: '0px',
      [theme.breakpoints.down(900)]: {
        lineHeight: '24px',
        fontSize: '16px',
      },
    },
    [`& .${classes.title}`]: {
      fontSize: '54px',
      lineHeight: '62.1px',
      fontWeight: 500,
      margin: '10px 0',
      color: "#fff",
      maxWidth: "600px",
      [theme.breakpoints.down(900)]: {
        lineHeight: '1.08',
        fontSize: '31px',
        fontWeight: 500,
      },
    },
    [`& .${classes.formGroup}`]: {
      flex: 1,
      width: "100%",
      padding: "0 12px",
    },
    [`& .${classes.form}`]: {
      backgroundColor: '#fff',
      height: '104px',
      boxShadow: '0 3px 8px 0 rgba(44, 50, 39, .25)',
      borderRadius: '5px',
      marginTop: '21px',
      width: '100%',
      display: 'flex',
      flexDirection: 'row',
      zIndex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      padding: "20px 24px",
      boxSizing: "border-box",
      [theme.breakpoints.down(900)]: {
        flexDirection: "column",
        height: 'auto',
        padding: "34px 24px"
      }
    },
  });

  const methods = useForm<CreditFormData>({
    defaultValues: {
      category: Category.FREIE_VERWENDUNG,
      creditAmount: 20000,
      duration: 84,
      deposit: undefined,
    },
    mode: 'onSubmit',
  });
  const creditAmount = methods.watch('creditAmount');
  const navigate = useNavigate(); // React Router's navigation hook

  const handleSubmit = (data: SubmitData) => {
    navigate(`/antrag?duration=${data.duration}&amount=${data.creditAmount}&initialPayment=0&category=${data.category}`);
  };

  return (
    <Box sx={styles} className={classes.root} >
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.wrap}>
          <Typography className={classes.teaser}>
            {teaser}
          </Typography>
          <Typography className={classes.title}>
            {title}
          </Typography>
          <Typography className={classes.subTitle}>
            {subTitle}
          </Typography>
          <TrustImages profileImages={profileImages} />
          <FormProvider {...methods}>
            <form className={classes.form} onSubmit={methods.handleSubmit(handleSubmit)}>
              <FormControl variant="standard" className={classes.formGroup}>
                <FormTitle className={classes.formLabel}>Verwendung</FormTitle>
                <FormGroup>
                  <select
                    {...methods.register('category')}
                    className={classes.formField}
                    defaultValue={Category.BAU_IMMOBILIENFINANZIERUNG}
                  >
                    {categoryOptions.map((option) => (
                      <option key={option} value={option} className={classes.menuItem}>
                        {option}
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </FormControl>

              <FormControl variant="standard" className={classes.formGroup}>
                <FormTitle className={classes.formLabel}>Laufzeit</FormTitle>
                <FormGroup>
                  <select
                    {...methods.register('duration', {
                      setValueAs: (value) => Number(value),
                    })}
                    className={classes.formField}
                    defaultValue={84}
                  >
                    {durationOptions.map((months) => (
                      <option key={months} value={months} className={classes.menuItem}>
                        {months} Monate
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </FormControl>

              <FormControl variant="standard" className={classes.formGroup}>
                <FormTitle className={classes.formLabel}>Nettokreditbetrag</FormTitle>
                <FormGroup>
                  <select
                    {...methods.register('creditAmount', {
                      setValueAs: (value) => Number(value),
                    })}
                    className={classes.formField}
                    defaultValue={20000}
                  >
                    {generateCreditOptions(methods.watch('category')).map((amount) => (
                      <option key={amount} value={amount} className={classes.menuItem}>
                        {formatCurrency(amount)}
                      </option>
                    ))}
                  </select>
                </FormGroup>
              </FormControl>
              {methods.watch('category') === Category.AUTO_MOTRAD && (
                <FormControl variant="standard" className={classes.formGroup}>
                  <CurrencyTextField
                    name="deposit"
                    label="Anzahlung (€)"
                    placeholder="z.B. 12.000"
                    max={creditAmount - 500}
                    defaultValue={creditAmount - 500}
                    helperText={
                      `Bei einem Kaufpreis von ${formatCurrency(creditAmount)} darf die Anzahlung höchstens ${formatCurrency(creditAmount - 500)} betragen.`
                    }
                    variant="standard"
                    requiredMessage="Anzahlung erforderlich"
                  />
                </FormControl>
              )}
              <FormGroup className={classes.formGroup}>
                <Button active={true} type="submit" className={classes.submitButton}>
                  Zum Kreditrechner
                </Button>
              </FormGroup>
            </form>
          </FormProvider>
        </Box>
      </Container>
    </Box>
  );
};

export default LoanCalculator;
