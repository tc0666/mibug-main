import React from "react";
import { Typography, Box, Container, Theme } from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import topComma from "../../../icons/home/topComma.svg";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { Scrollbar, A11y } from 'swiper/modules';
import {Arrow} from "./Arrow";

import 'swiper/css';
import 'swiper/css/scrollbar';

const classes = generateUtilityClasses("SliderSection", [
  "root",
  "wrap",
  "Button",
  "title",
  "CardContent",
  "keenSlider",
  "PreviousButton",
  "NextButton",
  "cardDescription",
  "cardFooter",
  "cardWrap",
  "cardLink",
  "sliderContent",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    backgroundColor: "#F6F6F6",
    marginTop: "30px",
    [theme.breakpoints.down(900)]: {
      marginTop: 0,
    },
  },
  [`& .${classes.wrap}`]: {
    padding: "30px 0 60px 0",
    [theme.breakpoints.down(900)]: {
      padding: "10px",
    },
  },
  [`& .${classes.sliderContent}`]: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: "0 32px",
    [theme.breakpoints.down(900)]: {
      padding: 0,
    },
  },
  [`& .${classes.title}`]: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 700,
    fontSize: "28px",
    lineHeight: "2.38rem",
    letterSpacing: "0.03rem",
    textAlign: "start",
    marginBottom: "2rem",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
    },
  },
  [`& .${classes.Button}`]: {
    zIndex: 1,
    [theme.breakpoints.down(900)]: {
      display: "none !important",
    },
  },
  [`& .${classes.cardLink}`]: {
    color: theme.palette.primary.main,
    fontWeight: 400,
    cursor: "pointer",
  },
  [`& .${classes.cardWrap}`]: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "space-between",
    marginTop: "8px"
  },
  [`& .${classes.cardDescription}`]: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    lineHeight: "20px",
    letterSpacing: "0.32px",
    marginBottom: "1rem",
  },
  [`& .${classes.cardFooter}`]: {
    fontFamily: "Roboto, sans-serif",
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: "1.25rem",
    letterSpacing: "0.02rem",
    color: "#848484",
  },
  [`& .${classes.CardContent}`]: {
    ".keen-slider__slide": {
      width: "345px",
      height: "305px",
      minHeight: "305px",
    },
    padding: "24px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    minWidth: "345px",
    height: "305px",
    [theme.breakpoints.down(900)]: {
      width: "244px",
      height: "285px",
    },
  },
  [`& .${classes.keenSlider}`]: {
    display: "inline-flex",
    width: "100%", // Full-width slider
    overflow: "hidden", // Avoid overflow issues
  },
});

const SwiperButtonNext = () => {
  const swiper = useSwiper();

  return (
    <Arrow direction="next" onClick={() =>swiper?.slideNext()} className={classes.Button} />
  );
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();

  return (
    <Arrow direction="prev" onClick={() =>swiper?.slidePrev()} className={classes.Button} />
  );
};

