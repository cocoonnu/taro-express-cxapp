<script setup lang="ts">
import HomeTop from '@/components/HomeTop/index.vue'
import BuyFrame from '@/components/BuyFrame/index.vue'
import CityChoose from '@/components/CityChoose/index.vue'
import OrderItem from '@/components/OrderItem/index.vue'
import SwiperBox from '@/components/SwiperBox/index.vue'

</script>


<template>
<view class="home-container">
    <view class="home-background"></view>

    <view class="home-content">

        <!-- 头部 -->
        <HomeTop/>

        <!-- tab栏 -->
        <BuyFrame/>

        <!-- 订单预览组件 -->
        <OrderItem/>

        <!-- 轮播图 -->
        <SwiperBox/>

        <!-- 城市选择模态框 -->
        <CityChoose/>
        
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

    .home-background {
        width: 100%;
        height: 1300px;
        background: url('../../assets/images/background.png') no-repeat;
        background-size: cover;
    }

    .home-content {
        margin-top: -1145px;
        color: #222625;
    }    
}
</style>