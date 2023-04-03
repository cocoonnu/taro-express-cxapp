const express = require('express')
const sqlQuery = require('../mysql')
const airpostRouter = express.Router()


airpostRouter.get('/getAirpostList', async function (req, res) {

    try {
        let result = await sqlQuery(`SELECT * FROM airportList`)

        if (result.length) {
            
            // 按照城市名排序
            result.sort(function(a, b) {

                if (a.firstLetter > b.firstLetter) return 1
                if (a.firstLetter < b.firstLetter) return -1
                if (a.firstLetter = b.firstLetter)  {

                    if (a.cityName < b.cityName) return -1
                    if (a.cityName > b.cityName) return 1
                    return 0
                }

            })


            // 过滤重复数据
            result = result.filter(function(item, index) {
                if (item.airportName == result[index - 1]?.airportName) return false
                return true
            })
        }



        res.send({ code: 200, message: '请求成功', data: result })
    } catch (error) {

        console.log(error)
        res.send({ code: 404, message: '请求失败', data: null })
    }
})

module.exports = airpostRouter


