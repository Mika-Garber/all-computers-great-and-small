import { useState } from 'react';
import emailjs from '@emailjs/browser';

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

function hasContactMethod(values: ContactFormValues) {
  return values.email.trim().length > 0 || values.phone.trim().length > 0;
}

function getEmailJsErrorMessage(error: unknown) {
  if (error && typeof error === 'object' && 'text' in error) {
    const text = String((error as { text: string }).text);

    if (text.toLowerCase().includes('account not found')) {
      return 'Email service is misconfigured. Check the EmailJS Public Key in your .env file.';
    }

    return `Could not send your message: ${text}. Please try again or call instead.`;
  }

  return 'Something went wrong sending your message. Please try again or call instead.';
}

export function useContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function handleChange(field: keyof ContactFormValues) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((current) => ({ ...current, [field]: event.target.value }));
      setErrorMessage('');
    };
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage('');

    if (!values.name.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }

    if (!values.message.trim()) {
      setErrorMessage('Please enter a message.');
      return;
    }

    if (!hasContactMethod(values)) {
      setErrorMessage('Please include an email or phone number so Theresa can reach you.');
      return;
    }

    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      setErrorMessage('Email is not configured yet. Add your EmailJS keys to a .env file and restart the dev server.');
      return;
    }

    setIsSubmitting(true);

    const trimmedEmail = values.email.trim();
    const templateParams = {
      from_name: values.name.trim(),
      from_email: trimmedEmail,
      phone: values.phone.trim(),
      message: values.message.trim(),
      reply_to: trimmedEmail,
    };

    try {
      emailjs.init({ publicKey });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );

      setIsSubmitted(true);
      setValues(initialValues);
    } catch (error) {
      setErrorMessage(getEmailJsErrorMessage(error));
    } finally {
      setIsSubmitting(false);
    }
  }

  return {
    values,
    isSubmitted,
    isSubmitting,
    errorMessage,
    handleChange,
    handleSubmit,
  };
}
