import ZTime from './index.vue'
ZTime.install = (app:any) => {
    app.component(ZTime.name, ZTime)
}

export default ZTime;