import React from 'react';
import { Box, Typography, Avatar, generateUtilityClasses } from '@mui/material';
import { Theme } from '@mui/material/styles';
import contentCard from "../../../icons/credit/contentCard.png";
import { Button } from '../../../components/Button';
import {useNavigate} from "react-router-dom";

const classes = generateUtilityClasses('ContentCard', [
  'root',
  'avatar',
  'wrap',
  'img',
  'name',
  'content',
  'title',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: "column",
  },
  [`& .${classes.img}`]: {
    '& img': {
      borderRadius: '50%',
      boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.2)',
    },
    [theme.breakpoints.down(900)]: {
      margin: "auto",
    },
  },
  [`& .${classes.avatar}`]: {
    marginRight: theme.spacing(2),
    flexShrink: 0,
    display: "flex",

    flexDirection: "row",
    marginBottom: "1rem",
    [theme.breakpoints.down(900)]: {
      margin: 0,
      flexDirection: "column",
    },
  },
  [`& .${classes.wrap}`]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "space-evenly",
    paddingLeft: "24px",
    [theme.breakpoints.down(900)]: {
      marginTop: "24px",
      paddingLeft: 0,
    },
  },
  [`& .${classes.content}`]: {
    color: "#212529",
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: 400,
    display: "block",
    [theme.breakpoints.down(900)]: {
      margin: "12px 0",
    },
  },
  [`& .${classes.name}`]: {
    color: theme.palette.primary.main,
    fontWeight: 700,
    marginRight: "20px",
    fontSize: "16px"
  },
  [`& .${classes.title}`]: {
    fontWeight: 700,
    fontSize: "32px",
    color: "#212529",
    lineHeight: "40px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
    },
  },
});

const ContentCard = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/antrag`);
  }
  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.avatar}>
        <Avatar className={classes.img} src={contentCard} alt="Felix Tillmann" sx={{width: 376, height: 376}} />
        <Box className={classes.wrap}>
          <Typography className={classes.title}>
            Warum Mibug Credit für Ihren Autokredit?
          </Typography>
          <Typography className={classes.content}>
            Mit Mibug Credit können Sie schnell und einfach günstige Autokredite von
            verschiedenen Banken online vergleichen. So finden Sie genau das Angebot,
            das Ihren Wünschen entspricht. Mit unserem Online-Antragsprozess können
            Sie Ihre Finanzierung in wenigen Minuten abschließen. So profitieren Sie von
            einer schnellen Kreditauszahlung – ganz ohne Papierkram.
          </Typography>
          <Button onClick={handleNavigate} active={true}>Kfz-Finanzierung jetzt holen</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContentCard;
