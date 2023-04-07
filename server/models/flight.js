const express = require('express')
const dayjs = require('dayjs')
const Mock = require('mockjs')
const Random = Mock.Random
const flightRouter = express.Router()
const customParseFormat = require('dayjs/plugin/customParseFormat')
const utc = require('dayjs/plugin/utc')
dayjs.extend(customParseFormat)
dayjs.extend(utc)


flightRouter.get('/getflightList', async function(req, res) {

    // 一个机票的信息如下：
    // 日期 02月13日 周一
    // 起始结束时间 08:50  
    // 时间差 1小时40分
    // 起始结束地址 南昌杭州
    // 航班：EU2280

    const { chooseDate, rightCityName, leftCityName } = req.query

    // 生成起始日期
    const startDay = dayjs.utc(`${chooseDate}`, 'YYYY-MM-DD')
    const startDayDate = startDay.format('MM月DD日')
    const weekArr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
    const startWeek = weekArr[startDay.day()]


    // 航班数组长度
    const flightLength = Random.natural(8, 15)

    // 航班数组
    const flightArr = []

    for (let i = 0; i < flightLength; i++) {
     
        
        // 生成起始时间
        const startTime = Random.time('HH:') + Random.integer(0, 5) + (Random.boolean() ? 5 : 0)
        

        // 生成时间差
        const hour = Random.integer(1, 12)
        const min = Random.integer(1, 5) * 10 + (Random.boolean() ? 5 : 0)

        // 获取结束时间
        const end = dayjs(startTime, 'HH:mm').add(hour, 'hour').add(min, 'minute')
        const endTime = end.format('HH:mm')
        

        // 获取结束日期
        let endDay = dayjs.utc(`${chooseDate}-${startTime}`, 'YYYY-MM-DD-HH:mm')
        endDay = endDay.add(hour, 'hour').add(min, 'minute')
        let endDayDate = endDay.format('MM月DD日')
        const weekArr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]
        const endWeek = weekArr[endDay.day()]

        // 航班号
        const flightNum = `EU${Random.integer(1000, 9999)}`

        // push
        flightArr.push({
            startDayDate,
            startWeek,
            endDayDate,
            endWeek,
            startTime,
            endTime,
            flightNum,
            leftCityName,
            rightCityName,
            timeDiff: `${hour}小时${min}分钟`
        })

    }


    // 延时发送
    setTimeout(function() {
        res.send({
            code: 200,
            message: '请求成功',
            data: flightArr
        })
    }, 1500)
    
})

module.exports = flightRouter


