import { colors } from '@mui/material';
import { PaletteOptions } from '@mui/material/styles/createPalette';

const white = '#FFFFFF';

const palette: PaletteOptions = {
  primary: {
    main: '#08B578',
    dark: '#39A949',
    light: 'rgb(246, 253, 245)',
    contrastText: white,
  },
  secondary: {
    main: '#6E6E6E',
    light: '#E7F8F299',
    dark: '#003511',
    contrastText: '#121212',
  },
  error: {
    main: 'rgb(174, 46, 46)',
    light: '#DA6868',
    dark: '#922E2E',
    contrast: white,
    background: '#FAECEC',
  },
  info: {
    main: '#00452F',
    light: '#FFBB5D',
    dark: '#7d7d7d',
    contrastText: "#2C2C2C",
    background: '#EEF7FD',
  },
  warning: {
    main: '#F0932B',
    light: '#FFBF4C',
    dark: '#845B10',
    contrast: white,
    background: '#FEF6E7',
  },
  success: {
    main: '#00C684',
    light: '#e6f8f1',
    dark: '#0E8074',
    contrast: white,
    background: '#E6F5F4',
  },
  text: {
    primary: '#3E3E3E',
    secondary: '#08B578', // todo change, %
    disabled: '#bfbfbf',
    link: colors.blue[600], // todo change, ?
    hint: '#5B5B5B', // todo change, ?
  },
  action: {
    active: '#6B7280',
    hover: '#F0F0F0', // todo change, %
    selected: '#31B96E', // todo change, %
    disabled: '#F5F5F5', // todo change, %
    disabledBackground: '#D0D0D0', // todo change, %
    focus: '#D0D0D0', // todo change, %
  },
  other: {
    rowCheckBox: '#F1F1F1',
    divider: '#E6E8F0',
    outlineBorder: white,
    standardInputLine: white,
    backgroundOverlay: '#8F8F8F', // todo change, %
    ratingActive: '#FFB400',
    snackbarBackground: '#323232',
    lightPurpleBackground: '#FAF9FF', // todo change, '#FAEEFF', 'rgba(78, 111, 255, 0.04)'
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#F9FAFC',
    paper: white,
    whiteOpacity: '#FFFFFFAA',
    fontFamily: 'Roboto,-apple-system,BlinkMacSystemFont,sans-serif, helvetica, arial',
    hover: '#EEEEFF30',
    error: '#FAECEC',
  },
  divider: colors.grey[200],
  promo: {
    filled: 'linear-gradient(90deg, #951DFF 100%, #B900EB 100%)',
  },
};

export default palette;
