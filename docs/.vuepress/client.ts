import { defineClientConfig } from '@vuepress/client'

// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"

import ZButton from './components/z-button.vue'


export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.component('z-button',ZButton)

    
  },

})

