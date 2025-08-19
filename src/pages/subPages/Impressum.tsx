import React from 'react';
import {Box, Typography, Link, Theme} from '@mui/material';
import { generateUtilityClasses } from '@mui/material';
import {StyledContainer} from "./AGB";

const classes = generateUtilityClasses('Impressum', [
  'container',
  'section',
  'heading',
  'content'
]);

const styles = (theme: Theme) => ({
  [`&.${classes.container}`]: {
    margin: '16px 0',
  },
  [`& .${classes.section}`]: {
    marginBottom: '16px',
  },
  [`& .${classes.heading}`]: {
    fontWeight: 'bold',
      marginBottom: '8px',
      fontSize: '16px',
  },
  [`& .${classes.content}`]: {
    lineHeight: 1.5,
      fontSize: '14px',
  },
  'a': {
    color: '#0000EE',
      textDecoration: 'none',
  },
  'a:hover': {
    textDecoration: 'underline',
  },
})
interface ImpressumProps {
  className?: string;
}

const Impressum: React.FC<ImpressumProps> = ({ className = '' }) => {
  return (
    <Box className={`${classes.container} ${className}`} sx={styles}>
      <StyledContainer maxWidth="lg">
        <Box className={classes.section}>
          <Typography className={classes.content}>Mibug UG & Co.</Typography>
          <Typography className={classes.content}>Menzinger Str. 130<br />80997 München</Typography>
          <Typography className={classes.content}>E-Mail: <Link href="mailto:info@mibugcredit.de">info@mibugcredit.de</Link><br />
            Internet: <Link href="https://www.mibugcredit.de" target="_blank">www.mibugcredit.de</Link><br />
            Hotline: +49 89 41435700 (Servicezeiten: Mo-Fr 8-20 Uhr, Sa 10-15 Uhr)</Typography>
          <Typography className={classes.content}>Vertretungsberechtigte Geschäftsführer</Typography>
          <Typography className={classes.content}>Giovanni Alic (Gründer)</Typography>
        </Box>

        <Box className={classes.section}>
          <Typography className={classes.content}>Verantwortlicher für journalisSsch-redakSonelle Inhalte gem. 18 Abs. 2 Medienstaatsvertrag</Typography>
          <Typography className={classes.content}>(MStV):</Typography>
          <Typography className={classes.content}>DatenschutzbeauUragter:</Typography>
          <Typography className={classes.content}>Thorsten Feldmann, L.L.M.</Typography>
          <Typography className={classes.content}>Registergericht: Amtsgericht München</Typography>
          <Typography className={classes.content}>Registernummer: HRA 94250</Typography>
          <Typography className={classes.content}>Umsatzsteuer-ID: DE220999652</Typography>
        </Box>

        <Box className={classes.section}>
          <Typography className={classes.content}><b>Erlaubnis nach § 34c Abs. 1 Nr. 2 Gewerbeordnung GewO - Darlehensvermi@ler</b></Typography>
          <Typography className={classes.content}><b>Aufsichtsbehörde</b>: Kreisverwaltungsreferat München, Hauptabteilung II, Gewerbebehörde,</Typography>
          <Typography className={classes.content}>Ruppertstraße 19, 80337 München</Typography>
        </Box>

        <Box className={classes.section}>
          <Typography className={classes.content}><u>Berufsrechtliche Regelungen:</u></Typography>
          <Typography className={classes.content}>
            • § 34c GewO
            <br/>
            • Makler- und Bauträgerverordnung (MaBV)
            <b>
              Erlaubnis nach § 34d Abs. 1 GewO - Versicherungsvermi@ler
            </b>

          </Typography>
          <Typography className={classes.content}><b>Erlaubnis- und Registerbehörde</b>: IHK Industrie- und Handelskammer für München und
            <br/>
            Oberbayern, Max-Joseph-Straße 2, 80333 München
          </Typography>
          <Typography className={classes.content}>
            Registrierungsnummer: D-RH9Y-BZXC2-29 / <Link href="https://www.vermittlerregister.info" target="_blank">www.vermittlerregister.info</Link>
          </Typography>
          <Typography className={classes.content}>
            Die MIBUG UG & Co hält keine Beteiligungen an SSmmrechten oder dem Kapital von
            <br/>
            Versicherungsunternehmen. Es gibt keine Beteiligungen von Versicherungsunternehmen an
            <br/>
            den SSmmrechten oder dem Kapital der MIBUG UG & Co.
            <br/>
            Berufsbezeichnung: Versicherungsvermikler mit Erlaubnis nach § 34d Abs. 1 GewO;
            <br/>
            Bundesrepublik Deutschland
            <u>Berufsrechtliche Regelungen:</u>
            • § 34d GewO für Versicherungsvermikler und Versicherungsberater
            <br/>
            • §§ 59 - 68 Gesetz über den Versicherungsvertrag (VVG)
            <br/>
            • § 48b Versicherungsaufsichtsgesetz (VAG)
            <br/>
            • Verordnung über die Versicherungsvermiklung und -beratung (VersVermV)
            <br/>
            <b>Berufsrechtliche Regelungen</b>
            Die berufsrechtlichen Regelungen können über die vom Bundesministerium der JusSz und
            <br/>
            von der juris GmbH betriebene Homepage <Link href="https://www.gesetze-im-internet.de" target="_blank">www.gesetze-im-internet.de</Link> eingesehen und
            <br/>
            abgerufen werden.
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography className={classes.content}>
            <b>
              Gemeinsame registerführende Stelle
              <br/>
              Die gemeinsame registerführende Stelle im Sinne des § 11 Abs. 1 Nr. 4 VersVermV ist die
              <br/>
              Industrie- und Handelskammer für München und Oberbayern, Max-Joseph-Straße 2, 80333
              <br/>
              München.
            </b>
          </Typography>
        </Box>
        <Box className={classes.section}>
          <Typography className={classes.content}>
            Telefon: <Link href="tel: 0180 6 00 48 50" target="_blank">0180 6 00 48 50</Link>, Festnetzpreis 0,20 €/Anruf;
            <br/>
            Mobilfunkpreise maximal 0,60 €/Anruf,
            weitere InformaSonen unter <Link href="https://www.vermiklerregister.info" target="_blank">www.vermiklerregister.info</Link>
            <br/>
            <b>AnschriV der außergerichtlichen Streitschlichtungsstelle</b>
            <br/>
            Bei StreiSgkeiten zwischen Versicherungsvermiklern und Versicherungsnehmern kann
            <br/>
            folgende Schlichtungsstelle angerufen werden:
            <br/>
            Versicherungsombudsmann e. V., Posoach 08 06 32
            <br/>
            Telefon: 0800 / 3326031
            <br/>
            Telefon (aus dem Ausland): gebührenpflichSge Rufnummer +49 30 204293 99
            <br/>
            E-Mail: beschwerde@versicherungsombudsmann.de
            <br/>
            Internet: <a href="https://www.versicherungsombudsmann.de" target="_blank" rel="noreferrer">www.versicherungsombudsmann.de</a>
            <br/>
            <b>InformaWonen zur Online-Streitbeilegung gemäß Art. 14 Abs. 1 ODR-Verordnung</b>
            Die EU-Kommission stellt eine Online-Plarorm zur Online-Streitbeilegung (OS-Plarorm)
            <br/>
            unter folgendem Link bereit: <a href="https://www.ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">www.ec.europa.eu/consumers/odr/</a>
            <br/>
            <b>Allgemeine InformaWonspflichten gem. § 36 Verbraucherstreitbeilegungsgesetz (VSBG)</b>
            <br/>
            Wir weisen Sie darauf hin, dass die MIBUG UG & CO nicht bereit und nicht verpflichtet ist, an
            <br/>
            Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </Typography>
        </Box>
      </StyledContainer>
    </Box>
  );
};

export default Impressum;
