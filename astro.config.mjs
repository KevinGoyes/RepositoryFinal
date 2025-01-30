import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from "astro-robots-txt";
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [rehypeAccessibleEmojis],
  },
  site: 'https://kevingoyes.github.io/RepositoryFinal', // URL de tu GitHub Pages
  buildOptions: {
    base: '/RepositoryFinal/',  // Nombre de tu repositorio en GitHub
  },
  integrations: [tailwind(), react(), robotsTxt(), sitemap()]
});
