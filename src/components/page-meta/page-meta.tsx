import { useEffect } from 'react';
import { siteSeo } from '../../constants/seo';

interface PageMetaProps {
  title: string;
  description: string;
  path?: string;
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function upsertCanonical(href: string) {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

export function PageMeta({ title, description, path = '/' }: PageMetaProps) {
  useEffect(() => {
    const fullTitle =
      title === siteSeo.defaultTitle ? title : `${title} | ${siteSeo.siteName}`;
    const pageUrl = `${siteSeo.siteUrl}${path === '/' ? '' : path}`;
    const ogImage = `${siteSeo.siteUrl}${siteSeo.ogImage}`;

    document.title = fullTitle;

    upsertMeta('name', 'description', description);
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', pageUrl);
    upsertMeta('property', 'og:type', 'website');
    upsertMeta('property', 'og:site_name', siteSeo.siteName);
    upsertMeta('property', 'og:image', ogImage);
    upsertMeta('property', 'og:locale', siteSeo.locale);
    upsertMeta('name', 'twitter:card', 'summary');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', ogImage);
    upsertCanonical(pageUrl);
  }, [title, description, path]);

  return null;
}
