import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  site: 'https://gabriel-software.ch',
  integrations: [react(), sitemap(), prefetch()]
});