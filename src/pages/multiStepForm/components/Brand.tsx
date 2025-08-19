import React from 'react';
import { Box, Typography, Theme } from '@mui/material';
import { generateUtilityClasses } from '@mui/material';
import saar from '../../../icons/tuev.svg';
import garant from '../../../icons/guarantee.svg';
import ekomi from '../../../icons/ekomi.png';

const classes = generateUtilityClasses('Brand', ['root', 'brandTitle', 'brandLogos']);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: '16px',
    backgroundColor: 'rgb(247, 247, 247)',
    margin: '0px auto',
    maxWidth: '532px',
    marginTop: '16px',
  },
  [`& .${classes.brandLogos}`]: {
    boxSizing: 'border-box',
    display: 'flex',
    flexFlow: 'wrap',
    marginTop: '-16px',
    width: 'calc(100% + 16px)',
    marginLeft: '-16px',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    WebkitBoxPack: 'center',
    justifyContent: 'center',
    img: {
      padding: '16px 0 0 16px',
    },
  },
  [`& .${classes.brandTitle}`]: {
    margin: '0px',
    textAlign: 'center',
    letterSpacing: '0.03rem',
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontSize: '1rem',
    fontWeight: 700,
    lineHeight: '1.5rem',
    marginBottom: '16px',
  },
});

const Brand: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography variant="h5" gutterBottom className={classes.brandTitle}>
        TÜV geprüft + SCHUFA-neutral
      </Typography>
      <Box className={classes.brandLogos}>
        <img src={saar} width="80px" alt="saar" />
        <img src={garant} width="64px" height="64px" alt="garant" />
        <img src={ekomi} width="60px" height="95px" alt="ekomi" />
      </Box>
    </Box>
  );
};

export default Brand;
