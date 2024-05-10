import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import serviceWorker from 'astrojs-service-worker'
import AstroPWA from '@vite-pwa/astro'
import icon from 'astro-icon'

import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel-software.ch',
  integrations: [
    icon(),
    serviceWorker({
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,jpg,svg,webp,svg,json,woff2,woff}',
        ],
      },
    }),
    sitemap(),
    prefetch(),
    AstroPWA({
      // workbox: {
      //   sourcemap: true,
      //   globPatterns: [
      //     '**/*.{js,jsx,ts,tsx,css,html,ico,png,jpg,svg,webp,json,woff2,woff}',
      //   ],
      //   navigateFallback: '/404',
      // },
      // registerType: 'autoUpdate',
      workbox: { navigateFallback: '/404' },
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
