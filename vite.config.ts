import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import  path  from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    // 不需要的外部依赖
    rollupOptions:{
      external:["vue",'ufo', '@vueuse/core'],
      output:{
        globals:{
          vue:"Vue",
          ufo: 'ufo',
          '@vueuse/core': 'VueUseCore',
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


