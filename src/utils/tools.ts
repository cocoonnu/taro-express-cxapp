import Taro from '@tarojs/taro'

export default {

    // 发送请求函数
    // https://nervjs.github.io/taro-docs/docs/apis/network/request/
    request: function(options: any) {

        // 拆解配置参数
        const {
            url, 
            data = {} , 
            method = 'GET', 
            ...rests
        } = options

        // 返回一个 Promise
        return new Promise(function (resolve, reject) {

            // 发送 Taro.request
            Taro.request({
                url, data, method, ...rests,

                // 请求成功的回调
                success: function ({ data }) {

                    if (data.code) resolve(data)
                    else reject('发送请求失败！请检查接口地址是否正确')
                },

                // 请求失败的回调
                fail: function(err) {
                    reject(err)
                    console.log('发送请求失败！请检查接口地址是否合规')
                }
            })

        })
    }
}
