import { defineClientConfig } from '@vuepress/client'


// import ZUI from 'zdp-ui'
// import "zdp-ui/dist/style.css"
import ZButton from './components/z-button.vue'
import ZRow from './components/z-row.vue'
import ZCol from './components/z-col.vue'
import ZRadio from './components/z-radio.vue'
import ZCheckbox from './components/z-checkbox.vue'
import ZInput from './components/z-input.vue'
import ZInputNumber from './components/z-input-number.vue'
import ZTree from './components/z-tree.vue'
import ZTreeNode from './components/z-tree-node.vue'
import ZSelect from './components/z-select.vue'
import ZCarousel from './components/z-carousel.vue'
import ZUpload from './components/z-upload.vue'
import ZPagination from './components/z-pagination.vue'
import ZDate from './components/z-date.vue'
import ZMessage from './components/z-message.vue'

import './styles/iconfont/iconfont.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.component('z-button', ZButton)
    app.component('z-row', ZRow)
    app.component('z-col', ZCol)
    app.component('z-radio', ZRadio)
    app.component('z-checkbox', ZCheckbox)
    app.component('z-input', ZInput)
    app.component('z-input-number', ZInputNumber)
    app.component('z-tree', ZTree)
    app.component('z-tree-node', ZTreeNode)
    app.component('z-select', ZSelect)
    app.component('z-carousel', ZCarousel)
    app.component('z-upload', ZUpload)
    app.component('z-pagination', ZPagination)
    app.component('z-date', ZDate)
    app.component('z-message', ZMessage)
  },
})

