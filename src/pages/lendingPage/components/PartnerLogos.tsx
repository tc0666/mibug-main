import React from "react";
import {Box, Theme, useMediaQuery} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/scrollbar';


const classes = generateUtilityClasses("PartnerLogos", [
  "root",
  "logo",
  "logoWrapper",
]);
const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    margin: "50px 0",
    position: "relative",
    width: "100%",
    boxSizing: "border-box",
  },
  [`& .${classes.logoWrapper}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "unset",
    width: "100%",
    padding: "12px",
    img: {
      width: "100%",
      color: "transparent",
    }
  },
  [`& .${classes.logo}`]: {
    display: "grid",
    gap: "24px 3%",
    gridTemplateColumns: "repeat(7, 1fr)",
    margin: "40px 0",
  },
});

const PartnerLogos = ({ logos }: { logos: { src: string; alt: string }[] }) => {
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  return (
    <Box className={classes.root} sx={styles}>
      {isMobileOrTablet ? (
        <Swiper
          slidesPerView={3}
          scrollbar={{
            hide: true,
          }}
          spaceBetween={20}
          grabCursor={true}
          modules={[Scrollbar]}
          className="mySwiper"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={logo.alt}>
              <Box  sx={{minWidth: "33.33%", margin: "2.5%",}}>
                <Box className={classes.logoWrapper}>
                  <img width="100px" height="50px" src={logo.src} alt={logo.alt} />
                </Box>
              </Box>
            </SwiperSlide>

          ))}
        </Swiper>

      ) : (
        <Box className={classes.logo}>
          {
            logos.map((logo, index) => (
              <Box key={logo.alt + index} className={classes.logoWrapper}>
                <img loading="lazy" src={logo.src} alt={logo.alt} />
              </Box>
            ))
          }
        </Box>
      )}
    </Box>
  );
};

export default PartnerLogos;
