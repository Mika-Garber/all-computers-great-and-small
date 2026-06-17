import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { assetUrls, contactInfo } from '../../constants/contact';
import { pageSeoByPath } from '../../constants/seo';
import { PageHero } from '../../components/page-hero/page-hero';
import { PageMeta } from '../../components/page-meta/page-meta';
import { ContactForm } from '../../components/contact-form/contact-form';
import { PageSection } from '../home/home-page.styled';

export function ContactPage() {
  const seo = pageSeoByPath['/contact'];

  return (
    <>
      <PageMeta title={seo.title} description={seo.description} path={seo.path} />

      <PageHero
        title="Contact"
        subtitle="Send a message and we can chat over email or phone"
      />

      <PageSection sx={{ pt: 6 }}>
        <Box
          sx={{
            display: 'grid',
            gap: 4,
            alignItems: 'start',
            gridTemplateColumns: { md: '1fr 1fr' },
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          <Stack spacing={3}>
            <Typography variant="body1" color="text.secondary">
              Send me a message with the form on this page, and we can chat over email or phone
              (make sure to include one of them in the form) and go from there.
            </Typography>

            <Box
              component="img"
              src={assetUrls.pigeons}
              alt="Decorative pigeon illustration"
              loading="lazy"
              decoding="async"
              sx={{ width: '100%', maxWidth: 360, borderRadius: 2 }}
            />

            <Stack spacing={1}>
              <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                Prefer to call?
              </Typography>
              <Typography
                component="a"
                href={contactInfo.phoneHref}
                variant="h6"
                sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 700 }}
              >
                {contactInfo.phone}
              </Typography>
            </Stack>
          </Stack>

          <ContactForm />
        </Box>
      </PageSection>
    </>
  );
}
