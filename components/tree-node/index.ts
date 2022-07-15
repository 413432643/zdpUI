import zTreeNode from './index.vue'
zTreeNode.install = (app:any) => {
    app.component(zTreeNode.name, zTreeNode)
}

export default zTreeNode;