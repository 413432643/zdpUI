import MessageComponent from '../components/z-message.js'
import { createApp } from 'vue'

const Message = (options) => {
    const messageApp = createApp(MessageComponent, options)
    showMessage(messageApp, options.duration)
    
}


const showMessage = (app, duration) => {
    const oFrag = document.createDocumentFragment()
    console.log(oFrag);
    // app.mount(oFrag)
    document.body.appendChild(oFrag)
    hideMessage(app, duration)
}

const hideMessage = (app, duration) => {
    setTimeout(() => {
        // app.unmount()
    }, duration || 3000)
}


export default Message;