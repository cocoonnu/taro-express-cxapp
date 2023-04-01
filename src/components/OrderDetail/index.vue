<script setup lang="ts">
import travelAircraft from '@/assets/images/travelAircraft.png'
</script>


<template>
    <view class="order-detail">

        <view class="order-detail-icon">
            <image :src="travelAircraft"/> 
        </view>


        <view class="order-detail-content">

            <view class="content-route-Pay">
                <view class="content-route">
                    <view style="color: #14B2B5;">EU2280</view>
                    <view style="color: #222625;">上海 - 深圳</view>
                </view>

                <view class="content-pay">¥ 1680</view>
            </view>

            
            <view class="content-time">
                <view style="color: #B4C2C2;">出发时间：</view>
                <view style="color: #222625;">3月2日</view>
                <view style="color: #222625;">10:15</view>
            </view>


            <view class="content-seat" style="color: #B4C2C2;">02车02B号</view>


            <view class="content-explain">
                <view class="content-explain-item">可改签</view>
                <view class="content-explain-item refuse">不可退票</view>
            </view>

        </view>
            
    </view>
</template>


<style lang="scss">
.order-detail {
    width: 657.69px;
    height: 242.31px;
    padding: 31px;
    box-sizing: border-box;
    border-radius: 23.08px;    
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;


    .order-detail-icon {
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


    .order-detail-content {
        width: 534.62px;
        font-size: 23.06px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;            
        row-gap: 15px;

        
        .content-route-Pay {
            width: 100%;
            height: 34.62px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .content-route {
                display: flex;
                column-gap: 8px;
            }

            .content-pay {
                font-size: 26px;
                color: #FF8D1A;
            }
        }


        .content-time {
            display: flex;
            column-gap: 8px;
            height: 34.62px;
            line-height: 34.62px;
        }


        .content-explain {
            display: flex;
            column-gap: 15px;
            margin-top: 3px;


            .content-explain-item {
                width: 88.46px;
                height: 30.77px;
                font-size: 19.23px;
                color: rgba(20, 178, 181, 1);
                line-height: 30.77px;
                text-align: center;
                border-radius: 3.85px;
                padding: 0px 15.38px 0px 15.38px;                
                background: linear-gradient(90deg, rgba(20, 178, 181, 0.2) 0%,
                rgba(20, 178, 181, 0) 100%);                


                &.refuse {
                    width: 107.69px;
                    color: rgba(255, 141, 26, 1);
                    background: linear-gradient(90deg, rgba(255, 141, 26, 0.2) 0%, 
                    rgba(255, 141, 26, 0) 100%);                        
                }
            }
        }

    }
}
</style>