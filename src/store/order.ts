import { defineStore } from 'pinia'
import { getflightList, fetchOrderList } from '@/utils/api'
import { useHoemStore } from '@/store/home'
import Taro from '@tarojs/taro'
import tools from '@/utils/tools'

const homeStore = useHoemStore()

export const useOrderStore = defineStore('order', {

    state: () => {

        return {

            // 详情页机票信息数组
            flightInfoArr: [] as Array<FlightInformation>,

            // 详情页订单信息
            flightItemInfo: {} as FlightInformation,

            // 订单页用户订单数组
            userOrderList: [] as Array<UserOrderList>
        }
    },

    getters: {},

    actions: {


        // 获取详情页机票信息数组
        async fetchFlightInfoArr() {

            // 发送请求
            let res: any = await getflightList({
                chooseDate: homeStore.chooseDate,
                leftCityName: homeStore.leftCityName,
                rightCityName: homeStore.rightCityNme,
                startPlace: homeStore.startPlace
            })

            // console.log(res.data)
            if (res) this.flightInfoArr = res.data
        },


        // 查询获取订单页用户订单数组
        async getOrderList() {
            tools.showLoading()

            const loginToken = Taro.getStorageSync('loginToken')
            const res: any = await fetchOrderList({ loginToken })

            if (res.code == 200) {
                this.userOrderList = res.data
            }

            tools.hideLoading()
        }

    }
})


interface FlightInformation {
    startDayDate: string,
    startWeek: string,
    endDayDate: string,
    endWeek: string,
    startTime: string,
    endTime: string,
    flightNum: string,
    leftCityName: string,
    rightCityName: string,
    timeDiff: string,
    startPlace: string,
    price: number
}

interface UserOrderList {
    startPlace: string,
    price: number,
    rightCityName: string,
    leftCityName: string,
    flightNum: string,
    startTime: string,
    startDayDate: string
}