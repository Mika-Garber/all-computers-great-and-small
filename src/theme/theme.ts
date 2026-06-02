import { createTheme } from '@mui/material/styles';

export const brandColors = {
  cream: '#eae6dd',
  charcoal: '#2d2d2a',
  teal: '#03645f',
  gold: '#edd286',
  blue: '#0559b5',
  white: '#ffffff',
} as const;

export const theme = createTheme({
  palette: {
    primary: {
      main: brandColors.teal,
      light: '#048a82',
      dark: '#024a46',
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.blue,
      contrastText: brandColors.white,
    },
    background: {
      default: brandColors.cream,
      paper: brandColors.white,
    },
    text: {
      primary: brandColors.charcoal,
      secondary: '#4a4a47',
    },
  },
  typography: {
    fontFamily: '"Work Sans", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2rem',
      lineHeight: 1.25,
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.35,
    },
    body1: {
      fontSize: '1.0625rem',
      lineHeight: 1.7,
    },
    button: {
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brandColors.cream,
        },
        '#root': {
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: 28,
          paddingBlock: 12,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 0 rgba(45, 45, 42, 0.08)',
        },
      },
    },
  },
});