const SliderSection = () => {
  const reviews = [
    {
      description:
        'Ich wurde sofort nach meiner Anfrage kontaktiert und es lief alles flüssig weiter.\n' +
        'Innerhalb von zwei Wochen hatte ich den Kredit auf meinem Konto. Mibug Credit ist\n' +
        'ein guter Kreditvermittler. Ich würde Mibug Credit jederzeit weiterempfehlen.',
      stars: "5 von 5 Sterne",
      source: "ekomi.de",
      date: "21.11.2024 um 11:54 Uhr"
    },
    {
      description:
        "Es ist alles gut gelaufen, ging alles ganz schnell und unkompliziert. Kann es nur\n" +
        "weiterempfehlen. Wenn Sie einen Kredit brauchen, dann sind Sie bei Mibug Credit\n" +
        "richtig.",
      stars: "5 von 5 Sterne",
      source: "ekomi.de",
      date: "15.11.2024 um 06:18 Uhr"
    },
    {
      description:
        "Die Mibug Credit-Vermittlung für meinen gewünschten Kredit verlief\n" +
        "unproblematisch und online sehr schnell zum gewünschten Abschluss. Die Beratung\n" +
        "und Unterstützung des Kreditspezialisten war umfassend, höflich und in allen\n" +
        "Belangen zufriedenstellend.",
      stars: "4 von 5 Sterne",
      source: "ekomi.de",
      date: "15.11.2024 um 15:08 Uhr"
    },
    {
      description:
        "Es war einfach, mit Mibug Credit in Kontakt zu treten. Am nächsten Tag hat mich\n" +
        "eine Kreditberaterin kontaktiert. Die Beratung war sehr gut und hat sich an meinem\n" +
        "Bedarf ausgerichtet. Bei Fragen wurde ich schnell kontaktiert, und meine Beraterin\n" +
        "war sehr engagiert und kundenorientiert.",
      stars: "5 von 5 Sterne",
      source: "ekomi.de",
      date: "20.11.2024 um 19:38 Uhr"
    },
    {
      description:
        "Ich war ganz zufrieden mit den persönlichen Beratungen von Mibug Credit, sobald\n" +
        "ich dem Berater bzw. Mibug Credit eine Mail gesendet habe. Mit Mailkorrespondenzen war es ganz okay. Kleiner Hic: Es war aber ganz schön schwierig,\n" +
        "einen Berater am Telefon zu bekommen.",
      stars: "4 von 5 Sterne",
      source: "ekomi.de",
      date: "20.11.2024 um 13:54 Uhr"
    },
    {
      description:
        "Sehr geehrtes Mibug Credit-Team, herzlichen Dank für die ausgezeichnete Beratung\n" +
        "und die schnelle Bearbeitung meines Kreditantrags. Ihre kompetente Unterstützung\n" +
        "hat mir sehr geholfen, den passenden Kredit zu finden.",
      stars: "5 von 5 Sterne",
      source: "ekomi.de",
      date: "19.11.2024 um 17:49 Uhr"
    },
  ];

  return (
    <Box className={classes.root} sx={styles}>
      <Container maxWidth="lg">
        <Box className={classes.wrap}>
          <Typography className={classes.title}>
            Über 300.000 zufriedene Kunden mit Mibug Credit
          </Typography>
          <Swiper
            slidesPerView={1}
            scrollbar={{
              hide: true,
            }}
            cssMode={true}
            navigation
            spaceBetween={10}
            breakpoints={{
              450: {
                slidesPerView: 1.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
            grabCursor={true}
            updateOnWindowResize={true}
            modules={[Scrollbar, A11y]}
            className={classes.sliderContent}
          >
            <SwiperButtonPrev />
            <Box sx={{
            }}>
              {reviews.map((review, index) => (
                <SwiperSlide
                  aria-roledescription="slide"
                  role="slide"
                  key={`SwiperSlide__${review.date}`}
                  style={{
                  width: "100%", display: "flex", overflowX: "scroll", scrollSnapType: "x proximity", scrollPadding: "12px",
                    height: "auto",
                }}>
                  <Box sx={{
                    padding: "24px",
                    margin: "8px",
                    backgroundColor: "#FFFFFF",
                    height: "90%",
                    boxSizing: "border-box",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    scrollSnapAlign: "start", minWidth: "calc(33.33% - 24px)",
                  }}>
                    <img src={topComma} alt="topComma" width={14} height={13} />
                    <Box className={classes.cardWrap}>
                      <Typography className={classes.cardDescription}>
                        {review.description}
                      </Typography>
                      <Typography className={classes.cardFooter}>
                        {review.stars} auf{" "}
                        <span className={classes.cardLink}>{review.source}</span>
                        <br />
                        vom {review.date}
                      </Typography>
                    </Box>
                  </Box>
                </SwiperSlide>
              ))}
            </Box>
            <SwiperButtonNext />
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default SliderSection;
