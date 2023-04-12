<script setup lang="ts">
import PageOrder from '@/components/PageOrder/index.vue'
import { ref } from 'vue'

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

            
            <PageOrder class="scroll-view-item"/>
            <PageOrder class="scroll-view-item"/>


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
    padding: 0px 46px 31px 46px;
    box-sizing: border-box;

    .scroll-view-container {
        
        .scroll-view-top {
            width: 100%;
            height: 31px;
        }
        
        .scroll-view-item {
            margin-top: 31px;

            &:nth-child(2) {
                margin-top: 0;
            }
        }

        .split-line {
            height: 61.54px;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;            
            row-gap: 6px;      
            margin-top: 40px;      

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