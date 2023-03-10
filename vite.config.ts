import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS(),Pages({
    dirs: [
      {dir:'src/views',baseRoute:''},
      {dir: 'src/views/hi', baseRoute: 'hi'}
    ],
    extensions: ['vue'],
  }
  )],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
