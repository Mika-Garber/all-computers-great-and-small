import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { technicalServicesContent } from '../../content/site-content';
import { contactInfo } from '../../constants/contact';
import { pageSeoByPath } from '../../constants/seo';
import { PageHero } from '../../components/page-hero/page-hero';
import { PageMeta } from '../../components/page-meta/page-meta';
import { CtaButton } from '../../components/cta-button/cta-button';
import { PageSection } from '../home/home-page.styled';

export function TechnicalServicesPage() {
  const seo = pageSeoByPath['/technical-services'];

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <PageHero
        title="Technical Services"
        subtitle="Practical fixes and creative projects for your devices"
      />

      <PageSection>
        <Stack spacing={4} sx={{ maxWidth: 820, mx: 'auto' }}>
          {technicalServicesContent.services.map((service) => (
            <Paper
              key={service.title}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                border: '1px solid rgba(45, 45, 42, 0.08)',
                boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
              }}
            >
              <Stack spacing={1.5}>
                <Typography variant="h4" component="h2" sx={{ fontWeight: 700 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
                <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
                  {service.note}
                </Typography>
              </Stack>
            </Paper>
          ))}

          <Paper
            elevation={0}
            sx={{
              p: 3,
              bgcolor: 'rgba(232, 115, 42, 0.12)',
              border: '1px solid rgba(232, 115, 42, 0.28)',
            }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1 }}>
              Battery Replacement Disclaimer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {technicalServicesContent.disclaimer}
            </Typography>
          </Paper>

          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ justifyContent: 'center' }}>
            <CtaButton href={contactInfo.phoneHref} variant="primary">
              Schedule a Consultation
            </CtaButton>
            <CtaButton to="/contact" variant="outline">
              Email Me
            </CtaButton>
          </Stack>
        </Stack>
      </PageSection>
    </>
  );
}
