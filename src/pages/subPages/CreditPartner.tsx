import React, {useState} from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardMedia,
  Container,
  Theme,
  generateUtilityClasses,
  Box,
  List,
  ListItem,
  TextField,
  MenuItem,
  Select,
} from '@mui/material';
import clsx from 'clsx';

import auxmoney from '../../icons/partnerBanks/auxmoney.svg'
import bankofscotland from '../../icons/partnerBanks/bankofscotland.svg'
import barclays from '../../icons/partnerBanks/barclays.svg'
import carcredit from '../../icons/partnerBanks/carcredit.svg'
import commerzbank from '../../icons/partnerBanks/commerzbank.svg'
import vonessensubprime from '../../icons/partnerBanks/vonessensubprime.svg'
import creditplus from '../../icons/partnerBanks/creditplus.svg'
import degussa from '../../icons/partnerBanks/degussa.svg'
import deutschebank from '../../icons/partnerBanks/deutschebank.svg'
import dkb from '../../icons/partnerBanks/dkb.svg'
import dslbank from '../../icons/partnerBanks/dslbank.svg'
import hvb from '../../icons/partnerBanks/hvb.svg'
import ingdiba from '../../icons/partnerBanks/ingdiba.svg'
import kredit2day from '../../icons/partnerBanks/kredit2day.svg'
import norisbank from '../../icons/partnerBanks/norisbank.svg'
import olb from '../../icons/partnerBanks/olb.png'
import oyak from '../../icons/partnerBanks/oyak.svg'
import postbank from '../../icons/partnerBanks/postbank.svg'
import psd from '../../icons/partnerBanks/psd.svg'
import qlick from '../../icons/partnerBanks/qlick.svg'
import skreditpartnerkredit from '../../icons/partnerBanks/skreditpartnerkredit.svg'
import santander from '../../icons/partnerBanks/santander.svg'
import skg from '../../icons/partnerBanks/skg.svg'
import swkbanklogo from '../../icons/partnerBanks/swkbanklogo.png'
import targobank from '../../icons/partnerBanks/targobank.svg'
import vvrb from '../../icons/partnerBanks/vvrb.svg'
import direkt from '../../icons/partnerBanks/direkt-logo.svg'
import Grid from '@mui/material/Grid2';

