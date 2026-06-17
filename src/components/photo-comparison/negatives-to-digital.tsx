import Typography from '@mui/material/Typography';
import type { NegativesSection } from '../../content/photo-video-content';
import {
  ComparisonImage,
  NegativeStripImage,
  NegativesDescription,
  NegativesStepBadge,
  NegativesStepCard,
  NegativesStepImageWrap,
  NegativesStepsGrid,
} from './photo-comparison.styled';

interface NegativesToDigitalGalleryProps {
  section: NegativesSection;
}

const stepCaptionSx = {
  fontSize: '0.8125rem',
  color: 'text.secondary',
  lineHeight: 1.55,
  maxWidth: 280,
} as const;

const steps = [
  { key: 'negative' as const, label: 'Original negative' },
  { key: 'printScan' as const, label: 'Initial scan' },
  { key: 'restored' as const, label: 'Restored final photo' },
];

export function NegativesToDigitalGallery({ section }: NegativesToDigitalGalleryProps) {
  return (
    <>
      <NegativesStepsGrid>
        {steps.map((step, index) => {
          const item = section[step.key];

          return (
            <NegativesStepCard key={step.key}>
              <NegativesStepBadge aria-hidden>{index + 1}</NegativesStepBadge>
              <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '0.9375rem' }}>
                {step.label}
              </Typography>
              <NegativesStepImageWrap>
                {step.key === 'negative' ? (
                  <NegativeStripImage
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <ComparisonImage
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </NegativesStepImageWrap>
              {item.caption ? (
                <Typography variant="body2" sx={stepCaptionSx}>
                  {item.caption}
                </Typography>
              ) : null}
            </NegativesStepCard>
          );
        })}
      </NegativesStepsGrid>

      <NegativesDescription>
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7, fontSize: '0.9375rem' }}>
          {section.description}
        </Typography>
      </NegativesDescription>
    </>
  );
}
