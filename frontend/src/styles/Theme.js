import { createTheme } from '@mui/material/styles';

export const myMaterialTheme = createTheme({
  palette: {
    primary: {
      main: '#000000', // 주 색상
    },
    secondary: {
      main: '#f2f2f2',
    },
  },
  typography: {
    fontFamily: ['Ubuntu'].join(','),
    button: {
      fontWeight: 'bold',
      letterSpacing: '0.04em',
    },
  },
});
