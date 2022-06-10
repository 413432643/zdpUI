import { defineClientConfig } from '@vuepress/client'
import { onMounted } from 'vue'

// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientConfig({
  setup() {
    onMounted(() => {
      // 在 mounted 之后使用 DOM API
      document.querySelector('#app')
    })
  },
  enhance({ app }) {
    // app.use(ZUI)
    // app.component('el-button',ElButton)
    app.use(ElementPlus)
  },
})


