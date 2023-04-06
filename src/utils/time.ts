// 从时间中提取年月日时分秒
export function extract(date: Date) {
    // extractDate(new Date()) ['2022', '09', '19', '18', '06', '11', '187']

    const d = new Date(new Date(date).getTime() + 8 * 3600 * 1000)
    return new Date(d).toISOString().split(/[^0-9]/).slice(0, -1)
}


// 从时间中提取月份和日期
export function extractDate(date: Date) {
    const dateArr = extract(date)

    let mouth = dateArr[1]
    if (parseInt(mouth) < 10) mouth = mouth.slice(1)

    let day = dateArr[2]
    if (parseInt(day) < 10) day = day.slice(1)

    return `${mouth}月${day}日`
}


// 计算两个日期距离的天数
export function getDayDiff(date1: Date, date2: Date) {

    // 获取时间戳
    const time1Stamp = date1.getTime()
    const time2Stamp = date2.getTime()    

    if (time1Stamp == time2Stamp) return 0

    let day = Math.abs(time1Stamp - time2Stamp)
    return Math.ceil(day / (24 * 3600 * 1000))
}


// 从时间中获取星期数
export function getWeekValue(date: Date) {
    const weekArr = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"]

    return weekArr[date.getDay()]
}