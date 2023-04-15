import "animate.css/animate.min.css"
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import mitt from 'mitt'
import './app.scss'

const app = createApp({

})

const bus = mitt()

app.config.globalProperties.$bus = bus
app.use(createPinia())

export default app
