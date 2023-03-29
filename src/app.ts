import { createApp } from 'vue'
import { Tabs, TabPane } from '@nutui/nutui-taro'
import './app.scss'

const app = createApp({
    // onShow(options) { },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

app.use(Tabs)
app.use(TabPane)

export default app
