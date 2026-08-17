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
    title: 'Projects',
    description: `Selected project experience by ${site.name}.`,
    path: '/projects/',
  },
  writing: {
    title: 'Writing',
    description: `Publications and writing by ${site.name}.`,
    path: '/writing/',
  },
  contact: {
    title: 'Contact',
    description: `Contact ${site.name}.`,
    path: '/contact/',
  },
} as const;
