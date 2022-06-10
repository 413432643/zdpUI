import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import  path  from 'path';
import nodePolyfills from 'rollup-plugin-node-polyfills'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),nodePolyfills()],
  build:{
    // 不需要的外部依赖
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue",
        }
      },
    },
    lib:{
      // 入口
      entry:'./components/index.ts',
      name:'zdp-ui'
    }
  }
})


