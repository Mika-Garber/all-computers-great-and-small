import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CtaButton } from '../cta-button/cta-button';
import { useContactForm } from '../../hooks/use-contact-form';

export function ContactForm() {
  const { values, isSubmitted, isSubmitting, errorMessage, handleChange, handleSubmit } =
    useContactForm();

  if (isSubmitted) {
    return (
      <Alert
        severity="success"
        role="status"
        aria-live="polite"
        sx={{ borderRadius: 3, fontSize: '1.0625rem', lineHeight: 1.65 }}
      >
        <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
          Thank you — your message was sent!
        </Typography>
        Theresa will follow up by email or phone within one to two business days. If your question is
        urgent, feel free to call directly.
      </Alert>
    );
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      noValidate
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        border: '1px solid rgba(45, 45, 42, 0.08)',
        boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
      }}
    >
      <Stack spacing={2.5}>
        {errorMessage ? (
          <Alert severity="error" role="alert" aria-live="assertive">
            {errorMessage}
          </Alert>
        ) : null}

        <TextField
          label="Name"
          name="name"
          value={values.name}
          onChange={handleChange('name')}
          required
          fullWidth
          disabled={isSubmitting}
          autoComplete="name"
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          fullWidth
          disabled={isSubmitting}
          autoComplete="email"
          helperText="Include email or phone so we can reach you"
        />
        <TextField
          label="Phone"
          name="phone"
          type="tel"
          value={values.phone}
          onChange={handleChange('phone')}
          fullWidth
          disabled={isSubmitting}
          autoComplete="tel"
        />
        <TextField
          label="Message"
          name="message"
          value={values.message}
          onChange={handleChange('message')}
          required
          fullWidth
          multiline
          minRows={5}
          disabled={isSubmitting}
        />

        <Box
          aria-hidden="true"
          sx={{
            position: 'absolute',
            left: -10000,
            width: 1,
            height: 1,
            overflow: 'hidden',
          }}
        >
          <label htmlFor="contact-website">Website</label>
          <input
            id="contact-website"
            type="text"
            name="website"
            value={values.website}
            onChange={handleChange('website')}
            tabIndex={-1}
            autoComplete="off"
          />
        </Box>

        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          Your information is only used to respond to your inquiry. We do not sell or share your
          contact details.
        </Typography>

        <CtaButton variant="primary" type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </CtaButton>
      </Stack>
    </Paper>
  );
}
