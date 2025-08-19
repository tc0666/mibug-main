import React from "react";
import {Box, Typography, generateUtilityClasses, Theme} from "@mui/material";
import tuev from "../../../icons/credit/tuev.svg";
import ekomi from "../../../icons/credit/ekomi.svg";
import preissieger from "../../../icons/credit/preissieger.png";

interface TrustLogo {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface TrustSectionProps {
  logos?: TrustLogo[];
}

const classes = generateUtilityClasses("TrustSection", [
  "root",
  "title",
  "logoContainer",
  "logo",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: "40px 0",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
    }
  },
  [`& .${classes.title}`]: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#212529",
    textAlign: "start",
    lineHeight: "29px",
    flex: 1,
  },
  [`& .${classes.logoContainer}`]: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flex: 1.7,
    [theme.breakpoints.down(900)]: {
      marginRight: 0,
      flex: 1,
      marginTop: "24px",
    }
  },
  [`& .${classes.logo}`]: {
    display: "inline-block",
    maxWidth: "100%",
    height: "71px",
    width: "auto",
    marginRight: "24px",
    '&:last-child': {
      marginRight: 0,
    },
    [theme.breakpoints.down(900)]: {
      marginRight: "8px",
    }
  },
});



const TrustSection: React.FC<TrustSectionProps> = ({ logos }) => {
  const trustLogos = [
    {
      href: "/kredit/tuev-zertifikat/",
      src: tuev,
      alt: "TÜV Zertifikat",
      width: 400,
      height: 212,
    },
    {
      href: "/bewertungen-mibugcredit-gmbh.html",
      src: ekomi,
      alt: "eKomi Siegel",
      width: 518,
      height: 178,
    },
    {
      href: "/kredit/Berichtsband-Preis-Sieger-2022-Vergleichsportale.pdf",
      src: preissieger,
      alt: "DT Preissieger",
      width: 715,
      height: 951,
    },
  ];
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.title}>
        Über 300.000 zufriedene Kunden seit 2007
      </Typography>
      <Box className={classes.logoContainer}>
        {trustLogos.map((logo, index) => (
          <Box
            key={logo.alt}
            component="img"
            src={logo.src}
            alt={logo.alt}
            width={logo.width}
            height={logo.height}
            className={classes.logo}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TrustSection;
