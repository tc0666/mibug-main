import { styled } from '@mui/material';

export const Button = styled('button')<{ active?: boolean }>(
  ({ active, theme }) => `
  padding: 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${active ? '#fff' : theme.palette.primary.main};
  font-weight: 500;
  font-size: 16px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: 0.02857em;
  line-height: 22px;
  flex-direction: row;
  height: 48px;
  box-shadow: ${active ? '0px 1px 5px 0px #0000001F,0px 2px 2px 0px #00000024,0px 3px 1px -2px #00000033;' : 'none'};
  cursor: pointer;
  background-color: ${active ? theme.palette.primary.main : '#fff'};
  border: 1px solid ${active ? theme.palette.primary.main : 'rgba(8, 181, 120, 0.5)'};
  border-radius: 2px;
  min-width: 4.5em;
  &:hover {
    background-color: '${active ? theme.palette.primary.dark : theme.palette.primary.light}';
  }
  &:disabled {
    color: #3E3E3E;
    background-color: ${theme.palette.background.whiteOpacity};
    cursor: no-drop;
  }
`,
);
