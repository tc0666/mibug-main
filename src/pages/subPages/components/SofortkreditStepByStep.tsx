import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Theme,
  IconButton,
  useMediaQuery,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import clsx from 'clsx';
import { generateUtilityClasses } from '@mui/material';
import { Button } from '../../../components/Button';
import {useNavigate} from "react-router-dom";

const classes = generateUtilityClasses("SofortkreditStepByStep", [
  "root",
  "stepDescription",
  "contactDetails",
  "mainHeader",
  "sectionTitle",
  "sectionSubTitle",
  "sectionHeader",
  "relativePosition",
  "dashedLine",
  "numberCircle",
  "highlightedText",
  "shadowEffect",
  "contentPaddingLeftSmall",
  "paperBox",
  "stepLabel",
  "stepDetails",
  "positionRelative",
  "buttonWrap",
  "accordionSummary",
  "accordion",
  "show",
  "collapsed",
  "card",
  "cardHeader",
  "accordionBorder",
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {},
  [`& .${classes.mainHeader}`]: {
    gutterBottom: true,
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
  [`& .${classes.sectionSubTitle}`]: {
    fontSize: "14px",
    color: "#172507",
    lineHeight: "20px",
    marginBottom: "20px",
  },
  [`& .${classes.sectionHeader}`]: {
    fontSize: '12px',
    fontWeight: 700,
    margin: "30px 0",
    paddingLeft: "16px",
    [theme.breakpoints.down(900)]: {
      padding: "0",
    },
  },
  [`& .${classes.stepDescription}`]: {
    fontSize: '13px',
    fontWeight: 400,
    color: '#12121280',
  },
  [`& .${classes.paperBox}`]: {
    padding: 2,
    backgroundColor: '#ffffff',
    textAlign: 'left',
    borderRadius: "8px",
    marginBottom: "50px",
  },
  [`& .${classes.contactDetails}`]: {
    fontSize: '13px',
    fontWeight: 400,
    color: '#12121280',
  },
  [`& .${classes.relativePosition}`]: {
    position: "relative",
    marginBottom: "30px",
  },
  [`& .${classes.dashedLine}`]: {
    position: "absolute",
    top: "1px",
    left: "15px",
    bottom: "130px",
    width: "1px",
    borderLeft: "1.2px dashed #08B578",
  },
  [`& .${classes.numberCircle}`]: {
    width: "24px",
    minWidth: "24px",
    height: "24px",
    minHeight: "24px",
    border: "1px solid #08B578",
    borderRadius: "50%",
    backgroundColor: "#fff",
    lineHeight: 1.9,
    fontSize: "13px",
    color: "#172507",
    zIndex: 1,
    marginLeft: "2px",
    textAlign: "center",
  },
  [`& .${classes.highlightedText}`]: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#414141",
    marginLeft: "12px",
  },
  [`& .${classes.shadowEffect}`]: {
    position: "absolute",
    width: "20px",
    height: "20px",
    backgroundColor: "#DAF8ED",
    borderRadius: "50%",
    zIndex: 0,
  },
  [`& .${classes.contentPaddingLeftSmall}`]: {
    paddingLeft: "10px",
    [theme.breakpoints.down(900)]: {
      padding: "0",
    },
  },
  [`& .${classes.accordion}`]: {
    counterReset: "cards",
  },
  [`& .${classes.stepLabel}`]: {
    color: '#172507',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: "32px",
  },
  [`& .${classes.stepDetails}`]: {
    fontSize: "14px",
    color: "#515151",
    lineHeight: "22px",
    marginTop: "10px",
    span: {
      color: theme.palette.primary.main,
      cursor: "pointer",
    },
  },
  [`& .${classes.card}`]: {
    position: "relative",
    paddingBottom: "16px",
    "counterIncrement": "cards",
    "&:after": {
      content: "''",
      position: "absolute",
      bottom: "0",
      top: "30px",
      borderLeft: "2px dotted #28a745",
      left: "11px",
    },
    "&:last-child::after": {
      display: "none",
    },
  },
  [`& .${classes.cardHeader}`]: {
    fontSize: "20px",
    fontWeight: 500,
    display: "flex",
    justifyContent: "space-between",
    cursor: "pointer",
    position: "relative",
    padding: "0 32px",
    "&:before": {
      content: "counter(cards)",
      position: "absolute",
      top: "4px",
      left: "0",
      width: "20px",
      height: "20px",
      border: "2px solid #28a745",
      lineHeight: "20px",
      textAlign: "center",
      borderRadius: "12px",
      color: theme.palette.primary.main,
      fontSize: "14px",
      fontWeight: 500,
    },
    [`&.collapsed`]: {
      "&:before": {
        "background": theme.palette.primary.main,
        "color": "#fff",
        "textShadow": "0 1px 1px rgba(44, 50, 39, .5)",
        transition: 'background 0.3s'
      }
    },
  },
  [`& .${classes.show}`]: {
    padding: "0 26px",
    opacity: 0,
    maxHeight: 0,
    overflow: "hidden",
    transition: "opacity 0.3s, max-height 0.3s",
    "&.expanded": {
      opacity: 1,
      maxHeight: "200px",
      overflow: "scroll"
    },
  },
  [`& .${classes.buttonWrap}`]: {
    display: "flex",
    justifyContent: "center",
  },
});

