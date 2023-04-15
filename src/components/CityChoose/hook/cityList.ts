import { getAirpostList } from '@/utils/api'

export async function getCityList() {

    // 发送请求获取数据
    let res: any = await getAirpostList()

    // 请求成功
    if (res.code == 200) {

        // 赋值按城市首字母排序的机场数组
        let airpostList: any = res.data


        // 结果城市机场数组 
        let cityList: any = []
        

        // 遍历赋值
        airpostList.forEach(function (item, index) {

            cityList[index] = {
                value: item.title,
                text: `城市首字母 ${item.title}`,
                children: []
            }

            let count = 0
            item.list.forEach(function (cityItem, i, arr) {

                if (cityItem.name == arr[i - 1]?.name) {

                    cityList[index].children[count - 1].children.push({
                        value: cityItem.airportName,
                        text: cityItem.airportName,
                    })

                } else {

                    cityList[index].children[count] = {
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


        return cityList
    }

    // 请求失败
    if (res.code != 200) return []
}