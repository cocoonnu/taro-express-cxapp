import Taro from '@tarojs/taro'

export default {

    // 发送请求函数
    request: function(options: any) {

        // 拆解配置参数
        const {
            url, 
            data = {}, 
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
    },



    // 显示 loading 框
    showLoading: function (params: any = '加载中') {

        // 默认配置
        let options = { title: params, mask: true }

        // 接收直接传入title
        if (Object.prototype.toString.call(params) === "[object Object]") {
            // @ts-ignore
            options = { ...options, ...params }
        }

        Taro.showLoading(options)
    },


    // 隐藏 loading 框
    hideLoading: function() {
        Taro.hideLoading()
    },


    // 消息提示框
    showToast: function (params: any = '成功') {

        // 默认配置
        let options = { title: params, icon: 'none', duration: 2000 }

        // 接收直接传入title
        if (Object.prototype.toString.call(params) === "[object Object]") {
            // @ts-ignore
            options = { ...options, ...params }
        }

        // @ts-ignore
        Taro.showToast(options)
    },
    

}
