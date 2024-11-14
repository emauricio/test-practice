import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { AliasOptions, defineConfig } from 'vite'

const alias: AliasOptions = [
  {
    find: '@assets',

    replacement: path.resolve(__dirname, './src/assets'),
  },
  {
    find: '@components',
    replacement: path.resolve(__dirname, './src/components'),
  },
]
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias,
  },
})
