import type { ContentRegistry } from '../types/content';

export const contentRegistry: ContentRegistry = {
  projects: {
    status: 'reserved',
    listPath: '/projects/',
    detailPathPattern: null,
  },
  writing: {
    status: 'published',
    listPath: '/writing/',
    detailPathPattern: '/writing/:slug/',
  },
  members: {
    status: 'reserved',
    listPath: '/members/',
    detailPathPattern: '/members/:slug/',
  },
  publications: {
    status: 'reserved',
    listPath: '/publications/',
    detailPathPattern: null,
  },
  news: {
    status: 'reserved',
    listPath: '/news/',
    detailPathPattern: '/news/:slug/',
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
