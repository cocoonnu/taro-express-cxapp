<script setup lang="ts">
// 引入静态资源
import directiond from '@/assets/iconsvg/direction-d.svg'
import search from '@/assets/iconsvg/search.svg'
import scan from '@/assets/iconsvg/scan.svg'

// 引入组件
import BuyFrame from '@/components/BuyFrame/index.vue'
import OrderItem from '@/components/OrderItem/index.vue'
import SwiperBox from '@/components/SwiperBox/index.vue'

</script>


<template>
<view class="home-container">
    <view class="home-background"></view>

    <view class="home-content">

        <!-- 头部 -->
        <view class="home-top">
            <view class="top-area">
                <view class="area-content">南昌</view>
                <image :src="directiond" />
            </view>

            <view class="top-icon">
                <image :src="search" />
                <image :src="scan" />
            </view>
        </view>

        <!-- tab栏 -->
        <BuyFrame/>

        <!-- 订单预览组件 -->
        <OrderItem/>

        <!-- 轮播图 -->
        <SwiperBox/>

    </view>
</view>
</template>


<style lang="scss">
@import "@/assets/base64/bgurl.scss";


.home-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FAFCFB;

    .home-background {
        width: 100%;
        height: 1300px;
        background: url($backgroundUrl) no-repeat;
        background-size: cover;
    }


    .home-content {
        margin-top: -1145px;
        color: #222625;
    }

    
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
    
}
</style>