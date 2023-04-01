module.exports = function(app) {

    // 根路径  路由配置
    app.use('/test', require('./test'))
}