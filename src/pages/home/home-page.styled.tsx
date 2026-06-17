import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { brandRgba } from '../../theme/theme';

export const PageSection = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  marginInline: 'auto',
  paddingInline: theme.spacing(3),
  paddingBlock: theme.spacing(8),
}));

export const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  paddingBlock: theme.spacing(7, 9),
  paddingInline: theme.spacing(3),
  [theme.breakpoints.up('md')]: {
    paddingBlock: theme.spacing(9, 10.5),
  },
}));

export const HeroGrid = styled(Box)(({ theme }) => ({
  maxWidth: 1200,
  marginInline: 'auto',
  display: 'grid',
  gap: theme.spacing(3),
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: '1.08fr 0.92fr',
    gap: theme.spacing(3.5),
  },
}));

export const HeroGlow = styled(Box)({
  position: 'absolute',
  top: -80,
  right: -80,
  width: 280,
  height: 280,
  borderRadius: '50%',
  backgroundColor: brandRgba.blueGlow,
  pointerEvents: 'none',
});

export const HeroGlowAccent = styled(Box)({
  position: 'absolute',
  bottom: -60,
  left: -40,
  width: 200,
  height: 200,
  borderRadius: '50%',
  backgroundColor: brandRgba.orangeBand,
  pointerEvents: 'none',
});

export const SailboatImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  marginInline: 'auto',
  display: 'block',
  filter: 'drop-shadow(0 12px 24px rgba(45, 45, 42, 0.12))',
  [theme.breakpoints.up('md')]: {
    maxWidth: 420,
    marginLeft: theme.spacing(-1),
    marginRight: 'auto',
  },
}));

export const CapabilityList = styled(Box)(({ theme }) => ({
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
  paddingBlock: theme.spacing(5.5),
  paddingInline: theme.spacing(3),
}));

export const CtaBandInner = styled(Box)({
  maxWidth: 900,
  marginInline: 'auto',
  textAlign: 'center',
});

export const GoldBand = styled(Box)(({ theme }) => ({
  backgroundColor: brandRgba.orangeBand,
  borderBlock: `1px solid ${brandRgba.orangeBandStrong}`,
  paddingBlock: theme.spacing(5.5),
  paddingInline: theme.spacing(3),
}));

export const TrustGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(5, 1fr)',
  },
}));

export const TrustCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2.5, 2),
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(45, 45, 42, 0.08)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 16px rgba(45, 45, 42, 0.05)',
  height: '100%',
}));

export const StepsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}));

export const StepCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  border: '1px solid rgba(45, 45, 42, 0.08)',
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0 4px 16px rgba(45, 45, 42, 0.05)',
  height: '100%',
}));

export const StepNumber = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 36,
  height: 36,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  fontSize: '1rem',
  marginBottom: theme.spacing(1.5),
}));
