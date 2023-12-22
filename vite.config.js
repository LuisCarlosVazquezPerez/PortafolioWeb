import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        certificados: 'certificados.html',
        portafolio: 'portafolio.html',
        aboutme: 'aboutme.html',
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
});
