<script setup lang="ts">
import downIcon from '@/assets/images/down.png'
import OrderNull from '@/assets/images/null.png'
import OrderScroll from '@/components/OrderScroll/index.vue'
import OrderFrame from '@/components/OrderFrame/index.vue'
import { useOrderStore } from '@/store/order'
import checkLogin from '@/utils/checkLogin'
import { useDidShow } from '@tarojs/taro'
import Taro from '@tarojs/taro'
import { ref } from 'vue'

const orderStore = useOrderStore()


// 页面展示时执行
useDidShow(async function() {

    // 如果未登录则跳转
    let res = await checkLogin()
    if (!res) {

        // 跳转到登录页
        Taro.navigateTo({
            url: '/pages/WeLogin/index?path=/pages/Order/index'
        })

    } else {
        // 查询获取订单页用户订单数组
        await orderStore.getOrderList()
    }
})


const orderTabValue = ref<string>('0')


</script>


<template>
    <view class="order-container">

        <!-- 顶部 -->
        <view class="order-top">
            <view class="top-content">
                <view class="top-content-text">全部订单</view>
                <image :src="downIcon"/>
            </view>
        </view>


        <!-- tab栏 -->
        <OrderFrame v-model:orderTabValue="orderTabValue" /> 


        <!-- 显示用户订单 -->
        <view  
            v-if="orderTabValue == '0' && orderStore.userOrderList.length > 0"
            class="order-content-all"
        >
            <OrderScroll/>
        </view>
      

        <!-- 显示空订单 -->
        <view v-else class="order-content-other">
            <image :src="OrderNull"/>
            <view class="other-text">当前暂无数据</view>
        </view>

    </view>    
</template>


<style lang="scss">
.order-container {
    min-height: 100vh;
    background-color: #F2F5F5;
   

    .order-top {
        width: 100%;
        height: 169.23px;
        background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .top-content {
            height: 46.15px;
            line-height: 46.15px;
            margin-top: 104px;
            font-size: 30.7px;
            color: #222625;
            display: flex;

            .top-content-text {
                margin-top: -2px;
            }

            image {
                width: 46.15px;
                height: 46.15px;                
            }
        }
    }


    .order-content-all {
        height: calc(100vh - 253.85px);
    }


    .order-content-other {
        height: calc(100vh - 253.85px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        row-gap: 46px;

        image {
            width: 276.92px;
            height: 292.31px;            
        }

        .other-text {
            font-size: 26px;
            color: #B4C2C2;
        }
    }
}
</style>