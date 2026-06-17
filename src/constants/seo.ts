export const siteSeo = {
  siteName: 'All Computers Great and Small',
  siteUrl: 'https://all-computers-great-and-small.vercel.app',
  defaultTitle: 'All Computers Great and Small',
  defaultDescription:
    'Personal computer tutoring and tech support for seniors, families, and users of all levels on the North Shore of Massachusetts. Free consultation. In-home, phone, and video help.',
  ogImage: '/logo.png',
  locale: 'en_US',
} as const;

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export const pageSeoByPath: Record<string, PageSeo> = {
  '/': {
    title: 'Computer Tutor & Tech Support',
    description:
      'Patient one-on-one computer tutoring for seniors and families on the North Shore MA. Mac, PC, tablet, and phone help. Free consultation — call Theresa today.',
    path: '/',
  },
  '/services': {
    title: 'Services & Pricing',
    description:
      'Custom tech tutoring at $80/hour with a free phone consultation. In-home visits, phone, and video sessions for seniors and all skill levels on the North Shore.',
    path: '/services',
  },
  '/photo-and-video': {
    title: 'Photo & Video Services',
    description:
      'Photo restoration, slide and negative digitization, and home video conversion. Preserve treasured memories with expert help on the North Shore Massachusetts.',
    path: '/photo-and-video',
  },
  '/technical-services': {
    title: 'Technical Services',
    description:
      'Laptop and phone battery replacement, document creation, and custom slideshows for graduations, anniversaries, and memorials. Free consultation available.',
    path: '/technical-services',
  },
  '/about': {
    title: 'About Theresa Milewski',
    description:
      'Meet Theresa Milewski — your local North Shore computer tutor with 30+ years of experience. Patient, approachable help for seniors, families, and businesses.',
    path: '/about',
  },
  '/columns': {
    title: 'My Columns',
    description:
      'Technology columns by Theresa Milewski for the Marblehead Independent and the Beacon. Practical tech advice for the North Shore community.',
    path: '/columns',
  },
  '/resources': {
    title: 'Presentations & How To Sheets',
    description:
      'Download Theresa’s class presentations and printable how-to guides — staying safe online, AI basics, cutting the cord, Uber, and more.',
    path: '/resources',
  },
  '/contact': {
    title: 'Contact',
    description:
      'Send a message or call (978) 866-8491 to schedule a free consultation. Computer tutoring and tech support on the North Shore Massachusetts.',
    path: '/contact',
  },
};

export const notFoundSeo: PageSeo = {
  title: 'Page Not Found',
  description:
    'The page you are looking for could not be found. Visit All Computers Great and Small for computer tutoring and tech support on the North Shore.',
  path: '/404',
};
