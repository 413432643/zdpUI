import { createApp } from 'vue'
import App from './App.vue'
import ZUI from '../components/index'


const app = createApp(App)
app.use(ZUI)

app.mount('#app')

