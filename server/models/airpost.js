const express = require('express')
const sqlQuery = require('../mysql')
const airpostRouter = express.Router()


airpostRouter.get('/getAirpostList', async function (req, res) {

    try {
        const result = await sqlQuery(`SELECT * FROM airportList`)

        // 按照首字母排序
        // if (Array.isArray(result) && result.length) {

        //     // sort方法是按照字符串到ASCII进行排序
        //     result.sort((x, y) => {
        //         if (x.firstLetter < y.firstLetter) {
        //             return -1;
        //         } else if (x.firstLetter > y.firstLetter) {
        //             return 1;
        //         }
        //         return 0;
        //     })
        // }


        res.send({
            code: 200,
            message: '请求成功',
            data: result
        })
    } catch (error) {

        console.log(error)
        res.send({
            code: 404,
            message: '请求失败',
            data: null
        })
    }
})

module.exports = airpostRouter


