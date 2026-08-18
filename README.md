# Personal Academic Website

Astro-based personal academic website for Qiu Binquan.

https://qiubinquan.github.io/

This repository contains the first version of a small static personal academic site. It is designed to be easy to maintain, safe to publish, and simple to extend later.

## Overview

Current public sections:

- Home
- About
- Project Experience
- Publications
- Contact

The Project Experience section presents approved public project and engineering experience.

## Documentation

Detailed project documentation is in:

- [Project Guide](docs/PROJECT_GUIDE.md)

The guide covers:

- Project structure
- Folder responsibilities
- Content management
- Privacy rules
- Deployment
- Naming conventions
- Future extension notes

## Tech Stack

- Astro
- TypeScript
- CSS with design tokens
- GitHub Pages
- GitHub Actions
- pnpm

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

## Deployment

Pushes to `main` are deployed through GitHub Actions. See [Project Guide](docs/PROJECT_GUIDE.md#deployment) for the full workflow details.
