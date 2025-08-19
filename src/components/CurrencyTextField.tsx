import React, {useEffect, useState} from "react";
import {
  FormControl,
  TextField,
  Typography,
  generateUtilityClasses,
} from "@mui/material";
import { useFormContext } from "react-hook-form";
import {FormHint} from "./FormHint";

const classes = generateUtilityClasses('CurrencyTextField', [
  'root',
  'currencyField',
  'label',
  'tip',
]);

const styles = () => ({
  [`&.${classes.root}`]: {
    marginBottom: '16px',
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(91, 91, 91)',
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
    input: {
      padding: '12.5px 0 12.5px 8px',
      borderRadius: '2px',
    },
  },
  [`& .${classes.label}`]: {
    color: '#3E3E3E',
    fontSize: "14px",
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
  [`& .${classes.currencyField}`]: {
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
    paddingRight: 0,
    height: '43px',
    borderRadius: '4px',
  },
});

interface CurrencyTextFieldProps {
  name: string;
  label?: string;
  variant?: any;
  placeholder?: string;
  showHintMessage?: string;
  max?: number;
  onChange?: (value: string) => void;
  helperText?: string;
  defaultValue?: number | string;
  requiredMessage: string;
  inputProps?: {
    endAdornment?: React.ReactNode;
    min?: number,
    max?: number,
    step?: string,
  };
}

const formatCurrency = (value: string | number): string =>
  String(value)
    .replace(/\D/g, "")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const parseCurrency = (formattedValue: string): number =>
  parseFloat(formattedValue.replace(/\./g, "")) || 0;

const CurrencyTextField: React.FC<CurrencyTextFieldProps> = ({
   name,
   label,
   placeholder,
   max,
   helperText,
   defaultValue = '',
   onChange,
   requiredMessage,
   showHintMessage,
   inputProps,
   variant,
 }) => {
  const [showHint, setShowHint] = useState<boolean>(false);

  const { register, formState: { errors }, setValue, setError, clearErrors } = useFormContext();

  useEffect(() => {
    clearErrors(name);
    if (defaultValue) {
      setValue(name, formatCurrency(defaultValue));
    }
  }, [defaultValue, name, setValue, clearErrors]);

  const handleValidation = (value: string): string => {
    const numericValue = parseCurrency(value);

    if (max && numericValue > max) {
      setError(name, {
        type: "max",
        message: helperText,
      });
      return formatCurrency(max);
    }

    clearErrors(name);

    return formatCurrency(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCurrency(e.target.value);
    const validatedValue = handleValidation(formattedValue);

    setValue(name, validatedValue);
    onChange?.(validatedValue);
  };

  const handleHintToggle = (value: boolean | undefined) => {
    setShowHint(!!value);
  };

  return (
    <FormControl fullWidth className={classes.root} sx={styles}>
      <Typography className={classes.label}>{label}</Typography>
      <FormHint className={classes.tip} text={showHintMessage} show={showHint} />
      <TextField
        placeholder={placeholder}
        type="text"
        fullWidth
        variant={variant}
        defaultValue={defaultValue}
        {...register(name, { required: requiredMessage})}
        error={!!errors[name]}
        helperText={errors[name]?.message as string}
        slotProps={{
          input: {
            ...inputProps,
            className: classes.currencyField,
          },
        }}
        onChange={handleChange}
        onFocus={() => handleHintToggle(true)}
        onBlur={() => handleHintToggle(false)}
      />
    </FormControl>
  );
};

export default CurrencyTextField;
