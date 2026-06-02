import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const PageSection = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  marginInline: 'auto',
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(8),
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  paddingBlock: theme.spacing(8, 10),
  paddingInline: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    paddingBlock: theme.spacing(10, 12),
  },
}));

export const HeroGrid = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  marginInline: 'auto',
  display: 'grid',
  gap: theme.spacing(4),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1.15fr 0.85fr',
    gap: theme.spacing(6),
  },
}));

export const HeroGlow = styled(Box)({
  position: 'absolute',
  top: -80,
  right: -80,
  width: 280,
  height: 280,
  borderRadius: '50%',
  backgroundColor: 'rgba(237, 210, 134, 0.35)',
  pointerEvents: 'none',
});

export const SailboatImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 380,
  marginInline: 'auto',
  display: 'block',
  filter: 'drop-shadow(0 12px 24px rgba(45, 45, 42, 0.12))',
  [theme.breakpoints.up('md')]: {
    maxWidth: 340,
  },
}));

export const CapabilityList = styled('ul')(({ theme }) => ({
  margin: 0,
  paddingLeft: theme.spacing(2.5),
  display: 'grid',
  gap: theme.spacing(1),
}));

export const ServiceGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));

export const CtaBand = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid rgba(45, 45, 42, 0.08)`,
  borderBottom: `1px solid rgba(45, 45, 42, 0.08)`,
  paddingBlock: theme.spacing(6),
  paddingInline: theme.spacing(3),
}));

export const CtaBandInner = styled(Box)({
  maxWidth: 900,
  marginInline: 'auto',
  textAlign: 'center',
});

export const GoldBand = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(237, 210, 134, 0.35)',
  paddingBlock: theme.spacing(6),
  paddingInline: theme.spacing(3),
}));
