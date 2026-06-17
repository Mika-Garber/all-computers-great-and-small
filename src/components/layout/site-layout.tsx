import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { brandColors } from '../../theme/theme';
import { Header } from './header';
import { Footer } from './footer';

export function SiteLayout() {
  return (
    <>
      <Link
        href="#main-content"
        sx={{
          position: 'absolute',
          left: -10000,
          top: 'auto',
          width: 1,
          height: 1,
          overflow: 'hidden',
          zIndex: 9999,
          bgcolor: brandColors.blue,
          color: brandColors.white,
          px: 2,
          py: 1,
          borderRadius: 1,
          fontWeight: 700,
          textDecoration: 'none',
          '&:focus': {
            position: 'fixed',
            left: 16,
            top: 16,
            width: 'auto',
            height: 'auto',
            overflow: 'visible',
          },
        }}
      >
        Skip to main content
      </Link>
      <Header />
      <Box component="main" id="main-content" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
