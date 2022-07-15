import ZUpload from './index.vue'
ZUpload.install = (app:any) => {
    app.component(ZUpload.name, ZUpload)
}

export default ZUpload;