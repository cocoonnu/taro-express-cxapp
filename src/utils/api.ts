import tools from './tools'

const baseURL = 'http://localhost:3000'

export function getUsersData() {
    return tools.request({ url: `${baseURL}/user/getUsers`})
}

export function getAirpostList() {
    return tools.request({ url: `${baseURL}/airpost/getAirpostList`})
}

export function getflightList(data: any) {
    return tools.request({ url: `${baseURL}/flight/getflightList`, data })
}