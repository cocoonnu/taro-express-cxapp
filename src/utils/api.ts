import tools from './tools'

const baseURL = 'http://localhost:3000'

// 参数 data 必须为一个对象！！

export function getUsersData() {
    return tools.request({ url: `${baseURL}/user/getUsers`})
}

export function getAirpostList() {
    return tools.request({ url: `${baseURL}/airpost/getAirpostList`})
}

export function getflightList(data: any) {
    return tools.request({ url: `${baseURL}/flight/getflightList`, data })
}

export function getLoginKey(data: any) {
    return tools.request({ url: `${baseURL}/login/getLoginKey`, data })
}

export function checkLoginKey(data: any) {
    return tools.request({ url: `${baseURL}/login/checkLoginKey`, data })
}

export function addOrderItem(data: any) {
    return tools.request({ url: `${baseURL}/order/addOrderItem`, data })
}