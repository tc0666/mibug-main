import { createTheme } from '@mui/material/styles';

import './types/createPalette.d';
import './types/createTypography.d';
import './types/material.d';

import palette from './palette';
import typography from './typography';

const baseTheme = {
  palette,
  typography,
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
      //      color: 'inherit', // Input text color
          },
          '& .MuiSvgIcon-root': {
            color: '#08B578', // Default icon color
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
     //       color: '#08B578', // Default icon color
          },
        },
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const theme = createTheme(baseTheme);
