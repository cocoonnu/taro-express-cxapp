<script setup lang="ts">
import arrowLeft from '@/assets/images/arrowLeft.png'
import CalendarTab from '@/components/CalendarTab/index.vue'
import Taro from '@tarojs/taro'

</script>

<template>
    <view class="ticket-container">

        <view class="ticket-container-top">
            <view class="top-content">

                <view class="top-content-icon" @click="Taro.navigateBack">
                    <image :src="arrowLeft" />
                </view>
                <view class="top-content-text">南昌 - 杭州</view>

            </view>
        </view>


        <CalendarTab/>
    </view>
</template>

<style lang="scss">
.ticket-container {
    width: 100%;
    min-height: 100vh;
    background-color: #F2F5F5;

    .ticket-container-top {
        width: 100%;
        height: 180px;
        overflow: hidden;
        background-color: #fff;

        .top-content {
            margin-top: 105px;
            margin-left: 46px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            image {
                width: 46.15px;
                height: 46.15px;
            }

            .top-content-text {
                font-size: 32px;
                color: #222625;
                margin-left: 190px;
            }
        }
    }

}
</style>