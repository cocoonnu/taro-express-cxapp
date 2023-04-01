// 导入模块
const mysql = require('mysql2')


// 创建一个数据库连接
const options = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'taro-mysql'
}


// 创建一个数据库连接
const connection = mysql.createConnection(options)


// 查看是否连接成功
connection.connect(err => {
    if(!err) console.log('连接数据库成功')
})


// 封装查询函数
function sqlQuery(strSql) {

    return new Promise(function(resolve, reject) {
        connection.query(strSql, function(err, results) {
            if (err) {
                reject(err)
                return 
            }

            resolve(results)
        })
    })
}


// 导出查询函数
module.exports = sqlQuery