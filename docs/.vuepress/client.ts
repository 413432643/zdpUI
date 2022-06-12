import { defineClientConfig } from '@vuepress/client'


// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"

import ZButton from './components/z-button.vue'
import ZRow from './components/z-row.vue'
import ZCol from './components/z-col.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'


export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.use(ElementPlusIconsVue)
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
    app.component('z-button',ZButton)
    app.component('z-row',ZRow)
    app.component('z-col',ZCol)

  },

})

