import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel-software.ch',
  integrations: [sitemap(), prefetch()]
});