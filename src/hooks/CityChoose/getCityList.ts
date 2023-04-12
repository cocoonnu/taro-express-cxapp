import { getAirpostList } from '@/utils/api'
import Taro from '@tarojs/taro'

export default async function(cityList: any) {

    // 如果有存储则直接返回
    if (Taro.getStorageSync('cityList')) {
        cityList.value = Taro.getStorageSync('cityList')
        return
    }

    // 初始化
    for (let i = 0; i < 26; i++) {

        const item = { title: String.fromCharCode(65 + i), list: [] }
        cityList.value.push(item)
    }


    // 发送请求获取机场数据
    let res: any = await getAirpostList()
    // console.log(res)


    // 匹配并插入数据
    if (res.code == 200) {

        cityList.value.forEach(function (cityItem) {

            res.data.forEach(function (item) {

                if (item.firstLetter == cityItem.title) {

                    cityItem.list.push({
                        name: item.cityName,
                        airportName: item.airportName
                    })
                }
            })
        })
    }


    // 过滤数据
    cityList.value = cityList.value.filter(item => {
        if (item.list.length > 0) return true
    })

    // console.log(cityList.value)



    let result: any = []

    cityList.value.forEach(function(item, index) {

        result[index] = {
            value: item.title,
            text: `城市首字母 ${item.title}`,
            children: []
        }

        let count = 0
        item.list.forEach(function(cityItem, i, arr) {
            
            if (cityItem.name == arr[i - 1]?.name) {

                result[index].children[count - 1].children.push({
                    value: cityItem.airportName,
                    text: cityItem.airportName,
                })
                
            } else {

                result[index].children[count] = {
                    value: cityItem.name,
                    text: cityItem.name,
                    children: [{
                        value: cityItem.airportName,
                        text: cityItem.airportName,
                    }]
                }
    
                count++
            }

        })
    })

    cityList.value = result
    // console.log(cityList.value)

    // 存储结果
    Taro.setStorageSync('cityList', result)
}