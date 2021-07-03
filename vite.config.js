import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteSvgIcons from 'vite-plugin-svg-icons';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      vue(),
      viteSvgIcons({
        // 指定需要缓存的图标文件夹
        iconDirs: [resolve(process.cwd(), 'src/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
      }),
  ],
  base: '/',
  server: {
    port: 8888,
    open: true,
    proxy: {
      // 字符串简写写法
      '/resources': 'https://e.juejin.cn',
      // 选项写法
      '/api': {
        target: 'https://mcs.snssdk.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "/src"),
    },
  },
})
