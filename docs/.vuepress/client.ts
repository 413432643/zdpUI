import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'

// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.use(ElementPlus)
    
  },
  
})

