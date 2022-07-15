import MessageComponent from '../components/z-message.vue'
import { createApp, ref ,watch} from 'vue'

const messageArr = ref([])

const Message = (options) => {
    const messageApp = createApp(MessageComponent, options)
    showMessage(messageApp, options.duration)
}

const showMessage = (app, duration) => {
    const oFrag = document.createDocumentFragment()
    const vm = app.mount(oFrag)
    messageArr.value.push(vm)

    setTop(vm)
    vm.show(true)

    watch(messageArr,()=>{
        setTop(vm)
    })

    document.body.appendChild(oFrag)
    hideMessage(app, vm, duration)
}

const hideMessage = (app, vm, duration) => {
    vm.timer = setTimeout(async () => {
        await vm.show(false)
        app.unmount()
        messageArr.value = messageArr.value.filter(item => item !== vm)
        clearTimeout(vm.timer)
        vm.timer = null
    }, duration || 3000)
}

const setTop = (vm) => {
    const { setTop, height, margin } = vm
    const currentIndex = messageArr.value.findIndex(item => item === vm)
    setTop(margin * (currentIndex + 1) + height * currentIndex)
}

export default Message;