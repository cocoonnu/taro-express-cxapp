const express = require('express')
const flightRouter = express.Router()


flightRouter.post('/getflightList', async function(req, res) {

    console.log(req)
    res.send({
        code: 200,
        message: '请求成功',
        data: req.query
    })
})

module.exports = flightRouter


