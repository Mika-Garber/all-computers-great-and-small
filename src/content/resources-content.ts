export interface ResourceFile {
  title: string;
  description?: string;
  /** Local file path under /public */
  url?: string;
  /** External URL (e.g. Google Drive) — takes precedence when set */
  externalUrl?: string;
  type: 'presentation' | 'how-to';
}

function resourceHref(item: ResourceFile): string {
  return item.externalUrl || item.url || '';
}

export const resourcesIntro =
  'Download Theresa’s presentation slides and printable how-to guides. New materials are added as they’re created for classes and client sessions.';

export const presentations: ResourceFile[] = [
  {
    title: 'Computer 101',
    description: 'Introductory overview for new computer users.',
    externalUrl: import.meta.env.VITE_GOOGLE_DRIVE_COMPUTER_101_URL || undefined,
    type: 'presentation',
  },
  {
    title: 'Staying Safe Online',
    description: 'Practical tips for avoiding scams and protecting your information.',
    url: '/resources/presentations/staying-safe-online.pptx',
    type: 'presentation',
  },
  {
    title: 'Artificial Intelligence',
    description: 'A friendly introduction to what AI is and how it can help.',
    url: '/resources/presentations/artificial-intelligence.pptx',
    type: 'presentation',
  },
  {
    title: 'Cutting the Cord',
    description: 'Streaming services versus cable television.',
    url: '/resources/presentations/cutting-the-cord.pptx',
    type: 'presentation',
  },
  {
    title: 'Uber & Ride Sharing',
    description: 'How to book a ride using Uber and similar apps.',
    url: '/resources/presentations/uber.pptx',
    type: 'presentation',
  },
];

export const howToSheets: ResourceFile[] = [
  {
    title: 'Getting a Ride',
    description: 'Printable step-by-step guide for booking a ride share.',
    url: '/resources/how-tos/getting-a-ride.pdf',
    type: 'how-to',
  },
];

/** Optional Google Drive folder URLs — set in .env when folders are shared publicly */
export const googleDriveFolders = {
  presentations: import.meta.env.VITE_GOOGLE_DRIVE_PRESENTATIONS_URL ?? '',
  howTos: import.meta.env.VITE_GOOGLE_DRIVE_HOW_TOS_URL ?? '',
};

export function getResourceHref(item: ResourceFile): string {
  return resourceHref(item);
}

export function hasResourceLink(item: ResourceFile): boolean {
  return resourceHref(item).length > 0;
}
