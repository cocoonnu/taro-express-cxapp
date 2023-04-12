// 用户订单接口
// orderItem
// 用户id openid
// 起始日期 02月13日
// 起始时间 08:50
// 起始结束地址 南昌杭州
// 航班：EU2280
// 价格：1600
// 出发机场：大连周水子机场1号航站楼出发
// @ts-nocheck

const express = require('express')
const sqlQuery = require('../mysql')
const orderRouter = express.Router()
const jwt = require('jsonwebtoken') // 生成token字符串
const secretKey = 'weapplogin' // 定义 secret 密钥


orderRouter.get('/addOrderItem', async function (req, res) {

    const loginToken = req.query.loginToken
    const orderItem = JSON.parse(req.query.orderItem)

    jwt.verify(loginToken, secretKey, async function (err, decoded) {
        if (err) {

            res.send({
                code: 404,
                message: '提交订单失败',
                data: '用户未登录'
            })

        } else {
            const openid = decoded.openid
            const {
                startPlace,
                price,
                rightCityName,
                leftCityName,
                flightNum,
                startTime,
                startDayDate
            } = orderItem

            // 插入语句
            const strSql = `insert into userInfoList(openid, startDayDate, startTime, flightNum, leftCityName, rightCityName, price, startPlace) values('${openid}','${startDayDate}','${startTime}','${flightNum}','${leftCityName}','${rightCityName}','${price}','${startPlace}');`

            try {
                await sqlQuery(strSql)

                res.send({
                    code: 200,
                    message: '提交订单成功',
                    data: '即将跳转到订单页'
                })
            } catch (error) {

                // console.log(error)
                res.send({
                    code: 404,
                    message: '提交订单失败',
                    data: '无法重复提交订单'
                })
            }

        }
    })
})

module.exports = orderRouter


