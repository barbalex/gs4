import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import serviceWorker from 'astrojs-service-worker'

import prefetch from '@astrojs/prefetch'

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel-software.ch',
  integrations: [serviceWorker(), sitemap(), prefetch()],
})
