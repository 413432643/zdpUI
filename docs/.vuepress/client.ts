import { defineClientConfig } from '@vuepress/client'


// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"

import ZButton from './components/z-button.vue'
import ZLayout from './components/z-layout.vue'


export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.component('z-button',ZButton)
    app.component('z-layout',ZLayout)

  },

})

