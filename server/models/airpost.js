const express = require('express')
const sqlQuery = require('../mysql')
const airpostRouter = express.Router()


// 返回按城市首字母排序的城市机场数组
airpostRouter.get('/getAirpostList', async function (req, res) {

    try {
        // 获取数据库机场数组
        let result = await sqlQuery(`SELECT * FROM airportList`)

        // 定义城市机场数组
        let airpostList = []

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

            // 初始化机场数组
            for (let i = 0; i < 26; i++) {
                airpostList.push({ title: String.fromCharCode(65 + i), list: [] })
            }

            // 插入数据
            airpostList.forEach(function (cityItem) {
                result.forEach(function (item) {

                    if (item.firstLetter == cityItem.title) {

                        cityItem.list.push({
                            name: item.cityName,
                            airportName: item.airportName
                        })
                    }
                })
            })

            // 过滤数据
            airpostList = airpostList.filter(item => {
                if (item.list.length > 0) return true
            })
        }

        res.send({ code: 200, message: '请求成功', data: airpostList })

    } catch (error) {

        console.log(error)
        res.send({ code: 404, message: '请求失败', data: null })
    }
})

module.exports = airpostRouter


