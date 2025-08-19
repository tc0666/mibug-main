import { Typography, Box, Button, Container, Theme, useMediaQuery } from '@mui/material';
import generateUtilityClasses from '@mui/material/generateUtilityClasses';
import fackePhone from '../../../icons/home/fackePhone.png';
import smallPhone from '../../../icons/home/smallPhone.svg';

const classes = generateUtilityClasses('FeatureSection', [
  'root',
  'wrap',
  'credit',
  'img',
  'title',
  'list',
  'description',
  'name',
  'button',
  'listItem',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    backgroundColor: "#F6F6F6",
  },
  [`& .${classes.credit}`]: {
    position: 'relative',
    borderRadius: '16px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '404px',
    height: 'fit-content',
    [theme.breakpoints.down(900)]: {
      width: '100%',
    },
  },
  [`& .${classes.title}`]: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: '2.5rem',
    marginBottom: '1.5rem',
    color: '#323232',
    letterSpacing: '0.00rem',
    [theme.breakpoints.down(900)]: {
      fontSize: '24px',
    },
  },
  [`& .${classes.img}`]: {
    width: '100%',
    height: '580px',
    objectFit: 'cover',
    boxShadow: ' 0px -4px 15px 0px #00000026',
    marginBottom: '-18px',
  },
  [`& .${classes.list}`]: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    [theme.breakpoints.down(900)]: {
      gridTemplateColumns: '1fr',
    },
  },
  [`& .${classes.listItem}`]: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '1.5rem',
    marginRight: '40px',
    img: {
      width: '40px',
      height: '40px',
      marginRight: '10px',
    },
  },
  [`& .${classes.description}`]: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '1.5rem',
    color: '#323232',
  },
  [`& .${classes.name}`]: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    marginBottom: '0',
    lineHeight: '46px',
    color: '#323232',
    letterSpacing: '0.00rem',
    [theme.breakpoints.down(900)]: {
      fontSize: '1.50rem',
    },
  },
  [`& .${classes.button}`]: {
    marginTop: '2rem',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 700,
    fontSize: '1rem',
    textTransform: 'none',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
    borderRadius: "2px",
    boxShadow: `0px 1px 5px 0px #0000001F,
                0px 2px 2px 0px #00000024,
                0px 3px 1px -2px #00000033`,
    width: '276px',
    height: '48px',
  },
  [`& .${classes.wrap}`]: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    columnGap: '5%',
    rowGap: '2rem',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1200px',
    paddingTop: '40px',
    [theme.breakpoints.down(900)]: {
      gridTemplateColumns: '1fr',
      justifyItems: 'center',
      paddingBottom: '40px',
      paddingTop: '30px',
    },
  },
});

interface Features {
  icon: string;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features: Features[];
  handleNavigate?: () => void;
}

const FeatureSection = ({ features, handleNavigate }: FeatureSectionProps) => {
  const isMobile = useMediaQuery('(min-width:900px)');

  return (
    <Box className={classes.root} sx={styles}>
      <Container maxWidth="lg">
        <Box className={classes.wrap}>
          <Box className={classes.credit}>
            {isMobile ? (
              <img
                src={fackePhone}
                alt="Symbolbild Liste der Angebote"
                className={classes.img}
                loading="lazy"
              />
            ) : (
              <img
                src={smallPhone}
                alt="Symbolbild Liste der Angebote"
                loading="lazy"
                width={278}
              />
            )}
          </Box>
          <Box>
            <Typography variant="h2" className={classes.title}>
              Mit Mibug Credit
              <br />
              zu passenden Kreditangeboten
            </Typography>

            <Box component="ul" className={classes.list}>
              {features.map((feature) => (
                <Box component="li" key={classes.name} className={classes.listItem}>
                  <img src={feature.icon} alt={`${feature.title} Icon`} />
                  <Box>
                    <Typography variant="h3" className={classes.name}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1">{feature.description}</Typography>
                  </Box>
                </Box>
              ))}
            </Box>

            <Box textAlign="center">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleNavigate}
              >
                Jetzt Kreditanfrage starten
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FeatureSection;