const bankData = [
  {
    name: '1822direkt Bank',
    image: direkt,
    description: 'Seit 2019 profitieren Mibug Credit Kunden über unseren Kreditvergleich von günstigen Zinsen bei der 1822direkt, die Tradition und Sicherheit mit modernen Finanzdienstleistungen vereint.',
    features: [
      'Günstige Zinsen',
      'Tradition und Sicherheit',
      'Moderne Finanzdienstleistungen'
    ],
    link: '/kredit/1822direkt-bank/',
  },
  {
    name: 'Auxmoney',
    image: auxmoney,
    description:
    'Seit 2016 vermitteln wir über auxmoney Kredite von Privatpersonen, wodurch auch unsere Kunden mit geringen' +
      ' Chancen bei Banken finanzielle Unterstützung erhalten können.',
    link: '/kredit/auxmoney/',
  },
  {
    name: 'Bank of Scotland',
    image: bankofscotland,
    description:
    'Die Bank of Scotland ist seit 2015 unser Partner.  Ob Ratenkredit oder Autokredit - Unsere Kunden sind von der einfachen Kreditabwicklung und den fairen Konditionen überzeugt.',
    link: '/kredit/scotland/',
  },
  {
    name: 'Barclays',
    image: barclays,
    description:
      'Barclays ist seit 2011 Mibug Credit-Partner. Angestellte und Selbstständige schätzen den Barclays Kredit. Die zuverlässigen Benachrichtigungen sowie die schnelle Auszahlung bewerten unsere Kunden positiv.',
    link: '/kredit/barclays/',
  },
  {
    name: 'Carcredit',
    image: carcredit,
    description:
    'Seit 2013 kooperieren carcredit.de und Mibug Credit. Seitdem erweitert dieser Partner unser Angebot um günstige und' +
      ' passgenaue Autokredite. carcredit.de ist der Erfahrung unserer Kunden nach zu urteilen ein zuverlässiger Kreditgeber.',
    link: '/kredit/carcredit/',
  },
  {
    name: 'Commerzbank',
    image: commerzbank,
    description:
      '                      Seit Mai 2020 können Mibug Credit-Kunden über unseren Kreditvergleich bei einer der größten Banken Deutschlands - der Commerzbank - Ratenkredite mit günstigen Zinsen und Online-Abwicklung beantragen.                    ',
    link: '/kredit/carcredit/',
  },
  {
    name: 'Consorsfinanz',
    image: vonessensubprime,
    description:
    'Die Kooperation zwischen Mibug Credit und Consors Finanz besteht seit 2015. Selbst Kunden, die' +
      ' bereits mehrere Kredite bedienen, haben gute Erfahrungen mit dem Consors Finanz Kredit gemacht und würden ihn weiterempfehlen.                    ',
    features: [
      'Großes Filialnetz',
      'Umfangreiches Online-Banking',
      'Individuelle Beratung'
    ],
    link: '/consorsfinanz',
  },
  {
    name: 'Creditplus',
    image: creditplus,
    description:
    'Seit 2012 kooperiert mibugcredit mit der Creditplus Bank. Erfahrungen unserer Kunden zeigen, dass dieser Partner durch ein vielfältiges Kreditangebot und eine flexible Kreditgestaltung überzeugt.',
    features: [
      'creditplus',
      'creditplus Online-Banking',
      'Individuelle creditplus'
    ],
    link: '/creditplus',
  },
  {
    name: 'Degussa Bank',
    image: degussa,
    description:
'Seit 2019 erhalten mibugcredit-Kunden über unseren Kreditvergleich Darlehen der Degussa Bank. Dabei profitieren Sie von' +
      ' günstigen Zinsen und vielfältigen Finanzprodukten – dieser mibugcredit-Partner bietet Ihnen einen Rundumservice.',
    features: [
      'creditplus',
      'creditplus Online-Banking',
      'Individuelle creditplus'
    ],
    link: '/creditplus',
  },
  {
    name: 'Deutsche Bank',
    image: deutschebank,
    description:
      'Die Deutschen Bank gehört seit 2020 zu unseren Partnern und überzeugt durch Mibug Credit sowie zahlreiche Besonderheiten wie die Möglichkeit zum Gemeinschaftskredit oder Sondertilgungen.',
    features: [
      'Freie Verwendung',
      'Globale Präsenz',
      'Innovationen im Finanzbereich',
      'Komplexe Finanzlösungen'
    ],
    link: 'https://www.deutsche-bank.de/',
  },
  {
    name: 'DKB',
    image: dkb,
    description:
      'Die DKB ist seit 2013 unser Partner, wodurch wir unseren Kunden einen weiteren attraktiven Ratenkredit anbieten können. Kunden, die einen DKB Kredit über unser Vergleichsportal erhalten haben, sind durchweg zufrieden.',
    features: [
      'Freie Verwendung',
      'Kreditkartenangebote',
      'Online-Banking'
    ],
    link: 'https://www.dkb.de/',
    bg: '#08B578',
  },
  {
    name: 'DSL Bank',
    image: dslbank,
    description:
'Die DSL Bank und mibugcredit – von dieser Zusammenarbeit profitieren mibugcredit-Kunden seit 2013. Privatkredit, Autokredit oder Modernisierungskredit – das breite Angebot überzeugt unsere Kunden.',
    features: [
      'Freie Verwendung',
      'Kreditkartenangebote',
      'Online-Banking'
    ],
    link: 'https://www.dkb.de/',
    bg: '#08B578',
  },
  {
    name: 'HypoVereinsbank',
    image: hvb,
    description:
    'Seit Mitte 2019 gehört die HypoVereinsbank zum Kreis der mibugcredit-Partner. Mit dem KomfortKredit bietet sie' +
      ' unseren Kunden ein zinsgünstiges Produkt mit zahlreichen Vorteilen wie der Sondertilgung.',
    features: [
      'Auto/Motorrad',
      'Freie Verwendung',
      'Kreditkartenangebote',
      'Online-Banking'
    ],
    link: 'https://www.dkb.de/',
    bg: '#08B578',
  },
  {
    name: 'ING',
    image: ingdiba,
    description: 'Seit 2012 ist die ING-DiBa als Partner an unserer Seite. Durch das breite Produktportfolio bereichert die Bank unseren Kreditvergleich ungemein. Neben dem Standardkredit bietet die ING-DiBa weitere Kreditformen.',
    features: [
      'Digitales Banking',
      'Attraktive Konditionen',
      'Internationales Netzwerk'
    ],
    link: 'https://www.ing.de/',
    bg: '#08B578',
  },
  {
    name: 'Kredit2day',
    image: kredit2day,
    description:
      'Das lange Warten auf die Entscheidung der Bank und das benötigte Geld gehören der Vergangenheit an. Mit Kredit2Day, Deutschlands automatischem Sofortkredit, erfahren Sie direkt, ob Sie den Kredit erhalten.',
    features: [
      'Umschuldung',
      'Digitales Banking',
      'Attraktive Konditionen',
      'Internationales Netzwerk'
    ],
    link: 'https://www.ing.de/',
  },
  {
    name: 'norisbank',
    image: norisbank,
    description:
    'Die norisbank ist seit 2014 unser Partner und bietet Ratenkredite zu günstigen Konditionen an. Die norisbank' +
      ' Kredit Erfahrungen zeigen, dass die Beantragung problemlos verläuft und der Kredit zügig ausgezahlt wird.',
    features: [
      'Digitales Banking',
      'Attraktive Konditionen',
      'Internationales Netzwerk'
    ],
    link: 'https://www.ing.de/',
  },
  {
    name: 'Oldenburgische Landesbank',
    image: olb,
    description:
      'Seit 2023 zählt die OLB zum festen Kreis der mibugcredit-Partner. Potenzielle Kreditkunden profitieren von der direkten Kooperation durch vorteilhafte Kreditkonditionen und zügige Kreditzusagen.',
    features: [
      'Gewerbe',
      'Großes Filialnetz',
      'Umfangreiches Online-Banking',
      'Individuelle Beratung'
    ],
    link: 'https://www.commerzbank.com/',
  },
  {
    name: 'Oyak Anker Bank',
    image: oyak,
    description:
      'Seit 2016 gehört die Oyak Anker Bank zu unseren Partnern. Günstige Konditionen und vielfältige Nutzungsmöglichkeiten – davon sind mibugcredit-Kunden bei den Finanzprodukten überzeugt.',
    features: [
      'Regionale Nähe',
      'Förderung der regionalen Wirtschaft',
      'Persönliche Beratung'
    ],
    link: 'https://www.sparkassen.de/',
  },
  {
    name: 'Postbank',
    image: postbank,
    description:
'Die Kooperation zwischen der Postbank und mibugcredit besteht seit 2012. Seither können unsere Kunden über unseren Kreditvergleich neben Ratenkrediten zur freien Verwendung auch Autokredite aufnehmen.',
    features: [
      'Beamte',
      'Genossenschaftliche Prinzipien',
      'Regionale Förderung',
      'Digitales Banking'
    ],
    link: 'https://www.vb-eg.de/',
  },
  {
    name: 'PSD Bank',
    image: psd,
    description:
'mibugcredit und die PSD Bank sind seit 2016 Partner. Unsere Kunden empfehlen den PSD Kredit, da er durch Schnelligkeit überzeugt. Das wird unter anderem durch moderne Verfahren in der Kreditabwicklung erreicht.',
    features: [
      'Digitales Banking',
      'Attraktive Konditionen',
      'Internationales Netzwerk'
    ],
    link: 'https://www.ing.de/',
  },
  {
    name: 'Qlick',
    image: qlick,
    description:
'Seit 2019 zählt die zur BAWAG Group gehörende Marke Qlick zu unseren Partnern. Gemeinsam mit der Südwestbank bietet Qlick äußerst günstige Ratenkredite an. Trotz junger Kooperation, sind unsere Kunden begeistert.',
    features: [
      'Gewerbe',
      'frei',
      'umschuldung',
      'ballon'
    ],
    link: 'https://n26.com/',
  },
  {
    name: 'S-Kreditpartner',
    image: skreditpartnerkredit,
    description:
'Seit 2020 gehört der S-Kreditpartner zum Kreis unserer Partner. Das Produktportfolio reicht vom S-Kredit zur freien Verwendung bis hin zum S-Autokredit für die Anschaffung von Neu- und Gebrauchtwagen.',
    features: [
      'Ballonfinanzierung',
      'auto',
      'beamte',
      'wohnen'
    ],
    link: 'https://n26.com/',
  },
  {
    name: 'Santander',
    image: santander,
    description:
      'Santander zählt seit dem Jahr 2013 zu unseren Partnern. Mit den Produkten BestCredit sowie CarCredit bietet dieser Partner unseren Kunden neben einfachen Ratenkrediten zur freien Verwendung auch Autokredite.',
    features: [
      'Ballonfinanzierung',
      'auto',
      'beamte',
      'gewerbe'
    ],
    link: 'https://n26.com/',
  },
  {
    name: 'SKG Bank',
    image: skg,
    description:
      'Seit 2013 besteht die Zusammenarbeit zwischen mibugcredit und der SKG Bank. Egal ob kostenlose Sondertilgungen oder Gemeinschaftskredit – die Zusatzoptionen sind beim SKG Bank Kredit vielfältig.',
    features: [
      'auto',
      'umschuldung',
      'gewerbe',
      'Wohnen',
    ],
    link: 'https://n26.com/',
  },
  {
    name: 'SWK Bank',
    image: swkbanklogo,
    description:
      'Seit 2012 besteht die Kooperation zwischen der SWK Bank und mibugcredit. Unsere Kunden haben so die Möglichkeit, besonders hohe Kreditsummen von bis zu 100.000 Euro aufzunehmen.',
    features: [
      'Wohnen',
      'frei',
      'umschuldung',
      'gewerbe'
    ],
    link: 'https://n26.com/',
  },
  {
    name: 'Targobank',
    image: targobank,
    description:
      'Seit 2012 erweitert die Targobank unseren Kreditvergleich um mehrere Produkte: Standardkredit, Autokredit und Wohnkredit. Darüber hinaus lässt sich mit einem Targobank Kredit auch, eine Umschuldung durchführen.',
    features: [
      'frei',
      'umschuldung',
      'ballon'
    ],
    link: 'https://n26.com/',
  },
  {
    name: 'Vereinigte Volksbank Raiffeisenbank eG',
    image: vvrb,
    description:
      'Seit August 2024 arbeitet die VVRB mit mibugcredit zusammen. Über diese Kooperation erhalten Kunden neben Ratenkrediten sowie Wohn- und Modernisierungskrediten auch digitale Sofortkredite.',
    features: [
      'frei',
      'umschuldung',
      'ballon'
    ],
    link: 'https://n26.com/',
  },
];

