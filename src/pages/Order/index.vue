<script setup lang="ts">
import downIcon from '@/assets/images/down.png'
import OrderDetail from '@/components/OrderDetail/index.vue'
import OrderNull from '@/assets/images/null.png'
import checkLogin from '@/utils/checkLogin'
import Taro from '@tarojs/taro'
import { useLoad } from '@tarojs/taro'
import { ref } from 'vue'


// 如果未登录则跳转
useLoad(async function() {
    // 判断是否登录
    let res = await checkLogin()

    if (!res) {

        // 跳转到登录页
        Taro.navigateTo({
            url: '/pages/WeLogin/index?path=/pages/Order/index'
        })
    }
})


const orderTabValue = ref<number>(0)


function changeTabList(tab: any) {
    orderTabValue.value = tab.paneKey as number

    console.log(orderTabValue.value)
}


</script>


<template>
    <view class="order-container">

        <view class="order-top">
            <view class="top-content">
                <view class="top-content-text">全部订单</view>
                <image :src="downIcon"/>
            </view>
        </view>

 
        <nut-navbar>
            <template #content>
                <nut-tabs v-model="orderTabValue" @click="changeTabList">

                    <!-- 默认tab.paneKey：0、1、2、3  -->
                    <nut-tab-pane title="全部"></nut-tab-pane>
                    <nut-tab-pane title="待支付"></nut-tab-pane>
                    <nut-tab-pane title="待出行"></nut-tab-pane>
                    <nut-tab-pane title="已完成"></nut-tab-pane>

                </nut-tabs>
            </template>
        </nut-navbar>


        <!-- 全部订单 -->
        <view  v-if="orderTabValue == 0" class="order-content-all">

            <!-- 订单 -->
            <OrderDetail/>

            <!-- 分隔线 -->
            <view class="split-line">
                <view class="split-line-top">
                    <view class="split-line-top-line"></view>
                    已显示全部订单
                    <view class="split-line-top-line"></view>
                </view>

                <div class="split-line-bottom">订单仅支持查看概要</div>
            </view>

        </view>
      

        <!-- 其他订单 -->
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


    .nut-navbar {
        height: 84.62px;
        padding: 0;
        box-shadow: none;
        background-color: #fff;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .nut-navbar__title {
            width: 580.77px;
            height: 61.54px;            
            margin-top: 23px;            
        }

        .nut-tabs {
            width: 100%;
            height: 100%;

            .nut-tabs__titles {
                height: 100%;
                padding: 0;
            }

            .nut-tabs__list {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                column-gap: 81px;

                .nut-tabs__titles-item {
                    width: 61.54px;
                    height: 61.54px;          
                    font-size: 28px;
                    color: #222625;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    &.active {
                        color: #14B2B5;
                        font-weight: 500;
                    }
                }
            }
        }

        .nut-tabs__titles-item__smile, 
        .nut-tabs__titles-item__line {
            bottom: 0;
            height: 7px;
            background: #14B2B5;
        }
    
        .nut-tabs__titles-item.active 
        .nut-tabs__titles-item__line {
            width: 100%;
            height: 7px;
            background: #14B2B5;
        }
    }


    .order-content-all {
        box-sizing: border-box;
        padding: 31px 46px 0 46px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        row-gap: 31px;

        .split-line {
            height: 61.54px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;            
            row-gap: 6px;            

            .split-line-top {
                height: 30.77px;
                font-size: 20px;
                color: #B4C2C2;
                display: flex;
                align-items: center;
                column-gap: 6px;

                .split-line-top-line {
                    width: 190.38px;
                    height: 1.92px;
                    background: #DFE5E6;                    
                }
            }

            .split-line-bottom {
                font-size: 19.23px;
                color: #DFE5E6;
            }
        }
    }


    .order-content-other {
        width: 100%;
        height: 1125px;
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
            font-size: 23px;
            color: #B4C2C2;
        }
    }
}
</style>