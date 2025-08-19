import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import {Box, Typography, generateUtilityClasses, Theme} from '@mui/material';
import {Button} from "../../../components/Button";
import {useNavigate} from "react-router-dom";

const classes = generateUtilityClasses('LoanCards', [
  'root',
  'option',
  'optionSelected',
  'icon',
  'title',
  'label',
  'radio',
  'wrap',
  'button',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.option}`]: {
    width: "152px",
    height: "152px",
    borderRadius: "5px",
    boxShadow:  "0px 1px 3px 0px #00000033,0px 2px 1px 0px #0000001F",
    marginRight: "16px",
    cursor: "pointer",
    margin: "0 8px 16px 8px",
    boxSizing: "border-box",
    ":hover": {
      boxShadow: "0px 1px 3px 0px #00000033,0px 0px 21px 0px #00000030"
    }
  },
  [`& .${classes.icon}, .${classes.label}`]: {
    textAlign: "center",
    img: {
      width: "90px",
      height: "90px",
      margin: "-14px auto 10px auto",
      display: "block",
    }
  },

  [`& .${classes.radio}`]: {
    svg: {
      width: "18px",
      height: "18px",
      fill: theme.palette.primary.main,
    }

  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    [theme.breakpoints.down(1024)]: {
      flexWrap: "wrap",
    },
    [theme.breakpoints.down(900)]: {
      justifyContent: "center",
    }
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
  [`& .${classes.button}`]: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    button: {
      minWidth: "275px",
      maxWidth: "initial",
      width: "auto",
    }
  },
});

export interface LoanCardOption {
  id: number;
  label: string;
  icon: React.ReactNode;
}

export enum LoanCardsOptionsEnum {
  FREIE_VERWENDUNG = 'Freie Verwendung',
  FAHRZEUG = 'Fahrzeug',
  BAUFINANZIERUNG = 'Baufinanzierung',
  MODERNISIERUNG = 'Modernisierung',
  UMSCHULDUNG = 'Umschuldung',
  GEWERBE = 'Gewerbe',
}

interface LoanCardsProps {
  options: LoanCardOption[];
  title: string;
  buttonName: string;
}

const LoanCards = ({options, title, buttonName}: LoanCardsProps) => {
  const [selectedValue, setSelectedValue] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleChange = (id: number) => {
    setSelectedValue(id);
  };

  const handleNavigate = () => {
    navigate(`/antrag`);
  }

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>
        {title}
      </Typography>
      <Box className={classes.wrap}>
        {options.map((option) => (
          <Box
            key={option.id}
            className={`${classes.option} ${
              selectedValue === option.id ? classes.optionSelected : ''
            }`}
            onClick={() => handleChange(option.id)}
          >
            <Radio
              checked={selectedValue === option.id}
              value={option.id}
              className={classes.radio}
            />
            <Box className={classes.icon}>{option.icon}</Box>
            <Typography className={classes.label}>{option.label}</Typography>
          </Box>
        ))}
      </Box>
      <Box className={classes.button}>
        <Button active={true} onClick={handleNavigate}>{buttonName}</Button>
      </Box>
    </Box>
  );
};

export default LoanCards;
