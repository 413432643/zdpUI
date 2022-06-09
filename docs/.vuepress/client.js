import { defineClientConfig } from '@vuepress/client'
import zButton from './components/z-button.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component('zButton', zButton)
  },
})