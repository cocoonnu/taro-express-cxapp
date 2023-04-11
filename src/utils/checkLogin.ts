// 判断是否登录或登录过期

import { checkLoginKey } from '@/utils/api'
import Taro from '@tarojs/taro'

export default async function() {

    const loginToken = Taro.getStorageSync('loginToken')

    let res: any = await checkLoginKey({ loginToken })
    return res.data // true or false
}