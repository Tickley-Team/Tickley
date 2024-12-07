import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const REPO = 'Tickley';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${REPO}/` : '/',
})
