import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, TextField, Typography, generateUtilityClasses, Theme } from '@mui/material';
import {useForgotPassword} from "../hooks/useForgotPassword";
import Alert from "./Alert";

const classes = generateUtilityClasses('Login', [
  'root',
  'form',
  'input',
  'pinContainer',
  'pinInput',
  'button',
  'title',
  'description',
  'label',
  'helpLink',
  'iconContainer',
  'errorMessage',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    backgroundColor: "rgb(247, 247, 247)",
    flex: "1 1 0%",
    height: '50vh',
    paddingTop: '64px',
    [theme.breakpoints.down(1024)]: {
      height: 'auto',
      paddingTop: "24px",
    },
  },
  [`& .${classes.form}`]: {
    display: 'flex',
    maxWidth: "600px",
    margin: "0 auto",
    flexDirection: 'column',
    width: '100%',
    padding: "0 24px",
    borderRadius: '8px',
    boxSizing: 'border-box',
    [theme.breakpoints.down(1024)]: {
      boxShadow: 'none',
    },
  },
  [`& .${classes.input}`]: {
    marginBottom: '32px',
  },
  [`& .${classes.errorMessage}`]: {
    fontSize: "12px",
    marginBottom: '16px',
  },
  [`& .${classes.title}`]: {
    fontSize: '24px',
    fontWeight: 700,
    textAlign: 'center',
  },
  [`& .${classes.description}`]: {
    margin: '16px 0',
    fontSize: '1rem',
    fontWeight: 400,
    textAlign: 'center',
  },
  [`& .${classes.label}`]: {
    fontSize: '16px',
    marginBottom: "10px",
  },
  [`& .${classes.button}`]: {
    marginBottom: '12px',
    textTransform: "capitalize",
  },
});

const ForgotPassword: React.FC = () => {
  const { control, handleSubmit } = useForm<{ email: string }>({
    defaultValues: { email: '' },
  });
  const { forgotPassword, isPending, isSuccess, isError  } = useForgotPassword();

  const onSubmit = async (data: { email: string }) => {
    forgotPassword(data.email);
  };

  return (
    <Box className={classes.root} sx={styles}>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
        <Typography className={classes.title}>Mibug Credit Kundenbereich</Typography>
        <Typography className={classes.description}>
          Bitte geben Sie Ihre E-Mail-Adresse an, mit der Sie Ihre Kreditanfrage bei Mibug Credit gestellt haben.
          Wir senden Ihnen einen Link zu, mit dem Sie Ihr Passwort zurücksetzen können.
        </Typography>
        <Controller
          name="email"
          control={control}
          rules={{ required: 'Email ist erforderlich' }}
          render={({ field, fieldState: { error } }) => (
            <>
              <TextField
                {...field}
                label="E-Mail-Adresse"
                className={classes.input}
                placeholder="E-Mail-Adresse"
                fullWidth
              />
              {error && <Typography className={classes.errorMessage} color="error">{error.message}</Typography>}
            </>
          )}
        />
        {isSuccess ? (
          <Alert description="neues Passwort wurde erfolgreich gesendet" />
        ) : null}

        {isError ? (
          <Alert type="error" description="Leider gibt es ein Problem mit Ihrem Kundenkonto. Damit Sie unseren Service einwandfrei nutzen können, rufen Sie bitte einen unserer Kreditspezialisten an. Dieser hilft Ihnen gerne weiter. <a href='tel: +49 89 41435700'>+49 89 41435700</a>" />
        ) : null

        }
        <Button
          className={classes.button}
          variant="contained"
          color="primary"
          type="submit"
          fullWidth
          disabled={isPending}
        >
          Passwort zurücksetzen
        </Button>
      </form>
    </Box>
  );
};

export default ForgotPassword;
