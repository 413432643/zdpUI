import zCol from './index.vue'
zCol.install = (app:any) => {
    app.component(zCol.name, zCol)
}

export default zCol;