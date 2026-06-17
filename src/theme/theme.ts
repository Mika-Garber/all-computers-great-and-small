import { createTheme } from '@mui/material/styles';

/** Palette inspired by allcomputersgreatandsmall.com — warm accent + blue, modernized */
export const brandColors = {
  cream: '#f7f3ec',
  charcoal: '#2d2d2a',
  orange: '#e8732a',
  orangeDark: '#c45a1f',
  orangeLight: '#f5a66a',
  blue: '#0559b5',
  blueDark: '#04408a',
  white: '#ffffff',
} as const;

export const brandRgba = {
  orangeBand: 'rgba(232, 115, 42, 0.18)',
  orangeBandStrong: 'rgba(232, 115, 42, 0.28)',
  orangeHover: 'rgba(232, 115, 42, 0.1)',
  blueBand: 'rgba(5, 89, 181, 0.08)',
  blueGlow: 'rgba(5, 89, 181, 0.12)',
} as const;

export const theme = createTheme({
  palette: {
    primary: {
      main: brandColors.orange,
      light: brandColors.orangeLight,
      dark: brandColors.orangeDark,
      contrastText: brandColors.white,
    },
    secondary: {
      main: brandColors.blue,
      dark: brandColors.blueDark,
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
        ':focus-visible': {
          outlineOffset: 2,
        },
        'a:focus-visible, button:focus-visible, [tabindex]:focus-visible': {
          outline: `3px solid ${brandColors.blue}`,
          outlineOffset: 2,
        },
        '[id]': {
          scrollMarginTop: 88,
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
          '&:focus-visible': {
            outline: `3px solid ${brandColors.blue}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: `3px solid ${brandColors.blue}`,
            outlineOffset: 2,
            borderRadius: 4,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus-visible': {
            outline: `3px solid ${brandColors.blue}`,
            outlineOffset: 2,
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
