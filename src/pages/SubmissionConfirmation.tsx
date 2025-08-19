import React from 'react';
import {
  Box,
  Typography,
  Container,
  Theme,
  CircularProgress,
} from '@mui/material';
import { generateUtilityClasses } from '@mui/material';
import { useLocation } from "react-router-dom";
import Brand from "./multiStepForm/components/Brand";
import StepperProgress from "../components/StepperProgress";
import HelperBox from "../components/HelperBox";
import { useGetUserId } from "../api/hooks/useGetUserId";
import clsx from "clsx";

const classes = generateUtilityClasses("SubmissionConfirmation", [
  "root",
  "mainHeader",
  "subHeader",
  "infoText",
  "spinner",
  "submitStatus",
  "submitStatusRow",
  "sectionHeader",
  "contentBox",
  "userInfo",
  "saveButton",
  'submitStatusBorder',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "60px 20px",
    boxSizing: "border-box",
  },
  [`&.${classes.spinner}`]: {
    margin: "0 auto",
    maxWidth: "600px",
    padding: "60px 20px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  [`& .${classes.submitStatusBorder}`]: {
    borderBottom: '1px solid #E4E4E4',
    marginBottom: '10px',
  },
  [`& .${classes.mainHeader}`]: {
    fontSize: "24px",
    fontWeight: 700,
    textAlign: "start",
    marginBottom: "20px",
    color: theme.palette.primary.main,
  },
  [`& .${classes.subHeader}`]: {
    fontSize: "16px",
    textAlign: "start",
    marginBottom: "10px",
  },
  [`& .${classes.infoText}`]: {
    fontSize: "14px",
    margin: "20px 0",
  },
  [`& .${classes.sectionHeader}`]: {
    fontSize: "16px",
    fontWeight: 700,
    margin: "30px 0 10px",
  },
  [`& .${classes.contentBox}`]: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    marginBottom: "20px",
  },
  [`& .${classes.userInfo}`]: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    fontSize: "14px",
  },
  [`& .${classes.saveButton}`]: {
    backgroundColor: theme.palette.primary.main,
    color: "#ffffff",
  },
  [`& .${classes.submitStatusRow}`]: {
    paddingBottom: '10px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    '& :last-child': {
      padding: '0px',
    },
  },
  [`& .${classes.submitStatus}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#F8F8F8',
    borderRadius: '14px',
    padding: '16px',
    margin: 'auto',
    marginBottom: '20px',
    boxSizing: 'border-box',
    '& :last-child': {
      padding: '0px',
    },
  },
});

const SubmissionConfirmation: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const personId = queryParams.get('ref');
  const { data, isLoading } = useGetUserId(personId);

  return !isLoading ? (
    <Container maxWidth="md" className={classes.root} sx={styles}>
      <StepperProgress currentStep={9} totalSteps={10} />

      <Typography variant="h4" className={classes.mainHeader}>
        {data?.gender === "Frau" ? "Vielen Dank für Ihre Anfrage, Frau!" : "Vielen Dank für Ihre Anfrage!"}
      </Typography>

      <Typography className={classes.subHeader}>
        Sehr geehrte/r {data?.gender === "Frau" ? "Frau" : "Herr"} {data?.lastName},
      </Typography>

      <Typography className={classes.subHeader}>
        Die Vorprüfung Ihrer Kreditanfrage ist positiv gelaufen und unser Serviceteam wird sich in Kürze mit Ihnen telefonisch oder per E-Mail in Verbindung setzen.
      </Typography>

      <Typography className={classes.subHeader}>
        Unsere Kreditexperten kümmern sich um Ihr Wunschdarlehen und holen auch in schwierigen Fällen das Beste für Sie raus.
      </Typography>

      <HelperBox
        className={classes.infoText}
        description="Bitte überprüfen Sie in den nächsten Tagen regelmäßig Ihr E-Mail-Postfach sowie Ihren Spam-Ordner."
      />

      <Box className={classes.submitStatus} alignItems="center" justifyContent="center">
        <Box className={clsx(classes.submitStatusRow, classes.submitStatusBorder)}>
          <Box textAlign="left">
            <Typography variant="body2" fontWeight={400}>
              Kundennummer
            </Typography>
          </Box>
          <Box textAlign="right" display="flex" alignItems="center">
            <Typography fontWeight={400} variant="body2">
              <strong>{data?.clientNumber}</strong>
            </Typography>
          </Box>
        </Box>

        <Box className={clsx(classes.submitStatusRow, classes.submitStatusBorder)}>
          <Box textAlign="left">
            <Typography variant="body2" fontWeight={400}>
              Vorname
            </Typography>
          </Box>
          <Box textAlign="right" display="flex" alignItems="center">
            <Typography fontWeight={400} variant="body2">
              <strong>{data?.firstName}</strong>
            </Typography>
          </Box>
        </Box>

        <Box className={clsx(classes.submitStatusRow, classes.submitStatusBorder)}>
          <Box textAlign="left">
            <Typography variant="body2" fontWeight={400}>
              Nachname
            </Typography>
          </Box>
          <Box textAlign="right" display="flex" alignItems="center">
            <Typography fontWeight={400} variant="body2">
              <strong>{data?.lastName}</strong>
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography className={classes.infoText}>
        Bitte stellen Sie in der Zwischenzeit keine weiteren Kreditanfragen bei anderen Vermittlern oder Banken, um Irritationen oder Sperrfristen zu vermeiden, die eine Kreditauszahlung verzögern oder verhindern könnten.
      </Typography>

      <Brand />
    </Container>
  ) : (
    <Box  className={classes.spinner} sx={styles}>
      <CircularProgress size={80} sx={{ marginRight: '8px' }} disableShrink />
    </Box>
  );
};

export default SubmissionConfirmation;
