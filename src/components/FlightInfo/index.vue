<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useOrderStore } from '@/store/order'
import FlightItem from './FlightItem/index.vue'
import Taro from '@tarojs/taro'
const orderStore = useOrderStore()


onMounted(function() {

    // 监听事件 点击顶部日历栏时回到顶部
    Taro.eventCenter.on('toTopFlightInfo', () => {
        scrollTop.value = 0
        setTimeout(() => { scrollTop.value = -1 }, 1000)
    })

})


// 异步加载数据
await orderStore.fetchFlightInfoArr()


// 机票信息数组
let filghtArr = computed(() => orderStore.flightInfoArr)


// 滚动条位置
let scrollTop = ref<number>(-1)


// 跳转到订单详细页
function goOrderDetail(flightItemInfo) {

    // 设置当前详情页订单信息
    orderStore.flightItemInfo = flightItemInfo

    Taro.navigateTo({
        url: '/pages/OrderDetail/index',
    })
}

</script>

<template>

    <view class="fight-content" v-if="filghtArr.length > 0">

        <!-- 竖向滚动 -->
        <scroll-view 
            :scroll-y="true" 
            style="height: 100%;" 
            :scroll-top="scrollTop"
            :scrollWithAnimation="true"
            :enhanced="true"
            :showScrollbar="false"
            class="scroll-view-container"
        >
            <view class="scroll-view-top"></view>

            <view 
                class="scroll-view-item" 
                v-for="(item, index) in filghtArr"
                :key="index"
                :id="`scroll-view-item${index}`"
                @click="goOrderDetail(item)"
            >
                <FlightItem :flightItemInfo="item"/>
            </view>
            
            <view class="scroll-view-bottom"></view>
        </scroll-view>        

    </view>

</template>

<style lang="scss">
.fight-content {
    width: 100%;
    height: calc(100vh - 311px);
    padding: 0 46px;
    box-sizing: border-box;


    .scroll-view-container {
        
        .scroll-view-top {
            width: 100%;
            height: 31px;
        }
    
        .scroll-view-item {
            width: 100%;
            height: 311.54px;
            margin-top: 31px;
            border-radius: 15.38px;
            background-color: #fff;
    
            &:nth-child(2) {
                margin-top: 0;
            }
        }
    
        .scroll-view-bottom {
            width: 100%;
            height: 60px;
        }
    }
}

</style>