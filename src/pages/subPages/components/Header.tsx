import {Box, Container, generateUtilityClasses, Theme, Typography} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';

const headerClasses = generateUtilityClasses('Header', [
  'root',
  'textWrapper',
  'headline',
  'text',
  'checkList',
  'ctaButton',
  'trustLogos',
  'checkListItem',
  'checkListIcon',
  'subLine',
]);

export interface HeaderProps {
  imageUrl: string;
  title: string;
  subtitleItems?: string[];
  subtitle?: string;
  buttonText?: string;
  trustLogos?: string[];
}

const styles = (theme: Theme) => ({
  [`&.${headerClasses.root}`]: {
    objectFit: 'cover',
    color: 'white',
    padding: 4,
    minHeight: "440px",
    height: "100%",
    justifyContent: "start",
    alignItems: "center",
    display: "flex",
    [theme.breakpoints.down(950)]: {
      maxWidth: "100%",
      minHeight: "275px"
    },
  },
  [`& .${headerClasses.textWrapper}`]: {
    width: "62.5%",
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  [`& .${headerClasses.headline}`]: {
    color: 'white',
    fontSize: '54px',
    fontWeight: 500,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '56px',
    letterSpacing: 'normal',
    mb: '10px',
    mt: '10px',
    display: 'block',
    [theme.breakpoints.down("md")]: {
      fontSize: '34px',
    },
  },
  [`& .${headerClasses.subLine}`]: {
    color: '#c8c8c8',
    fontSize: '1.50rem',
    fontWeight: 700,
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: '2.19rem',
    letterSpacing: 'normal',
    display: 'block',
  },
  [`& .${headerClasses.checkList}`]: {
    padding: "0",
  },
  [`& .${headerClasses.checkListIcon}`]: {
    color: theme.palette.primary.main,
    marginRight: "8px",
  },
  [`& .${headerClasses.ctaButton}`]: {
    display: 'block',
    backgroundColor: '#28a745',
    height: '40px',
    lineHeight: '40px',
    borderRadius: '3px',
    fontSize: '16px',
    fontWeight: 400,
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#fff',
    textDecoration: 'none',
    maxWidth: '304px',
    cursor: 'pointer',
  },
  [`& .${headerClasses.checkListItem}`]: {
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: "8px",
  },
})



const Header: React.FC<HeaderProps> = ({ imageUrl, title, subtitleItems, buttonText, trustLogos, subtitle }) => (
  <Box
    className={headerClasses.root}
    sx={{
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: "cover",
    }}
  >
    <Container maxWidth="lg" className={headerClasses.root} sx={styles}>
      <Box className={headerClasses.textWrapper}>
        <Typography variant="h1" className={headerClasses.headline}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography variant="h1" className={headerClasses.subLine}>
            {subtitle}
          </Typography>
        ) : null

        }
        <Box className={headerClasses.text} sx={{ [`&.${headerClasses.text}`]: { marginBottom: 3 } }}>
          <ul className={headerClasses.checkList}>
            {subtitleItems?.map((item, index) => (
              <li key={`subtitleItems-${index}`} className={headerClasses.checkListItem}>
                <CheckIcon className={headerClasses.checkListIcon}/>
                {item}
              </li>
            ))}
          </ul>
        </Box>

        <Box className={headerClasses.trustLogos} sx={{ [`&.${headerClasses.trustLogos}`]: { display: 'flex', marginTop: 4 } }}>
          {trustLogos?.map((logo, index) => (
            <img
              key={`trustLogos-${index}`}
              src={logo}
              alt={`trust-logo-${index}`}
              style={{ maxHeight: '60px', marginRight: '16px' }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  </Box>
);

export default Header
