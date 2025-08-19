import React from 'react';
import {
  Box,
  generateUtilityClasses,
  Skeleton,
  Typography,
} from '@mui/material';
import ingdiba from '../../icons/partnerBanks/ingdiba.svg'
import dkb from '../../icons/partnerBanks/dkb.svg'
import targobank from '../../icons/partnerBanks/targobank.svg'
import {familyStatusOptions} from "./Step1";
import {livingSituationOptions} from "./Step3";
import {professionalGroupOptions} from "./Step2";
import { FormData } from '../../types/FormData';
import {formatCurrency} from "../../utils/formatCurrency";

const classes = generateUtilityClasses('DelayingStep', [
  'root',
  'detailsContainer',
  'detailRow',
  'detailLabel',
  'detailValue',
  'header',
  'bankCard',
  'skeletonContainer',
  'skeletonContainerWrap',
  'bankLogo',
  'banksContainer',
]);

const styles = () => {
  return ({
    [`&.${classes.root}`]: {
      padding: "60px 0"
    },
    [`& .${classes.banksContainer}`]: {
      paddingTop: "32px",
    },
    [`& .${classes.bankLogo}`]: {
      "padding": "16px 20px",
      "background": "none",
      position: "absolute",
      width: "100%",
    },
    [`& .${classes.skeletonContainerWrap}`]: {
      paddingTop: "60px",
      "&:last-child": {
        background: "rgb(247, 247, 247)",
      }
    },
    [`& .${classes.skeletonContainer}`]: {
      "gridTemplateColumns": "repeat(auto-fill, 20%)",
      "display": "grid",
      "width": "100%",
    },
    [`& .${classes.bankCard}`]: {
      "position": "relative",
      "marginBottom": "32px",
      "boxShadow": "rgba(0, 2, 6, 0.2) 1px 2px 4px",
      "borderRadius": "5px",
      "border": "1px solid rgb(191, 191, 191)",
      "zIndex": "1",
    },
    [`& .${classes.detailRow}`]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "6px",
    },
    [`& .${classes.detailLabel}`]: {
      fontSize: "0.88rem",
      fontWeight: 400,
    },
    [`& .${classes.header}`]: {
      fontSize: "1.25rem",
      marginBottom: "16px",
      fontWeight: 700,
      textAlign: "center",
    },
    [`& .${classes.detailValue}`]: {
      fontSize: "0.88rem",
      fontWeight: "bold",
    },
    [`& .${classes.detailsContainer}`]: {
      display: "flex",
      flexDirection: "column",
    },
  });
};


interface DelayingStepProps {
  dealInfo: FormData
}

const DelayingStep = ({ dealInfo }: DelayingStepProps) => {
  const familyStatus = familyStatusOptions.find(familyStatus => dealInfo.familyStatus === familyStatus.value)
  const livingSituation = livingSituationOptions.find(livingSituation => dealInfo.livingSituation === livingSituation.value)
  const professionalGroup = professionalGroupOptions.find(professionalGroup => dealInfo.professionalGroup === professionalGroup.value)

  return (
    <Box className={classes.root} sx={styles}>
      <Typography className={classes.header} variant="h4" align="center">
        Fast geschafft! Einen Augenblick noch.
      </Typography>
      <Box className={classes.detailsContainer}>
        <Typography className={classes.detailLabel} variant="body2">
          Ihre Angaben:
        </Typography>
        <Box className={classes.detailRow}>
          <Typography className={classes.detailLabel} variant="body2">
            Anzahl Kreditnehmer
          </Typography>
          <Typography className={classes.detailValue} variant="subtitle2">
            1
          </Typography>
        </Box>
        <Box className={classes.detailRow}>
          <Typography className={classes.detailLabel} variant="body2">
            Familienstand
          </Typography>
          <Typography className={classes.detailValue} variant="subtitle2">
            {familyStatus?.label}
          </Typography>
        </Box>
        <Box className={classes.detailRow}>
          <Typography className={classes.detailLabel} variant="body2">
            Wohnsituation
          </Typography>
          <Typography className={classes.detailValue} variant="subtitle2">
            {livingSituation?.label}
          </Typography>
        </Box>
        <Box className={classes.detailRow}>
          <Typography className={classes.detailLabel} variant="body2">
            Vermietete Immobilie
          </Typography>
          <Typography className={classes.detailValue} variant="subtitle2">
            Kein Immobilienbesitz
          </Typography>
        </Box>
        <Box className={classes.detailRow}>
          <Typography className={classes.detailLabel} variant="body2">
            Beruf
          </Typography>
          <Typography className={classes.detailValue} variant="subtitle2">
            {professionalGroup?.label}
          </Typography>
        </Box>
        <Box className={classes.detailRow}>
          <Typography className={classes.detailLabel} variant="body2">
            Nettoeinkommen
          </Typography>
          <Typography className={classes.detailValue} variant="subtitle2">
            {formatCurrency(+dealInfo?.income)}
          </Typography>
        </Box>
      </Box>
      <Box className={classes.banksContainer}>
        {[ingdiba, dkb, targobank].map((bank, index) => (
          <Box key={index} className={classes.bankCard}>
            <Box className={classes.bankLogo}>
              <img src={bank} height={30} alt="bank" />
            </Box>
            <Box className={classes.skeletonContainer}>
              {Array.from({ length: 5 }).map((_, idx) => (
                <Box className={classes.skeletonContainerWrap}>
                  <Box sx={{ padding: "20px" }}>
                    <Skeleton
                      key={idx}
                      variant="text"
                      width="90%"
                      height="34px"
                      sx={{
                        borderRadius: "20px / 40px",
                      }}
                    />
                    <Skeleton
                      key={idx}
                      variant="text"
                      width="74.4252%"
                      height="20px"
                      sx={{
                        borderRadius: "20px / 40px"
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DelayingStep;
