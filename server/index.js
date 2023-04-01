const express = require('express')
const useRouter = require('./models/index')

const app = express()
const port = 3000

useRouter(app)

app.listen(port, () => {
    console.log(`服务器 ${port} 端口已启动`)
})