<script setup lang="ts">
// 引入静态资源
import directiond from '@/assets/iconsvg/direction-d.svg'
import search from '@/assets/iconsvg/search.svg'
import scan from '@/assets/iconsvg/scan.svg'

// 引入 API
import Taro from '@tarojs/taro'
import { onMounted } from 'vue'
import tools from '@/utils/tools'
import { useHoemStore } from '@/store/home'


// 创建仓库
const homeStore = useHoemStore()


onMounted(function() {

    // 获取城市经纬度
    Taro.getLocation({
        type: 'gcj02',

        success: function (res) {
            const latitude = res.latitude
            const longitude = res.longitude

            getCityLocation(latitude, longitude)
        }
    })    
})


// 获取城市定位
function getCityLocation(lat, lng) {

    let key = 'OF2BZ-Z57R3-TLF3M-RHVG3-JQCWE-4WFYY'
    tools.showLoading('正在获取定位')

    Taro.request({
        url: `https://apis.map.qq.com/ws/geocoder/v1/?key=${key}&location=${lat},${lng}`,

        success: function(res) {
            // console.log(res.data)
            tools.hideLoading()
            const cityName = res.data.result.address_component.city

            // 更新顶部城市名
            homeStore.homeTopCity = cityName

            // 更新左边城市名
            homeStore.leftCityName = cityName.substr(0, cityName.length - 1)
        },

        fail: function() {
            tools.hideLoading()
            tools.showToast('无法获取定位')
            homeStore.homeTopCity = '无法获取定位'
        }
    })
}

</script>

<template>
    <view class="home-top">
        <view class="top-area">
            <view class="area-content">{{ homeStore.homeTopCity }}</view>
            <image :src="directiond" />
        </view>

        <view class="top-icon">
            <image :src="search" />
            <image :src="scan" />
        </view>
    </view>
</template>

<style lang="scss">
.home-top {
    width: 658px;
    height: 81px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-area {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        .area-content {
            height: 46.15px;
            line-height: 46.15px;
            text-align: left;
            font-size: 36px;
            font-weight: 500;
        }            

        image {
            width: 46.15px;
            height: 46.15px;                
        }
    }

    .top-icon {
        width: 123px;
        height: 46px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        image {
            width: 46px;
            height: 46px;
        }
    }
}
</style>