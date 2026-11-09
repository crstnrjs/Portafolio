import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // En GitHub Pages el sitio vive en /Portafolio/; el workflow define BASE_PATH.
  // Si se usa un dominio propio, BASE_PATH debe ser '/'.
  base: process.env.BASE_PATH || '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
