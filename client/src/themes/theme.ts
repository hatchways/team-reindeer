import { createMuiTheme } from '@material-ui/core';

export const theme = createMuiTheme({
  typography: {
    fontFamily: '"Roboto"',
    fontSize: 12,
    button: {
      fontFamily: '"Roboto"',
    },
    body1: {
      color: '#000000',
    },
    h2: {
      fontSize: 48,
      color: '#00000',
      fontWeight: 400,
      '@media (max-width:768px)': {
        fontSize: 24,
      },
    },
    h3: {
      fontSize: 18,
      color: '#000000',
      fontWeight: 500,
      fontFamily: "'Arial'",
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    h5: {
      fontSize: 26,
      color: '#000000',
      fontWeight: 700,
      fontFamily: "'Roboto'",
      textAlign: 'center',
    },
  },
  palette: {
    primary: { main: '#f14140' },
    secondary: { main: '#FFFFFF' },
  },
  shape: {
    borderRadius: 5,
  },
  spacing: 2, //setting pixel size of 2
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});
