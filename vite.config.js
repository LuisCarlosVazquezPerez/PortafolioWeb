import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    rollupOptions: {
      input: {
        index: 'index.html'
      },
    },
  },
  plugins: [
    ViteImageOptimizer({
      /* pass your config */
    }),
  ],
});
