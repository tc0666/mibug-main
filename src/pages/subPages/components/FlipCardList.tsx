import React from "react";
import {Accordion, AccordionDetails, AccordionSummary, Box, Theme, Typography, useMediaQuery} from "@mui/material";
import { generateUtilityClasses } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const classes = generateUtilityClasses("FlipCardList", [
  "root",
  "flipper",
  "front",
  "back",
  "title",
  "backTitle",
  "flipperHover",
  "content",
  "wrap",
  "icon",
  "sectionTitle",
]);

interface FlipCardItem {
  icon: string;
  frontTitle: string;
  backTitle?: string;
  backDescription?: string;
}

interface FlipCardListProps {
  items: FlipCardItem[];
  className?: string;
}

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    margin: "0 auto",
    padding: "30px 0",
  },
  [`& .${classes.wrap}`]: {
    margin: "0 -12px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "left",
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "36px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.flipperHover}`]: {
    transform: "rotateY(180deg)",
  },
  [`& .${classes.front}`]: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 15px 20px 15px",
    boxSizing: "border-box",
  },
  [`& .${classes.back}`]: {
    position: "absolute",
    width: "190px",
    maxWidth: "190px",
    height: "176px",
    maxHeight: "176px",
    backfaceVisibility: "hidden",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
    transform: "rotateY(180deg)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px 15px 20px 15px",
    boxSizing: "border-box",
  },
  [`& .${classes.content}`]: {
    fontSize: "14px",
    textAlign: "center",
    lineHeight: 1.43,
    color: "#4A4A4A",
    [theme.breakpoints.down(900)]: {
      textAlign: "left",
    }
  },
  [`& .${classes.backTitle}`]: {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: 1.43,
    marginBottom: "8px",
    color: "#212529",
    textAlign: "center",
  },
  [`& .${classes.icon}`]: {
    margin: "16px auto 8px auto",
    display: "block",
  },
  [`& .${classes.title}`]: {
    fontSize: "16px",
    fontWeight: 500,
    lineHeight: 1.5,
    padding: "0 16px",
    color: "#212529",
    textAlign: "center",
  },
  [`& .${classes.flipper}`]: {
    position: "relative",
    width: "190px",
    maxWidth: "190px",
    height: "176px",
    maxHeight: "176px",
    boxSizing: "border-box",
    textAlign: "center",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    cursor: "pointer",
    boxShadow: "0 3px 8px 0 rgba(44,50,39,.25)",
    margin: "0 12px 24px 12px",
  },
});

const FlipCardList: React.FC<FlipCardListProps> = ({ items, className = "" }) => {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down(900));

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>, backTitle: string | undefined) => {
    if(!backTitle) return;
    e.currentTarget.querySelector(`.${classes.flipper}`)?.classList.add(classes.flipperHover);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, backTitle: string | undefined) => {
    if(!backTitle) return;
    e.currentTarget.querySelector(`.${classes.flipper}`)?.classList.remove(classes.flipperHover);
  };

  return (
    <Box className={`${classes.root} ${className}`} sx={styles}>
      <Typography className={classes.sectionTitle}>
        Gründe für Mibug Credit
      </Typography>
      {isMobileOrTablet ? (
        <>
          {items?.map((item, index) => (
            <Accordion expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)} sx={{
              margin: "0  0 8px 0 !important",
            }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                }}>
                  <img src={item.icon} alt="icon" width={32} height={32} />
                  <Typography sx={{
                    "fontSize": "20px",
                    "fontWeight": "500",
                    "lineHeight": "1.6",
                    "color": "#08B578",
                    "cursor": "pointer",
                    "paddingLeft": "8px",
                    "position": "relative",
                  }}>
                    {item.backTitle}
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className={classes.content}>
                  {item.backDescription}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </>


      ) : (
        <Box className={classes.wrap}>
          {items?.map((item, index) => (
            <Box
              key={`FlipCardList-${index}`}
              onMouseEnter={(event) => handleMouseEnter(event, item?.backTitle)}
              onMouseLeave={(event) => handleMouseLeave(event, item?.backTitle)}
              sx={{ perspective: "1000px" }}
            >
              <Box className={classes.flipper}>
                <Box className={classes.front}>
                  <img className={classes.icon} src={item.icon} alt="icon" width={48} height={48} />
                  <Typography className={classes.title}>
                    {item.frontTitle}
                  </Typography>
                </Box>
                <Box className={classes.back}>
                  <Typography className={classes.backTitle}>
                    {item.backTitle}
                  </Typography>
                  <Typography className={classes.content}>
                    {item.backDescription}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default FlipCardList;
