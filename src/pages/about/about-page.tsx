import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { aboutContent } from '../../content/site-content';
import { assetUrls, contactInfo } from '../../constants/contact';
import { pageSeoByPath } from '../../constants/seo';
import { PageHero } from '../../components/page-hero/page-hero';
import { PageMeta } from '../../components/page-meta/page-meta';
import { CtaButton } from '../../components/cta-button/cta-button';
import { PageSection } from '../home/home-page.styled';
import {
  AboutNameLink,
  AboutProfileHeader,
  AboutProfilePhoto,
} from './about-page.styled';

export function AboutPage() {
  const seo = pageSeoByPath['/about'];

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <PageHero title="About Me" subtitle={aboutContent.tagline} />

      <PageSection>
        <Paper
          elevation={0}
          sx={{
            maxWidth: 820,
            mx: 'auto',
            p: { xs: 3, md: 5 },
            border: '1px solid rgba(45, 45, 42, 0.08)',
            boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
          }}
        >
          <Stack spacing={3}>
            <AboutProfileHeader>
              <AboutProfilePhoto
                src={assetUrls.theresaPhoto}
                alt={`${contactInfo.ownerName} with her dog`}
                loading="lazy"
                decoding="async"
              />
              <Stack spacing={1} sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                <AboutNameLink
                  href={contactInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {aboutContent.headline}
                </AboutNameLink>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, fontStyle: 'italic', color: 'text.primary' }}
                >
                  {aboutContent.subheadline}
                </Typography>
              </Stack>
            </AboutProfileHeader>

            {aboutContent.paragraphs.map((paragraph) => (
              <Typography key={paragraph.slice(0, 30)} variant="body1" color="text.secondary">
                {paragraph}
              </Typography>
            ))}

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <CtaButton href={contactInfo.phoneHref} variant="primary">
                Call Me
              </CtaButton>
              <CtaButton to="/contact" variant="outline">
                Email Me
              </CtaButton>
            </Stack>
          </Stack>
        </Paper>
      </PageSection>
    </>
  );
}
