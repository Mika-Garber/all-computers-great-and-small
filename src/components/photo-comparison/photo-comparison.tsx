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

function PhotoComparisonCell({
  item,
  compact = false,
}: {
  item: PhotoComparisonItem;
  compact?: boolean;
}) {
  return (
    <ComparisonItem>
      <ComparisonImage src={item.src} alt={item.alt} loading="lazy" compact={compact} />
      <Typography
        variant="body2"
        sx={{ mt: 2, maxWidth: compact ? 280 : 360, lineHeight: 1.6, fontSize: compact ? '0.875rem' : undefined }}
      >
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
