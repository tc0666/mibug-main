import React from "react";
import {Box, Typography, Theme} from "@mui/material";
import generateUtilityClasses from "@mui/material/generateUtilityClasses";
import {SingleAuthorListClasses} from "../SingleAuthorList";
import man from "../../../../icons/credit/man.png";
import Alexander from "../../../../icons/credit/Alexander.jpg";
import ProfileCard from "../ProfileCard";

const classes = generateUtilityClasses("InterestRates", [
  "root",
  "wrap",
  "description",
  "title",
  "img",
]);


const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "24px 0",
  },
  [`& .${classes.wrap}`]: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "48px",
    [theme.breakpoints.down(900)]: {
      flexWrap: "wrap",
    }
  },
  [`& .${classes.img}`]: {
    [theme.breakpoints.down(900)]: {
      margin: "0 auto",
      maxWidth: '100%',
    }
  },
  [`& .${classes.title}`]: {
    fontSize: '36px',
    fontWeight: 400,
    lineHeight: "40px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textSecorationSkipInk: "none",
    marginBottom: "24px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.description}`]: {
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: "20px",
    textAlign: "left",
    textUnderlinePosition: "from-font",
    textSecorationSkipInk: "none",
    marginBottom: "16px",
  },
  [`& .${SingleAuthorListClasses.root}`]: {
    marginLeft: "0px !important",
  },
});

const profileCard = {
  content:
  'Nicht jede Bank gibt die Leitzinsen an Kreditnehmer weiter. Welche Zinskosten bei einem Kredit anfallen, ist dadurch auch stark davon abhängig, zu welcher Bank man geht. Wer einfach zu einer Bank geht, zahlt im Schnitt laut Bundesbank rund 8 Prozent Zinsen. Es gibt aber nach wie vor auch Kredite mit deutlich niedrigeren Zinssätzen. Je nach Kredit können dadurch mehrere Hundert oder Tausend Euro mehr oder weniger fällig werden. Ein Bankvergleich hilft, die passende Bank zu finden.',
  name: "Giovanni Alic",
  role: "CEO der Mibugcredit GmbH",
  avatar: Alexander,
};

const InterestRates = () => {
  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.wrap}>
        <Box>
          <Typography className={classes.title}>
            Aktuelle Zinsen 12/24
          </Typography>
          <Typography className={classes.description}>
            Das aktuelle <span>Zinsniveau</span> befindet sich auf einem <b>hohen Niveau</b>. Die Entwicklung der durchschnittlichen Effektivzinssätze für das Jahr 2023 im Vergleich zu 2022, basierend auf Daten der Deutschen Bundesbank, spiegelt dies wider. Es wird deutlich, dass die Zinsen im Jahr 2023 im Vergleich zum Jahr 2022 gestiegen sind, obwohl die aktuelle Geldpolitik der EZB hier wieder eine Lockerung zeigt. Während die Zinssätze im Jahr 2022 meist zwischen 4,08 % und 5,37 % lagen, kletterten sie im Jahr 2023 auf Werte zwischen 6,01 % und 7,29 %. Online-Kredite bieten hier jedoch eine attraktive Sparmöglichkeit, da sie häufig Konditionen anbieten, die unter diesen durchschnittlichen Zinssätzen liegen. <b>Wer aktuell online Kredite vergleicht, kann von exklusiven Angeboten mit günstigen Zinssätzen profitieren</b>, die im Vergleich zu den hier dargestellten Statistiken eine erhebliche Ersparnis bedeuten.
          </Typography>
        </Box>
        <img className={classes.img} width={472} height={258} src={man} alt="man"/>
      </Box>


      <Box>
        <Typography className={classes.title}>
          Exklusive Zinskonditionen bei Online-Krediten
        </Typography>

        <Typography className={classes.description}>
          Die Entwicklung der Kreditzinsen hat einen direkten Einfluss auf die Kosten Ihres Kredits. Während viele Banken klassische Kredite zu höheren Zinsen anbieten,
          können <b>Online-Kredite durch exklusive Konditionen oft günstiger</b> sein. Nicht selten liegen die Zinssätze von Online-Vergleichsportalen für Kredite unter den
          üblichen Zinssätzen. Durch den Vergleich verschiedener Kreditangebote im Internet erhalten Sie nicht nur schnell einen Überblick über günstige Zinsen, sondern
          auch <b>Zugang zu vorteilhaften Konditionen</b>, die bei Ihrer Hausbank oft nicht erhältlich sind.
        </Typography>
      </Box>


      <ProfileCard
        content={profileCard.content}
        name={profileCard.name}
        role={profileCard.role}
        avatar={profileCard.avatar}
      />
    </Box>
  );
};

export default InterestRates;
