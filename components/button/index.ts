import zButton from './index1.vue'
zButton.install = (app:any) => {
    app.component(zButton.name, zButton)
}

export default zButton;