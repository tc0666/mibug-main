import React, { useState, useEffect } from "react";
import {Box, Slider, Typography, Button, TextField, generateUtilityClasses, Theme} from "@mui/material";
import {formatCurrency} from "../utils/formatCurrency";

const classes = {
  ...generateUtilityClasses("CreditForm", [
    "root",
    "header",
    "inputWrapper",
    "sliderWrapper",
    "slider",
    "sliderLabels",
    "textField",
    "button",
    "formWrapper",
    "creditTitle",
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    width: "770px",
    height: "365px",
    boxSizing: "border-box",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0px 2.9px 19.36px 0px #00000026",
    borderRadius: "10px",
    backgroundColor: (theme: Theme) => theme.palette.primary.contrastText,
  },
  [`& .${classes.header}`]: {
    fontWeight: 500,
    color: (theme: Theme) => theme.palette.info.main,
    marginBottom: (theme: Theme) => theme.spacing(3),
    textAlign: "end",
    fontSize: "16px",
  },
  [`& .${classes.formWrapper}`]: {
    display: "flex",
    flexDirection: "column",
    padding: "20px"
  },
  [`& .${classes.creditTitle}`]: {
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "23px",
    color: theme.palette.info.contrastText,
    marginBottom: "10px",
  },
  [`& .${classes.inputWrapper}`]: {
    display: "flex",
    justifyContent: "space-between",
    gap: (theme: Theme) => theme.spacing(2),
    marginBottom: (theme: Theme) => theme.spacing(3),
  },
  [`& .${classes.textField}`]: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: (theme: Theme) => theme.palette.action.disabled,
    },
    "& .MuiInputBase-input": {
      textAlign: "start",
      fontWeight: 400,
      fontSize: "34px",
      border: "unset",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      textAlign: "center",
      border: "unset",
    },
  },
  [`& .${classes.sliderWrapper}`]: {
    textAlign: "left",
    marginBottom: (theme: Theme) => theme.spacing(3),
  },
  [`& .${classes.slider}`]: {
    "& .MuiSlider-thumb": {
      backgroundColor: (theme: Theme) => theme.palette.action.selected,
    },
    "& .MuiSlider-track": {
      backgroundColor: (theme: Theme) => theme.palette.action.selected,
    },
    "& .MuiSlider-rail": {
      backgroundColor: (theme: Theme) => theme.palette.grey[300],
    },
  },
  [`& .${classes.sliderLabels}`]: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: (theme: Theme) => theme.spacing(1),
    fontSize: "0.9rem",
    color: (theme: Theme) => theme.palette.text.secondary,
  },
  [`& .${classes.button}`]: {
    padding: (theme: Theme) => theme.spacing(1.5, 0),
    fontWeight: 600,
    backgroundColor: (theme: Theme) => theme.palette.primary.main,
    "&:hover": {
      backgroundColor: (theme: Theme) => theme.palette.primary.dark,
    },
  },
});

const CreditForm: React.FC = () => {
  const [creditAmount, setCreditAmount] = useState<number>(12000);
  const [duration, setDuration] = useState<number>(60);
  const [interestRate, setInterestRate] = useState<number>(2.2);
  const calculateInterestRate = (amount: number, months: number): number => {
    let rate = 2.2;
    if (amount > 50000) rate += 0.5;
    if (months > 60) rate += 0.3;
    return parseFloat(rate.toFixed(2));
  };

  useEffect(() => {
    const newRate = calculateInterestRate(creditAmount, duration);
    setInterestRate(newRate);
  }, [creditAmount, duration]);

  const handleCalculate = () => {
    console.log(`Credit Amount: ${creditAmount}, Duration: ${duration}, Interest Rate: ${interestRate}`);
  };

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.header}>
        Sicherer Zinssatz von {interestRate.toFixed(2)} % p.a.
      </Typography>

      <Box className={classes.formWrapper}>
        <Box className={classes.inputWrapper}>
          <Box flex={1}>
            <Typography className={classes.creditTitle}>
              Kreditbetrag
            </Typography>
            <TextField
              value={`${formatCurrency(creditAmount)}`}
              variant="outlined"
              InputProps={{ readOnly: true }}
              fullWidth
              className={classes.textField}
            />
            <Box className={classes.sliderWrapper}>
              <Slider
                value={creditAmount}
                onChange={(e, val) => setCreditAmount(val as number)}
                step={1000}
                min={1000}
                max={100000}
                className={classes.slider}
                valueLabelDisplay="auto"
              />
              <Box className={classes.sliderLabels}>
                <span>1.000 EUR</span>
                <span>100.000 EUR</span>
              </Box>
            </Box>
          </Box>
          <Box flex={1} mr="15px">
            <Typography className={classes.creditTitle}>
              Laufzeit
            </Typography>
            <TextField
              value={`${duration} Monate`}
              variant="outlined"
              InputProps={{ readOnly: true }}
              fullWidth
              className={classes.textField}
            />
            <Box className={classes.sliderWrapper}>
              <Slider
                value={duration}
                onChange={(e, val) => setDuration(val as number)}
                step={1}
                min={12}
                max={120}
                className={classes.slider}

                valueLabelDisplay="auto"
              />
              <Box className={classes.sliderLabels}>
                <span>12 Monate</span>
                <span>120 Monate</span>
              </Box>
            </Box>
          </Box>
        </Box>

        <Button
          className={classes.button}
          variant="contained"
          fullWidth
          onClick={handleCalculate}
        >
          Kredit berechnen
        </Button>
      </Box>
    </Box>
  );
};

export default CreditForm;
