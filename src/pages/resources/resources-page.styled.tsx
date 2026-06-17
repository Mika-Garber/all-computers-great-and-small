import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const ContentWrap = styled(Box)({
  maxWidth: 1100,
  marginInline: 'auto',
  width: '100%',
});

export const SectionPanel = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 3, 4),
  border: '1px solid rgba(45, 45, 42, 0.08)',
  boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 4, 5),
  },
}));

export const ResourceGrid = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'singleColumn',
})<{ singleColumn?: boolean }>(({ theme, singleColumn }) => ({
  display: 'grid',
  gap: theme.spacing(2.5),
  gridTemplateColumns: '1fr',
  ...(singleColumn && {
    width: '100%',
  }),
  ...(!singleColumn && {
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: theme.spacing(3),
    },
  }),
}));

export const ResourceCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(2.5, 3),
  border: '1px solid rgba(45, 45, 42, 0.08)',
  boxShadow: '0 4px 16px rgba(45, 45, 42, 0.05)',
  borderRadius: theme.shape.borderRadius,
}));

export const IconWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 52,
  height: 52,
  borderRadius: 14,
  backgroundColor: 'rgba(232, 115, 42, 0.12)',
  color: theme.palette.primary.main,
  flexShrink: 0,
}));
