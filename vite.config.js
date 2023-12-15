import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  css: {
    // 预处理器配置项
    preprocessorOptions: {
      less: {
        math: 'always',
      },
    },
  },
})
