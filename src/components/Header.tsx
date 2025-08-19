import React, {useEffect, useState} from 'react';
import {Box, Container, IconButton, TextField, Theme, Typography, Link, useMediaQuery} from '@mui/material';
import logo from '../icons/logo.svg';
import phone from '../icons/home/phone.svg';
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import clsx from 'clsx';
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import EuroIcon from "@mui/icons-material/Euro";

interface HeaderProps {
  className?: string;
}

const classes = {
  ...generateUtilityClasses('Header', [
    'root',
    'header',
    'iconContainer',
    'phone',
    'svgIcon',
    'mobileNavigation',
    'info',
    'logo',
    'wrapper',
    'desktopMenu',
    'button',
    'currencyField',
    'scrollBlock',
  ]),
};

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1100,
    backgroundColor: "#fff",
  },
  [`& .${classes.header}`]: {
    textAlign: "left",
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.2em',
    height: "58px",
    boxShadow: "0px 3px 1px -2px rgb(0 0 0 / 20%),0px 2px 2px 0px rgb(0 0 0 / 14%),0px 1px 5px 0px rgb(0 0 0 / 12%)",
    [theme.breakpoints.down(900)]: {
      margin: 0,
      paddingTop: 0,
    },
  },
  [`& .${classes.iconContainer}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: "center",
    [theme.breakpoints.down(900)]: {
      alignItems: 'baseline',
    },
    borderRight: '1px solid rgb(211, 211, 211)',
    paddingRight: "20px",
    [theme.breakpoints.down("md")]: {
      borderRight: "none",
    },
  },
  [`& .${classes.wrapper}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignContent: "center",
    [theme.breakpoints.down(900)]: {
      margin: 0,
      padding: "4px 0",
    },
  },
  [`& .${classes.scrollBlock}`]: {
    display: "flex",
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  [`& .${classes.currencyField}`]: {
    flexDirection: "row-reverse",
    width: "220px",
    height: "48px",
    fontSize: "20px",
    fontWeight: 500,
  },
  [`& .${classes.logo}`]: {
    [theme.breakpoints.down(900)]: {
      marginTop: "10px"
    },
  },
  [`& .${classes.phone}`]: {
    color: '#323232',
    fontSize: "14px",
    fontWeight: 400,
    transition: "color 0.25s",
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: "pointer"
    },
    '@media (max-width: 600px)': {
      marginBottom: '10px',
    },
  },
  [`& .${classes.info}`]: {
    display: "flex",
    flexDirection: "column",
    color: '#5B5B5B',
    fontSize: "14px",
    [theme.breakpoints.down(900)]: {
      display: "none",
    },
  },
  [`&.${classes.desktopMenu}`]: {

  },
  [`& .${classes.mobileNavigation}`]: {
    display: "none",
    cursor: "pointer",
    [theme.breakpoints.down(900)]: {
      display: "flex",
    },
  },
  [`& .${classes.svgIcon}`]: {
    svg: {
      width: '18px',
      height: '18px',
      fill: theme.palette.primary.main,
    },
    marginRight: "10px",
    cursor: "pointer",
    lineHeight: 0,
  },
  [`& .${classes.button}`]: {
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: "46px",
    textAlign: "center",
    height: "46px",
    width: "220px",
    fontWeight: 700,
    backgroundColor: "#08B578",
    color: "#fff",
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
    marginLeft: "16px",
  },
});
const Header = ({className}: HeaderProps) => {
  const [showScrollBlock, setShowScrollBlock] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>('30000');

  const location = window.location.pathname.toString();
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down(900));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
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
    <Box className={clsx(classes.root, className)} sx={styles}>
      <Box className={classes.header}>
        <Container maxWidth="lg">
          <Box className={classes.wrapper} sx={styles}>
            <a href="/" className={classes.logo}>
              <img src={logo} alt="logo" />
            </a>

            {showScrollBlock && location !== '/' ? (
              <Box className={classes.scrollBlock}>
                <TextField
                  type="text"
                  fullWidth
                  className={classes.currencyField}
                  value={amount}
                  onChange={handleChange}
                  slotProps={{
                    input: {
                      endAdornment: (
                        <Typography sx={{ color: '#08B578', padding: '0 8px' }}>
                          Kreditbetrag
                        </Typography>
                      ),
                      startAdornment: (
                        <EuroIcon sx={{fill: 'rgb(50, 50, 50)'}} />
                      ),
                      className: classes.currencyField,
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
            {location === '/' || (isMobileOrTablet || !showScrollBlock) ? (
              <Box className={classes.iconContainer}>
                <IconButton className={classes.svgIcon}>
                  <a href="tel: +49 89 41435700">
                    <img src={phone} alt="logo" />
                  </a>
                </IconButton>

                <Box className={classes.info}>
                  <span className={classes.phone}>+49 89 41435700</span>
                  <span>Kostenlose Beratung</span>
                </Box>
                <MobileNavigation className={classes.mobileNavigation} />
              </Box>
            ) : null}
          </Box>
        </Container>
      </Box>
      <Navigation className={classes.desktopMenu} />
    </Box>
  );
};

export default Header;
