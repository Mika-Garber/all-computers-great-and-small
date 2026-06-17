import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { brandColors } from '../../theme/theme';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  sx?: SxProps<Theme>;
}

export function SectionHeading({ title, subtitle, align = 'center', sx }: SectionHeadingProps) {
  return (
    <Stack spacing={1.5} sx={{ textAlign: align, mb: 4, ...sx }}>
      <Typography variant="h3" component="h2">
        {title}
      </Typography>
      <Box
        sx={{
          width: 72,
          height: 4,
          borderRadius: 999,
          background: `linear-gradient(90deg, ${brandColors.orange}, ${brandColors.blue})`,
          mx: align === 'center' ? 'auto' : 0,
        }}
      />
      {subtitle ? (
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ maxWidth: align === 'center' ? 720 : 'none', mx: align === 'center' ? 'auto' : 0 }}
        >
          {subtitle}
        </Typography>
      ) : null}
    </Stack>
  );
}
