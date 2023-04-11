import { defineStore } from 'pinia'
import { getflightList } from '@/utils/api'
import { useHoemStore } from '@/store/home'
const homeStore = useHoemStore()


export const useOrderStore = defineStore('order', {

    state: () => {

        return {

            // 机票信息数组
            flightInfoArr: [] as Array<FlightInformation>,

            // 详情页订单信息
            flightItemInfo: {} as FlightInformation
        }
    },

    getters: {},

    actions: {


        //初始化机票信息数组
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