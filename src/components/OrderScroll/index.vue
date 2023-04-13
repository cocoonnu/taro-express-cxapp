<script setup lang="ts">
import PageOrder from '@/components/PageOrder/index.vue'
import { useOrderStore } from '@/store/order'
import { ref, computed } from 'vue'

const orderStore = useOrderStore()


// 用户订单数组
const orderList = computed(() => orderStore.userOrderList)

// 滚动条位置
let scrollTop = ref<number>(0)

</script>

<template>
    <view class="order-scroll">

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
                v-for="(item, index) in orderList"
                :key="index"
            >
                <PageOrder :orderItem="item"/>
            </view>


            <view class="split-line">
                <view class="split-line-top">
                    <view class="split-line-top-line"></view>
                        已显示全部订单
                    <view class="split-line-top-line"></view>
                </view>

                <div class="split-line-bottom">订单仅支持查看概要</div>
            </view>

        </scroll-view>        

    </view>
    
</template>

<style lang="scss">
.order-scroll {
    width: 100%;
    height: 100%;
    padding: 0px 46px 0px 46px;
    box-sizing: border-box;

    .scroll-view-container {
        
        .scroll-view-top {
            width: 100%;
            height: 31px;
        }
        
        .scroll-view-item {
            width: fit-content;
            margin-top: 31px;

            &:nth-child(2) {
                margin-top: 0;
            }
        }

        .split-line {
            height: 130px;
            display: flex;
            flex-direction: column;
            justify-content: center;
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
}

</style>