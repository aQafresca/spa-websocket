import path from 'path';

import tailwindcss from '@tailwindcss/vite';
import { tanstackRouter } from '@tanstack/router-plugin/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    eslint({ cache: false }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@store': path.resolve(__dirname, './src/core/store'),
      '@components': path.resolve(__dirname, './src/components'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@wrappers': path.resolve(__dirname, './src/wrappers'),
    },
  },
});
