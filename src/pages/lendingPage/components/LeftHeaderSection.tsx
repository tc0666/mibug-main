import React, { ReactElement } from 'react';
import { Typography, Box, Theme, useMediaQuery, Tooltip } from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import CheckIcon from '@mui/icons-material/Check';
import garant from '../../../icons/guarantee.svg';
import InfoIcon from '../../../icons/info.svg?react';
import ProfileImages from './ProfileImages';

const classes = generateUtilityClasses('LeftHeaderSection', [
  'root',
  'headerTitle',
  'headerWithLogo',
  'subTitle',
  'garantLogo',
  'infoIcon',
  'table',
  'tableRow',
  'tableCell',
  'savingsCell',
  'contentContainer',
  'offerText',
  'rateText',
  'subTitleWithIcon',
  'tooltipWrap',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    flex: 1,
    [theme.breakpoints.down(900)]: {
      paddingLeft: '0',
      flex: "none",
      width: "100%"
    },
  },
  [`& .${classes.garantLogo}`]: {
    width: '100px',
    height: '100px',
    display: 'none',
    [theme.breakpoints.down(900)]: {
      display: 'flex',
      fontSize: '15px',
      flex: 1
    },
  },
  [`& .${classes.headerWithLogo}`]: {
    display: "flex",
    justifyContent: 'space-between',
  },
  [`& .${classes.headerTitle}`]: {
    fontSize: '53.22px',
    lineHeight: '64px',
    fontWeight: 700,
    marginBottom: '30px',
    color: "#323232",
    [theme.breakpoints.down(900)]: {
      lineHeight: '50px',
      fontSize: '28px',
      fontWeight: 700,
      flex: 3,
    },
  },
  [`& .${classes.subTitle}`]: {
    fontSize: '1.00rem',
    letterSpacing: '0.01rem',
    lineHeight: '1.50rem',
    fontWeight: 400,
    color: "#323232",
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '10px',
    '& svg': {
      marginRight: '10px',
      fill: theme.palette.primary.main,
    },
  },
  [`& .${classes.infoIcon}`]: {
    fill: 'white',
    cursor: 'pointer',
    marginLeft: '10px',
  },
  [`& .${classes.table}`]: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '10px',
  },
  [`& .${classes.tableRow}`]: {
    borderBottom: '1px solid #EBEBEB',
    color: '#323232',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  [`& .${classes.tableCell}`]: {
    padding: '10px',
    fontSize: '14px',
    color: '#121212',
    fontWeight: 400,
  },
  [`& .${classes.savingsCell}`]: {
    textAlign: 'end',
  },
  [`&.MuiTooltip-tooltip, .${classes.contentContainer}`]: {
    padding: '0',
    background: '#fff !important',
    backgroundColor: '#fff !important',
    color: '#323232',
    width: '100%',
    maxWidth: '677px',
    alignItems: "center",

  },
  [`& .${classes.tooltipWrap}`]: {
    padding: "20px 40px 40px 20px",
    backgroundColor: "#fff"
  },
  [`& .${classes.offerText}`]: {
    color: '#898989',
    fontSize: '14px',
    lineHeight: '30px',
  },
  [`& .${classes.subTitleWithIcon}`]: {
    textDecoration: "underline",
    alignItems: "center",
    display: "flex",
    '& svg': {
      fill: "white",
      marginLeft: "10px",
      cursor: "pointer",
    }
  },
  [`& .${classes.rateText}`]: {
    color: '#121212',
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '22px',
  },
});

const LoanOfferTable: React.FC = (): ReactElement<unknown, any> => {
  const data = [
    { range: '1.000 € - 5.000 €', savings: '100 €' },
    { range: '5.001 € - 10.000 €', savings: '250 €' },
    { range: '10.001 € - 15.000 €', savings: '400 €' },
    { range: '15.001 € - 20.000 €', savings: '600 €' },
    { range: '20.001 € - 25.000 €', savings: '800 €' },
    { range: '25.001 € - 30.000 €', savings: '900 €' },
    { range: '30.001 € - 40.000 €', savings: '950 €' },
    { range: '40.001 € - 50.000 €', savings: '1.000 €' },
  ];

  return (
    <Box className={classes.tooltipWrap}>
      <Typography className={classes.offerText}>
        Profitieren Sie von unserem exklusiven Angebot:
      </Typography>
      <Typography className={classes.rateText}>
        Die erste Rate schenken wir Ihnen – bis zu 1.000 € Ersparnis je nach
        Kreditbetrag!
      </Typography>
      <Box component="table" className={classes.table}>
        <Box component="tbody">
          {data.map((item, index) => (
            <Box component="tr" key={index} className={classes.tableRow}>
              <Box component="td" className={classes.tableCell}>{item.range}</Box>
              <Box component="td" className={`${classes.tableCell} ${classes.savingsCell}`}>{item.savings}</Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const LeftHeaderSection: React.FC<{ profileImages: string[] }> = ({ profileImages }): ReactElement<unknown, any> => {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.headerWithLogo}>
        <Typography className={classes.headerTitle}>
          Günstige Kredite - garantiert!
        </Typography>
        <Box className={classes.garantLogo}>
          <img src={garant} alt="logo" />
        </Box>
      </Box>
      <Typography className={classes.subTitle}>
        <CheckIcon />
        In 3 Minuten zu deinem Sofortkredit
      </Typography>
      <Typography className={classes.subTitle}>
        <CheckIcon />
        SCHUFA-neutral und 100% kostenlos
      </Typography>
      <Typography className={classes.subTitle}>
        <CheckIcon />
        <Box className={classes.subTitleWithIcon}>
          Erste Rate geschenkt - Bis 1.000€
          <Tooltip
            followCursor
            enterDelay={50}
            leaveDelay={100}
            slotProps={{
              tooltip: {
                sx: styles,
                className: classes.contentContainer,
              },
            }}
            title={
              <LoanOfferTable  />
            }
          >
            <InfoIcon />
          </Tooltip>
        </Box>
      </Typography>
      {isMobile ? null : (<ProfileImages profileImages={profileImages} />)}
    </Box>
  );
};

export default LeftHeaderSection;
