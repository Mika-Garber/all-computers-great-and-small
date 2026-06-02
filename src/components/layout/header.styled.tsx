import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';

export const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'isVisible',
})<{ isVisible?: boolean }>(({ theme, isVisible = true }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  top: 0,
  zIndex: theme.zIndex.appBar,
  transition: 'transform 0.3s ease-in-out',
  transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: 72,
  gap: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    minHeight: 80,
  },
}));

export const LogoLink = styled('a')({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  flexShrink: 0,
});

export const LogoImage = styled('img')(({ theme }) => ({
  height: 48,
  width: 'auto',
  maxWidth: 220,
  objectFit: 'contain',
  [theme.breakpoints.up('md')]: {
    height: 56,
    maxWidth: 280,
  },
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  marginLeft: 'auto',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
  },
}));

export const MobileActions = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  marginLeft: 'auto',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

export const DesktopCallButton = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    marginLeft: theme.spacing(1),
  },
}));

export const DrawerNavList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  padding: theme.spacing(3),
  minWidth: 280,
}));
