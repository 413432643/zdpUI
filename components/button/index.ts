import zButton from './index.vue'
zButton.install = (app:any) => {
    app.component(zButton.name, zButton)
}

export default zButton;