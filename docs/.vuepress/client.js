import { defineClientConfig } from '@vuepress/client'
import ZButton from './components/z-button.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('ZButton', ZButton)
  },
})