# React Portfolio Template

A lightweight, content-driven portfolio built with React + Vite. No UI framework, no CSS preprocessor, only two runtime dependencies (`react`, `react-dom`) — so there's very little standing between you and heavy customisation.

## Quick start

```bash
npm install
npm run dev      # local dev server with hot reload
npm run build    # production build → dist/
npm run preview  # serve the production build locally
```

## Customising

### 1. Content — edit `src/content/`

All content lives in plain JavaScript files under [`src/content/`](src/content/). You should never need to touch a component just to change what the site says.

| File | What it holds |
| --- | --- |
| `config.js` | Site title, feature flags, and the section list (order, labels, visibility) |
| `profile.js` | Name, role, tagline, about paragraphs, email, socials, avatar, résumé link |
| `experience.js` | Work history (timeline) |
| `projects.js` | Project cards, with tags, links, optional image, `featured` flag |
| `achievements.js` | Awards, certifications, publications, talks |
| `skills.js` | Skill chips, grouped by category |
| `media.js` | Anything else — articles, videos, podcasts, photography, etc. |

Static assets (avatar, résumé PDF, project screenshots) go in `public/` and are referenced by absolute path, e.g. `avatar: "/avatar.jpg"`.

### 2. Sections — edit the list in `config.js`

The `sections` array in `src/content/config.js` drives both the page and the nav:

- **Reorder** sections by reordering the array.
- **Hide** a section by removing (or commenting out) its line.
- **Rename** a section by changing its `label`.

A section also hides itself automatically if its data file is empty.

### 3. Theme — edit `src/styles/theme.css`

Every design token (colors, fonts, spacing, corner radius, shadows) is a CSS variable in one file, with a light and a dark palette. Change the accent color, swap the font stack, or go full brutalist — no component styles need to change. Layout/structural CSS lives in `src/styles/global.css`.

Light/dark mode follows the visitor's OS preference, is toggleable from the nav, and persists in `localStorage`. Disable the toggle via `features.themeToggle` in `config.js`.

### 4. Adding a new section

1. Create a component in `src/components/` — copy an existing one (e.g. `Achievements.jsx`) and wrap your content in the shared `<Section>` component.
2. Register it in the `REGISTRY` map in `src/App.jsx`.
3. Add `{ id: "yourid", label: "Your Label" }` to `sections` in `src/content/config.js`.

That's it — it appears on the page and in the nav, in the position you gave it.

### 5. Icons

Social/UI icons are inline SVGs in `src/components/Icon.jsx` (no icon library). Add a new entry to the `ICONS` map to use it in `profile.socials`.

## Project structure

```
src/
├── content/        ← everything you edit day-to-day
├── styles/
│   ├── theme.css   ← design tokens (edit to restyle)
│   └── global.css  ← layout & component styles
├── components/     ← one component per section + shared bits
├── hooks/
│   └── useTheme.js ← light/dark handling
├── App.jsx         ← section registry + page assembly
└── main.jsx
```

## Deploying

The build output in `dist/` is fully static — host it anywhere (Netlify, Vercel, Cloudflare Pages, GitHub Pages). For GitHub Pages under a subpath, set `base: "/<repo-name>/"` in `vite.config.js`.
