import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { contactInfo } from '../../constants/contact';
import { pageSeoByPath } from '../../constants/seo';
import { serviceImages } from '../../constants/service-images';
import { servicesIntro, tutoringTopics } from '../../content/site-content';
import { CtaButton } from '../../components/cta-button/cta-button';
import { PageMeta } from '../../components/page-meta/page-meta';
import { PageHero } from '../../components/page-hero/page-hero';
import { SectionHeading } from '../../components/section-heading/section-heading';
import { TopicGrid } from '../../components/topic-grid/topic-grid';
import { PageSection } from '../home/home-page.styled';

interface ServiceCardItem {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  link?: string;
}

const serviceCards: ServiceCardItem[] = [
  {
    title: 'Custom Tech Support',
    body: `One-on-one sessions tailored to your goals. Pricing starts at ${contactInfo.hourlyRate}.`,
    image: serviceImages.techSupport,
    imageAlt: 'Guinea pig at a laptop',
  },
  {
    title: 'Photo/Video Services',
    body: 'Photo restoration and digitization. Pricing varies based on specific needs and volume.',
    image: serviceImages.photoVideo,
    imageAlt: 'Cat on a video call with other cats',
    link: '/photo-and-video',
  },
  {
    title: 'Technical Services',
    body: 'Battery replacement, documents, and slideshows. Free consultation to evaluate your needs.',
    image: serviceImages.technicalServices,
    imageAlt: 'Dog wearing glasses working at a computer',
    link: '/technical-services',
  },
];

export function ServicesPage() {
  const seo = pageSeoByPath['/services'];

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <PageHero
        title="Services & Pricing"
        subtitle="Free phone consultation · Pricing starts at $80/hour"
      />

      <PageSection>
        <Stack spacing={3} sx={{ maxWidth: 820, mx: 'auto', mb: 6 }}>
          <Typography variant="h5" component="p" sx={{ fontStyle: 'italic', fontWeight: 600, textAlign: 'center' }}>
            {servicesIntro.quote}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
            {servicesIntro.quoteAttribution}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {servicesIntro.intro}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {servicesIntro.sessionNote}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {servicesIntro.remoteNote}
          </Typography>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            mb: 8,
            gridTemplateColumns: { md: 'repeat(3, 1fr)' },
          }}
        >
          {serviceCards.map((card) => (
            <Stack key={card.title} spacing={2}>
              <Box
                component="img"
                src={card.image}
                alt={card.imageAlt}
                loading="lazy"
                decoding="async"
                sx={{
                  width: '100%',
                  maxHeight: 200,
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  flex: 1,
                  border: '1px solid rgba(45, 45, 42, 0.08)',
                  boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
                }}
              >
                <Stack spacing={1.5}>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.body}
                  </Typography>
                  {card.link ? (
                    <CtaButton to={card.link} variant="outline" size="small">
                      Learn more
                    </CtaButton>
                  ) : null}
                </Stack>
              </Paper>
            </Stack>
          ))}
        </Box>

        <Paper
          elevation={0}
          sx={{
            p: 3,
            mb: 8,
            bgcolor: 'rgba(232, 115, 42, 0.12)',
            border: '1px solid rgba(232, 115, 42, 0.28)',
          }}
        >
          <Typography variant="body1">{servicesIntro.travelNote}</Typography>
        </Paper>

        <SectionHeading
          title="The Possibilities Are Endless"
          subtitle="Topics we can cover together — from the basics to advanced skills."
          align="left"
        />
        <TopicGrid topics={tutoringTopics} />
      </PageSection>

      <Box sx={{ bgcolor: 'background.paper', py: 6, px: 3, textAlign: 'center' }}>
        <Stack spacing={2} sx={{ maxWidth: 640, mx: 'auto', alignItems: 'center' }}>
          <Typography variant="h5" sx={{ fontWeight: 700 }}>
            Start with a free consultation
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <CtaButton href={contactInfo.phoneHref} variant="primary">
              Call Me
            </CtaButton>
            <CtaButton to="/contact" variant="outline">
              Email Me
            </CtaButton>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}
