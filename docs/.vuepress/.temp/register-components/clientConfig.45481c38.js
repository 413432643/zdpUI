import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("z-button", defineAsyncComponent(() => import("C:/Users/111/Desktop/zdp-ui/docs/.vuepress/components/z-button.vue")))
  },
}
