import zButton from "./button/index"
const install = (app:any) => {
    app.use(zButton)
}
const ZUI = {
    install
}

export {
    zButton
}

export default ZUI