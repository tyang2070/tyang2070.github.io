import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE || 'https://tyang2070.github.io',
  base: process.env.BASE_PATH || '/',
});
