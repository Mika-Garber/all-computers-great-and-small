import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';

export const StyledServiceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  border: `1px solid rgba(45, 45, 42, 0.08)`,
  boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 16px 32px rgba(45, 45, 42, 0.1)',
  },
}));

export const CardAccent = styled('div')(({ theme }) => ({
  width: 48,
  height: 4,
  borderRadius: 999,
  backgroundColor: theme.palette.primary.main,
  marginBottom: theme.spacing(2),
}));
