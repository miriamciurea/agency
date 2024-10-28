import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcssConfig from './postcss.config.ts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: postcssConfig,
  },
  build: {
    outDir: 'dist', // Customizable output directory
  },
})
