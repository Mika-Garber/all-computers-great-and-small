import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import { CtaButton } from '../cta-button/cta-button';
import { useContactForm } from '../../hooks/use-contact-form';

export function ContactForm() {
  const { values, isSubmitted, isSubmitting, errorMessage, handleChange, handleSubmit } =
    useContactForm();

  if (isSubmitted) {
    return (
      <Alert severity="success" sx={{ borderRadius: 3 }}>
        Thank you for your message! Theresa will follow up by email or phone soon.
      </Alert>
    );
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        border: '1px solid rgba(45, 45, 42, 0.08)',
        boxShadow: '0 8px 24px rgba(45, 45, 42, 0.06)',
      }}
    >
      <Stack spacing={2.5}>
        {errorMessage ? <Alert severity="error">{errorMessage}</Alert> : null}

        <TextField
          label="Name"
          value={values.name}
          onChange={handleChange('name')}
          required
          fullWidth
          disabled={isSubmitting}
        />
        <TextField
          label="Email"
          type="email"
          value={values.email}
          onChange={handleChange('email')}
          fullWidth
          disabled={isSubmitting}
          helperText="Include email or phone so we can reach you"
        />
        <TextField
          label="Phone"
          value={values.phone}
          onChange={handleChange('phone')}
          fullWidth
          disabled={isSubmitting}
        />
        <TextField
          label="Message"
          value={values.message}
          onChange={handleChange('message')}
          required
          fullWidth
          multiline
          minRows={5}
          disabled={isSubmitting}
        />
        <CtaButton variant="primary" type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </CtaButton>
      </Stack>
    </Paper>
  );
}
