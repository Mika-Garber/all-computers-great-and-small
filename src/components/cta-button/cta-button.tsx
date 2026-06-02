import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import type { ButtonProps } from '@mui/material/Button';
import { brandColors } from '../../theme/theme';

interface CtaButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: ButtonProps['size'];
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

function getVariantStyles(variant: NonNullable<CtaButtonProps['variant']>) {
  if (variant === 'secondary') {
    return {
      bgcolor: brandColors.blue,
      color: brandColors.white,
      '&:hover': { bgcolor: '#044a96' },
    };
  }

  if (variant === 'outline') {
    return {
      bgcolor: 'transparent',
      color: brandColors.teal,
      border: `2px solid ${brandColors.teal}`,
      '&:hover': { bgcolor: 'rgba(3, 100, 95, 0.08)' },
    };
  }

  return {
    bgcolor: brandColors.teal,
    color: brandColors.white,
    '&:hover': { bgcolor: '#024a46' },
  };
}

export function CtaButton({
  children,
  href,
  to,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  type = 'button',
  disabled = false,
}: CtaButtonProps) {
  const sx = {
    borderRadius: 999,
    px: size === 'small' ? 2.5 : 3.5,
    py: size === 'small' ? 1 : 1.5,
    boxShadow: 'none',
    fontWeight: 600,
    ...getVariantStyles(variant),
  };

  if (to) {
    return (
      <Button
        component={RouterLink}
        to={to}
        size={size}
        fullWidth={fullWidth}
        disabled={disabled}
        sx={sx}
      >
        {children}
      </Button>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http');

    return (
      <Button
        component="a"
        href={href}
        size={size}
        fullWidth={fullWidth}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        disabled={disabled}
        sx={sx}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button type={type} size={size} fullWidth={fullWidth} disabled={disabled} sx={sx}>
      {children}
    </Button>
  );
}
