import { defineClientConfig } from '@vuepress/client'


// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"
import ZButton from './components/z-button.vue'
import ZRow from './components/z-row.vue'
import ZCol from './components/z-col.vue'
import ZSelect from './components/z-select.vue'
import ZSon from './components/z-son.vue'

import './styles/iconfont/iconfont.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.component('z-button',ZButton)
    app.component('z-row',ZRow)
    app.component('z-col',ZCol)
    app.component('z-select',ZSelect)
    app.component('z-son',ZSon)
  },

})

