import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import { AstroPWAIntegration as AstroPWA } from '@vite-pwa/astro'
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel-software.ch',
  prefetch: true,
  // keep the pre-v7 whitespace handling ('jsx' strips spaces between
  // inline elements across lines; revisit when templates are audited)
  compressHTML: true,
  integrations: [
    icon(),
    sitemap(),
    AstroPWA({
      workbox: {
        globPatterns: [
          '**/*.{js,css,html,ico,png,jpg,svg,webp,json,woff2,woff}',
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
