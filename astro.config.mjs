// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import node from "@astrojs/node";

// Para habilitar el sitemap, instala @astrojs/sitemap con:
//   pnpm add @astrojs/sitemap
// y descomenta la siguiente línea:
// import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // TODO: Reemplaza con tu URL de producción real
  site: "https://latierra-media.vercel.app",

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    // sitemap(),  // Descomenta tras instalar @astrojs/sitemap
  ],

  adapter: node({
    mode: "standalone"
  })
});