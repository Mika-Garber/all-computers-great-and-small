import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const FooterRoot = styled('footer')(({ theme }) => ({
  marginTop: 'auto',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
}));

export const FooterInner = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  marginInline: 'auto',
  paddingInline: theme.spacing(3),
  display: 'grid',
  gap: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '2fr 1fr 1fr',
    alignItems: 'start',
  },
}));

export const FooterLink = styled('a')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  textDecoration: 'none',
  opacity: 0.92,
  '&:hover': {
    opacity: 1,
    textDecoration: 'underline',
  },
}));
