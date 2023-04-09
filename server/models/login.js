const express = require('express')
const sqlQuery = require('../mysql')
const axios = require('axios')
const loginRouter = express.Router()


loginRouter.get('/getLoginKey', async function (req, res) {

    const { code } = req.query

    try {
        // @ts-ignore
        const result = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
            params: {
                appid: 'wx4d58d7da14966317',
                secret: '9795d853a8d480448ba1fa4d500709d3',
                js_code: code,
                grant_type: 'authorization_code'
            }
        })

        res.send({
            code: 200,
            message: '请求成功',
            data: result.data
        })

    } catch (error) {

        console.log(error)
        res.send({
            code: 404,
            message: '请求失败',
            data: error
        })
    }

})

module.exports = loginRouter


