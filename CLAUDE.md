# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Marketing/portfolio website for **Gabriel Software** (gabriel-software.ch), a one-person Swiss software consultancy focused on nature-conservation software. All user-facing content is in German (Swiss, `lang="de-CH"`). Built as a static Astro 5 site hosted on Vercel, configured as a Progressive Web App.

## Commands

- `npm run dev` (alias `npm start`) — Astro dev server. The Playwright config expects it on http://localhost:3000.
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm test` — Playwright e2e tests. Runs with `NODE_ENV=dev`, which sets the test base URL to localhost:3000 and auto-starts the dev server (see `webServer` in [playwright.config.ts](playwright.config.ts)).
  - Single file / single test: `npx playwright test tests/tests.spec.ts` / `npx playwright test -g "has title"`
  - `NODE_ENV=dev` must be set when running locally, otherwise the base URL resolves to the live production site.
- `npm run test-report` — open the HTML Playwright report
- `npm run deploy` — `vercel build && vercel deploy --prebuilt` (preview environment)
- `npm run deploy_productive` — build + deploy to production
- `npm run deploy_only` — deploy an already-built `dist/` artifact to production

## Architecture

### Routing & layout
- File-based routing in [src/pages/](src/pages/). Pages: `index` (home), `leitbild`, `projekte`, `technologien`, `kontakt`, `404`.
- [src/components/Layout/index.astro](src/components/Layout/index.astro) is the single HTML shell: `<head>` (meta, favicons, PWA manifest link injected via `virtual:pwa-info`, Vercel `<Analytics/>`), global styles, then [Navbar.astro](src/components/Layout/Navbar.astro) wrapping a `<slot/>`. Every page imports this `Layout` as its outermost element.
- [Navbar.astro](src/components/Layout/Navbar.astro) renders the sticky green navbar and the `.scroll-container` that holds page content. Active nav link is derived from `Astro.url.pathname`.

### Page-local partials
- Files prefixed with `_` (e.g. [projekte/_Scrollspy.astro](src/pages/projekte/_Scrollspy.astro), [kontakt/_Map.astro](src/pages/kontakt/_Map.astro)) are components colocated next to the page that uses them. Astro excludes `_`-prefixed files from routing, so they're safe to keep in `pages/`.

### Carousels
- [src/components/Carousel/](src/components/Carousel/) — one Swiper carousel component per project, plus a shared [styles.css](src/components/Carousel/styles.css). Each component imports `swiper/css` + `swiper/css/navigation` + the shared CSS, renders `.swiper` markup whose slides use `background-image` pointing at `/public` assets, and initializes Swiper in a client `<script>`.

### Interactive bits
- Projekte scrollspy: [projekte/_Scrollspy.astro](src/pages/projekte/_Scrollspy.astro) highlights the current section with the experimental CSS `:target-current` / `scroll-target-group`. An `IntersectionObserver` fallback lives in [projekte/index.astro](src/pages/projekte/index.astro)'s `<script>` until browser support for `scroll-target-group` lands.
- Kontakt map: [kontakt/_Map.astro](src/pages/kontakt/_Map.astro) uses Leaflet with Swisstopo tiles, initialized client-side.
- Icons via `astro-icon` (`<Icon name="set:name" />`) — installed Iconify sets: `ant-design`, `bi`, `fa`, `fa-brands`, `fa-regular`, `fa-solid`, `ic`.

### PWA
- **Two** service-worker/PWA integrations are both wired in [astro.config.mjs](astro.config.mjs): `astrojs-service-worker` (workbox precaching) and `@vite-pwa/astro` (manifest + `navigateFallback: '/404'`). The SW is registered client-side in [src/pwa.ts](src/pwa.ts) via `virtual:pwa-register`. When adding a new precacheable asset type, update the `globPatterns` array in `astro.config.mjs`.

### Styling
- Scoped `<style>` blocks are colocated in each `.astro` file; one global block lives in [Layout/index.astro](src/components/Layout/index.astro). Brand green is `#145f00` / `#155f00`. There is **no** CSS framework — despite `tailwind`/Material UI/Bootstrap being listed on the Technologien page, that is marketing copy, not a dependency.

## Conventions
- Dependencies are pinned to exact versions (`save-exact=true` in [.npmrc](.npmrc)) and `allow-git=none`. To upgrade, use `npm run ncu using cooldown` (`ncu -c 5 -i`) — the 5-day cooldown is a deliberate supply-chain-attack mitigation used in place of npm's `min-release-age`.
- Tests live in [tests/](tests/); the Playwright `testDir` is `./tests`. [e2e/](e2e/) is leftover scaffolding and is **not** executed.
- Strict TypeScript ([tsconfig.json](tsconfig.json), extends `astro/tsconfigs/strict`); JSX is configured for React (`jsxImportSource: react`) for Astro integration compatibility.
- `public/` holds all static assets (`.webp` screenshots/favicons, `robots.txt`); carousel slides and `<img>` tags reference them by absolute path (e.g. `/apflora.webp`).
