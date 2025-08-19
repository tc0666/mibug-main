import React, { PropsWithChildren } from 'react';
import { Box, Typography, IconButton, generateUtilityClasses, Theme } from '@mui/material';
import Guarantee from "../../../icons/guarantee.svg?react";
import CheckIcon from '@mui/icons-material/Check';

const classes = generateUtilityClasses('SofortkreditComponent', [
  'root',
  'wrap',
  'sectionTitle',
  'checklist',
  'checklistItem',
  'checklistIcon',
  'checklistText',
  'guaranteeTitle',
  'guaranteeText',
  'guaranteeWrap',
  'guaranteeIcon'
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.sectionTitle}`]: {
    fontSize: "36px",
    color: "#212529",
    lineHeight: "40px",
    marginBottom: "20px",
    [theme.breakpoints.down(900)]: {
      fontSize: "24px",
      marginBottom: "12px",
    },
  },
  [`& .${classes.wrap}`]: {
    margin: "64px 0"
  },
  [`& .${classes.checklist}`]: {
    padding: "40px",
    boxShadow: "0px 3px 8px 0px #2C322740",
    marginBottom: "60px",
    [theme.breakpoints.down(900)]: {
      padding: "24px",
    }
  },
  [`& .${classes.checklistItem}`]: {
    display: "flex",
    alignItems: "center",
    marginBottom: "8px",
  },
  [`& .${classes.guaranteeWrap}`]: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down(900)]: {
      flexDirection: "column",
    }
  },
  [`& .${classes.guaranteeIcon}`]: {
    width: "150px",
    height: "150px",
  },
  [`& .${classes.checklistIcon}`]: {
    color: theme.palette.primary.main,
    paddingRight: "16px",
  },
  [`& .${classes.checklistText}`]: {
    fontSize: "14px",
    color: "#172507",
    lineHeight: 1.43,
    marginBottom: "12px",
    span: {
      fontWeight: 500,
      color: "#4DA94A",
      cursor: "pointer",
    }
  },
});

interface ChecklistItem {
  text: string;
}

interface SofortkreditComponentProps {
  checklistItems: ChecklistItem[];
  guaranteeText: string;
  checklistTitle: string;
  guaranteeDescription: string[];
}

const SofortkreditComponent: React.FC<PropsWithChildren<SofortkreditComponentProps>> = ({
  checklistTitle,
  checklistItems,
  guaranteeText,
  guaranteeDescription,
  children,
}) => {
  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.sectionTitle}>{checklistTitle}</Typography>
      <Box className={classes.checklist}>
        {checklistItems.map((item, index) => (
          <Box key={`checklistItems-${index}`} className={classes.checklistItem}>
            <CheckIcon className={classes.checklistIcon} />
            <Typography className={classes.checklistText}>{item.text}</Typography>
          </Box>
        ))}
      </Box>

      {children ? (
        <Box  className={classes.wrap}>
          {children}
        </Box>
      ): null}


      <Typography className={classes.sectionTitle}>{guaranteeText}</Typography>
      <Box className={classes.guaranteeWrap}>
        <IconButton className={classes.guaranteeIcon}> <Guarantee /> </IconButton>
        <Box>
          {guaranteeDescription.map((description, index) => (
            <Typography className={classes.checklistText} dangerouslySetInnerHTML={{ __html: description }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SofortkreditComponent;

export { classes as SofortkreditComponentClasses }
