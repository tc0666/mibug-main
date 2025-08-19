import React from 'react';
import notFound from "../icons/notFound.png";
import {Container, generateUtilityClasses, Theme} from "@mui/material";

const classes = generateUtilityClasses('Navigation', [
  'root',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "60px 0",
    margin: "0 auto"
  },
});

const NotFoundPage = () => {
  return (
    <Container className={classes.root} maxWidth="md" sx={styles}>
      <img src={notFound} alt="notFound"/>
      <h1>Diese Website wird gerade überarbeitet.</h1>
      <p>Wir helfen Ihnen gerne, Mibug Credit für Ihre Wünsche zu finden.</p>
    </Container>
  );
};

export default NotFoundPage;
