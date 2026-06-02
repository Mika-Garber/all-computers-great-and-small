import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({ title, subtitle, align = 'center' }: SectionHeadingProps) {
  return (
    <Stack spacing={1.5} sx={{ textAlign: align, mb: 4 }}>
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      {subtitle ? (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: align === 'center' ? 720 : 'none', mx: align === 'center' ? 'auto' : 0 }}>
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}
