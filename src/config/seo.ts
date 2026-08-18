import type { SeoDefaults } from '../types/content';
import { site } from './site';

export const seo: SeoDefaults = {
  defaultTitle: site.title,
  titleTemplate: `%s | ${site.name}`,
  defaultDescription: site.description,
  defaultImage: '/images/og-default.webp',
  canonicalBaseUrl: site.url,
};

export const pageMetadata = {
  home: {
    title: site.title,
    description: site.description,
    path: '/',
  },
  about: {
    title: 'About',
    description: `About ${site.name}.`,
    path: '/about/',
  },
  projects: {
    title: 'Project Experience',
    description: `Selected project experience by ${site.name}.`,
    path: '/projects/',
  },
  publications: {
    title: 'Publications',
    description: `Publications and patents by ${site.name}.`,
    path: '/publications/',
  },
  news: {
    title: 'News',
    description: `Latest news by ${site.name}.`,
    path: '/news/',
  },
} as const;
