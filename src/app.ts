import { createPinia } from 'pinia'
import { createApp } from 'vue'
import mitt from 'mitt'
import './app.scss'
import "animate.css/animate.min.css"


const bus = mitt()

const app = createApp({

})

app.config.globalProperties.$bus = bus
app.use(createPinia())

export default app
