import { defineStore } from 'pinia'

export const useHoemStore = defineStore('main', {

    state: () => {
        return {

            // 首页左边城市
            leftCityName: '南昌' as string,

            // 首页左边城市
            rightCityNme: '杭州' as string
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