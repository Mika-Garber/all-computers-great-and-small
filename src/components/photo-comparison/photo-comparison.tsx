import Typography from '@mui/material/Typography';
import type { PhotoComparisonItem, PhotoComparisonRow } from '../../content/photo-video-content';
import {
  ComparisonImage,
  ComparisonItem,
  ComparisonRow,
} from './photo-comparison.styled';

interface PhotoComparisonGalleryProps {
  rows: PhotoComparisonRow[];
}

const captionSx = {
  mt: 1.5,
  maxWidth: 320,
  lineHeight: 1.55,
  fontSize: '0.8125rem',
  color: 'text.secondary',
} as const;

function PhotoComparisonCell({
  item,
  compact = false,
}: {
  item: PhotoComparisonItem;
  compact?: boolean;
}) {
  return (
    <ComparisonItem>
      <ComparisonImage src={item.src} alt={item.alt} loading="lazy" decoding="async" compact={compact} />
      <Typography variant="body2" sx={{ ...captionSx, maxWidth: compact ? 260 : 320 }}>
        {item.caption}
      </Typography>
    </ComparisonItem>
  );
}

export function PhotoComparisonGallery({ rows }: PhotoComparisonGalleryProps) {
  return (
    <>
      {rows.map((row) => (
        <ComparisonRow
          key={row.items.map((item) => item.caption).join('-')}
          compact={row.compact}
          style={{ ['--columns' as string]: row.items.length }}
        >
          {row.items.map((item) => (
            <PhotoComparisonCell key={item.caption} item={item} compact={row.compact} />
          ))}
        </ComparisonRow>
      ))}
    </>
  );
}
