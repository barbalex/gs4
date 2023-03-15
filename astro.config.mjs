import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import serviceWorker from 'astrojs-service-worker'
import AstroPWA from '@vite-pwa/astro'

import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel-software.ch',
  integrations: [
    serviceWorker({
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,webp}'],
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
      manifest: {
        scope: '.',
        name: 'gabriel-software.ch',
        short_name: 'gabriel-software',
        // https://web.dev/add-manifest/:
        // Your start_url should direct the user straight into your app,
        // rather than a product landing page.
        // Think about what the user will want to do once they open your app,
        // and place them there
        start_url: '/',
        background_color: '#145f00',
        theme_color: '#145f00',
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
        orientation: 'portrait',
        description: 'Apps für den Naturschutz',
      },
    }),
  ],
})
