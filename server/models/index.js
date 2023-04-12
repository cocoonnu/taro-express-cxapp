module.exports = function(app) {

    // 根路径  路由配置
    app.use('/user', require('./user'))
    app.use('/airpost', require('./airpost'))
    app.use('/flight', require('./flight'))
    app.use('/login', require('./login'))
    app.use('/order', require('./order'))
}