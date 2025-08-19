import { AlertOptions, PaletteColorOptions } from '@mui/material/styles/createPalette';
import { PaletteColor } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  export interface TypeBackground {
    default: string;
    paper: string;
    whiteOpacity: string;
    fontFamily: string;
    hover: string;
    error: string;
  }

  export interface TypeButton {
    filled: string;
  }

  export interface ExtendedPaletteColor extends PaletteColor {
    contrast: string;
  }

  export interface SimplePaletteColorOptions {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
    contrast?: string;
    background?: string;
  }

  export interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    link: string;
    hint: string;
  }

  export interface TypeOther {
    rowCheckBox: string;
    divider: string;
    outlineBorder: string;
    standardInputLine: string;
    backgroundOverlay: string;
    ratingActive: string;
    snackbarBackground: string;
    lightPurpleBackground: string;
  }

  // export type ExtendedPaletteColorOptions = ExtendedSimplePaletteColorOptions | PaletteColorOptions;
  /**
   * the interfaces that augmenting the Theme interface
   */
  export interface Palette {
    promo: TypeButton;
    background: TypeBackground;
    other: TypeOther;
    link: string;
    icon: string;
    button: { disabled: string; hover: { primary: string; secondary: string } };
    alert: {
      success: AlertOptions;
      info: AlertOptions;
      error: AlertOptions;
      warning: AlertOptions;
    };
    tertiary: PaletteColorOptions;
    neutral: PaletteColorOptions;
    map: {
      purple: string;
      cyan: string;
    };
  }

  /**
   * the *Options interfaces augmenting the createTheme types
   */
  export interface PaletteOptions {
    primary?: PaletteColorOptions;
    promo?: Partial<TypeButton>;
    background?: Partial<TypeBackground>;
    other?: Partial<TypeOther>;
    link?: string;
    icon?: string;
  }
}
