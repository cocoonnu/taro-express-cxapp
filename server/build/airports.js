// 创建并初始化airportList表

const sqlQuery = require('../mysql')
const axios = require('axios')

 
module.exports.buildAirPortList = async function() {

    // @ts-ignore
    let { data } = await axios.get('https://www.brown77.cn/city/airportList')

    // 请求失败则返回
    if (data.code != 1) return

    const strSql1 = `
        create table airportList(
            id int not null auto_increment,
            cityName char(50) not null,
            cityId int not null,
            firstLetter char(50) not null,
            airportName char(50) not null,
            primary key (id)
        );
    `

    // 创建表
    await sqlQuery(`drop table if exists airportList`)
    await sqlQuery(strSql1)

    let promiseAll = []

    // 插入数据
    for (let i = 0; i < data.result.length; i++) {
        
        const { id, cityId, cityName, firstLetter, airportName } = data.result[i]

        const strSql2 = `insert into airportList(id, cityName, cityId, firstLetter, airportName) values(${id},'${cityName}',${cityId},'${firstLetter}','${airportName}');`

        let res = sqlQuery(strSql2)
        promiseAll.push(res)
    }


    // 判断是否成功
    try {
        await Promise.all(promiseAll)
        console.log('成功爬取机场数据！')

    } catch (error) {
        console.log(error)
    }
}


