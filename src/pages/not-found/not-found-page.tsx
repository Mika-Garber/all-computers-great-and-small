import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { PageMeta } from '../../components/page-meta/page-meta';
import { notFoundSeo } from '../../constants/seo';
import { contactInfo } from '../../constants/contact';
import { CtaButton } from '../../components/cta-button/cta-button';
import { PageSection } from '../home/home-page.styled';

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        title={notFoundSeo.title}
        description={notFoundSeo.description}
        path={notFoundSeo.path}
      />

      <PageSection sx={{ py: { xs: 8, md: 10 }, textAlign: 'center' }}>
        <Stack spacing={3} sx={{ maxWidth: 560, mx: 'auto', alignItems: 'center' }}>
          <Typography variant="h2" component="h1" sx={{ fontSize: { xs: '2rem', md: '2.5rem' } }}>
            Page not found
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.125rem', lineHeight: 1.7 }}>
            Sorry — we could not find that page. It may have moved or the link might be outdated.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ pt: 1 }}>
            <CtaButton to="/" variant="primary">
              Go to Home
            </CtaButton>
            <CtaButton to="/contact" variant="outline">
              Contact Theresa
            </CtaButton>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            Or try{' '}
            <Link component={RouterLink} to="/services" underline="hover" sx={{ fontWeight: 600 }}>
              Services &amp; Pricing
            </Link>
            ,{' '}
            <Link component={RouterLink} to="/about" underline="hover" sx={{ fontWeight: 600 }}>
              About Me
            </Link>
            , or call{' '}
            <Link href={contactInfo.phoneHref} underline="hover" sx={{ fontWeight: 600 }}>
              {contactInfo.phone}
            </Link>
            .
          </Typography>
        </Stack>
      </PageSection>
    </>
  );
}
