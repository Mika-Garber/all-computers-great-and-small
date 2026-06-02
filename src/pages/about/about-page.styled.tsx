import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const AboutProfileHeader = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  alignItems: 'center',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'auto 1fr',
    gap: theme.spacing(4),
  },
}));

export const AboutProfilePhoto = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 240,
  height: 'auto',
  display: 'block',
  marginInline: 'auto',
  borderRadius: 16,
  boxShadow: '0 8px 24px rgba(45, 45, 42, 0.12)',
  [theme.breakpoints.up('sm')]: {
    marginInline: 0,
    maxWidth: 220,
  },
}));

export const AboutNameLink = styled('a')(({ theme }) => ({
  color: theme.palette.secondary.main,
  textDecoration: 'none',
  fontWeight: 700,
  fontSize: '1.75rem',
  lineHeight: 1.2,
  display: 'inline-block',
  borderBottom: `2px solid ${theme.palette.secondary.main}`,
  transition: 'opacity 0.2s ease',
  '&:hover': {
    opacity: 0.85,
  },
}));
