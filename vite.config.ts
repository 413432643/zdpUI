import { build, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    // 不需要的外部依赖
    rollupOptions:{
      external:["vue","element-plus"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    },
    lib:{
      // 入口
      entry:'./components/index.ts',
      name:'zdp-ui'
    }
  }
})
