import tools from './tools'

const baseURL = 'http://localhost:3000'

export function getTextData() {
    return tools.request({ url: `${baseURL}/test/getUsers` })
}