interface Steps {
  label: string;
  description: string;
}

interface SofortkreditStepByStepProps {
  title: string;
  buttonName?: string;
  subTitle?: string;
  steps: Steps[];
}

const SofortkreditStepByStep = ({ title, subTitle, steps, buttonName }: SofortkreditStepByStepProps) => {
  const isMobileOrTablet = useMediaQuery((theme: Theme) => theme.breakpoints.down(900));
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleNavigate = () => {
    navigate(`/antrag`);
  }

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.sectionTitle}>{title}</Typography>
      <Box className={classes.contentPaddingLeftSmall}>
        {subTitle && (
          <Typography
            className={classes.sectionSubTitle}
            dangerouslySetInnerHTML={{ __html: subTitle }}
          />
        )}
        {isMobileOrTablet ? (
          <div className={classes.accordion}>
            {steps.map((step, index) => (
              <Box className={classes.card} key={step.label}>
                <Box
                  onClick={() => handleToggle(index)}
                  className={clsx(classes.cardHeader, {
                    collapsed: expandedIndex === index,
                  })}
                >
                  {step.label}
                  <IconButton>
                    <ExpandMoreIcon
                      style={{
                        transform:
                          expandedIndex === index
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                        transition: "transform 0.3s",
                        color: "#08B578",
                      }}
                    />
                  </IconButton>
                </Box>
                <Box
                  className={clsx(classes.show, {
                    expanded: expandedIndex === index,
                  })}
                >
                  <Typography
                    className={classes.stepDetails}
                    dangerouslySetInnerHTML={{ __html: step.description }}
                  />
                </Box>
              </Box>
            ))}
          </div>
        ) : (
          <Box className={classes.relativePosition}>
            <Box className={classes.dashedLine} />
            <Stack spacing={3}>
              {steps.map((step, index) => (
                <Stack
                  key={index}
                  direction="row"
                  spacing={2}
                  alignItems="flex-start"
                  className={classes.positionRelative}
                >
                  <Box className={classes.numberCircle}>{index + 1}</Box>
                  <Box>
                    <Typography className={classes.stepLabel}>{step.label}</Typography>
                    <Typography
                      className={classes.stepDetails}
                      dangerouslySetInnerHTML={{ __html: step.description }}
                    />
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Box>
        )}
      </Box>

      {buttonName && (
        <Box className={classes.buttonWrap}>
          <Button active={true} onClick={handleNavigate}>{buttonName}</Button>
        </Box>
      )}
    </Box>
  );
};

export default SofortkreditStepByStep;
