import React, {useEffect, useState} from 'react';
import {Box, Typography, Link, Theme, TextField} from '@mui/material';
import logo from '../icons/logo.svg';
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import EuroIcon from '@mui/icons-material/Euro';
import clsx from "clsx";

const classes = generateUtilityClasses("Footer", [
  "root",
  "links",
  "linkWrap",
  "linkName",
  "year",
  "logo",
  'button',
  'currencyField',
  'scrollBlock',
  'isScrollBlock',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    padding: "30px 0",
    alignItems: "flex-end",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  [`&.${classes.isScrollBlock}`]: {
    [theme.breakpoints.down(900)]: {
      paddingBottom: "163px",
    },
  },
  [`& .${classes.logo}`]: {
    [theme.breakpoints.down(900)]: {
      borderBottom: "1px solid #D9D9D9",
      paddingBottom: "20px",
      width: "100%",
    },
  },
  [`& .${classes.year}`]: {
    fontSize: "14px",
    color: "#ABABAB",
    fontWeight: 400,
    marginTop: "10px",
    [theme.breakpoints.down(900)]: {
      textAlign: "start",
      width: "100%",
    },
  },
  [`& .${classes.linkWrap}`]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
    [theme.breakpoints.down(900)]: {
      justifyContent: "flex-start",
    },
  },
  [`& .${classes.linkName}`]: {
    color: "#172507",
    fontSize: "14px",
    fontWeight: 400,
    marginRight: "16px",
    textDecoration: "none",
    "&:hover": {
      color: "#9e9e9e",
    },
    '&:last-child': {
      marginRight: 0,
    }
  },
  [`& .${classes.links}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0",
    fontFamily: "Roboto",
    marginTop: "20px",
  },
  [`& .${classes.button}`]: {
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: "46px",
    textAlign: "center",
    height: "46px",
    width: "100%",
    fontWeight: 700,
    backgroundColor: "#08B578",
    color: "#fff",
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
  },
  [`& .${classes.scrollBlock}`]: {
    display: "none",
    flexDirection: "column",
    width: "100%",
    padding: "24px",
    boxSizing: "border-box",
    position: "fixed",
    zIndex: 999999,
    right: 0,
    bottom: 0,
    left: 0,
    boxShadow: "0 2px 4px 0 rgba(44,50,39,.1)",
    backgroundColor: "#fff",
    height: "193px",
    [theme.breakpoints.down(900)]: {
      display: "flex",
    },
  },
  [`& .${classes.currencyField}`]: {
    flexDirection: "row",
    width: "100%",
    height: "48px",
    fontSize: "20px",
    fontWeight: 500,
    margin: "16px 0",
  },
});
const Footer = () => {
  const [showScrollBlock, setShowScrollBlock] = useState<boolean>(true);
  const [amount, setAmount] = useState<string>('30000');
  const location = window.location.pathname.toString();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1200) {
        setShowScrollBlock(true);
      } else {
        setShowScrollBlock(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  };

  return (
    <Box className={clsx(classes.root, {
      [classes.isScrollBlock]: !showScrollBlock && location !== '/'
    })} sx={styles}>
      <Box className={classes.logo}>
        <Link href="/">
          <img width={195} src={logo} className="App-logo" alt="logo" />
        </Link>
      </Box>

      <Box className={classes.links}>
        <Box className={classes.linkWrap}>
          <a href="/agb" className={classes.linkName}>AGB</a>
          <a href="/impressum"  className={classes.linkName}>Impressum</a>
          <a href="/datenschutz"  className={classes.linkName}>Datenschutz</a>
          <a href="/faq"  className={classes.linkName}>FAQ</a>
        </Box>
        <Typography className={classes.year}>
          © {new Date().getFullYear()} Mibug Credit, München All rights reserved
        </Typography>
      </Box>

      {!showScrollBlock && location !== '/' ? (
        <Box className={classes.scrollBlock}>
          <Typography sx={{ color: '#212529', fontSize: '12px' }}>
            Kreditbetrag
          </Typography>
          <TextField
            type="text"
            fullWidth
            value={amount}
            onChange={handleChange}
            slotProps={{
              input: {
                className: classes.currencyField,
                endAdornment: (
                  <EuroIcon sx={{fill: 'rgb(50, 50, 50)'}} />
                ),
              },
            }}
          />

          <Link
            id="header-loan-form-link"
            href={`/antrag?isMortage=false&amount=${amount}&duration=84&category=OTHER&vehiclePrice=30000&initialPayment=0`}
            className={classes.button}
            data-initial-link={`/antrag?duration=84&amount=${amount}&vehiclePrice=30000&initialPayment=0&category=OTHER`}
          >
            Zum Kreditvergleich
          </Link>
        </Box>
      ) : null}
    </Box>
  );
};

export default Footer;
