import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Container,
  generateUtilityClasses,
  Theme,
  Avatar,
} from "@mui/material";
import homePageTop from "../icons/homePageTop.png";
import circle from "../icons/home/circle.png";
import circle1 from "../icons/home/circle1.png";
import circle2 from "../icons/home/circle2.png";
import circle3 from "../icons/home/circle3.png";
import circle4 from "../icons/home/circle4.png";
import CreditForm from "../components/CreditForm";

// Define utility classes
const classes = generateUtilityClasses("HomeComponent", [
  "root",
  "header",
  "headerLeft",
  "subTitle",
  "headerRight",
  "headerTitle",
  "headerImage",
  "calculator",
  "calculatorFields",
  "featuresSection",
  "featuresGrid",
  "loanTypesGrid",
  "card",
  "placeholder",
  "stars",
  "avatarWrap",
  "avatar",
  "rating",
  "ratingTitle",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: theme.spacing(4),
  },
  [`& .${classes.stars}`]: {
    color: theme.palette.info.light,
    width: 20,
    height: 20,
    fontSize: "20px",
  },
  [`& .${classes.rating}`]: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: "20px",
    padding: "5px 0 10px 0"
  },
  [`& .${classes.avatarWrap}`]: {
    display: "flex",
    flexDirection: "row",
  },
  [`& .${classes.avatar}`]: {
    width: 45,
    height: 45,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    marginLeft: "-15px",
    boxSizing: "border-box",
    "&:first-of-type": {
      marginLeft: 0, // Remove margin for the first child
    },
  },
  [`& .${classes.header}`]: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    alignItems: "start",
    justifyContent: "space-between",
    marginBottom: theme.spacing(4),
  },
  [`& .${classes.headerLeft}`]: {
    flex: 1,
  },
  [`& .${classes.headerTitle}`]: {
    fontSize: "53.22px",
    lineHeight: "64px",
    fontWeight: 700,
    color: theme.palette.info.main,
  },
  [`& .${classes.subTitle}`]: {
    fontSize: "16px",
    lineHeight: "26.1px",
    fontWeight: 400,
    color: theme.palette.secondary.main,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: "25px 0",
  },
  [`& .${classes.ratingTitle}`]: {
    fontSize: "14px",
    lineHeight: "15px",
    fontWeight: 400,
    color: theme.palette.info.dark,
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  [`& .${classes.headerRight}`]: {
    flex: 1,
    display: "flex",
    maxWidth: "600px",
    maxHeight: "590px",
    justifyContent: "flex-end",
  },
  [`& .${classes.headerImage}`]: {
    width: "100%",
    height: "100%",
    borderRadius: theme.shape.borderRadius,
    boxSizing: "border-box",
  },
  [`& .${classes.calculator}`]: {
    margin: `${theme.spacing(4)} 0`,
    textAlign: "center",
  },
  [`& .${classes.calculatorFields}`]: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "center",
    gap: theme.spacing(2),
  },
  [`& .${classes.featuresSection}`]: {
    marginBottom: theme.spacing(3),
    textAlign: "center",
  },
  [`& .${classes.featuresGrid}`]: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
    },
    gap: theme.spacing(3),
  },
  [`& .${classes.loanTypesGrid}`]: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr 1fr",
    },
    gap: theme.spacing(3),
  },
  [`& .${classes.card}`]: {
    height: "100%",
  },
  [`& .${classes.placeholder}`]: {
    margin: `${theme.spacing(4)} 0`,
    textAlign: "center",
  },
});

const Home = () => {
  const rating = 4.9;
  const profileImages = [
    circle,
    circle1,
    circle2,
    circle3,
    circle4,
  ];

  return (
    <Container maxWidth="lg" className={classes.root} sx={styles}>
      {/* Header Section */}
      <Box className={classes.header}>
        {/* Left Side of the Header */}
        <Box className={classes.headerLeft}>
          <Typography  className={classes.headerTitle}>
            Ciao Finanzstress. Hallo machbar.
          </Typography>
          <Typography className={classes.subTitle}>
            Erfüllen Sie Ihre Wünsche mit unseren Krediten zu Top-Konditionen.
          </Typography>
          <Box className={classes.avatarWrap}>
            {profileImages.map((url, index) => (
              <Avatar
                key={index}
                src={url}
                alt={`Profile ${index + 1}`}
                className={classes.avatar}
              />
            ))}
            <Box className={classes.rating}>
              <Typography className={classes.ratingTitle}>
                <span>
                  <span className={classes.stars}>
                    {"★".repeat(Math.floor(rating))}
                    {rating % 1 !== 0 && "★ "}
                  </span>
                  {rating}
                </span>
              </Typography>
              <Typography className={classes.ratingTitle} fontSize="13px" mt="5px">
                über 15,000 zufriedene Kunden
              </Typography>
            </Box>
          </Box>

        </Box>
        <CreditForm />
        {/* Right Side of the Header */}
        <Box className={classes.headerRight}>
          <img
            src={homePageTop}
            alt="Home Top Banner"
            className={classes.headerImage}
          />
        </Box>
      </Box>

      {/* Loan Calculator Section */}
      <Box className={classes.calculator}>
        <Typography variant="h5" fontWeight="bold">
          Kreditrechner
        </Typography>
        <Box className={classes.calculatorFields}>
          <TextField label="Betrag (€)" variant="outlined" />
          <TextField label="Laufzeit (Monate)" variant="outlined" />
          <Button variant="contained" size="large">
            Berechnen
          </Button>
        </Box>
      </Box>

      {/* Features Section */}
      <Box className={classes.featuresSection}>
        <Typography variant="h6" fontWeight="bold">
          Warum unsere Kredite?
        </Typography>
        <Box className={classes.featuresGrid}>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">Flexibel</Typography>
              <Typography variant="body2">
                Unsere Kredite passen sich Ihren Bedürfnissen an.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">Günstig</Typography>
              <Typography variant="body2">
                Profitieren Sie von niedrigen Zinsen und transparenten
                Bedingungen.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h6">Schnell</Typography>
              <Typography variant="body2">
                Schnell und unkompliziert beantragen – digital und papierlos.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Placeholder Section */}
      <Box className={classes.placeholder}>
        <Typography variant="body1">
          Weitere Inhalte folgen bald...
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