interface BankCardData {
  index: number;
  name: string;
  image: string;
  description: string;
}

const classes = generateUtilityClasses('JobGridList', [
  'root',
  'image',
  'title',
  'description',
  'button',
  'textWrapper',
  'line',
  'textBlackWrapper',
  'activeFilter',
  'filterButton',
  'filterGroup',
  'search',
  'filterSelect',
  'filterListGroup',
  'sectionTitle',
  'sectionDescription',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "40px 0",
  },
  [`& .${classes.title}`]: {
    marginTop: "15px",
    fontSize: "20px",
    fontWeight: 500,
    letterSpacing: 0,
    marginBottom: "15px",
    color: "#fff"
  },
  [`& .${classes.sectionTitle}`]: {
    marginTop: "15px",
    fontSize: "32px",
    fontWeight: 500,
    letterSpacing: 0,
    lineHeight: "32px",
    marginBottom: "24px",
    color: "#172507",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.sectionDescription}`]: {
    marginTop: "15px",
    fontSize: "14px",
    fontWeight: 400,
    marginBottom: "24px",
    color: "#172507"
  },
  [`& .${classes.description}`]: {
    fontSize: 14,
    fontWeight: 'normal',
    letterSpacing: 0,
    lineHeight: '21px',
    height: 'calc(5 * 21px)',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 5,
    WebkitBoxOrient: 'vertical',
    color: "#fff"
  },
  [`& .${classes.line}`]: {
    backgroundColor: "#fff",
    position: "absolute",
    top: "40px",
    height: "4px",
    width: "75px",
    display: "block"
  },
  [`& .${classes.textWrapper}`]: {
    height: "315px",
    boxSizing: "border-box",
    padding: "40px",
    position: "relative",
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${classes.image}`]: {
    height: "315px",
    overflow: "hidden",
    position: "relative",
    backgroundColor: "#fafafa",
    objectFit: "none",
  },
  [`& .${classes.textBlackWrapper}`]: {
    backgroundColor: '#e8e8e8',
    [`& .${classes.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
    [`& .${classes.description}`]: {
      color: '#172507', //172507
    },
    [`& .${classes.title}`]: {
      color: '#172507', //172507
    },
  },
  [`& .${classes.filterGroup}`]: {
    display: 'flex',
    flexDirection: "row",
    marginBottom: '20px',
    width: "100%",
    alignItems: "baseline",
    flexWrap: "wrap",
  },
  [`& .${classes.search}`]: {
    maxWidth: "250px",
    height: "40px",
    width: "100%",
    [theme.breakpoints.down(900)]: {
      padding: "0 14px",
    },
    [theme.breakpoints.down(530)]: {
      padding: "14px 0",
    },
  },
  [`& .${classes.filterSelect}`]: {
    maxWidth: "250px",
    height: "40px",
    width: "100%",
    display: 'none',
    [theme.breakpoints.down(900)]: {
      display: 'flex',
    },
  },
  [`& .${classes.filterListGroup}`]: {
    display: 'inline-block',
    flexDirection: "row",
    marginBottom: '24px',
    paddingLeft: 0,
  },
  [`& .${classes.filterButton}`]: {
    padding: '8px 16px',
    cursor: 'pointer',
    display: "inline",
    color: "#172507",
    paddingLeft: 0,
    fontSize: "16px",
    '&:hover': {
      color: '#28a745',
    },
    [theme.breakpoints.down(900)]: {
      display: 'none',
    },
  },
  [`& .${classes.activeFilter}`]: {
    color: '#28a745',
  },
});
function BankCard({ name, image, description, index }: BankCardData) {
  return (
    <Card sx={styles}>
      <CardMedia
        className={classes.image}
        component="img"
        alt={name}
        image={image}
      />
      <CardContent className={`${index % 2 === 0 ? classes.textWrapper : clsx(classes.textWrapper, classes.textBlackWrapper)}`}>
        <Box className={classes.line} />
        <Typography className={classes.title}>
          {name}
        </Typography>
        <Typography className={classes.description}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

const categoryOption = [
  { label: 'Alle', value: '*' },
  { label: 'Freie Verwendung', value: 'frei' },
  { label: 'Auto/Motorrad', value: 'auto' },
  { label: 'Umschuldung', value: 'umschuldung' },
  { label: 'Beamte', value: 'beamte' },
  { label: 'Gewerbe', value: 'gewerbe' },
  { label: 'Ballonfinanzierung', value: 'ballon' },
  { label: 'Wohnen', value: 'wohnen' },
];

function CreditPartner() {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('*');

  const filteredBanks = bankData.filter((bank) => {
    const matchesSearch =
      bank.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bank.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === '*' || bank?.features?.includes(activeCategory);

    return matchesSearch && matchesCategory;
  });

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
  };

  const handleCategoryChange = (event: any) => {
    setActiveCategory(event.target.value as string);
  };


  return (
    <Container maxWidth="lg" className={classes.root} sx={styles}>
      <Box>
        <Typography className={classes.sectionTitle}>
          Übersicht der durch uns geprüften Partnerbanken und Kreditvergabepartner
        </Typography>

        <Typography className={classes.sectionDescription}>
          Mibugcredit ist eine Kreditvergleich- und Vermittlungsplattform, die mit über 20 Partnerbanken kooperiert. Über mibugcredit können Sie einen passenden Kredit für Ihr Vorhaben finden. Starten Sie einfach einen Kreditvergleich und erhalten Sie Angebote von unseren Partnerbanken und Kreditvergabepartnern. Anschließend können Sie schnell und unkompliziert Ihren Kredit beantragen.Nachfolgend finden Sie eine Übersicht, der von uns geprüften bzw. mit uns kooperienden Partnerbanken sowie Kreditvergabepartner:
        </Typography>
      </Box>
      <Box className={clsx(classes.filterGroup)}>
        <List className={clsx(classes.filterListGroup)}>
          {categoryOption.map(({ label, value }) => (
            <ListItem
              key={`filter-button-group-${value}`}
              onClick={() => handleCategoryClick(value)}
              className={clsx(classes.filterButton, {
                [classes.activeFilter]: activeCategory === value,
              })}
            >
              {label}
            </ListItem>
          ))}
        </List>
        <Select
          value={activeCategory}
          onChange={handleCategoryChange}
          displayEmpty
          className={classes.filterSelect}
        >
          {categoryOption.map(({ label, value }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        <TextField
          fullWidth
          className={classes.search}
          variant="outlined"
          slotProps={{
            input: {
              className: classes.search,
            },
          }}
          placeholder="Schnellsuche"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>
      <Grid container>
        {filteredBanks.map((bank, index) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} padding="10px" key={bank.name}>
              <BankCard {...bank } index={index} />
            </Grid>
            )
        })}
      </Grid>
    </Container>

  );
}

export default CreditPartner;

export {classes as CreditPartnerClasses}
