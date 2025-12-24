// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: '/cotizador-hogar/', // 👈 nombre exacto de tu repo en GitHub
})

