import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './components'),
    },
  },
  // alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
  build: {
    // 不需要的外部依赖
    rollupOptions: {
      external: ["vue", "zdpui"],
      output: {
        globals: {
          vue: "Vue",
        }
      },
    },
    lib: {
      // 入口
      entry: './components/index.ts',
      name: 'zdpui'
    },
  },

})


