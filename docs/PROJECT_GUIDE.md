# Project Guide

This document explains the structure, content model, privacy rules, development workflow, and extension plan for the personal academic website.

## Current Scope

Visible sections:

- Home
- About
- Project Experience
- Publications
- News

Reserved for future expansion:

- Members
- Resources
- Multilingual content

The Project Experience section presents approved public project and engineering experience. Internal screenshots, unpublished data, lab or advisor work, and unauthorized material must still be excluded.

## Tech Stack

- Astro
- TypeScript
- CSS with design tokens
- GitHub Pages
- GitHub Actions
- pnpm

There is no backend server, database, CMS, search engine, analytics integration, or comment system.

## Routes

Public routes:

- `/`
- `/about/`
- `/projects/`
- `/publications/`
- `/news/`

Compatibility redirect:

- `/project/` redirects to `/projects/`

Not available in the first version:

- `/projects/:slug/`
- `/members/`
- `/resources/`
- `/contact/`
- `/writing/`

## Project Structure

```text
.
├─ public/
│  ├─ favicon.svg
│  └─ images/
│     ├─ gallery/
│     ├─ profile/
│     └─ og-default.webp
├─ src/
│  ├─ components/
│  │  ├─ Footer.astro
│  │  ├─ Header.astro
│  │  └─ SectionHeading.astro
│  ├─ config/
│  │  ├─ content.ts
│  │  ├─ features.ts
│  │  ├─ navigation.ts
│  │  ├─ seo.ts
│  │  └─ site.ts
│  ├─ data/
│  │  ├─ gallery.ts
│  │  ├─ news.ts
│  │  ├─ profile.ts
│  │  └─ projects.ts
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ about.astro
│  │  ├─ index.astro
│  │  ├─ news/
│  │  │  └─ index.astro
│  │  ├─ project/
│  │  │  └─ index.astro
│  │  ├─ projects/
│  │  │  └─ index.astro
│  │  ├─ publications/
│  │  │  └─ index.astro
│  ├─ styles/
│  │  └─ global.css
│  └─ types/
│     └─ content.ts
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ astro.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ pnpm-workspace.yaml
└─ tsconfig.json
```

## Folder Responsibilities

`public/`

Static assets served from the site root, including the favicon, profile photo, gallery images, and social preview image.

`src/components/`

Reusable UI components.

- `Header.astro`: site title and primary navigation, loaded from `src/config/navigation.ts`.
- `Footer.astro`: copyright and optional external links, loaded from `src/config/site.ts`.
- `SectionHeading.astro`: shared page and section headings.

`src/config/`

Site-level configuration. Prefer changing these files instead of hard-coding site behavior inside pages.

- `site.ts`: identity, author, URL, locale, theme preference, external links.
- `navigation.ts`: visible primary navigation.
- `features.ts`: feature flags for current and future sections.
- `content.ts`: content section availability and category/status values.
- `seo.ts`: default metadata, title template, canonical base URL, page metadata.

`src/data/`

Content data for the site.

- `gallery.ts`: gallery image paths and alt text used by Home.
- `news.ts`: dated news entries used by News.
- `profile.ts`: personal profile, education, experience, publications, patents, awards, and skills.
- `projects.ts`: intentionally empty in v1 and reserved for future team or project content.

`src/layouts/`

Shared page shell.

- `BaseLayout.astro`: HTML document shell, SEO tags, canonical URL, global CSS import, Header, Footer, and background layer.

`src/pages/`

Astro route files. File paths map directly to public URLs.

`src/styles/`

Global CSS and design tokens.

`src/types/`

TypeScript interfaces and unions for site content, configuration, and data records.

`.github/workflows/`

GitHub Actions deployment workflow for GitHub Pages.

## Content Management

### Profile

Edit:

```text
src/data/profile.ts
```

Fields:

- `name`
- `role`
- `affiliation`
- `location`
- `bio`
- `interests`
- `education`
- `projectExperience`
- `workExperience`
- `publications`
- `patents`
- `awards`
- `skills`

Keep private or sensitive personal details out of this file unless they are intended to be public.

### Gallery

Edit:

```text
src/data/gallery.ts
```

Each gallery entry has:

- `src`
- `alt`

Images should be stored under:

```text
public/images/gallery/
```

### News

Edit:

```text
src/data/news.ts
```

Each news entry has:

- `date`
- `text`

### Project Experience

Edit:

```text
src/data/profile.ts
```

The current Project Experience page renders approved research and engineering experience from `projectExperience` and `workExperience` in the profile data. The separate `src/data/projects.ts` file is reserved for future structured project content.

### Static Images

Profile photo:

```text
public/images/profile/
```

Gallery images:

```text
public/images/gallery/
```

Social preview image:

```text
public/images/og-default.webp
```

Use lowercase file names with hyphens. Compress public images for web use and remove EXIF metadata before publishing.

## Privacy Rules

Do not publish:

- Non-public project experience
- Advisor, lab, or team work without permission
- Internal screenshots
- Raw or unpublished research data
- Internal experiment results
- Private communication records
- Unapproved paper drafts
- Private contact details

The safest default is to keep content as `draft` until it is ready and approved for public release.

## Development

Install dependencies:

```sh
pnpm install
```

Run the local development server:

```sh
pnpm run dev
```

Build for production:

```sh
pnpm run build
```

Preview the production build:

```sh
pnpm run preview
```

The build command runs:

```sh
astro check && astro build
```

This performs Astro diagnostics before generating the static site.

## Deployment

Deployment is handled by:

```text
.github/workflows/deploy.yml
```

The workflow:

1. Runs on pushes to `main`.
2. Installs pnpm.
3. Uses Node.js 24.
4. Installs dependencies with `pnpm install --frozen-lockfile`.
5. Builds the site with `pnpm run build`.
6. Uploads `dist/` as a GitHub Pages artifact.
7. Deploys the artifact to GitHub Pages.

The production URL is:

```text
https://qiubinquan.github.io/
```

## Naming Conventions

- URL paths: kebab-case
- Route slugs: kebab-case
- Astro components: PascalCase
- TypeScript files: lower-case words
- TypeScript fields: camelCase
- Status values: kebab-case
- Category values: kebab-case

Examples:

- `/projects/`
- `/publications/`
- `externalLinks`
- `projectExperience`
- `first-project-title`

## Extension Notes

Recommended future additions:

- Add DOI, volume, issue, and page information to publication records whenever verified details are available.
- Add detailed Project Experience rendering only after public project content is explicitly approved.
- Add multilingual support only after the English version is stable.

Avoid adding a backend, database, search system, analytics, or comment system unless there is a clear need.
