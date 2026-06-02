import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { assetUrls, contactInfo } from '../../constants/contact';
import {
  homeIntro,
  servicePillars,
  testimonial,
} from '../../content/site-content';
import { CtaButton } from '../../components/cta-button/cta-button';
import { ServiceCard } from '../../components/service-card/service-card';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { TestimonialCard } from '../../components/testimonial-card/testimonial-card';
import {
  CapabilityList,
  CtaBand,
  CtaBandInner,
  GoldBand,
  HeroGlow,
  HeroGrid,
  HeroSection,
  PageSection,
  SailboatImage,
  ServiceGrid,
} from './home-page.styled';

export function HomePage() {
  return (
    <>
      <HeroSection>
        <HeroGlow />
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
          <SailboatImage src={assetUrls.sailboat} alt="Coastal sailboat illustration" loading="lazy" />
        </HeroGrid>
      </HeroSection>

      <GoldBand>
        <PageSection sx={{ py: 0 }}>
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 760, mx: 'auto' }}>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              {homeIntro.tagline}
            </Typography>
            <CapabilityList>
              {homeIntro.capabilities.map((item) => (
                <Typography key={item} component="li" variant="body1">
                  {item}
                </Typography>
              ))}
            </CapabilityList>
          </Stack>
        </PageSection>
      </GoldBand>

      <PageSection>
        <Stack spacing={2} sx={{ maxWidth: 760, mx: 'auto', textAlign: 'center', mb: 6 }}>
          {homeIntro.paragraphs.slice(2).map((paragraph) => (
            <Typography key={paragraph.slice(0, 24)} variant="body1" color="text.secondary">
              {paragraph}
            </Typography>
          ))}
        </Stack>

        <SectionHeading title="How I Can Help" />
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

      <PageSection sx={{ pt: 0 }}>
        <Box sx={{ maxWidth: 760, mx: 'auto' }}>
          <SectionHeading title="What Clients Say" align="center" />
          <TestimonialCard quote={testimonial.quote} author={testimonial.author} />
        </Box>
      </PageSection>

      <CtaBand>
        <CtaBandInner>
          <Stack spacing={2} sx={{ alignItems: 'center' }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
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
