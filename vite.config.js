import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Aggiunge la libreria React a Vite
export default defineConfig({
  plugins: [react()],
})