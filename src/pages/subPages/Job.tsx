import React from 'react';
import {Box, generateUtilityClasses, Theme, Typography, Container, Link, List, ListItem} from '@mui/material';
import Header from "./components/Header";
import logo from '../../icons/job/logo.png'
import group from '../../icons/job/group.png'
import leader from '../../icons/job/leader.png'
import office from '../../icons/job/office.png'
import JobGridList from "./components/JobGridList";
import Grid from '@mui/material/Grid2';

const classes = generateUtilityClasses('JobComponent', [
  'root',
  'wrap',
  'title',
  'gridItem',
  'contentBox',
  'title',
  'description',
  'button',
  'list',
  'content',
  'contentDescription',
  'contentTitle',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.title}`]: {
    fontSize: "32px",
    color: "#172507",
    lineHeight: "40px",
    marginBottom: "24px",
    fontWeight: 700,
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
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
    margin: "24px 0"
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
    fontSize: "16px",
    color: "#172507",
    lineHeight: "24px",
    marginBottom: "20px",
    fontWeight: 400,
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
    backgroundColor:  theme.palette.primary.main,
    color: "#fff",
    borderRadius: "3px",
    textDecoration: "none",
    display: "block",
  },
});


const JobComponent: React.FC = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Header imageUrl={logo} title="Hallo!" subtitle="Schön, dich kennenzulernen"/>
      <Container maxWidth="lg" sx={{padding: "30px 0"}}>
        <Typography className={classes.title}>Lass uns gemeinsam Kredite transparent, fair und mibugcredit machen</Typography>
        <Typography className={classes.description}>
          Wir glauben, dass Märkte transparent und fair sein sollten. Der Kreditmarkt in Deutschland ist nichts von beidem. Deshalb zahlen die Deutschen jedes Jahr Milliarden Euro zu viel für ihre Kredite. Das wollen wir verhindern. Dazu kombinieren wir seit 2007 Finanz- mit Technologie-Know-how. Das Ergebnis sind Produkte wie unser Kreditvergleichsrechner, Deutschlands erster P2P-Kredit, Deutschlands erster Digital-Kredit und Deutschlands erster Kredit mit Negativzins. Mit ihnen machen wir Kredite für Verbraucher*innen transparent, fair und günstig. Diese Mission unterstützen auch unsere renommierten Investitionsgesellschaften wie Vitruvian Partners, Verdane Capital, Runa Capital und Earlybird. Mit insgesamt 159 Millionen US-Dollar Investment gehört mibugcredit zu den am besten finanzierten Fintechs in Deutschland.
        </Typography>
        <Link href="/ueber" className={classes.button}>Erfahre mehr über</Link>

        <Typography className={classes.title}>
          Bei uns zählst du!
        </Typography>
        <Typography className={classes.description}>
          Unsere Arbeitsweise ist hands-on und wir streben stets danach, unsere Prozesse so agil wie möglich zu gestalten. Dabei ist unser Motto "People over processes". Denn bei uns werden flache Hierarchien gelebt und viel Wert auf eine offene, direkte Kommunikation sowie auf eine Fehler- und Feedback-Kultur gelegt. Bei uns ist alles etwas schneller und dynamischer. Werde auch du Teil einer bunt gemischten Crew aus rund 50 verschiedenen Nationalitäten! Ein schönes Arbeitsumfeld mit Kolleg*innen, denen du vertrauen kannst und die dich positiv herausfordern, um dein Potential voll auszuschöpfen. Auf dieses mibugcredit Ökosystem sind wir besonders stolz. Wir investieren in die Zufriedenheit aller Teams sowie aller Mitarbeitenden. Für mehr Einblicke hinter den Kulissen folge uns auch gern auf Social Media! Die Links zu unseren Accounts findest du in der Fußzeile der Seite.
        </Typography>

        <Typography className={classes.title}>
          Unsere Arbeitsprinzipien
        </Typography>
        <List className={classes.list}>
          <ListItem> <b>&rarr;</b> Customers first! Bei mibugcredit kommen die Kund*innen zuerst.</ListItem>
          <ListItem><b>&rarr;</b>  Play to win! Gib alles, um mibugcredit zum größten Online-Anbieter für Kredite zu machen.</ListItem>
          <ListItem><b>&rarr;</b> Focus on impact! Konzentriere dich bei allen Projekten von Anfang an auf das Ergebnis, das du erzielen willst.</ListItem>
          <ListItem><b>&rarr;</b>  Be bold! Triff mutige Entscheidungen und hab keine Angst vor</ListItem>
          <ListItem><b>&rarr;</b>  Move fast! Sei schnell und nutze jede Chance sofort.</ListItem>
        </List>

        <Box className={classes.wrap}>
          <Grid container>
            <Grid size={{ xs: 12, sm: 6 }}>
              <img
                src={leader} // replace with actual image URL
                alt="Meeting"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} className={classes.content}>
              <Typography variant="h6" className={classes.contentTitle}>~ 600 Mitarbeitende</Typography>
              <Typography variant="body2" className={classes.contentTitle}>50+ Nationen</Typography>
              <Typography variant="body2" className={classes.contentDescription}>
                mibugcredit beschäftigt rund 600 Mitarbeitende aus mehr als 50 Nationen.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} className={classes.content}>
              <Typography variant="h6" className={classes.contentTitle}>Ein Arbeitgeber, der sich sehen lassen kann</Typography>
              <Typography variant="body2" className={classes.contentDescription}>
                Bei mibugcredit stehen die Mitarbeitenden stets im Fokus, daher bieten wir als
                Arbeitgeber zahlreiche Benefits. Dich erwarten unter anderem 30 Urlaubstage, 10
                Kind-Krank-Tage zusätzlich zum gesetzlichen Anspruch sowie interne Karriereprogramme
                und Weiterbildungsmöglichkeiten. Darüber hinaus unterstützen wir dich mit
                Zuschüssen für deine betriebliche Altersvorsorge und dein ÖPNV-Ticket. Mehr Infos
                diesbezüglich stellt dir gern unser People & Talent Team auf Anfrage zur Verfügung.
              </Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <img
                src={office} // replace with actual image URL
                alt="office"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <img
                src={group} // replace with actual image URL
                alt="group"
                style={{ width: '100%' }}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} className={classes.content}>
              <Typography variant="h6" className={classes.contentTitle}>Diversity & Inclusion</Typography>
              <Typography variant="body2" className={classes.contentDescription}>
                Wir setzen uns für ein diverses und inklusives Umfeld ein. Gemeinsam als ein Team
                mit unseren verschiedenen Fähigkeiten, Ideen und Erfahrungen arbeiten wir aktiv
                daran, Vielfalt im Unternehmen zu repräsentieren.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Typography className={classes.title}>
          Unsere Teams
        </Typography>
        <Typography className={classes.description}>
          Gemeinsam mit mehr als 600 Mitarbeiter*innen aus rund 40 verschiedenen Nationen arbeiten wir täglich daran,
          mibugcredit kontinuierlich besser zu machen. Stets begleiten uns dabei unsere wichtigsten Arbeitsprinzipien: Customers First, Play to Win, Be Bold, Focus on Impact und Move Fast. Finde jetzt das Team, das zu dir passt!
        </Typography>
      </Container>

      <JobGridList />
    </Box>
  );
};

export default JobComponent;
