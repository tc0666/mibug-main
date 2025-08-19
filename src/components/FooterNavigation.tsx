import React, {useState} from 'react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Link,
  Theme,
  Typography,
  useMediaQuery
} from '@mui/material';
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import Footer from './Footer';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const classes = {
  ...generateUtilityClasses('Header', [
    'root',
    'wrap',
    'content',
    'accordion',
    'link',
  ]),
};
const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    padding: "64px 0 32px 0",
  },
  [`& .${classes.accordion}`]: {
    background: 'none',
  },
  [`& .${classes.wrap}`]: {
    fontSize: "14px",
  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    justifyContent: "space-between",
  },
  [`& .${classes.content}`]: {
    display: "flex",
    flexDirection: "column",
    fontSize: "14px",
    color: "#172507",
    background: "none",
    fontWeight: 400,
    lineHeight: "1.25rem",
    letterSpacing: "0.02rem",
    b: {
      fontWeight: 700,
    },
    a: {
      textDecoration: "none",
      color: "#172507",
      marginTop: "8px",
      "&:hover": {
        color: "#9e9e9e",
      }
    },
    svg: {
      color: theme.palette.primary.main,
      fontSize: "20px",
    }
  },
  [`& .${classes.content} .${classes.link}`]: {
    margin: 0,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  },
});
const footerNavigation = [
  {
    title: 'Unternehmen',
    items: [
      { href: '/ueber', label: 'Über Mibug Credit' },
      { href: '/jobs/', label: 'Jobs' },
      { href: '/presse/', label: 'Presse' },
      { href: '/unsere-partner/', label: 'Unsere Partner' },
    ],
  },
  {
    title: 'Kredit aufnehmen',
    items: [
      { href: '/privatkredit/', label: 'Privatkredit' },
      { href: '/autokredit/', label: 'Autokredit' },
      { href: '/kredit/', label: 'Kredit' },
      { href: '/kredit/sofortkredit', label: 'Sofortkredit' },
    ],
  },
  {
    title: 'Service',
    items: [
      { href: '/partnerprogramm/', label: 'Kredit Partnerprogamm' },
      { href: '/dsa/', label: 'DSA' },
      { href: '/kontakt/', label: 'Kontakt' },
      { href: '/hc/de', label: 'Hilfe' },
    ],
  },
  {
    title: 'Kostenlose Beratung',
    content: <Typography className={classes.content}>
      Wir beraten Sie gerne telefonisch unter:
      <br/>
      <a href="tel:+49 89 41435700" className={classes.link}>+49 89 41435700</a>
      <br/>
      Montag - Freitag: 8:00 - 20:00 Uhr
      <br/>
      Samstag: 10:00 - 15:00 Uhr
    </Typography>
  }
];

const FooterNavigation: React.FC = () => {
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box className={classes.root} sx={styles}>
      <Container maxWidth="lg">
        {isMobile ? (
          <>
            {footerNavigation.map((section, index) => (
              <Accordion
                key={section.title}
                elevation={0}
                expanded={expanded === index}
                onChange={handleChange(index)}
                className={classes.accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-header`}
                >
                  <b>{section.title}</b>
                </AccordionSummary>
                <AccordionDetails className={classes.content}>
                  {section?.items ? section?.items?.map((item) => (
                    <Link href={item.href} key={item.label} style={{ display: 'block', marginBottom: 8 }}>
                      {item.label}
                    </Link>
                  )) : section?.content}
                </AccordionDetails>
              </Accordion>
            ))}
          </>
        ) : (
          <Box className={classes.wrap}>
            {footerNavigation.map((section) => (
              <Box key={section.title} className={classes.content}>
                <b>{section.title}</b>
                {section?.items ? section?.items?.map((item) => (
                  <Link href={item.href} key={item.label}>
                    {item.label}
                  </Link>
                )) : section?.content}
              </Box>
            ))}
          </Box>
        )

        }

        <Footer />
      </Container>
    </Box>
  );
};

export default FooterNavigation;
