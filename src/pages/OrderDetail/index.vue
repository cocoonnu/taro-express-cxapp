<script setup lang="ts">
import FlightItem from '@/components/FlightInfo/FlightItem/index.vue'
import arrowLeft from '@/assets/images/arrowLeft.png'
import uncolor from '@/assets/images/uncolor.png'
import color from '@/assets/images/color.png'
import { useOrderStore } from '@/store/order'
import { addOrderItem } from '@/utils/api'
import tools from '@/utils/tools'
import Taro from '@tarojs/taro'


const orderStore = useOrderStore()
 
async function clickOrderBtn() {
    tools.showLoading()

    let res: any = await addOrderItem({
        loginToken: Taro.getStorageSync('loginToken'),

        orderItem: {
            startDayDate: orderStore.flightItemInfo.startDayDate,
            startTime: orderStore.flightItemInfo.startTime,
            flightNum: orderStore.flightItemInfo.flightNum,
            startPlace: orderStore.flightItemInfo.startPlace,
            price: orderStore.flightItemInfo.price,
            rightCityName: orderStore.flightItemInfo.rightCityName,
            leftCityName: orderStore.flightItemInfo.leftCityName
        }
    })

    tools.hideLoading()

    Taro.showModal({
        title: res.message,
        content: res.data,
        showCancel: false,

        success: function () {

            if (res.code == 200) {
                Taro.switchTab({ url: '/pages/Order/index' })
            }
        }
    })
}
</script>

<template>
    <view class="order-detail-container">

        <!-- 头部 -->
        <view class="ticket-container-top">
            <view class="top-content">

                <view class="top-content-icon" @click="Taro.navigateBack">
                    <image :src="arrowLeft" />
                </view>
                <view class="top-content-text">
                    请确认订单
                </view>

            </view>
        </view>

        <view class="order-detail-item" v-if="orderStore.flightItemInfo">
            <FlightItem :flightItemInfo="orderStore.flightItemInfo"/>
        </view>

        <view class="order-detail-people">
            <view class="order-detail-people-left">
                <view class="people-content">
                    <view class="people-name">微信用户</view>
                    <view class="people-icon">成人票</view>
                </view>
    
                <view class="people-text">身份证：222402198610173253</view>
                <view class="people-text">手机号：13329858547</view>
            </view>

            <view class="order-detail-people-right">
                ¥{{ orderStore.flightItemInfo.price }}
            </view>
        </view>

        <view class="order-detail-seat">
            <view class="seat-title">座位预览</view>
            <view class="seat-image"><image :src="color"/></view>
            <view class="seat-image"><image :src="uncolor"/></view>
            <view class="seat-text">
                · 若剩余席位无法满足您的需求，系统将自动为您分配接近席位
            </view>
        </view>

        <view class="order-detail-bth" @click="clickOrderBtn">
            提交订单
        </view>
    </view>
</template>

<style lang="scss">
.order-detail-container {
    width: 100%;
    min-height: 100vh;
    background-color: #F2F5F5;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 40px;

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

            .top-content-icon {
                width: 46.15px;
                height: 46.15px;

                image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            .top-content-text {
                font-size: 32px;
                color: #222625;
                margin-left: 190px;
            }
        }
    }


    .order-detail-item {
        width: 657.69px;
        height: 311.54px;
        // margin-top: 31px;
        border-radius: 15.38px;
        background-color: #fff;
    }

    .order-detail-people {
        width: 657.69px;
        height: 195.62px;
        // margin-top: 31px;
        border-radius: 15.38px;
        background-color: #fff;
        padding: 31px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;

        .order-detail-people-left {
            width: fit-content;

            .people-content {
                width: fit-content;
                height: 46.15px;   
                display: flex;
                justify-content: center;
                align-items: center;
                column-gap: 15px;
                
                .people-name {
                    height: 46.15px;   
                    line-height: 46.15px;
                    font-size: 30.77px;
                    color: rgba(34, 38, 37, 1);
                }    
    
                .people-icon {
                    width: 73.08px;
                    height: 38.46px;
                    border-radius: 7.69px;
                    background: rgba(20, 178, 181, 0.1);
                    border: 1.92px solid rgba(20, 178, 181, 1);            
                    padding: 3.85px 7.69px 3.85px 7.69px;
                    box-sizing: border-box;
                    display: grid;
                    place-items: center;
                    font-size: 19.23px;
                    font-weight: 400;
                    color: rgba(20, 178, 181, 1);
                }
            }
    
            .people-text {
                height: 34.62px;
                font-size: 23.08px;
                line-height: 34.62px;
                color: rgba(180, 194, 194, 1);            
                margin-top: 10px;
            }
        }

        .order-detail-people-right {
            height: 46.15px;   
            line-height: 46.15px;
            font-size: 30.77px;
            color: rgba(255, 141, 26, 1);
        }

    }

    .order-detail-seat {
        width: 657.69px;
        height: 346.15px;
        border-radius: 15.38px;
        background: rgba(255, 255, 255, 1);      
        // margin-top: 31px;
        padding: 31px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        row-gap: 27px;

        .seat-title {
            height: 46.15px;
            line-height: 46.15px;
            font-size: 30.77px;
            color: rgba(34, 38, 37, 1);
        }

        .seat-image {
            width: 100%;
            height: 69.23px;

            image {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .seat-text {
            font-size: 19.23px;
            font-weight: 400;
            color: rgba(180, 194, 194, 1);
        }
  
    }

    .order-detail-bth {
        position: fixed;
        left: 46px;
        bottom: 180px;
        width: 657.69px;
        height: 107.69px;
        border-radius: 15.38px;
        background: linear-gradient(138.4deg, rgba(20, 178, 181, 1) 0%, 
        rgba(43, 194, 161, 1) 100%);
        padding: 0px 30.77px 0px 30.77px;
        box-sizing: border-box;
        display: grid;
        place-items: center;
        font-size: 30.77px;
        color: #fff;
    }
}
</style>