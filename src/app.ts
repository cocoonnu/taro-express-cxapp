import { createApp } from 'vue'
import mitt from 'mitt'
import './app.scss'

const bus = mitt()

const app = createApp({
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

app.config.globalProperties.$bus = bus

export default app
