import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { CtaButton } from '../cta-button/cta-button';
import { CardAccent, StyledServiceCard } from './service-card.styled';

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
}

export function ServiceCard({ title, description, path }: ServiceCardProps) {
  return (
    <StyledServiceCard elevation={0}>
      <CardAccent />
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ flex: 1 }}>
          {description}
        </Typography>
        <Box>
          <CtaButton to={path} variant="outline" size="small">
            <Box component="span" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
              Learn more
              <ArrowForwardIcon sx={{ fontSize: 18 }} />
            </Box>
          </CtaButton>
        </Box>
      </Stack>
    </StyledServiceCard>
  );
}
