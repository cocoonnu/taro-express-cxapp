const express = require('express')
const sqlQuery = require('../mysql')
const testRouter = express.Router()


testRouter.get('/getUsers', async function(req, res) {

    try {
        const result = await sqlQuery(`SELECT * FROM users`)

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

module.exports = testRouter


