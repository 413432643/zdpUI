import { defineClientConfig } from '@vuepress/client'


// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"
import ZButton from './components/z-button.vue'
import ZRow from './components/z-row.vue'
import ZCol from './components/z-col.vue'

import './styles/iconfont/iconfont.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.component('z-button',ZButton)
    app.component('z-row',ZRow)
    app.component('z-col',ZCol)
  },

})

