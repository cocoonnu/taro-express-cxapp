const express = require('express')
const sqlQuery = require('../mysql')
const axios = require('axios')
const loginRouter = express.Router()
const jwt = require('jsonwebtoken') // 生成token字符串
const secretKey = 'weapplogin' // 定义 secret 密钥


loginRouter.get('/getLoginKey', async function (req, res) {

    const { code } = req.query

    try {
        // @ts-ignore 获取微信用户 openid
        const result = await axios.get('https://api.weixin.qq.com/sns/jscode2session', {
            params: {
                appid: 'wx4d58d7da14966317',
                secret: '9795d853a8d480448ba1fa4d500709d3',
                js_code: code,
                grant_type: 'authorization_code'
            }
        })


        if (result.data.openid) {

            // 生成加密版 token 
            let token = jwt.sign({

                // 微信用户唯一身份认证
                openid: result.data.openid

                // 设置有效期
            }, secretKey, { expiresIn: '24h' })

            res.send({
                code: 200,
                message: '登录成功',
                data: token
            })
        }

        if (!result.data.openid) {

            res.send({
                code: 404,
                message: '登录失败',
                data: result.data
            })
        }

    } catch (error) {

        res.send({
            code: 404,
            message: '发送请求失败',
            data: error
        })
        console.log(error)
    }

})

module.exports = loginRouter


