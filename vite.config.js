import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ElementPlus from 'unplugin-element-plus/vite'
export default defineConfig({
  base: '/zxm-web/',
  plugins: [vue(),ElementPlus()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
})
