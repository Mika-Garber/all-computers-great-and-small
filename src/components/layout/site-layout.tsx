import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Header } from './header';
import { Footer } from './footer';

export function SiteLayout() {
  return (
    <>
      <Header />
      <Box component="main" sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
}
