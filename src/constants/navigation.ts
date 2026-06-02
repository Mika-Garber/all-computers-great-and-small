export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: 'Services & Pricing', path: '/services' },
  { label: 'Photo and Video Services', path: '/photo-and-video' },
  { label: 'Technical Services', path: '/technical-services' },
  { label: 'About Me', path: '/about' },
  { label: 'Contact', path: '/contact' },
];
