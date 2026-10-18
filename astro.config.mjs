import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://kingmakerenterprises.in',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-IN', mr: 'mr-IN' },
      },
    }),
  ],
  build: { format: 'directory' },
});
