import ZTree from './index.vue'
ZTree.install = (app:any) => {
    app.component(ZTree.name, ZTree)
}

export default ZTree;