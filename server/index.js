const express = require('express')
const useRouter = require('./models/index')

const app = express()
const port = 3000

// 全局中间件
app.use(function (req, res, next) {
    // 全局设置响应头
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    res.setHeader("Access-Control-Allow-Method", '*')

    // 一定要调用next()
    next()
})


useRouter(app)

app.listen(port, () => {
    console.log(`服务器 ${port} 端口已启动`)
})