import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  Typography,
  generateUtilityClasses,
  SelectChangeEvent,
} from '@mui/material';
import { FormTitle } from './FormTitle';

interface SelectFieldProps {
  name: string;
  label: string;
  value?: string;
  options: { label: string; value: string }[];
  className?: string;
  onChange?: (value: string) => void;
}

const classes = generateUtilityClasses('SelectField', ['root', 'field']);

const styles = {
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: "16px",
    [`& .MuiFormHelperText-root`]: {
      margin: '3px 0 0 0',
      color: 'rgb(174, 46, 46)',
      width: '100%',
      textAlign: 'start',
    },
  },
  [`& .${classes.field}`]: {
    fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: 400,
    fontSize: '1rem',
    color: 'rgb(50, 50, 50)',
    display: 'inline-flex',
    alignItems: 'center',
    width: '100%',
    height: '48px',
    borderRadius: '4px',
  },
};

const SelectField: React.FC<SelectFieldProps> = ({
   name,
   label,
   options,
   className = classes.field,
   onChange,
   value,
 }) => {
  const {
    control,
    formState: { errors },
    clearErrors,
    setValue,
  } = useFormContext();

  const handleChange = (e: SelectChangeEvent<string>) => {
    const value = e.target.value;
    if (value) {
      clearErrors(name);
    }
    setValue(name, value);
    onChange?.(value);
  };

  return (
    <FormControl fullWidth className={classes.root} sx={styles}>
      <FormTitle>{label}</FormTitle>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            displayEmpty
            value={value ?? field.value}
            onChange={handleChange}
            className={className}
            renderValue={(value) => {
              if (!value) return <Typography color="gray">{options[0]?.label}</Typography>;
              const selectedOption = options.find((option) => option.value === value);
              return selectedOption ? selectedOption.label : value;
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errors[name]?.message ? (
        <FormHelperText>{errors[name]?.message as string}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default SelectField;
