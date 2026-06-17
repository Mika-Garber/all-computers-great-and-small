import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export const ContentWrap = styled(Box)({
  maxWidth: 1100,
  marginInline: 'auto',
  width: '100%',
});

export const PublicationPanel = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 3, 4),
  border: '1px solid rgba(45, 45, 42, 0.08)',
  boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(4, 4, 5),
  },
}));

export const ArticleGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2.5),
  },
}));

export const ArticleCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  padding: theme.spacing(2, 2.5),
  border: '1px solid rgba(45, 45, 42, 0.08)',
  boxShadow: '0 4px 16px rgba(45, 45, 42, 0.05)',
  borderRadius: theme.shape.borderRadius,
  transition: 'box-shadow 0.2s ease, transform 0.2s ease',
  '&:hover': {
    boxShadow: '0 8px 24px rgba(45, 45, 42, 0.1)',
    transform: 'translateY(-2px)',
  },
}));
