import zButton from "./button"
import zCol from "./col"
import zRow from "./row"
import zCarousel from "./carousel"
import zCheckbox from "./checkbox"
import zDate from "./date"
import zInputNumber from "./input-number"
import zInput from "./input"
import zPagination from "./pagination"
import zRadio from "./radio"
import zSelect from "./select"
import zTime from "./time"
import zTreeNode from "./tree-node"
import zTree from "./tree"
import zUpload from "./upload"
import Message from "./message/index.js"

const install = (app: any) => {
    app.use(zButton)
    app.use(zCol)
    app.use(zRow)
    app.use(zCarousel)
    app.use(zCheckbox)
    app.use(zDate)
    app.use(zInputNumber)
    app.use(zInput)
    app.use(zPagination)
    app.use(zRadio)
    app.use(zSelect)
    app.use(zTime)
    app.use(zTreeNode)
    app.use(zTree)
    app.use(zUpload)

    app.config.globalProperties.$message = Message
}
const ZUI = {
    install
}

export {
    install,
    zButton,
    zCol,
    zRow,
    zCarousel,
    zCheckbox,
    zDate,
    zInputNumber,
    zInput,
    zPagination,
    zRadio,
    zSelect,
    zTime,
    zTreeNode,
    zTree,
    zUpload,
    Message,
}

export default ZUI