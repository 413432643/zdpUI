import MessageComponent from '../components/z-message.js'
import { createApp } from 'vue'
// import { usePageData } from '@vuepress/client'

const Message = (options) => {
    const messageApp = createApp(MessageComponent, options)
    showMessage(messageApp, options.duration)
    
}


const showMessage = (app, duration) => {
    const oFrag = document.createDocumentFragment()
    // const vm= app.mount(usePageData().value)
    // console.log(vm)
    document.body.appendChild(oFrag)
    hideMessage(app, duration)
}

const hideMessage = (app, duration) => {
    setTimeout(() => {
        // app.unmount()
    }, duration || 3000)
}


export default Message;