import React from 'react';
import { FormControl, generateUtilityClasses } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import {FormTitle} from "./FormTitle";

const classes = generateUtilityClasses('DateInputField', [
  'root',
  'input',
]);

const styles = () => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '16px',
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
      textAlign: "start",
      display: "block",
      width: "100%",
    },
  },
  [`& .${classes.input}`]: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    letterSpacing: '0.00938em',
    color: 'rgb(50, 50, 50)',
    boxSizing: 'border-box',
    width: '100%',
    position: 'relative',
    borderRadius: '2px',
    paddingRight: 0,
    lineHeight: '1.4375em',
    input: {
      height: "52px",
      boxSizing: 'border-box',
    },
  },
});

type DateInputFieldProps = {
  name: string;
  label: string;
  value?: string;
  views: ('year' | 'month' | 'day')[];
  format: string;
  requiredMessage?: string;
  onChange?: (newValue: string) => void,
};

const DateInputField = ({
  name,
  label,
  value,
  views,
  format,
  requiredMessage,
  onChange,
}: DateInputFieldProps) => {
  const { formState: { errors }, setValue, clearErrors, control } = useFormContext();

  const handleChange = (newValue: dayjs.Dayjs | null) => {
    if (newValue) {
      clearErrors(name);
    }
    setValue(name, newValue);
    if(newValue) {
      onChange?.(newValue as unknown as string);
    }
  };

  return (
    <FormControl fullWidth className={classes.root} sx={styles}>
      <FormTitle>{label}</FormTitle>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name={name}
          control={control}
          defaultValue={null}
          rules={{
            required: requiredMessage ? requiredMessage : false,
            validate: (value) => {
              if(!requiredMessage) return

              return value ? dayjs(value).isValid() : 'Ungültiges Datum'
            },
          }}
          render={({ field }) => (
            <DatePicker
              views={views}
              {...field}
              format={format}
              value={value ? dayjs(value) : null}
              onChange={(newValue) => handleChange(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                  error: requiredMessage ? !!errors[name] : false,
                  helperText: errors[name]?.message as string,
                  className: classes.input,
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default DateInputField;
