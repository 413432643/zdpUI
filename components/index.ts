import zButton from "./button/index"
import Message from "./message/index.js"

const install = (app: any) => {
    app.use(zButton,Message)
    app.config.globalProperties.$message = Message
}
const ZUI = {
    install
}

export {
    install,
    zButton,
    Message
}

export default ZUI