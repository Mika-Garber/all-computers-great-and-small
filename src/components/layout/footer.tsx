import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';
import { contactInfo } from '../../constants/contact';
import { navItems } from '../../constants/navigation';
import { FooterInner, FooterLink, FooterRoot } from './footer.styled';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterRoot>
      <FooterInner>
        <Stack spacing={1.5}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            {contactInfo.businessName}
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9, maxWidth: 360 }}>
            Personal computer tutoring and tech support for seniors, families, and users of all
            levels. Free consultation available.
          </Typography>
          <Typography variant="body2" sx={{ opacity: 0.9 }}>
            {contactInfo.serviceArea}
          </Typography>
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, opacity: 0.95 }}>
            Quick Links
          </Typography>
          {navItems.map((item) => (
            <Link
              key={item.path}
              component={RouterLink}
              to={item.path}
              underline="hover"
              sx={{ color: 'inherit', opacity: 0.92, fontSize: '0.95rem' }}
            >
              {item.label}
            </Link>
          ))}
        </Stack>

        <Stack spacing={1}>
          <Typography variant="subtitle2" sx={{ fontWeight: 700, opacity: 0.95 }}>
            Get in Touch
          </Typography>
          <FooterLink href={contactInfo.phoneHref}>{contactInfo.phone}</FooterLink>
          <FooterLink href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </FooterLink>
          <Link
            component={RouterLink}
            to="/contact"
            underline="hover"
            sx={{ color: 'inherit', opacity: 0.92, fontSize: '0.95rem' }}
          >
            Contact Form
          </Link>
        </Stack>
      </FooterInner>

      <Typography
        variant="caption"
        sx={{ display: 'block', textAlign: 'center', mt: 4, opacity: 0.75 }}
      >
        © {currentYear} {contactInfo.businessName}. All rights reserved.
      </Typography>
    </FooterRoot>
  );
}
