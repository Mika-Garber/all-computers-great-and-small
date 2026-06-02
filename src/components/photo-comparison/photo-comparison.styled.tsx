import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const GallerySection = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(237, 210, 134, 0.45)',
  paddingBlock: theme.spacing(6),
  paddingInline: theme.spacing(3),
  marginInline: theme.spacing(-3),
  [theme.breakpoints.up('md')]: {
    marginInline: 0,
    borderRadius: theme.shape.borderRadius,
  },
}));

export const ComparisonRow = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'compact',
})<{ compact?: boolean }>(({ theme, compact }) => ({
  display: 'grid',
  gap: theme.spacing(compact ? 2 : 3),
  alignItems: 'start',
  marginBottom: theme.spacing(5),
  gridTemplateColumns: '1fr',
  ...(compact && {
    maxWidth: 620,
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
  maxWidth: compact ? 280 : '100%',
  height: 'auto',
  display: 'block',
  borderRadius: 8,
  boxShadow: '0 4px 16px rgba(45, 45, 42, 0.12)',
}));

export const NegativeStripImage = styled(ComparisonImage)({
  maxWidth: 280,
});

export const NegativesTopRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'minmax(160px, 0.45fr) minmax(0, 1fr)',
  },
}));

export const NegativesBottomRow = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(3),
  alignItems: 'center',
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
  },
}));
