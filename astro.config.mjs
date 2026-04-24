import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://insidecupertino.com',
  integrations: [tailwind({ applyBaseStyles: false })],
  build: { inlineStylesheets: 'auto' },
});
