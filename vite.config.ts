import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import  path  from 'path';
import resolve from "rollup-plugin-node-resolve";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "/@": path.resolve(__dirname, "./src"),
    },
  },
  build:{
    // 不需要的外部依赖
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      },
      plugins:[
        resolve()
      ]
    },
    lib:{
      // 入口
      entry:'./components/index.ts',
      name:'zdp-ui'
    }
  }
})
