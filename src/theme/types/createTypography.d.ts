import * as createTypography from '@mui/material/styles/createTypography'; // eslint-disable-line

declare module '@mui/material/styles/createTypography' {
  export type ExtendedVariant =
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'bodyLargeBold'
    | 'body1'
    | 'body2'
    | 'caption'
    | 'button'
    | 'overline'
    | 'buttonSmall'
    | 'buttonMedium'
    | 'buttonLarge'
    | 'avatarLetter'
    | 'inputLabel'
    | 'helperText'
    | 'inputText'
    | 'tooltip'
    | 'text'
    | '*';

  export interface TypographyOptions
    extends Partial<Record<ExtendedVariant, TypographyStyleOptions> & FontStyleOptions> {}

  export interface Typography
    extends Record<ExtendedVariant, TypographyStyle>,
      FontStyle,
      TypographyUtils {}
}
