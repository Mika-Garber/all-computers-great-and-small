import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const HeroRoot = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  paddingBlock: theme.spacing(8, 10),
  paddingInline: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    paddingBlock: theme.spacing(10, 12),
  },
}));

export const HeroInner = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  marginInline: 'auto',
  display: 'grid',
  gap: theme.spacing(4),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: theme.spacing(6),
  },
}));

export const HeroAccent = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -80,
  right: -80,
  width: 280,
  height: 280,
  borderRadius: '50%',
  backgroundColor: theme.palette.mode === 'light' ? 'rgba(237, 210, 134, 0.35)' : undefined,
  pointerEvents: 'none',
}));

export const HeroImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 420,
  marginInline: 'auto',
  display: 'block',
  filter: 'drop-shadow(0 12px 24px rgba(45, 45, 42, 0.12))',
  [theme.breakpoints.up('md')]: {
    maxWidth: 360,
  },
}));

export const PageHeroRoot = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #024a46 100%)`,
  color: theme.palette.primary.contrastText,
  paddingBlock: theme.spacing(6, 7),
  paddingInline: theme.spacing(3),
}));

export const PageHeroInner = styled(Box)({
  maxWidth: 900,
  marginInline: 'auto',
});
