import { Theme } from '@mui/material/styles';

declare module '@mui/styles' {
  /**
   *  We need to make this fix
   *  refer https://mui.com/material-ui/guides/migration-v4/#mui-styles
   */
  interface DefaultTheme extends Theme {}
}
