import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SiteLayout } from './components/layout/site-layout';
import { ScrollToTop } from './components/layout/scroll-to-top';
import { HomePage } from './pages/home/home-page';
import { ServicesPage } from './pages/services/services-page';
import { PhotoVideoPage } from './pages/photo-video/photo-video-page';
import { TechnicalServicesPage } from './pages/technical-services/technical-services-page';
import { AboutPage } from './pages/about/about-page';
import { ContactPage } from './pages/contact/contact-page';

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="photo-and-video" element={<PhotoVideoPage />} />
          <Route path="technical-services" element={<TechnicalServicesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
