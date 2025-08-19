import React from "react";
import { Box, Container, Typography, Theme } from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import {Swiper, SwiperSlide, useSwiper} from "swiper/react";
import { A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import {Arrow} from "../../lendingPage/components/Arrow";

const classes = generateUtilityClasses("SliderSection", [
  "root",
  "wrap",
  "Button",
  "title",
  "CardContent",
  "imageContent",
  "PreviousButton",
  "NextButton",
  "cardDescription",
  "cardFooter",
  "cardWrap",
  "cardLink",
  "sliderContent",
  "imageText",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    backgroundColor: "#fff",
    padding: "12px 0",
    img: {
      margin:" 0 auto",
      width: "auto",
      opacity: ".5",
      height: "63px",
      '-webkit-filter': "grayscale(100%)",
      filter: "grayscale(100%)",
      cursor: "grab",
      maxWidth: "100%",
    }
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
    fontSize: "1.75rem",
    lineHeight: "2.38rem",
    letterSpacing: "0.03rem",
    textAlign: "start",
    marginBottom: "2rem",
    [theme.breakpoints.down(900)]: {
      fontSize: "20px",
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
  [`& .${classes.imageText}`]: {
    color: "#172507",
    fontSize: "12px",
    marginTop: "2px",
  },
  [`& .${classes.imageContent}`]: {
    padding: "0 20px",
    textAlign: "center",
    float: "left",
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

interface PartnerIcons {
  src: string;
  alt: string;
}
interface SliderSectionProps {
  partnerIcons: PartnerIcons[];
  showText?: boolean;
}

const SliderSection = ({partnerIcons, showText}: SliderSectionProps) => {

  return (
    <Box className={classes.root} sx={styles}>
      <Container maxWidth="lg">
        <Swiper
          slidesPerView={2}
          cssMode={true}
          loop
          navigation
          breakpoints={{
            450: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            900: {
              slidesPerView: 5,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 6.3,
              spaceBetween: 10,
            },
          }}
          grabCursor={true}
          updateOnWindowResize={true}
          modules={[A11y]}
          className={classes.sliderContent}
        >
          <SwiperButtonPrev />
          <Box sx={{
            position: "relative",
            overflow: "hidden",
            display: "block",
            margin: 0,
            padding: 0,
          }}>
            {partnerIcons.map((icon, index) => (
              <SwiperSlide
                aria-roledescription="slide"
                role="slide"
                key={`SwiperSlide__${icon.alt}`}
                style={{
                  width: "100%", display: "flex", overflowX: "scroll", scrollSnapType: "x proximity", scrollPadding: "12px",
                  height: "auto",
                }}>
                <Box className={classes.imageContent}>
                  <img src={icon.src} alt={icon.alt} width="auto" height="auto" />
                  { showText ?
                    (<Typography className={classes.imageText}>{icon.alt}</Typography>)
                    : null
                  }
                </Box>
              </SwiperSlide>
            ))}
          </Box>
          <SwiperButtonNext />
        </Swiper>
      </Container>
    </Box>
  );
};

export default SliderSection;
export { classes as SliderSectionClasses };
