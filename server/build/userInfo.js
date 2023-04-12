// 创建用户订单数据表
// 用户id openid
// 起始日期 02月13日
// 起始时间 08:50
// 起始结束地址 南昌杭州
// 航班：EU2280
// 价格：1600
// 出发机场：大连周水子机场1号航站楼出发

const sqlQuery = require('../mysql')


module.exports.buildUserInfoList = async function() {

    const strSql = `
        create table userInfoList(
            openid char(50) not null,
            startDayDate char(50) not null,
            startTime char(50) not null,
            flightNum char(50) not null,
            leftCityName char(50) not null,
            rightCityName char(50) not null,
            price char(50) not null,
            startPlace char(50) not null,
            primary key (flightNum)
        );
    `

    try {
        
        // 创建表
        await sqlQuery(`drop table if exists userInfoList`)
        await sqlQuery(strSql)
    
        console.log('成功创建用户订单数据表')
    } catch (error) {
        console.log('创建用户订单数据表失败')        
        console.log(error)
    }
}