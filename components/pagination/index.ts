import ZPagination from './index.vue'
ZPagination.install = (app:any) => {
    app.component(ZPagination.name, ZPagination)
}

export default ZPagination;