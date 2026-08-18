import type { ContentRegistry } from '../types/content';

export const contentRegistry: ContentRegistry = {
  projects: {
    status: 'published',
    listPath: '/projects/',
    detailPathPattern: null,
  },
  writing: {
    status: 'reserved',
    listPath: '/writing/',
    detailPathPattern: '/writing/:slug/',
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

export const writingCategories = [
  'research-note',
  'technical-note',
  'reading-note',
  'personal-update',
] as const;

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
