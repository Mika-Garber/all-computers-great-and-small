import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const TestimonialPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
}));
