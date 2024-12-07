import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const REPO = 'Tickley';

export default defineConfig({
  plugins: [react()],
  base: `/${REPO}/`,
})
