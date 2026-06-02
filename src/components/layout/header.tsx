import { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { navItems } from '../../constants/navigation';
import { assetUrls, contactInfo } from '../../constants/contact';
import { useScrollDirection } from '../../hooks/use-scroll-direction';
import { CtaButton } from '../cta-button/cta-button';
import {
  DesktopCallButton,
  DrawerNavList,
  LogoImage,
  MobileActions,
  NavContainer,
  StyledAppBar,
  StyledToolbar,
} from './header.styled';

function NavLink({ path, label }: { path: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <Button
      component={RouterLink}
      to={path}
      color="inherit"
      sx={{
        fontWeight: isActive ? 700 : 500,
        color: isActive ? 'primary.main' : 'text.primary',
        whiteSpace: 'nowrap',
        fontSize: { lg: '0.9rem', xl: '0.95rem' },
        px: { lg: 1.5, xl: 2 },
      }}
    >
      {label}
    </Button>
  );
}

export function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const isHeaderVisible = scrollDirection === 'up' || isDrawerOpen;

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  return (
    <>
      <StyledAppBar position="sticky" elevation={0} isVisible={isHeaderVisible}>
        <StyledToolbar>
          <RouterLink to="/" style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <LogoImage src={assetUrls.logo} alt={contactInfo.businessName} />
          </RouterLink>

          <NavContainer>
            {navItems.map((item) => (
              <NavLink key={item.path} path={item.path} label={item.label} />
            ))}
          </NavContainer>

          <DesktopCallButton>
            <CtaButton href={contactInfo.phoneHref} variant="primary">
              Call Me
            </CtaButton>
          </DesktopCallButton>

          <MobileActions>
            <CtaButton href={contactInfo.phoneHref} variant="primary" size="small">
              Call
            </CtaButton>
            <IconButton
              aria-label="Open navigation menu"
              onClick={() => setIsDrawerOpen(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </MobileActions>
        </StyledToolbar>
      </StyledAppBar>

      <Drawer anchor="right" open={isDrawerOpen} onClose={closeDrawer}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton aria-label="Close navigation menu" onClick={closeDrawer}>
            <CloseIcon />
          </IconButton>
        </Box>
        <DrawerNavList>
          {navItems.map((item) => (
            <Link
              key={item.path}
              component={RouterLink}
              to={item.path}
              onClick={closeDrawer}
              underline="none"
              sx={{
                color: 'text.primary',
                fontWeight: 600,
                py: 1.5,
                px: 1,
                borderRadius: 2,
                '&:hover': { bgcolor: 'rgba(3, 100, 95, 0.08)' },
              }}
            >
              {item.label}
            </Link>
          ))}
          <Box sx={{ pt: 2 }}>
            <CtaButton href={contactInfo.phoneHref} variant="primary" fullWidth>
              Call Me
            </CtaButton>
          </Box>
        </DrawerNavList>
      </Drawer>
    </>
  );
}
