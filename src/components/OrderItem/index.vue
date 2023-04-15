<script setup lang="ts">
import orderAircraft from '@/assets/images/orderAircraft.png'
import right from '@/assets/images/right.png'
import { useOrderStore } from '@/store/order'
import { computed, onMounted } from 'vue'
import Taro from '@tarojs/taro'
const orderStore = useOrderStore()

onMounted(async function() {

    // 查询获取订单页用户订单数组
    await orderStore.getOrderList()
})

// 用户订单数组
const homeOrderItem = computed(() => orderStore.userOrderList[0])


function toOrderPage() {
    Taro.switchTab({ url: '/pages/Order/index' })
}
</script>


<template>
    <view class="order-item" v-if="homeOrderItem">
        <view class="order-item-content">

            <view class="order-item-content-icon">
                <image :src="orderAircraft"/>
            </view>


            <view class="order-item-content-text">
                <view class="order-item-content-text-item">
                    <view class="colorB4C2C2">本人行程：</view>
                    <view class="color14B2B5">
                        {{ homeOrderItem.flightNum }}
                    </view>
                    <view class="color222625">
                        {{ homeOrderItem.leftCityName }} - {{ homeOrderItem.rightCityName }}
                    </view>
                </view>

                <view class="order-item-content-text-item">
                    <view class="colorB4C2C2">出发时间：</view>
                    <view class="color222625">{{ homeOrderItem.startDayDate }}}</view>
                    <view class="color222625">{{ homeOrderItem.startTime }}</view>
                </view>
            </view>
        </view>


        <view class="order-item-skip" @click="toOrderPage">
            <view class="colorB4C2C2">机票详情</view>
            <image :src="right"></image>
        </view>
    </view>
</template>


<style lang="scss">
.order-item {
    width: 657.69px;
    height: 146.15px;
    border-radius: 23.08px;    
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 23px;
    margin-top: 35px;


    .order-item-content {
        height: 84.62px;        
        margin-left: 31px;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;

        .order-item-content-icon {
            width: 46.15px;
            height: 46.15px;
            display: grid;
            place-items: center;
            border-radius: 100%;
            background: linear-gradient(138.4deg, #36D696 0%, #4EE6A9 100%);            

            image {
                width: 23.08px;
                height: 23.08px;                
            }
        }

        .order-item-content-text {
            height: 84.62px;            
            margin-left: 15px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;

            .order-item-content-text-item {
                display: flex;
                column-gap: 8px
            }
        }   
    }


    .order-item-skip {
        width: 138.46px;
        height: 46.15px;   
        display: flex;
        align-items: center;
        margin-right: 15px;    

        image {
            width: 46.15px;
            height: 46.15px;            
        }
    }


    .color14B2B5 {
        color: #14B2B5;
    }

    .color222625 {
        color: #222625;
    }

    .colorB4C2C2 {
        color: #B4C2C2;
    }
}
</style>