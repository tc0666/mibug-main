import React from "react";
import {Box, Typography, IconButton, generateUtilityClasses, Theme} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import clsx from "clsx";

const classes = generateUtilityClasses('ChecklistSection', [
  'root',
  'sectionTitle',
  'subTitle',
  'wrap',
  'checklistItem',
  'checklistIcon',
  'checklistText',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.checklistIcon}`]: {
    color: theme.palette.primary.main,
      svg: {
      fontSize: "18px",
    }
  },
  [`& .${classes.wrap}`]: {
    flexDirection: "column",
  },
  [`& .${classes.checklistText}`]: {
    fontSize: "14px",
    color: "#172507",
    paddingLeft: "2px",
    span: {
      color: theme.palette.primary.main,
    }
  },
  [`& .${classes.checklistItem}`]: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "8px",
  },
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#172507",
    lineHeight: "40px",
    marginBottom: "20px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.subTitle}`]: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#172507",
    lineHeight: "32px",
    marginBottom: "20px",
  },
})

interface ChecklistItem {
  text: string;
}

interface ChecklistSectionProps {
  title?: string;
  subTitle?: string;
  className?: string;
  description: string;
  items: ChecklistItem[];
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({
   className,
   title,
   description,
   subTitle,
   items,
 }) => {
  return (
    <Box className={clsx(classes.root, className)} sx={styles}>
      <Typography className={classes.sectionTitle}>{title}</Typography>
      <Box  className={classes.wrap}>
        <Typography className={classes.subTitle}>{subTitle}</Typography>
        <Typography className={classes.checklistText} dangerouslySetInnerHTML={{ __html: description }} />
        {items.map((item, index) => (
          <Box key={index} className={classes.checklistItem}>
            <IconButton className={classes.checklistIcon}>
              <CheckIcon />
            </IconButton>
            <Typography className={classes.checklistText} dangerouslySetInnerHTML={{ __html: item.text }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChecklistSection;
export { classes as ChecklistSectionClasses };
