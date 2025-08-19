import React from 'react';
import { Box, Typography, Button, Container, Theme } from '@mui/material';
import { generateUtilityClasses } from '@mui/material';

const classes = generateUtilityClasses('ComplaintProcedure', [
  'root',
  'title',
  'subtitle',
  'text',
  'emailLink',
  'button',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    margin: '0 auto',
    paddingTop: "48px",
  },
  [`& .${classes.title}`]: {
    fontWeight: 700,
    fontSize: '24px',
    padding: '8px 0',
    marginBottom: "20px",
    color: '#388E3C',
  },
  [`& .${classes.subtitle}`]: {
    fontWeight: 700,
    fontSize: '20px',
    color: '#388E3C',
    marginTop: '16px',
  },
  [`& .${classes.text}`]: {
    fontSize: '16px',
    color: '#424242',
    marginTop: '8px',
    marginBottom: "20px",
  },
  [`& .${classes.emailLink}`]: {
    color: '#388E3C',
    textDecoration: 'none',
    fontSize: '16px',
    marginTop: '8px',
  },
  [`& .${classes.button}`]: {
    backgroundColor: '#388E3C',
    color: '#FFFFFF',
    fontWeight: 700,
    marginTop: '16px',
    textTransform: 'none',
    padding: '12px 24px',
    '&:hover': {
      backgroundColor: '#2E7D32',
    },
  },
});

const ComplaintProcedure: React.FC = () => {
  return (
    <Box sx={styles} className={classes.root}>
      <Container maxWidth="lg">
        <Typography className={classes.title}>
          Beschwerdeverfahren gemäß Digital Services Act (DSA)
        </Typography>
        <Typography className={classes.subtitle}>
          Kontaktstelle gem. Art. 11 und Art. 12 DSA
        </Typography>
        <Typography className={classes.text}>
          Zentrale Anlaufstelle für Behörden der Mitgliedstaaten, die Europäischen Kommission und den Verwaltungsrat sowie Nutzer unserer Dienste:
        </Typography>
        <a className={classes.emailLink} href="mailto:mibugcredit.de">
          mibugcredit.de
        </a>
        <Typography className={classes.text}>
          Eine Kommunikation ist in deutscher Sprache möglich.
        </Typography>
        <Typography className={classes.subtitle}>
          Melde- und Abhilfeverfahren gemäß Art. 16 DSA
        </Typography>
        <Typography className={classes.text}>
          Hier können Sie gemäß Art. 16 DSA mögliche rechtswidrige Inhalte unserer Webseite melden.
        </Typography>
        <Button
          className={classes.button}
          href="/hc/de/requests/new?ticket_form_id=20417007766813"
          target="_blank"
        >
          Schreiben Sie uns
        </Button>
      </Container>
    </Box>
  );
};

export default ComplaintProcedure;
