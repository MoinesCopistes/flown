// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  publicDir: 'public', // This is the default
  // Other configurations...
  base: '/picasso/', // Replace 'repo-name' with your actual repository name,
  build: {
    rollupOptions: {
      external: ["background.js"]
    }
  }
});
