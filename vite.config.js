import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from https://<user>.github.io/The-Evora/ on GitHub Pages,
// so assets must be referenced under that base path.
export default defineConfig({
  base: '/The-Evora/',
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})