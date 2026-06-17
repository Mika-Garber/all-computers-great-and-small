import { styled } from '@mui/material/styles';
import { brandRgba } from '../../theme/theme';
import Box from '@mui/material/Box';

export const GallerySection = styled(Box)(({ theme }) => ({
  backgroundColor: brandRgba.orangeBand,
  paddingBlock: theme.spacing(4.5),
  paddingInline: theme.spacing(2.5),
  marginInline: theme.spacing(-3),
  [theme.breakpoints.up('md')]: {
    marginInline: 0,
    paddingInline: theme.spacing(3.5),
    borderRadius: theme.shape.borderRadius,
  },
}));

export const ComparisonRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact?: boolean }>(({ theme, compact }) => ({
  display: 'grid',
  gap: theme.spacing(compact ? 2 : 2.5),
  alignItems: 'start',
  marginBottom: theme.spacing(4),
  gridTemplateColumns: '1fr',
  ...(compact && {
    maxWidth: 600,
    marginInline: 'auto',
  }),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(var(--columns, 2), minmax(0, 1fr))',
  },
}));

export const ComparisonItem = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

export const ComparisonImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact?: boolean }>(({ compact }) => ({
  width: '100%',
  maxWidth: compact ? 260 : 320,
  maxHeight: compact ? 220 : 280,
  height: 'auto',
  objectFit: 'contain',
  display: 'block',
  borderRadius: 8,
  boxShadow: '0 4px 16px rgba(45, 45, 42, 0.12)',
}));

export const NegativeStripImage = styled(ComparisonImage)({
  maxWidth: 220,
  maxHeight: 260,
});

export const NegativesStepsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  alignItems: 'start',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    gap: theme.spacing(2.5),
  },
}));

export const NegativesStepCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: theme.spacing(1.5),
  height: '100%',
}));

export const NegativesStepBadge = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: 28,
  height: 28,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontWeight: 700,
  fontSize: '0.875rem',
}));

export const NegativesStepImageWrap = styled(Box)({
  width: '100%',
  maxWidth: 300,
  minHeight: 200,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NegativesDescription = styled(Box)(({ theme }) => ({
  maxWidth: 760,
  marginInline: 'auto',
  marginTop: theme.spacing(3.5),
  textAlign: 'center',
}));
