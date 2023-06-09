import { defineStore } from 'pinia'
import { extractDate, formatDate } from '@/utils/time'

export const useHoemStore = defineStore('home', {

    state: () => {

        return {

            // 首页顶部城市地址
            homeTopCity: '正在获取定位' as string,

            // 首页左边城市
            leftCityName: '南昌' as string,

            // 首页出发城市机场
            startPlace: '昌北国际机场' as string,

            // 首页左边城市
            rightCityNme: '杭州' as string,

            // 首页日期展示 4月5号
            homeDate: extractDate(new Date()) as string,

            // 当前选中的日期 2023-04-05
            chooseDate: formatDate(new Date()) as string,

            // 首页日期与今日天数差
            homeDayDiff: 0 as number,
        }
    },

    getters: {},

    actions: {

        // 首页城市交换
        changeCityNme() {
            
            let flag = this.leftCityName
            this.leftCityName = this.rightCityNme
            this.rightCityNme = flag
        }

    }
})