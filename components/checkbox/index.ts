import zCheckbox from './index.vue'
zCheckbox.install = (app:any) => {
    app.component(zCheckbox.name, zCheckbox)
}

export default zCheckbox;