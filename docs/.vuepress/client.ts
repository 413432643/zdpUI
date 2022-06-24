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
import ZSwitch from './components/z-switch.vue'
import treeItem from './components/tree-item.vue'
import ZTre from './components/z-tre.vue'

import './styles/iconfont/iconfont.css'

export default defineClientConfig({
  enhance({ app }) {
    // app.use(ZUI)
    app.component('z-button',ZButton)
    app.component('z-row',ZRow)
    app.component('z-col',ZCol)
    app.component('z-radio',ZRadio)
    app.component('z-checkbox',ZCheckbox)
    app.component('z-input',ZInput)
    app.component('z-input-number',ZInputNumber)
    app.component('z-tree',ZTree)
    app.component('z-tree-node',ZTreeNode)
    app.component('z-select',ZSelect)
    app.component('z-switch',ZSwitch)
    app.component('tree-item',treeItem)
    app.component('z-tre',ZTre)
  },

})

