# Project Guide

This document explains the structure, content model, privacy rules, development workflow, and extension plan for the personal academic website.

## Current Scope

Visible sections:

- Home
- About
- Projects
- Writing
- Contact

Reserved for future expansion:

- Members
- Publications
- News
- Resources
- Multilingual content

The Projects section is reserved in this version. It must not publish project details, internal screenshots, lab or advisor work, unpublished data, or unauthorized material.

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
- `/writing/`
- `/contact/`

Reserved dynamic route:

- `/writing/:slug/`

Writing detail pages are generated only for entries whose `status` is `published`.

Not available in the first version:

- `/projects/:slug/`
- `/members/`
- `/publications/`
- `/news/`
- `/resources/`

## Project Structure

```text
.
├─ public/
│  └─ favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ BackLink.astro
│  │  ├─ Breadcrumb.astro
│  │  ├─ Footer.astro
│  │  ├─ Header.astro
│  │  ├─ PageCard.astro
│  │  └─ SectionHeading.astro
│  ├─ config/
│  │  ├─ content.ts
│  │  ├─ features.ts
│  │  ├─ navigation.ts
│  │  ├─ seo.ts
│  │  └─ site.ts
│  ├─ data/
│  │  ├─ profile.ts
│  │  ├─ projects.ts
│  │  └─ writing.ts
│  ├─ layouts/
│  │  └─ BaseLayout.astro
│  ├─ pages/
│  │  ├─ about.astro
│  │  ├─ contact.astro
│  │  ├─ index.astro
│  │  ├─ projects/
│  │  │  └─ index.astro
│  │  └─ writing/
│  │     ├─ [slug].astro
│  │     └─ index.astro
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

Static assets that are served from the site root. Current asset: favicon.

`src/components/`

Reusable UI components.

- `Header.astro`: site title and primary navigation, loaded from `src/config/navigation.ts`.
- `Footer.astro`: copyright and optional external links, loaded from `src/config/site.ts`.
- `PageCard.astro`: reusable card for list pages, currently used by Writing.
- `Breadcrumb.astro`: page hierarchy for writing detail pages.
- `BackLink.astro`: explicit return links such as "Back to Writing".
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

- `profile.ts`: personal profile fields used by Home and About.
- `projects.ts`: intentionally empty in v1.
- `writing.ts`: writing metadata. Only `published` entries are listed and built.

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
- `skills`

Keep private or sensitive personal details out of this file unless they are intended to be public.

### Writing

Edit:

```text
src/data/writing.ts
```

Each writing entry has:

- `slug`
- `title`
- `summary`
- `category`
- `status`
- `publishedAt`
- `updatedAt`
- `tags`
- `externalLinks`

Only entries with:

```ts
status: 'published'
```

are shown on `/writing/` and generated as `/writing/:slug/`.

Entries with these statuses are not published:

```ts
status: 'draft'
status: 'reserved'
```

Use kebab-case for slugs, for example:

```text
research-note-urban-traffic
technical-note-astro-site
```

### Projects

Edit:

```text
src/data/projects.ts
```

This file exists for future use, but the Projects page is hard-coded as reserved in v1. Do not add public project rendering until the project material is approved for publication.

## Privacy Rules

Do not publish:

- Non-public projects
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

- `/writing/research-note-urban-traffic/`
- `BackLink.astro`
- `PageCard.astro`
- `externalLinks`
- `publishedAt`
- `research-note`
- `technical-note`

## Extension Notes

Recommended future additions:

- Add real profile content in `src/data/profile.ts`.
- Decide whether long-form writing should move from TypeScript data to Astro content collections.
- Add an Open Graph image if social sharing previews become important.
- Add Publications only after there is public, approved publication metadata.
- Add Projects rendering only after public project content is explicitly approved.
- Add multilingual support only after the English version is stable.

Avoid adding a backend, database, search system, analytics, or comment system unless there is a clear need.
