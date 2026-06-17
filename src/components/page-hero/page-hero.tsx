import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { PageHeroInner, PageHeroRoot } from './page-hero.styled';

interface PageHeroProps {
  title: string;
  subtitle?: string;
  compact?: boolean;
}

export function PageHero({ title, subtitle, compact = true }: PageHeroProps) {
  return (
    <PageHeroRoot compact={compact}>
      <PageHeroInner>
        <Stack spacing={1.5}>
          <Typography variant="h2" component="h1" sx={{ color: 'inherit', fontWeight: 700 }}>
            {title}
          </Typography>
          {subtitle ? (
            <Typography variant="h6" component="p" sx={{ color: 'inherit', opacity: 0.92, fontWeight: 400 }}>
              {subtitle}
            </Typography>
          ) : null}
        </Stack>
      </PageHeroInner>
    </PageHeroRoot>
  );
}
