import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  Typography,
  Divider,
  Box,
  generateUtilityClasses, Theme, SxProps,
} from "@mui/material";
import clsx from 'clsx';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const classes = generateUtilityClasses("AccordionItem", [
  "root",
  "question",
  "title",
  "accordion",
  "accordionSummary",
  "answer",
  "divider",
  "icon",
]);

interface AccordionData {
  question: string;
  answer: string;
}

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    padding: "40px 0"
  },
  [`& .${classes.title}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "16px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "8px ",
    },
  },
  [`& .${classes.divider}`]: {
    borderColor: "#BEBFBD",
  },
  [`& .${classes.accordion}`]: {
    background: 'none',
  },
  [`& .${classes.accordionSummary}`]: {
    padding: 0,
    margin: 0,
    svg: {
      color: theme.palette.primary.main,
    }
  },
  [`& .${classes.question}`]: {
    fontSize: "20px",
    lineHeight: 1.6,
    fontWeight: 500,
    margin: 0,
    color: theme.palette.primary.main,
    cursor: "pointer",
    padding: "4px 40px 4px 0",
    fontStyle: "normal"
  },
  [`& .${classes.answer}`]: {
    fontSize: "16px",
    lineHeight: 1.43,
    fontWeight: "300",
    color: "#172507",
    marginBottom: 0,
    fontStyle: "normal",
    paddingBottom: "20px",
  },
});

interface AccordionItemProps {
  title?: string;
  className?: string;
  sx?: SxProps<Theme>;
  accordionItems: AccordionData[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({title, accordionItems, className, sx}) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange = (panel: number) => (_: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const mergedSx = (theme: Theme) => {
    const baseStyles = styles(theme);
    const customStyles =
      typeof sx === "function" ? sx(theme) : Array.isArray(sx) ? sx : sx || {};
    return Array.isArray(customStyles)
      ? [baseStyles, ...customStyles]
      : { ...baseStyles, ...customStyles };
  };
  return (
    <Box className={clsx(classes.root, className)}
         sx={mergedSx as SxProps<Theme>}
    >
      <Typography className={classes.title}>
        {title}
      </Typography>
      {accordionItems.map((item, index) => (
        <Box key={`accordionItems-${index}`}>
          <Accordion
            elevation={0}
            expanded={expanded === index}
            onChange={handleChange(index)}
            className={classes.accordion}
          >
            <AccordionSummary className={classes.accordionSummary} expandIcon={<ExpandMoreIcon />}
            >
              <Typography className={classes.question}>{item.question}</Typography>
            </AccordionSummary>
            <Typography className={classes.answer}>{item.answer}</Typography>
          </Accordion>
          <Divider className={classes.divider} />
        </Box>
      ))}
    </Box>
  );
};

export default AccordionItem;

export {classes as AccordionItemClasses}
