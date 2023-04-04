import { createApp } from 'vue'
import mitt from 'mitt'
import { createPinia } from 'pinia'
import './app.scss'
import "animate.css/animate.min.css"


const bus = mitt()

const app = createApp({
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

app.config.globalProperties.$bus = bus
app.use(createPinia())

export default app
