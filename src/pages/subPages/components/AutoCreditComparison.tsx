import React from 'react';
import {Box, Typography, generateUtilityClasses, Theme} from '@mui/material';

const classes = generateUtilityClasses('AutoCreditComparison', [
  'root',
  'sectionTitle',
  'description',
  'contentWrapper',
  'number',
  'title',
  'text',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: '40px 0',
    color: '#212529',
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: '40px',
    marginBottom: '24px',
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.description}`]: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '20px',
    marginBottom: '40px',
  },
  [`& .${classes.contentWrapper}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
  },
  [`& .${classes.number}`]: {
    fontSize: '72px',
    fontWeight: 700,
    color: '#c5c8c1',
    lineHeight: '1',
  },
  [`& .${classes.title}`]: {
    fontSize: '24px',
    fontWeight: 700,
    marginTop: '24px',
    lineHeight: "32px",
    marginBottom: '8px',
    color: '#172507',
  },
  [`& .${classes.text}`]: {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: 400,
    color: '#172507',
    span: {
      fontWeight: 700,
      color: theme.palette.primary.main,
    }
  },
});

interface ContentSectionProps {
  number: string;
  title: string;
  text: string;
}

interface AutoCreditComparisonProps {
  sections: ContentSectionProps[];
}

const AutoCreditComparison: React.FC<AutoCreditComparisonProps> = ({
 sections,
}) => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.sectionTitle}>
        Autokredit-Vergleich für günstige Angebote
      </Typography>
      <Typography className={classes.description}>
        Wenn Sie von Ihrem Traumauto nicht länger nur träumen möchten, ist ein Autokredit oft der Schlüssel zur Verwirklichung. Doch nicht jeder Autokredit ist gleich,
        und die Konditionen können erheblich variieren. Hier kommt die Bedeutung eines gründlichen Autokredit-Vergleichs ins Spiel. Durch einen umfassenden
        Autokredit-Vergleich können Sie nicht nur Geld sparen, sondern auch die für Sie optimalen Finanzierungsbedingungen finden. Ein sorgfältiger Autokredit-
        Vergleich berücksichtigt verschiedene Faktoren wie <b>Zinssätze, Laufzeiten</b> und eventuelle <b>Sondertilgungsoptionen</b>. Indem Sie sich die Zeit für einen detaillierten
        Autokredit-Vergleich nehmen, erhöhen Sie Ihre Chancen, ein Angebot zu finden, das perfekt auf Ihre finanzielle Situation und Ihre Bedürfnisse zugeschnitten ist.
      </Typography>
      <Box className={classes.contentWrapper}>
        {sections.map((section, index) => (
          <Box key={index} sx={{ flex: '1 1 45%', minWidth: '300px' }}>
            <Typography className={classes.number}>{section.number}</Typography>
            <Typography className={classes.title}>{section.title}</Typography>
            <Typography className={classes.text} dangerouslySetInnerHTML={{ __html: section.text }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default AutoCreditComparison;
