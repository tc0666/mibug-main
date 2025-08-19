import React from 'react';
import {Box, Typography, Button, generateUtilityClasses, Theme} from '@mui/material';

const classes = generateUtilityClasses('JobGridList', [
  'root',
  'gridContainer',
  'gridItem',
  'contentBox',
  'title',
  'description',
  'button'
]);

const jobData = [
  {
    title: 'Engineering',
    description:
      'Alle, die für mibugcredit arbeiten, besitzen umfassende Erfahrung, sind Expert*innen auf ihrem Arbeitsgebiet und wissen genau, was getan werden muss. Wir sind Software Engineers, nicht einfach Entwickler*innen. Wir arbeiten cross-funktional und coden auf eine Art und Weise, dass unsere Codes Einfluss auf die User haben, von der UI bis hin zur Datenbank. Wir überwachen diese Auswirkungen unseres Codings durch User Research, fullstack Analysen, End-to-End-Tests und eine ganzheitliche Herangehensweise, die den gelieferten Mehrwert aufzeigen.',
    backgroundColor: '#1B5426',
  },
  {
    title: 'Produkt',
    description:
      'Im Produkt designen wir Lösungen und Features der Zukunft und implementieren diese durch flexible Grundsätze. Mobilität steht bei mibugcredit an erster Stelle. Unsere Kundschaft steht immer im Fokus von dem, was wir alle machen (User-zentriertes Design). Willst du an einer self-service Applikation mit höchster Qualität arbeiten? Unser Ziel ist es, allen unseren Kund*innen den für sie perfekten Kredit zu bieten und das schnell, unkompliziert und nachhaltig. Was definiert die perfekte Kreditplattform der Zukunft? Dies sind die zentralen Fragestellungen, die durch unsere Product Owner*innen und Designer*innen adressiert werden!',
    backgroundColor: '#277634',
  },
  {
    title: 'Marketing',
    description:
      'Wir sind das Marketing-Team! Wir sorgen dafür, dass so viele Kunden*innen wie möglich den Weg zu mibugcredit finden' +
      ' und dass unsere Marke mehr und mehr bekannt wird. Dazu nutzen wir alle erdenklichen Marketing-Kanäle sowie Performance- und Brand-Marketing-Kampagnen. Unser Ziel? Datengetriebenes und innovatives Marketing. Neben etablierten Marketing-Kanälen wie TV und Radio, finden wir auch auf neuen Medien wie Display und Social Media den besten und effizientesten Ansatz und erhöhen gleichzeitig unsere Markenbekanntheit.',
    backgroundColor: '#3A6F8F',
  },
  {
    title: 'Kundenberatung Vertrieb',
    description:
      '„Wir machen Geld günstiger! Unser Ziel ist es, allen Kund*innen den günstigsten Kredit, den besten Service und' +
      ' die kompetenteste Kreditberatung überhaupt zu vermitteln. Bei uns geht es um die Lust an der Kommunikation und den gemeinsamen Weg mit unseren Kund*innen.“ Leistung, Ehrlichkeit und Humor werden bei uns großgeschrieben!“ (Tobias Wieschendahl, Senior VP Sales)',
    backgroundColor: '#9C2A2A',
  },
  {
    title: 'Analytics',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind das Analytics-Team. Wir sind abteilungsübergreifend verantwortlich für alle Reports und Datenanalysen bei mibugcredit. Wir unterstützen mibugcredits "Data Driven Culture" und die verschiedenen Teams in der Steuerung ihrer Aktivitäten. Unser Analytics Team ist in vier Unterabteilungen aufgeteilt: Marketing Analytics, Web Analytics, Sales Analytics sowie Business Analytics.\n' +
      '\n'
  },

  {
    title: 'Strategie',
    backgroundColor: '#4A4A8F',
    description:
      'Wir als "Strategy" Team wollen mibugcredit Wachstum vorantreiben, indem wir strategische Projekte konzipieren und gemeinsam mit cross-funktionalen Teams bei mibugcredit implementieren. Da unsere Strategie auch für Investitionsgesellschaften maßgeblich ist, sind wir zudem in Investor Relations-Themen eingebunden. Indem wir stets als Pioniere agieren, treiben wir das Wachstum und die Profitabilität von mibugcredit voran. Für unsere Arbeit ist es essentiell, dass wir die interne sowie externe Umgebung ständig hinterfragen. Dabei stehen wir im engen Austausch mit dem C-Level. Für uns steht ein starkes Ownership, ständige Herausforderungen und Austausch mit allen relevanten Stakeholdern an erster Stelle und trägt maßgeblich zum Erfolg unserer Projekte bei.\n' +
      '\n'
  },

  {
    title: 'Legal, Risk & Compliance\n',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind das Legal, Risk & Compliance Team. Wir kümmern uns um alle rechtlichen und regulatorischen Themen. Wir unterstützen unsere mibugcredit Teams bei operativen und strategischen Entscheidungen, bei neuen Kooperationen sowie bei der Implementierung und Überwachung aller notwendigen Risiko- und Compliance-Strukturen.\n' +
      '\n'
  },

  {
    title: 'Finance',
    backgroundColor: '#4A4A8F',
    description:
      'Der Fachbereich Finance ist ein wenig wie das Herz-Kreislaufsystem von mibugcredit. Alles, was hier tagtäglich passiert, läuft am Ende über unseren Tisch und wir schauen, dass der stetige Geldmittelfluss sichergestellt ist und alles korrekt erfasst wird. Dafür haben wir ein Team aus Spezialisten*innen, die das sehr schnell einschätzen und noch schneller in unseren Systemen erfassen.\n' +
      '\n'
  },

  {
    title: 'Bank Kooperationen\n',
    backgroundColor: '#4A4A8F',
    description:
      'Nachdem mibugcredit 2012 die Banken mit an Bord geholt hat, wurde dieses Department zu einer der wichtigsten Säulen des Unternehmens: Hier werden mit viel Geschick und Passion die besten Konditionen für unsere Kund*innen ausgehandelt.\n' +
      '\n'
  },

  {
    title: 'Kundenservice\n',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind die erste Anlaufstelle für alle Fragen rund um mibugcredit. Wir kümmern uns darum, dass alle Kund*innen eine passende Antwort erhalten oder vermitteln sie an die entsprechenden Abteilungen. Kundenzufriedenheit und ein hohes Level an Service stehen bei uns an erster Stelle, denn zufriedene Kund*innen kommen gerne wieder. Unser Ziel ist es, den Service zu bieten, den sich unsere Kund*innen wünschen.\n' +
      '\n'
  },

  {
    title: 'Kreditprüfung & Sachbearbeitung\n',
    backgroundColor: '#4A4A8F',
    description:
      '"Bank Services" ist ein Spezial-Team für die Sachbearbeitung und Prüfung von Kreditanträgen. Als Schnittstelle zwischen der Bank und den Kund*innen / Kreditberater*innen ist es unser Ziel, dass möglichst alle Kund*innen eine Auszahlung bei der Bank kommen.\n' +
      '\n'
  },

  {
    title: 'Pre-Sales\n',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind das Pre-Sales Team. Wir kümmern uns darum, unvollständige Kreditanfragen in direkter Zusammenarbeit mit unseren Kund*innen zu vervollständigen. Wir möchten alle Kund*innen durch beste und kompetente Beratung schnell und unkompliziert durch die Kreditanfrage führen.\n' +
      '\n'
  },

  {
    title: 'Quality Management\n',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind das Qualitätsmanagement Team, kurz QM. QM optimiert gezielt Arbeitsabläufe, bestehende Produkte und Dienstleistungen. Dabei stellen wir sicher, dass wir sowohl intern, als auch extern einem höchstmöglichen Qualitätsanspruch gerecht werden.\n' +
      '\n'
  },

  {
    title: 'Performance Management\n',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind das Performance Management Team: Zahlenakrobat*innen und kreative Köpfe zugleich. Wir arbeiten eng mit der Analytics-Abteilung zusammen und unterstützen unsere Stakeholder (Sales und Customer Success) mit Zahlen, Fakten und Analysen. Neben Excel, Reports, KPIs und Analysen sind neben der Arbeit auch Stricken, Tretboot fahren und Witcher ganz groß im Rennen.\n' +
      '\n'
  },

  {
    title: 'Analytics',
    backgroundColor: '#4A4A8F',
    description:
      ''
  },

  {
    title: 'Prozess-Management\n',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind das Prozess-Management-Team und sind die ersten Ansprechpartner*innen, wenn es um das Thema Geschäftsprozessmanagement geht. Gemeinsam mit unseren Stakeholdern kümmern wir uns um die Aufnahme, Dokumentation, Analyse, Optimierung und Automatisierung der Prozesse innerhalb mibugcredit.' +
      '\n'
  },

  {
    title: 'Office & Facility Management\n',
    backgroundColor: '#4A4A8F',
    description:
      'Customers First! Als Service-Abteilung sehen wir es als unseren Standard an, unsere smavianer*innen jeden Tag glücklich zu machen. Focus on Impact! Unser Ansporn ist es, für unsere smavianer*innen eine bestmögliche Arbeitsumgebung zu schaffen und diese stetig weiterzuentwickeln, damit sich alle bestmöglich auf ihre Arbeit fokussieren können.\n' +
      '\n'
  },

  {
    title: 'People & Talent',
    backgroundColor: '#4A4A8F',
    description:
      'Wir sind das People & Talent Team! Unsere oberste Priorität ist die Ermöglichung eines professionellen Werdegangs für unsere Mitarbeiter*innen bei mibugcredit. Wir setzen dabei auf Best Practices und eine "can-do" Einstellung, um die besten Mitarbeiter*innen für unsere Teams zu gewinnen, zu fördern und zu entwickeln sowie zu halten. Angefangen bei umfangreichen Recruiting-Aktivitäten, über ein strukturiertes Onboarding bis hin zur Gestaltung von Karrierepfaden sind wir die erste Anlaufstelle. Und wir lieben es!\n' +
      '\n'
  },
];


