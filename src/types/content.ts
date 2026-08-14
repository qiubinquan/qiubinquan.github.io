export type ThemePreference = 'light' | 'dark' | 'system';

export type SiteSection =
  | 'home'
  | 'about'
  | 'projects'
  | 'writing'
  | 'contact'
  | 'members'
  | 'publications'
  | 'news'
  | 'resources';

export type ContentStatus = 'draft' | 'published' | 'reserved';

export type WritingCategory =
  | 'research-note'
  | 'technical-note'
  | 'reading-note'
  | 'personal-update';

export type ProjectCategory =
  | 'research'
  | 'software'
  | 'toolkit'
  | 'demo';

export interface SiteIdentity {
  name: string;
  title: string;
  description: string;
  author: string;
  url: string;
  locale: 'en' | 'zh' | 'ja';
  defaultTheme: ThemePreference;
}

export interface ExternalLinks {
  email: string;
  github: string;
  googleScholar: string;
  linkedin: string;
  orcid: string;
  cv: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  section: SiteSection;
}

export interface FeatureFlags {
  projects: boolean;
  projectDetailPages: boolean;
  writing: boolean;
  team: boolean;
  publications: boolean;
  news: boolean;
  resources: boolean;
  multilingual: boolean;
  analytics: boolean;
}

export interface ContentSectionConfig {
  status: ContentStatus;
  listPath: string;
  detailPathPattern: string | null;
}

export interface ContentRegistry {
  projects: ContentSectionConfig;
  writing: ContentSectionConfig;
  members: ContentSectionConfig;
  publications: ContentSectionConfig;
  news: ContentSectionConfig;
}

export interface SeoDefaults {
  defaultTitle: string;
  titleTemplate: string;
  defaultDescription: string;
  defaultImage: string;
  canonicalBaseUrl: string;
}

export interface Profile {
  name: string;
  role: string;
  affiliation: string;
  location: string;
  bio: string;
  interests: string[];
  education: EducationItem[];
  skills: SkillGroup[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  field: string;
  startYear: string;
  endYear: string | 'present';
}

export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  category: ProjectCategory;
  status: ContentStatus;
  publishedAt: string;
  externalLinks: LinkItem[];
}

export interface WritingEntry {
  slug: string;
  title: string;
  summary: string;
  category: WritingCategory;
  status: ContentStatus;
  publishedAt: string;
  updatedAt?: string;
  tags: string[];
  externalLinks: LinkItem[];
}

export interface LinkItem {
  label: string;
  url: string;
}
