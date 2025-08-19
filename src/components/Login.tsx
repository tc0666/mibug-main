import React, { useState, useEffect } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Box, Button, TextField, Typography, generateUtilityClasses, Theme } from '@mui/material';
import { useLogin } from '../hooks/useLogin';
import LockPersonIcon from '@mui/icons-material/LockPerson';

const classes = generateUtilityClasses('Login', [
  'root',
  'form',
  'input',
  'pinContainer',
  'pinInput',
  'button',
  'title',
  'label',
  'helpLink',
  'iconContainer',
  'errorMessage',
]);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
    padding: '16px',
    [theme.breakpoints.down(1024)]: {
      height: 'auto',
      padding: 0,
    },
  },
  [`& .${classes.form}`]: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '450px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '24px',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    [theme.breakpoints.down(1024)]: {
      boxShadow: 'none',
    },
  },
  [`& .${classes.input}`]: {
    marginBottom: '16px',
  },
  [`& .${classes.errorMessage}`]: {
    fontSize: "12px",
    marginBottom: '16px',
  },
  [`& .${classes.title}`]: {
    marginBottom: '24px',
    fontSize: '24px',
    fontWeight: 700,
    textAlign: 'center',
  },
  [`& .${classes.label}`]: {
    fontSize: '16px',
    marginBottom: "10px",
  },
  [`& .${classes.pinContainer}`]: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  },
  [`& .${classes.helpLink}`]: {
    fontSize: "13px",
    a: {
      color: theme.palette.primary.main,
    }
  },
  [`& .${classes.pinInput}`]: {
    width: '60px',
    textAlign: 'center',
    fontSize: '20px',
    '& input': {
      textAlign: 'center',
    },
  },
  [`& .${classes.button}`]: {
    marginBottom: '12px',
    textTransform: "capitalize",
  },
  [`& .${classes.iconContainer}`]: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '16px',
    '& svg': {
      width: '48px',
      height: '48px',
      fill: theme.palette.primary.main,
    },
  },
});

interface LoginForm {
  email: string;
  pinCode: string[];
}

const Login: React.FC = () => {
  const { control, handleSubmit, setValue, getValues, formState: { errors } } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      pinCode: ['', '', '', '', ''],
    },
  });
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const { login, isPending, isSuccess, data, error } = useLogin();

  const onSubmitEmail: SubmitHandler<LoginForm> = async (data) => {
    setStep(2);
  };

  const onSubmitPin: SubmitHandler<LoginForm> = async (data) => {
    const pinCode = data.pinCode.join('');
    login(data.email, pinCode);
  };

  useEffect(() => {
    if (data && isSuccess) {
      navigate(`/kundenkonto/${data?.dealId}`);
    }
  }, [isSuccess, data, navigate]);

  useEffect(() => {
    if (error) {
      setStep(1)
    }
  }, [error, setStep]);

  const handlePinChange = (value: string, index: number) => {
    const pinCode = getValues('pinCode');
    pinCode[index] = value.replace(/\D/, '');
    setValue('pinCode', pinCode, { shouldValidate: true });
    if (value && index < pinCode.length - 1) {
      document.getElementById(`pinCode-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace') {
      const pin = getValues('pinCode');
      if (pin[index] === '' && index > 0) {
        document.getElementById(`pinCode-${index - 1}`)?.focus();
      } else {
        pin[index] = '';
        setValue('pinCode', pin, { shouldValidate: true });
      }
    }
  };



  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>, index: number) => {
    e.preventDefault();
    const pasteData = e.clipboardData?.getData('text')?.replace(/\D/g, ''); // Only digits

    const pinCode = getValues('pinCode'); // Get the current pinCode state

    // Update the pinCode array with the pasted values
    for (let i = 0; i < pasteData.length; i++) {
      if (index + i < pinCode.length) {
        pinCode[index + i] = pasteData[i];
      }
    }
    setValue('pinCode', pinCode, { shouldValidate: true });

    // Move focus to the next input field
    const nextIndex = Math.min(index + pasteData.length, pinCode.length - 1);
    document.getElementById(`pinCode-${nextIndex}`)?.focus();
  };

  console.log('errors', errors.pinCode)

  return (
    <Box className={classes.root} sx={styles}>
      <Box className={classes.form}>
        <Box className={classes.iconContainer}>
          <LockPersonIcon />
        </Box>
        <Typography className={classes.title}>Anmeldung</Typography>
        <Typography className={classes.label}>
          {step === 1 ? 'E-Mail-Adresse' : 'PIN-Code eingeben'}
        </Typography>
        <form onSubmit={handleSubmit(step === 1 ? onSubmitEmail : onSubmitPin)}>
          {step === 1 && (
            <Controller
              name="email"
              control={control}
              rules={{ required: 'Email ist erforderlich' }}
              render={({ field, fieldState: { error } }) => (
                <>
                  <TextField
                    {...field}
                    className={classes.input}
                    placeholder="E-Mail-Adresse"
                    fullWidth
                  />
                  {error && <Typography className={classes.errorMessage} color="error">{error.message}</Typography>}
                </>
              )}
            />
          )}
          {step === 2 && (
            <>
              <Box className={classes.pinContainer}>
                {getValues('pinCode').map((value, index) => (
                  <Controller
                    key={index}
                    name={`pinCode[${index}]` as any}
                    control={control}
                    rules={{ required: 'PIN-Code ist erforderlich' }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type="text"
                        id={`pinCode-${index}`}
                        className={classes.pinInput}
                        inputProps={{ maxLength: 1 }}
                        value={value || ''}
                        onChange={(e) => {
                          const newValue = e.target.value.replace(/\D/, '');
                          field.onChange(newValue);
                          handlePinChange(newValue, index);
                        }}
                        onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(e, index)}
                        onPaste={(e: React.ClipboardEvent<HTMLInputElement>) => handlePaste(e, index)}
                      />
                    )}
                  />
                ))}
              </Box>
              {errors?.pinCode && (
                <Typography className={classes.errorMessage} color="error">
                  {errors.pinCode?.[0]?.message}
                </Typography>
              )}
            </>
          )}
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            disabled={isPending}
          >
            {step === 1 ? 'Weiter' : 'Anmelden'}
          </Button>
        </form>
        <Typography className={classes.helpLink}>
          Probleme beim Login? <a href="/kontakt">Hier klicken für Unterstützung</a>
        </Typography>
        <br/>
        <Typography className={classes.helpLink}>
          <a href="/auth/password">Passwort vergessen</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Login;
