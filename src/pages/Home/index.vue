<script setup lang="ts">
import BuyFrame from '@/components/BuyFrame/index.vue'
import OrderItem from '@/components/OrderItem/index.vue'
import SwiperBox from '@/components/SwiperBox/index.vue'
import OrderDetail from '@/components/OrderDetail/index.vue'

</script>


<template>
<view class="home-container">
    <view class="background"></view>

    <view class="home-content">

        <!-- 头部 -->
        <view class="home-top">
            <view class="top-area">
                <view class="area-content">南昌</view>
                <image src="@/assets/iconsvg/direction-d.svg" />
            </view>

            <view class="top-icon">
                <image src="@/assets/iconsvg/search.svg" />
                <image src="@/assets/iconsvg/scan.svg" />
            </view>
        </view>


        <!-- tab栏 -->
        <BuyFrame/>


        <!-- 订单预览组件 -->
        <OrderItem/>


        <!-- 轮播图 -->
        <!-- <SwiperBox/> -->
        <OrderDetail/>

    </view>

</view>
</template>


<style lang="scss">
.home-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FAFCFB;


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