const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.gridContainer}`]: {
    display: 'flex', flexWrap: 'wrap'
  },
  [`& .${classes.gridItem}`]: {
    padding: "24px",
    flex: { xs: '100%', md: 'calc(50% - 48px)' },
    boxSizing: 'border-box',
  },
  [`& .${classes.contentBox}`]: {
    margin: "1rem 2rem"
  },
  [`& .${classes.title}`]: {
    color: '#ffffff',
    fontSize: "1.50rem",
    lineHeight: "2.19rem",
    letterSpacing: "0.00rem",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
    },
  },
  [`& .${classes.description}`]: {
    color: '#ffffff', fontSize: "1rem", lineHeight: "1.50rem", letterSpacing: "0.01rem"
  },
  [`& .${classes.button}`]: {
    color: '#ffffff', fontSize: "0.875rem", fontWeight: 500, textTransform: "initial"
  },
});

const JobGridList: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.gridContainer}>
        {jobData.map((job, index) => {
          let backgroundColor;
          if (index % 3 === 0) {
            backgroundColor = '#1B5426';
          } else if (index % 3 === 1) {
            backgroundColor = '#277634';
          } else if (index % 3 === 2) {
            backgroundColor = '#39A949';
          }

          return (
            <Box
              key={`jobcomponent-${job.title}`}
              className={classes.gridItem}
              sx={{
                backgroundColor: backgroundColor,
              }}
            >
              <Box className={classes.contentBox}>
                <Typography
                  variant="h3"
                  className={classes.title}
                >
                  {job.title}
                </Typography>
                <Typography
                  variant="body1"
                  className={classes.description}
                >
                  {job.description}
                </Typography>
                <Button
                  variant="text"
                  className={classes.button}
                >
                  Erfahre mehr...
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default JobGridList;
