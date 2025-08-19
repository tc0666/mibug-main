import React, {ReactElement, useEffect, useState} from "react";
import { List, ListItem, Box, Container } from "@mui/material";
import { generateUtilityClasses, Theme } from "@mui/material";
import clsx from 'clsx'
const classes = generateUtilityClasses("ScrollSpy", [
  "root",
  "sidebar",
  "wrap",
  "list",
  "paragraph",
  "activeItem",
  "listItem",
  "content",
  "divider",
  "section",
  "fixedSidebar",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.sidebar}`]: {
    position: "absolute",
    top: "20px",
    left: "16%",
    width: "163px",
    height: "min-content",
    backgroundColor: "white",
    zIndex: 10,
    boxSizing: "border-box",
    boxShadow: "0px 2px 20px 0px rgba(0,0,0,.1)",
    borderRadius: "3px",
    [theme.breakpoints.down(1250)]: {
      display: "none",
    },
    [theme.breakpoints.down(1650)]: {
      left: "10%",
    },
    [theme.breakpoints.down(1450)]: {
      left: "5%",
    },
    [theme.breakpoints.down(1450)]: {
      left: "20px",
    }
  },
  [`& .${classes.fixedSidebar}`]: {
    position: "fixed",
  },
  [`& .${classes.paragraph}`]: {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
    fontWeight: 700,
    height: "30px",
    borderTopRightRadius: "3px",
    borderTopLeftRadius: "3px",
  },
  [`& .${classes.wrap}`]: {
    paddingLeft: "13%",
    [theme.breakpoints.down(1250)]: {
      padding: "0 24px",
    },
    [theme.breakpoints.down(1650)]: {
      left: "5%",
    },
    [theme.breakpoints.down(1450)]: {
      left: "0",
    },
  },
  [`& .${classes.list}`]: {
    padding: 0,
  },
  [`& .${classes.activeItem}`]: {
    color: "#08B578 !important",
  },
  [`& .${classes.listItem}`]: {
    padding: "0 10px",
    span: {
      display: "block",
      width: "100%",
      color: "#8B9283",
      padding: "10px 0",
      fontWeight: "normal",
      cursor: "pointer",
      fontSize: "12px",
      borderBottom: "1px solid #8B9283",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },

    "&:last-child span": { borderBottom: "none", },
  },
  [`& .${classes.content}`]: {
    boxSizing: "border-box",
  },
  [`& .${classes.divider}`]: {
    margin: "8px 0",
  },
  [`& .${classes.section}`]: {
    padding: "30px 0",
    boxSizing: "border-box",
  },
});

interface ScrollSpyProps {
  sections: Section[];
}
interface Section {
  id: string;
  label: string;
  component: ReactElement;
  bg: string;
}

const ScrollSpy = ({sections}: ScrollSpyProps) => {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isFixed, setIsFixed] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 860 ? setIsFixed(true) : setIsFixed(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <Box className={classes.root} sx={styles}>
      <Box className={`${classes.sidebar} ${isFixed ? classes.fixedSidebar : ''}`}>
        <List className={classes.list}>
          <ListItem className={classes.paragraph}>
            <span>Inhalt:</span>
          </ListItem>
          {sections.map((section, index) => (
            <React.Fragment key={section.id}>
              <ListItem
                onClick={() =>
                  document
                    ?.getElementById(section?.id)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className={`${classes.listItem} ${activeSection === section.id ? classes.activeItem : ''}`}
              >
                <span className={activeSection === section.id ? classes.activeItem : ''}>{section.label}</span>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Box>
      <Box className={classes.content}>
        {sections.map((section) => (
          <Box
            id={section.id}
            key={section.id}
            className={clsx({
              [classes.section]: !!section.bg
            })}
            sx={{ backgroundColor: section.bg }}
          >
            {section.bg ? (
              <Container maxWidth="lg" className={classes.wrap}>
                {section.component}
              </Container>
            ):
              section.component
            }

          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ScrollSpy;
