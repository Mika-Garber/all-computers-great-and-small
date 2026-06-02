import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { TestimonialPaper } from './testimonial-card.styled';

interface TestimonialCardProps {
  quote: string;
  author: string;
}

export function TestimonialCard({ quote, author }: TestimonialCardProps) {
  return (
    <TestimonialPaper elevation={0}>
      <Stack spacing={2}>
        <FormatQuoteIcon color="primary" sx={{ fontSize: 32, opacity: 0.7 }} />
        <Typography variant="body1" sx={{ fontStyle: 'italic', lineHeight: 1.8 }}>
          {quote}
        </Typography>
        <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
          — {author}
        </Typography>
      </Stack>
    </TestimonialPaper>
  );
}
