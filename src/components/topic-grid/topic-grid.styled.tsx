import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const TopicPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2.5),
  height: '100%',
  border: `1px solid rgba(45, 45, 42, 0.08)`,
  boxShadow: 'none',
  backgroundColor: theme.palette.background.paper,
}));

export const TopicGridRoot = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}));
