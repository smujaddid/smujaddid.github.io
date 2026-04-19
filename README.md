# Personal Portfolio Website

A modern, responsive portfolio website built with Astro, featuring multi-language support (English and Indonesian), skill rating system, and multiple themes.

## Features

- 🌍 Multi-language support (English and Indonesian)
- 🎨 4 theme options: Light, Dark, Solarized Light, Solarized Dark
- ⭐ Skill rating system with star indicators
- 📱 Fully responsive layout
- 📝 Blog system with MDX support
- 🚀 Project showcase
- 🎯 SEO optimized (sitemap, robots.txt, OG images)
- 🌙 Theme toggle with localStorage persistence
- 📦 Static site generation
- 🔤 Custom typography (Lexend, Geist, Geist Mono)

## Tech Stack

- **Framework**: Astro 6.x
- **Styling**: Tailwind CSS 4.x
- **Content**: MDX with Astro Content Collections
- **Icons**: astro-icon with Lucide and Simple Icons
- **Language**: TypeScript
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/smujaddid/smujaddid.github.io.git
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview production build:

```bash
npm run preview
```

6. Lint and format:

```bash
npm run lint
npm run format
```

## Project Structure

```
├── src/
│   ├── components/         # Reusable components (TechIcon, ThemeToggle, etc.)
│   ├── config/            # Configuration files (site.ts, profile.ts)
│   ├── content/           # MDX content (blog posts and projects)
│   │   ├── blog/          # Blog posts (en/ and id/ for multi-language)
│   │   └── project/       # Project descriptions (en/ and id/)
│   ├── i18n/              # Internationalization (ui.ts, t.ts)
│   ├── layouts/           # Page layouts (BaseLayout, BlogLayout)
│   ├── pages/             # Astro pages (/, /about, /blogs, /projects, /id/*)
│   ├── styles/            # Global CSS (global.css)
│   └── utils/             # Utility functions
└── public/                # Static assets
```

## Content Management

### Blog Posts

Blog posts are stored as MDX files in `src/content/blog/` with multi-language support:

1. Create English posts in `src/content/blog/en/`
2. Create Indonesian posts in `src/content/blog/id/`
3. Each MDX file should follow this format:

```mdx
---
title: Your Post Title
description: A brief description of your post
date: 2024-03-21
---

Your post content here...
```

### Projects

Project descriptions are stored as MDX files in `src/content/project/` with multi-language support:

1. Create English project files in `src/content/project/en/`
2. Create Indonesian project files in `src/content/project/id/`
3. Each MDX file should follow this format:

```mdx
---
title: Project Title
description: A brief description
tags: ['tag1', 'tag2']
---

Your project content here...
```

### Site Configuration

You can customize the site by modifying:

- `src/config/site.ts` - Site metadata, social links, navigation
- `src/config/profile.ts` - Personal info, skills, experience, education, honors
- `src/i18n/ui.ts` - Internationalization strings (English and Indonesian)

### Skills

Skills in `src/config/profile.ts` include a rating system:

- 1 star: Beginner
- 2 stars: Proficient
- 3 stars: Expert

## Blog System

The blog system supports:

- MDX content with React components
- Code syntax highlighting with Shiki
- Multi-language support (English/Indonesian)
- Automatic sitemap generation

## Customization

1. Add new blog posts by creating MDX files in `src/content/blog/en/` and `src/content/blog/id/`
2. Add new projects by creating MDX files in `src/content/project/en/` and `src/content/project/id/`
3. Update personal information in `src/config/profile.ts`
4. Update site metadata in `src/config/site.ts`
5. Add/modify translations in `src/i18n/ui.ts`
6. Customize themes in `src/styles/global.css`
7. Add new pages in `src/pages/` (create mirror pages in `src/pages/id/` for Indonesian)

## License

MIT

## Author

smujaddid

## About

A personal portfolio website built with Astro, featuring multi-language support (English and Indonesian), a skill rating system, and multiple theme options. The site showcases blog posts, projects, and professional information with a modern, responsive design.
