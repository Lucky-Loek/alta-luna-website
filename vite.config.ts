import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve:{
    alias: {
      '~bulma': path.resolve(__dirname, 'node_modules/'),
      '~bulma-carousel': path.resolve(__dirname, 'node_modules/bulma-carousel/')
    }
  }
})
