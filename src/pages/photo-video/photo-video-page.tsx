import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { photoVideoContent } from '../../content/photo-video-content';
import { pageSeoByPath } from '../../constants/seo';
import { PageHero } from '../../components/page-hero/page-hero';
import { PageMeta } from '../../components/page-meta/page-meta';
import { PhotoComparisonGallery } from '../../components/photo-comparison/photo-comparison';
import { NegativesToDigitalGallery } from '../../components/photo-comparison/negatives-to-digital';
import { GallerySection } from '../../components/photo-comparison/photo-comparison.styled';
import { PageSection } from '../home/home-page.styled';

export function PhotoVideoPage() {
  const seo = pageSeoByPath['/photo-and-video'];

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <PageHero
        title="Photo and Video Services"
        subtitle="Restore treasured memories and digitize aging media"
      />

      <PageSection>
        <Stack spacing={3} sx={{ maxWidth: 820, mx: 'auto', mb: 5 }}>
          <Typography variant="body1" color="text.secondary">
            {photoVideoContent.intro}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {photoVideoContent.detail}
          </Typography>
        </Stack>

        <GallerySection>
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}
          >
            Photo Restoration
          </Typography>
          <PhotoComparisonGallery rows={photoVideoContent.photoRestorationRows} />
        </GallerySection>

        <GallerySection sx={{ mt: 3.5 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{ textAlign: 'center', fontWeight: 700, mb: 4 }}
          >
            Negatives to Digital
          </Typography>
          <NegativesToDigitalGallery section={photoVideoContent.negativesToDigital} />
        </GallerySection>
      </PageSection>
    </>
  );
}
