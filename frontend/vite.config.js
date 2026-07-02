import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:8000',
        headers: { 'ngrok-skip-browser-warning': '1' },
      },
      '/confirm': {
        target: 'http://localhost:8000',
        headers: { 'ngrok-skip-browser-warning': '1' },
      },
    },
  },
})

