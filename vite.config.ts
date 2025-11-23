import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ['5173-jolinf-teldevhomepage-uxndy62vj47.ws-eu118.gitpod.io'],
    proxy: {
      '/api': {
        target: 'https://teldev-website.vercel.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
    modules: {
      localsConvention: 'camelCase',
    },
  },
  build: {
    cssCodeSplit: true,
    sourcemap: true,
  },
  base: '/',
});
