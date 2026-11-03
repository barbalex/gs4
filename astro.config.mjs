import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { AstroPWAIntegration as AstroPWA } from '@vite-pwa/astro'
import icon from 'astro-icon'

// workbox precaches the 404 page at '/404' (cleanURLs rewriting of
// 404/index.html). Astro only ever emits 404.html, which vercel serves
// with a 404 status, failing precaching with bad-precaching-response.
// Copying it to 404/index.html makes '/404' a regular page.
const copy404ToRoute = () => ({
  name: 'copy-404-to-route',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const { copyFile, mkdir } = await import('node:fs/promises')
      const { join } = await import('node:path')
      const root = dir.pathname
      await mkdir(join(root, '404'), { recursive: true })
      await copyFile(join(root, '404.html'), join(root, '404', 'index.html'))
    },
  },
})

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel-software.ch',
  prefetch: true,
  // keep the pre-v7 whitespace handling ('jsx' strips spaces between
  // inline elements across lines; revisit when templates are audited)
  compressHTML: true,
  // the default 'auto' only inlines stylesheets below vite's 4 KiB
  // assetsInlineLimit; Layout.css (4.8 KiB) stayed a separate
  // render-blocking request. 'always' keeps page CSS out of the
  // critical request chain.
  build: { inlineStylesheets: 'always' },
  integrations: [
    icon(),
    sitemap(),
    // must run before AstroPWA so the copy exists when the
    // service worker's precache manifest is globbed from dist/
    copy404ToRoute(),
    AstroPWA({
      // the sw is registered by a one-line inline script in the Layout;
      // without this, removing the virtual:pwa-register import makes
      // 'auto' fall back to injecting its own registerSW.js script
      injectRegister: null,
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,jpg,svg,webp,json,woff2,woff}',
        ],
        // the manifest icons below are added to the precache manifest by
        // vite-pwa with their own revisions; globbing them again yields
        // different revisions for the same url, which makes workbox fail
        // with add-to-cache-list-conflicting-entries
        globIgnores: [
          'favicon.svg',
          'favicon_192.webp',
          'favicon_512.webp',
          'favicon_512.png',
          // '/404' (from 404/index.html) is the precached 404 page;
          // 404.html remains vercel's error document only
          '404.html',
        ],
        navigateFallback: '/404',
      },
      manifest: {
        scope: '.',
        name: 'gabriel-software.ch',
        short_name: 'gabriel-software',
        start_url: '/',
        background_color: 'white',
        theme_color: '#114f01',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'maskable any',
          },
          {
            src: '/favicon_192.webp',
            sizes: '192x192',
            type: 'image/webp',
          },
          {
            src: '/favicon_512.webp',
            sizes: '512x512',
            type: 'image/webp',
          },
          {
            src: '/favicon_512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        categories: ['software', 'development', 'nature'],
        orientation: 'portrait',
        description: 'Apps für den Naturschutz',
      },
    }),
  ],
})
