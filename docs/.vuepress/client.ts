import { defineClientConfig } from '@vuepress/client'
// import 'zdp-ui/dist/style.css'
import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"

export default defineClientConfig({
  enhance({ app }) {
    app.use(ZUI)
  },
})