import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import type { NegativesSection } from '../../content/photo-video-content';
import {
  ComparisonImage,
  ComparisonItem,
  NegativeStripImage,
  NegativesBottomRow,
  NegativesTopRow,
} from './photo-comparison.styled';

interface NegativesToDigitalGalleryProps {
  section: NegativesSection;
}

export function NegativesToDigitalGallery({ section }: NegativesToDigitalGalleryProps) {
  return (
    <>
      <NegativesTopRow>
        <ComparisonItem>
          <NegativeStripImage src={section.negative.src} alt={section.negative.alt} loading="lazy" />
          <Typography variant="body2" sx={{ mt: 2 }}>
            {section.negative.caption}
          </Typography>
        </ComparisonItem>

        <ComparisonItem sx={{ alignItems: { xs: 'center', md: 'flex-start' }, textAlign: { xs: 'center', md: 'left' } }}>
          <ComparisonImage
            src={section.printScan.src}
            alt={section.printScan.alt}
            loading="lazy"
            sx={{ maxWidth: { md: 420 } }}
          />
          <Typography variant="body2" sx={{ mt: 2, maxWidth: 420, lineHeight: 1.6 }}>
            {section.printScan.caption}
          </Typography>
        </ComparisonItem>
      </NegativesTopRow>

      <NegativesBottomRow>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
            {section.description}
          </Typography>
        </Box>

        <ComparisonItem>
          <ComparisonImage src={section.restored.src} alt={section.restored.alt} loading="lazy" />
        </ComparisonItem>
      </NegativesBottomRow>
    </>
  );
}
