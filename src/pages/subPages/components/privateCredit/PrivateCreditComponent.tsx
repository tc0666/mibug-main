import React from 'react';
import { Box, Typography, IconButton, generateUtilityClasses, Theme } from '@mui/material';
import Guarantee from "../../../../icons/guarantee.svg?react";
import BenefitsSection from "../BenefitsSection";
import clock from "../../../../icons/clock.svg";
import report from "../../../../icons/report.svg";

const classes = generateUtilityClasses('PrivateCreditComponent', [
  'root',
  'benefit',
  'sectionTitle',
  'checklist',
  'checklistItem',
  'checklistIcon',
  'checklistText',
  'guaranteeTitle',
  'guaranteeText',
  'guaranteeWrap',
  'guaranteeIcon',
  'sectionWrap',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.sectionWrap}`]: {
    margin: '24px 0 40px 0'
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "20px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.checklist}`]: {
    padding: "40px",
    boxShadow: "0px 3px 8px 0px #2C322740",
    marginBottom: "60px",
  },
  [`& .${classes.checklistItem}`]: {
    display: "flex",
    alignItems: "center",
  },
  [`& .${classes.guaranteeWrap}`]: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column"
    },
  },
  [`& .${classes.benefit}`]: {
    margin: '24px 0 40px 0'
  },
  [`& .${classes.guaranteeIcon}`]: {
    width: "150px",
    height: "150px",
  },
  [`& .${classes.checklistText}`]: {
    fontSize: "14px",
    color: "#172507",
    span: {
      fontWeight: 500,
      color: theme.palette.primary.main,
      cursor: "pointer",
    }
  },
});

const benefits = [
  {
    icon: clock,
    title: "Privatkredite von Banken",
    description:
    'Die häufigste Form des Privatkredits wird von Banken oder anderen Finanzinstituten angeboten. Kreditnehmer profitieren hierbei vor allem von festen Laufzeiten, festen Zinssätzen und strukturierten Antragsverfahren. Dabei wird darauf geachtet, dass der Kredit entsprechend der Bonität des Antragstellers vergeben wird.'
  },
  {
    icon: report,
    title: "Kredite von Privatpersonen",
    description:
    'Eine Alternative sind Kredite von Privatpersonen, auch <span>P2P-Kredit</span> genannt. Dabei wird das Geld zum Beispiel von privaten Anlegern direkt an den Kreditnehmer verliehen. Die Konditionen werden dabei mit dem  <span>privaten Kreditgeber</span>ausgehandelt. Dieserprivate Kredit kann für Personen interessant sein, deren Bonität nur als mäßig von den Banken eingestuft wird.'
  },
];

const PrivateCreditComponent = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.sectionWrap}>
        <Typography className={classes.sectionTitle}>
          Der passende Privatkredit für Ihre Wünsche
        </Typography>
        <Typography className={classes.checklistText}>
          Ein Privatkredit ist ein Darlehen, das <span>zur freien Verwendung</span> aufgenommen werden kann. Im Gegensatz zu zweckgebundenen Krediten, wie einem
          <span>Autokredit</span>oder einem <span>Immobilienkredit</span>, können Sie den Privatkredit flexibel und ganz nach Ihren Vorstellungen einsetzen – ob für eine größere Anschaffung, die
          Einrichtung Ihres Zuhauses, eine Traumreise oder als finanzielle Reserve für unvorhergesehene Ausgaben. Mit einem Privatkredit gewinnen Sie finanzielle
          Spielräume, die sich individuell an Ihre Bedürfnisse anpassen lassen. Erfahren Sie mehr darüber, welche Möglichkeiten Ihnen ein Privatkredit bietet und wie Sie
          die für Sie passende Finanzierung finden.
        </Typography>
      </Box>


      <Box className={classes.sectionWrap}>
        <BenefitsSection
          benefits={benefits}
          className={classes.benefit}
        />
      </Box>

      <Box className={classes.sectionWrap}>
        <Typography className={classes.sectionTitle}>
          Privatkredite von über 20 Banken kostenlos vergleichen
        </Typography>
        <Typography className={classes.checklistText}>
          Durch unsere langjährige<span>Zusammenarbeit mit über 20 Partnerbanken</span>können wir Ihnen exklusive Konditionen für Ihren Privatkredit anbieten. Der
          Kreditvergleich und die damit verbundene<span>Konditionenanfrage</span>sind SCHUFA-neutral. So sparen Sie bares Geld und haben beste Chancen auf Ihren
          <b>Wunschkredit</b>. Unser maßgeschneiderter Kreditvergleich erstellt für Sie eine<b>persönliche Angebotsübersicht</b>, die perfekt zu Ihren individuellen Voraussetzungen
          passt. Dadurch sind die monatlichen Raten ideal auf Ihr Budget abgestimmt.
        </Typography>
        <Typography className={classes.checklistText}>
          Zudem garantieren wir höchste Sicherheit: wir unterliegen dem Bankgeheimnis und lassen uns regelmäßig vom<span>TÜV Saarland</span>auf
          den Datenschutz überprüfen. Ihre Informationen sind bei uns also in besten Händen. Und dank unseres<span>Online-Verfahrens</span>
          können Sie Ihren Kredit schnell und unkompliziert beantragen. Die Auszahlung erfolgt dann zügig – ohne langes Warten.
        </Typography>
      </Box>
      <Box className={classes.sectionWrap}>
        <Typography className={classes.sectionTitle}>
          Ihr günstiger Privatkredit – Unsere Garantie
        </Typography>
        <Box className={classes.guaranteeWrap}>
          <IconButton className={classes.guaranteeIcon}> <Guarantee /> </IconButton>
          <Box>
            <Typography className={classes.checklistText}>
              Wir überweisen Ihnen eine Einmalzahlung, wenn das günstigste über mibugcredit.de gefundene Kreditangebot nicht <span>günstiger</span> sein sollte als ein vergleichbares, nicht über mibugcredit.de vermitteltes Kreditangebot einer inländischen Bank (Referenzangebot) und Sie Ihren Privatkredit trotzdem über mibugcredit.de abschließen.
            </Typography>
            <Typography className={classes.checklistText}>
              Durch die Einmalzahlung unterbieten wir das Referenzangebot.
            </Typography>
            <Typography className={classes.checklistText}>
              Die tatsächliche Höhe der Einmalzahlung richtet sich nach den Kreditangeboten, die Ihnen die Banken auf mibugcredit.de auf Basis der von Ihnen im Kreditvergleich gemachten Angaben unterbreiten.
            </Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default PrivateCreditComponent;
