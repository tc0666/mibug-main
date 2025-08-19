import {FormControl, generateUtilityClasses, TextField, Typography} from "@mui/material";
import {FC, useState} from "react";
import {useFormContext} from "react-hook-form";
import React from "react";
import {FormHint} from "./FormHint";
import clsx from "clsx";

const classes = generateUtilityClasses('InputField', [
  'root',
  'inputField',
  'formTitle',
  'tip',
]);

const styles = () => ({
  [`&.${classes.root}`]: {
    marginBottom: '16px',
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
    },
    [`& .MuiFormLabel-root`]: {
      color: '#3E3E3E',
    },
    '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
      display: 'none',
    },
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
  },
  [`& .${classes.formTitle}`]: {
    color: '#3E3E3E',
    fontSize: "15px",
    fontWeight: 400,
    marginBottom: "8px",
  },
  [`& .${classes.tip}`]: {
    color: 'rgb(91, 91, 91)',
    fontSize: '0.75rem',
    lineHeight: '1.5rem',
    transition: '0.2s ease-in-out',
    marginBottom: '8px',
  },
  [`& .${classes.inputField}`]: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    letterSpacing: '0.00938em',
    color: 'rgb(50, 50, 50)',
    boxSizing: 'border-box',
    cursor: 'text',
    display: 'inline-flex',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    width: '100%',
    position: 'relative',
    borderRadius: '4px',
    paddingRight: 0,
    height: '48px',
    input: {
      padding: '12.5px 0 12.5px 8px',
      borderRadius: '4px',
    },
  },
});

interface InputFieldProps {
  className?: string,
  name: string,
  label: string,
  disabled?: boolean,
  value?: string | undefined,
  placeholder: string,
  onChange?: (value: string) => void,
  type: React.InputHTMLAttributes<unknown>['type'],
  requiredMessage: string,
  showHintMessage?: string,
  validate?: (value: string) => string | boolean,
  inputProps?: {
    endAdornment?: React.ReactNode;
    min?: number,
    max?: number,
    step?: string,
  },
}

const InputField: FC<InputFieldProps> = ({
                                           className,
                                           name,
                                           label,
                                           disabled,
                                           placeholder,
                                           type,
                                           value,
                                           requiredMessage,
                                           showHintMessage,
                                           onChange,
                                           inputProps,
                                           validate,
                                         }) => {
  const { register, formState: { errors }, setValue, clearErrors } = useFormContext();
  const [showHint, setShowHint] = useState<boolean>(false);

  const handleHintToggle = (value: boolean | undefined) => {
    setShowHint(!!value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      clearErrors(name);
    }
    setValue(name, value);
    onChange?.(value);
  };

  return (
    <FormControl fullWidth className={clsx(classes.root, className)} sx={styles}>
      <Typography
        component="label"
        className={classes.formTitle}
      >
        {label}
      </Typography>
      <FormHint className={classes.tip} text={showHintMessage} show={showHint} />
      <TextField
        placeholder={placeholder}
        type={type}
        fullWidth
        {...register(name, {
          required: requiredMessage,
          validate,
        })}
        value={value ?? ''}
        disabled={disabled}
        error={!!errors[name]}
        helperText={errors[name]?.message as string}
        slotProps={{
          input: {
            ...inputProps,
            className: classes.inputField,
          },
        }}
        onChange={handleChange}
        onFocus={() => handleHintToggle(true)}
        onBlur={() => handleHintToggle(false)}
      />
    </FormControl>
  );
};

export default InputField;
