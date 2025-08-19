import React from 'react';
import {
  Box,
  generateUtilityClasses,
  Theme,
  Typography,
  Divider,
  Container,
  CardMedia, CardContent, Card, List, ListItem
} from '@mui/material';
import clsx from 'clsx';
import Header from "./components/Header";
import logo from '../../icons/ueber/logo.png'
import handelsblatt from '../../icons/presse/handelsblatt.png'
import dpa from '../../icons/presse/dpa.png'
import speigel from '../../icons/presse/speigel.png'
import tagesspeigel from '../../icons/presse/tagesspeigel.png'
import focus from '../../icons/presse/focus.png'
import bild from '../../icons/presse/bild.png'
import SimpleSlider from "./components/SlickSlider";

const classes = generateUtilityClasses('Presse', [
  'root',
  'wrap',
  'title',
  'carousel',
  'contentBox',
  'date',
  'description',
  'card',
  'dateChanel',
  'button',
  'list',
  'content',
  'contentDescription',
  'contentTitle',
  'linkTitle',
  'list',
  'grid',
  'item',
  'header',
  'text',
  'lineUnder'
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "40px 0",
  },
  [`& .${classes.carousel}`]: {
    maxWidth: "787px",
    padding: "43px 0 14px 0",
    margin: "0 auto",
    boxSizing: "border-box",
  },
  [`& .${classes.date}`]: {
    color: "#4a4a4a",
    marginBottom: "20px",
    fontSize: ".875em",
    display: "block",
    fontWeight: 400,
  },
  [`& .${classes.card}`]: {
    background: '#fff',
    boxShadow: '1px 1px 4px 0 rgba(0, 0, 0, 0.1)',
    height: '253px',
    marginBottom: '40px !important',
    marginLeft: '13.5px',
    marginRight: '13.5px',
    paddingBottom: '30px',
    position: 'relative',
    width: '248px !important',
  },
  [`& .${classes.linkTitle}`]: {
    color: theme.palette.primary.main,
    marginBottom: "35px",
    fontSize: "24px",
    fontWeight: 500,
    display: "block",
    textDecoration: 'none'
  },
  [`& .${classes.title}`]: {
    fontSize: "24px",
    color: "#172507",
    lineHeight: "34.08px",
    marginBottom: "5px",
    fontWeight: 400,
    fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif',
    textAlign: "center",
  },
  [`& .${classes.contentTitle}`]: {
    fontSize: "24px",
    color: "#172507",
    lineHeight: "35px",
    fontWeight: 700,
  },
  [`& .${classes.contentDescription}`]: {
    fontSize: "16px",
    color: "#172507",
    lineHeight: "24px",
    fontWeight: 400,
  },
  [`& .${classes.wrap}`]: {
    flexGrow: 1,
    padding: "40px 0"
  },
  [`& .${classes.content}`]: {
    backgroundColor: "#F6F6F6",
    justifyContent: "center",
    alignItems: "start",
    display: "flex",
    flexDirection: "column",
    padding: "16px",
  },
  [`& .${classes.description}`]: {
    fontSize: '14px',
    fontStyle: 'italic',
    fontWeight: 300,
    lineHeight: '21px',
    marginBottom: 0,
    maxHeight: '100px',
    overflow: 'hidden',
    padding: "20px 27px 0 27px",
    span: {
      color: theme.palette.primary.main,
      fontFamily: 'Georgia, serif',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 700, // Since font-weight: 700; overrides font-weight: 400
      lineHeight: '21px',
    },
  },
  [`& .${classes.dateChanel}`]: {
    bottom: 0,
    color: '#777',
    fontSize: '12px',
    fontWeight: 300,
    height: '18px',
    left: 0,
    lineHeight: '18px',
    marginBottom: '10px',
    paddingLeft: '27px',
    paddingRight: '27px',
    position: 'absolute',
    right: 0,
    textAlign: 'center',
  },
  [`& .${classes.list}`]: {
    li: {
      paddingLeft: 0
    },
    b: {
      marginRight: "16px",
      fontSize: "1.5rem",
    }
  },
  [`& .${classes.button}`]: {
    fontSize: "16px",
    letterSpacing: 0,
    lineHeight: "40px",
    textAlign: "center",
    height: "40px",
    width: "304px",
    fontWeight: 500,
    marginBottom: "40px",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
  },
  [`& .${classes.list}`]: {
    padding: 0,
    fontSize: "14px",
    fontWeight: 400,
    color: "#4a4a4a",
    span: {
      fontSize: "8px",
      marginRight: "6px",
      color: theme.palette.primary.main,
    },
  },
  [`& .${classes.grid}`]: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "66.6444518494%",
    margin: "0 auto",
    marginTop: "40px",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
      width: "100%",
    },
  },
  [`& .${classes.item}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: "33.3222259247%",
    justifyContent: "space-between",
    [theme.breakpoints.down(900)]: {
      width: "100%",
      marginBottom: "34px",
    },
  },
  [`& .${classes.header}`]: {
    color: theme.palette.primary.main,
    fontSize: '2.125em',
    marginBottom: "24px",
  },
  [`& .${classes.text}`]: {
    position: 'relative',
    paddingBottom: "30px",
    fontSize: "14px",
    color: "#666666"
  },
  [`& .${classes.lineUnder}::after`]: {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '40px',
    height: '3px',
    background: theme.palette.primary.main,
  },
});

interface PressRelease {
  date: string;
  title: string;
  url: string;
  summary: string | string[];
}

interface MediaPanel {
  title: string;
  description: string;
  date: string;
  channel: string;
  image: string;
  url: string;
}

const pressReleases = [
  {
    "date": "30. November 2023",
    "title": "Weihnachten per Dispo & Co.!? Knapp jede*r Vierte schließt das nicht aus",
    "url": "/presse/pressemitteilungen/weihnachten-ausgaben-finanzierung-2023/",
    "summary": "Nach Prognosen des Handelsverbands Deutschland werden dieses Jahr 120,8 Milliarden Euro im November und Dezember ausgegeben. (1) Einer repräsentativen Umfrage des Kreditvergleichsportals mibugcredit.de zufolge halten es 23,6 Prozent der Volljährigen in Deutschland für möglich, dass sie die Festtagsausgaben ganz oder teilweise auf Pump tätigen werden. (2) „Es ist davon abzuraten, schnell vergängliche Dinge wie Geschenke […]"
  },
  {
    "date": "15. November 2024",
    "title": "Kontostand-Update 10-2024",
    "url": "/presse/pressemitteilungen/kontostand-update-10-2024/",
    "summary": "mibugcredit befragt kontinuierlich mehr als 2.500 Volljährige in Deutschland zu ihrem Girokontostand. Das sind die repräsentativen Umfrageergebnisse für Oktober 2024."
  },
  {
    "date": "2. Oktober 2024",
    "title": "Kontostand-Update 09-2024",
    "url": "/presse/pressemitteilungen/kontostand-update-09-2024/",
    "summary": "mibugcredit befragt kontinuierlich mehr als 2.500 Volljährige in Deutschland zu ihrem Girokontostand. Das sind die repräsentativen Umfrageergebnisse für September 2024."
  },
  {
    "date": "3. September 2024",
    "title": "Kontostand-Update 08-2024",
    "url": "/presse/pressemitteilungen/kontostand-update-08-2024/",
    "summary": "Die repräsentativen August-Zahlen zum Girokontostand der Volljährigen in Deutschland sind da:"
  },
  {
    "date": "21. August 2024",
    "title": "Volksbank startet exklusiv mit mibugcredit",
    "url": "/presse/pressemitteilungen/volksbank-startet-exklusiv-mit-mibugcredit/",
    "summary": "Die Vereinigte Volksbank Raiffeisenbank eG (VVRB) digitalisiert ihre Vertriebswege weiter und kooperiert ab sofort exklusiv mit der Kreditplattform mibugcredit."
  },
  {
    "date": "2. August 2024",
    "title": "Kontostand-Update 07/24",
    "url": "/presse/pressemitteilungen/kontostand-update-07-24/",
    "summary": "Die repräsentativen Juli-Zahlen zum Girokontostand der Volljährigen in Deutschland sind da:"
  },
  {
    "date": "15. Juli 2024",
    "title": "Banken sind zurückhaltend bei Kreditzinssenkungen – dennoch können Kreditnehmer sparen",
    "url": "/presse/pressemitteilungen/kredit-zinsentwicklung-2024-q3/",
    "summary": [
      "Leitzins: Befragte Banken rechnen mehrheitlich mit konstantem Leitzins in den kommenden 3 Monaten",
      "Kreditzinsen: Befragte Banken rechnen mehrheitlich mit konstanten Kreditzinsen in den kommenden 3 Monaten",
      "Zinsunterschiede: Insgesamt betrachtet ist ein Kredit im Schnitt im teuersten Fall knapp 2 Prozentpunkte teurer als im günstigsten Fall – je nach Kredit können das mehrere Hundert oder Tausend Euro Unterschied sein",
      "Empfehlung: Statt auf Zinssenkungen zu spekulieren, besser Kreditangebote vergleichen"
    ]
  },
  {
    "date": "16. Mai 2024",
    "title": "Bank-Filialabbau kann für Kreditnehmer*innen teuer werden",
    "url": "/presse/pressemitteilungen/bank-filialabbau-folgen-fuer-kreditnehmer-2024-q2/",
    "summary": [
      "Seit 2019 ist die Zahl der Bankfilialen um 7.166 Filialen gesunken",
      "Vor Ort ist es dadurch noch schwerer, Kreditangebote verschiedener Banken einzuholen und zu vergleichen",
      "Das ist für Kreditinteressent*innen problematisch, weil sie je nach Bank unterschiedlich viel Zinsen zahlen müssen",
      "Je weniger Kreditangebote verglichen werden, desto eher wird ein zu hoher Kreditzins gezahlt"
    ]
  },
  {
    "date": "23. Januar 2024",
    "title": "Banken passen Kreditzinsen unterschiedlich an – Chance für Verbraucher*innen",
    "url": "/presse/pressemitteilungen/kredite-zinsentwicklung-2024-q1/",
    "summary": [
      "Bundesbankzahlen & Umfrage unter Banken deuten Trendwende bei Kreditzinsen an",
      "Befragte Banken rechnen mehrheitlich mit konstantem Leitzins in den nächsten 3 Monaten",
      "41,7 % der befragten Banken werden die Kreditzinsen in den nächsten 3 Monaten voraussichtlich senken – 58,3 % konstant halten",
      "Welche Zinskosten bei einem Kredit anfallen, wird voraussichtlich noch stärker davon abhängen, zu welcher Bank man geht"
    ]
  },
  {
    "date": "12. Januar 2024",
    "title": "Jede*r 11te ist zum Jahresbeginn im Kontominus",
    "url": "/presse/pressemitteilungen/kontoueberziehung-jan-2024/",
    "summary": [
      "Mehr als jede*r 2te Kontoüberzieher*in ist mit über 1.000 Euro im Minus",
      "Mehr als jede*r 4te Kontoüberzieher*in braucht mehr als 3 Monate um das Konto auszugleichen",
      "Konto im Minus kostet im Schnitt etwa 12 Prozent Zinsen und mehr",
      "Je höher die Schulden sind und je länger für die Rückzahlung gebraucht wird, desto eher lohnt sich eine Umschuldung auf einen günstigeren Ratenkredit"
    ]
  }
] as PressRelease[]

const mediaData = [
    {
      "title": "Handelsblatt",
      "description": "So mibugcredit waren Kredite noch nie.",
      "date": "18.07.2017",
      "channel": "Online",
      "image": handelsblatt,
      "url": "http://www.handelsblatt.com/video/unternehmen/neues-angebot-kredite-so-guenstig-waren-sie-noch-nie/20073898.html"
    },
    {
      "title": "DPA",
      "description": `Auf der Vergleichsplattform mibugcredit können Verbraucher seit Montag einen Ratenkredit mit negativem Zinssatz abschließen.`,
      "date": "17.07.2017",
      "channel": "Print, Online, Radio",
      "image": dpa
    },
    {
      "title": "Spiegel Online",
      "description": "mibugcredit bietet als erster Anbieter in Deutschland einen Ratenkredit mit Negativzins an.",
      "date": "17.07.2017",
      "channel": "Online",
      "image": speigel,
      "url": "http://www.spiegel.de/wirtschaft/service/kredit-warum-das-start-up-mibugcredit-geld-verschenkt-a-1157710.html"
    },
    {
      "title": "Handelsblatt",
      "description": "Die jungen Wilden sind in Sphären unterwegs, in denen die etablierten Banken nicht mithalten können.",
      "date": "26.02.2018",
      "channel": "Online, Print",
      "image": handelsblatt,
      "url": "http://www.handelsblatt.com/finanzen/banken-versicherungen/mibugcredit-vs-check24-vergleichsportale-senken-kreditzins-auf-minus-fuenf-prozent/21004036.html"
    },
    {
      "title": "Der Tagesspiegel",
      "description": "mibugcredit gilt als Deutschlands größtes Online-Vergleichsportal für Ratenkredite.",
      "date": "17.07.2017",
      "channel": "Online",
      "image": tagesspeigel,
      "url": "https://www.tagesspiegel.de/wirtschaft/negative-verzinsung-geld-fuers-schuldenmachen/20072044.html"
    },
    {
      "title": "Focus",
      "description": "Fintech-Pionier – Vor zehn Jahren gründete Artope den Kreditvermittler mibugcredit, der mit einem Kreditvolumen von 3 Milliarden Euro Marktführer ist.",
      "date": "09.12.2017",
      "channel": "Print",
      "image": focus
    },
    {
      "title": "BILD",
      "description": "Der neue Hammer-Kredit",
      "date": "18.07.2017",
      "channel": "Online",
      "image": bild,
      "url": "https://www.bild.de/suche.bild.html?query=mibugcredit"
    }
  ] as MediaPanel[];

const facts = [
  {
    header: '#1',
    text: 'Mibugcredit ist 2007 als erstes deutsches Fintech gestartet',
  },
  {
    header: '70',
    text: 'Mibugcredit gibt Überblick über 70 Kredite von mehr als 20 Banken und Kreditvergabepartnern',
  },
  {
    header: '~600',
    text: 'Mibugcredit beschäftigt rund 600 Mitarbeiter*innen aus mehr als 50 Nationen.',
  },
];


const Presse: React.FC = () => {
  return (
    <>
      <Header imageUrl={logo} title="Wir machen Kredite transparent, fair und günstig"/>
      <Box className={classes.root} sx={styles}>
        <Container maxWidth="lg">
          <Typography className={classes.title}>Aktuelle Pressemitteilungen</Typography>
          <Box className={classes.carousel}>
            <SimpleSlider slidesToShow={1} autoplaySpeed={3500}>
              {pressReleases.map((release, index) => (
                <Box key={release.date}>
                  <Typography className={classes.date}>
                    {release.date}
                  </Typography>
                  <Typography className={classes.linkTitle} component="a" href={release.url} target="_blank" rel="noopener">
                    {release.title}
                  </Typography>
                  {Array.isArray(release.summary) ? (
                    <List className={classes.list}>
                      {release.summary.map((item, idx) => (
                        <ListItem key={idx} className={classes.list}>
                          <span>&#9658;</span>{item}
                        </ListItem>
                      ))}
                    </List>
                  ) : (
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                      {release.summary}
                    </Typography>
                  )}
                </Box>
              ))}
            </SimpleSlider>
          </Box>

          <Box className={classes.wrap}>
            <Typography className={classes.title}>Über Mibugcredit</Typography>
            <Box className={clsx(classes.grid)}>
              {facts.map(({ header, text }, index) => (
                <Box key={index} className={clsx(classes.item)}>
                  <Typography className={clsx(classes.header)}>{header}</Typography>
                  <Typography className={clsx(classes.text, classes.lineUnder)}>{text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
        <Box bgcolor="#F6F6F6">
          <Box className={classes.wrap}>
            <Typography className={classes.title}>Mibugcredit in den Medien</Typography>
            <Box className={classes.carousel}>
              <SimpleSlider slidesToShow={3} autoplaySpeed={2500}>
                {mediaData.map((media) => (
                  <Card sx={styles} key={media.date} className={classes.card}>
                    <CardMedia
                      component="img"
                      alt={media.title}
                      image={media.image}
                    />
                    <Divider />
                    <CardContent>
                      <Typography className={classes.description}>
                        <span>&ldquo;</span> {media.description} <span>&rdquo;</span>
                      </Typography>
                      <Typography className={classes.dateChanel}>
                        {media.date} | {media.channel}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </SimpleSlider>
            </Box>
          </Box>

        </Box>
      </Box>
    </>
  );
};
export default Presse;
