import React from 'react';
import { Box, Link, Theme, Typography, Container } from '@mui/material';
import { generateUtilityClasses } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { Button } from '../../components/Button';
const classes = generateUtilityClasses('Contact', [
  'container',
  'heading',
  'subHeading',
  'paragraph',
  'button',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.container}`]: {
    padding: '60px',
  },
  [`& .${classes.heading}`]: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '16px',
  },
  [`& .${classes.subHeading}`]: {
    fontSize: '18px',
    fontWeight: 700,
    marginBottom: '8px',
  },
  [`& .${classes.paragraph}`]: {
    fontSize: '16px',
    marginBottom: '26px',
  },
  [`& .${classes.button}`]: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    textTransform: 'none',
    backgroundColor: theme.palette.success.main,
    color: '#fff',
    marginBottom: "20px",
    '& svg': {
      marginRight: '8px',
    },
  },
});

const Contact: React.FC = () => {
  return (
    <Box sx={styles} className={classes.container}>
      <Container maxWidth="lg">
        <Typography className={classes.heading}>Fragen?</Typography>
        <Typography className={classes.paragraph}>
          Hier finden Sie die{' '}
          <Link href="/hc/de" target="_blank" underline="always">
            wichtigsten Informationen
          </Link>{' '}
          rund um den Kreditantrag bei mibugcredit.de.
        </Typography>

        <Typography className={classes.subHeading}>Haben Sie weitere Fragen?</Typography>
        <Typography className={classes.paragraph}>
          Wir beraten Sie gerne telefonisch unter der kostenfreien Nummer:{' '}
          <b>+49 89 41435700</b>
          <br />
          Mo. bis Fr. 8:00 - 20:00 Uhr und Sa. 10:00 - 15:00 Uhr
        </Typography>
        <Link href="tel:+49 89 41435700">
          <Button active={true} className={classes.button}>
            <PhoneIcon />
            Rufen Sie uns an
          </Button>
        </Link>

        <Typography className={classes.subHeading}>Kontakt per E-Mail</Typography>
        <Typography className={classes.paragraph}>
          Mit folgender Funktion können Sie uns eine Nachricht senden, die wir in Kürze beantworten.
        </Typography>
        <Link href="/hc/de/requests/new" target="_blank">
          <Button active={true} className={classes.button}>
            <MailIcon />
            Schreiben Sie uns
          </Button>
        </Link>
      </Container>
    </Box>
  );
};

export default Contact;
