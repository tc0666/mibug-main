import {FormLabel, styled} from "@mui/material";

export const FormTitle = styled(FormLabel)(({ theme }) => ({
  color: '#3E3E3E',
  fontWeight: 400,
  fontSize: '14px', // Note: the second fontSize and color will overwrite the first ones
  letterSpacing: '0.00938em',
  lineHeight: '1.4375em',
  fontFamily: 'Roboto, -apple-system, BlinkMacSystemFont, sans-serif, helvetica, arial',
  padding: 0,
  position: 'relative',
  marginBottom: '8px',
}));
