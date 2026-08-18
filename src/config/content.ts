import type { ContentRegistry } from '../types/content';

export const contentRegistry: ContentRegistry = {
  projects: {
    status: 'published',
    listPath: '/projects/',
    detailPathPattern: null,
  },
  members: {
    status: 'reserved',
    listPath: '/members/',
    detailPathPattern: '/members/:slug/',
  },
  publications: {
    status: 'published',
    listPath: '/publications/',
    detailPathPattern: null,
  },
  news: {
    status: 'published',
    listPath: '/news/',
    detailPathPattern: null,
  },
};

export const projectCategories = [
  'research',
  'software',
  'toolkit',
  'demo',
] as const;

export const contentStatuses = [
  'draft',
  'published',
  'reserved',
] as const;
