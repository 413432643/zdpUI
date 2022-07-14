import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import alias from "@rollup/plugin-alias";
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), alias()
  ],
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    // 不需要的外部依赖
    rollupOptions: {
      external: ["vue", "zdp-ui"],
      output: {
        globals: {
          vue: "Vue",
        }
      },
    },
    lib: {
      // 入口
      entry: './components/index.ts',
      name: 'zdp-ui'
    },
  },

})


