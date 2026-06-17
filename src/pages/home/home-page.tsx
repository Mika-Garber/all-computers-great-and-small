import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import DevicesIcon from '@mui/icons-material/Devices';
import type { SvgIconComponent } from '@mui/icons-material';
import { assetUrls, contactInfo } from '../../constants/contact';
import { pageSeoByPath } from '../../constants/seo';
import { homeIntro, howItWorksSteps, servicePillars, testimonials, trustHighlights } from '../../content/site-content';
import { CtaButton } from '../../components/cta-button/cta-button';
import { PageMeta } from '../../components/page-meta/page-meta';
import { ServiceCard } from '../../components/service-card/service-card';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { TestimonialsCarousel } from '../../components/testimonials-carousel/testimonials-carousel';
import {
  CapabilityList,
  CtaBand,
  CtaBandInner,
  GoldBand,
  HeroGlow,
  HeroGlowAccent,
  HeroGrid,
  HeroSection,
  PageSection,
  SailboatImage,
  ServiceGrid,
  StepCard,
  StepNumber,
  StepsGrid,
  TrustCard,
  TrustGrid,
} from './home-page.styled';

const trustIcons: SvgIconComponent[] = [
  VolunteerActivismIcon,
  FavoriteBorderIcon,
  LocationOnIcon,
  WorkspacePremiumIcon,
  DevicesIcon,
];

export function HomePage() {
  const seo = pageSeoByPath['/'];

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <HeroSection>
        <HeroGlow />
        <HeroGlowAccent />
        <HeroGrid>
          <Stack spacing={3}>
            <Typography variant="h2" component="h1">
              {homeIntro.headline}
            </Typography>
            {homeIntro.paragraphs.slice(0, 2).map((paragraph) => (
              <Typography key={paragraph.slice(0, 24)} variant="body1" color="text.secondary">
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
          <SailboatImage
            src={assetUrls.sailboat}
            alt="Coastal sailboat illustration"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </HeroGrid>
      </HeroSection>

      <GoldBand>
        <PageSection sx={{ py: 0 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
            <Typography variant="h5" component="p" sx={{ fontWeight: 700 }}>
              {homeIntro.tagline}
            </Typography>
            <CapabilityList>
              {homeIntro.capabilities.map((item) => (
                <Typography key={item} variant="body1">
                  {item}
                </Typography>
              ))}
            </CapabilityList>
          </Stack>
        </PageSection>
      </GoldBand>

      <PageSection sx={{ py: { xs: 6.5, md: 7 }, pb: 5 }}>
        <TrustGrid>
          {trustHighlights.map((highlight, index) => {
            const Icon = trustIcons[index];

            return (
              <TrustCard key={highlight.title}>
                <Icon sx={{ fontSize: 32, color: 'primary.main' }} aria-hidden />
                <Typography variant="subtitle2" sx={{ fontWeight: 700, fontSize: '1rem' }}>
                  {highlight.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.55 }}>
                  {highlight.description}
                </Typography>
              </TrustCard>
            );
          })}
        </TrustGrid>
      </PageSection>

      <PageSection sx={{ pt: 0, pb: { xs: 6.5, md: 7 } }}>
        <SectionHeading
          title="How It Works"
          subtitle="Getting started is simple — no tech experience required."
          sx={{ mb: 3.5 }}
        />
        <StepsGrid>
          {howItWorksSteps.map((step, index) => (
            <StepCard key={step.title}>
              <StepNumber aria-hidden>{index + 1}</StepNumber>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 700, fontSize: '1.0625rem', mb: 1 }}>
                {step.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65 }}>
                {step.description}
              </Typography>
            </StepCard>
          ))}
        </StepsGrid>
      </PageSection>

      <PageSection sx={{ py: { xs: 6.5, md: 7 } }}>
        <Stack spacing={2} sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center', mb: 5 }}>
          {homeIntro.paragraphs.slice(2).map((paragraph) => (
            <Typography key={paragraph.slice(0, 24)} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>

        <SectionHeading title="How I Can Help" sx={{ mb: 3.5 }} />
        <ServiceGrid>
          {servicePillars.map((pillar) => (
            <ServiceCard
              key={pillar.title}
              title={pillar.title}
              description={pillar.description}
              path={pillar.path}
            />
          ))}
        </ServiceGrid>
      </PageSection>

      <PageSection sx={{ pt: 0, pb: { xs: 6.5, md: 7 } }}>
        <Box sx={{ maxWidth: 820, mx: 'auto', px: { xs: 1, sm: 4 } }}>
          <SectionHeading title="What Clients Say" align="center" sx={{ mb: 3.5 }} />
          <TestimonialsCarousel testimonials={testimonials} />
        </Box>
      </PageSection>

      <CtaBand>
        <CtaBandInner>
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
              Ready for a free consultation?
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Call, text, or send a message — pricing starts at {contactInfo.hourlyRate}.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
              <CtaButton href={contactInfo.phoneHref} variant="primary">
                Call Me
              </CtaButton>
              <CtaButton to="/contact" variant="secondary">
                Email Me
              </CtaButton>
            </Stack>
          </Stack>
        </CtaBandInner>
      </CtaBand>
    </>
  );
}
