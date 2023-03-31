<script setup lang="ts">
</script>


<template>
    <view class="order-item">

        <view class="order-item-content">

            <view class="order-item-content-icon">
                <image src="@/assets/images/orderAircraft.png"/>
            </view>


            <view class="order-item-content-text">
                <view class="order-item-content-text-item">
                    <view style="color: #B4C2C2;">本人行程：</view>
                    <view style="color: #14B2B5;">EU2280</view>
                    <view style="color: #222625;">上海 - 深圳</view>
                </view>

                <view class="order-item-content-text-item">
                    <view style="color: #B4C2C2;">出发时间：</view>
                    <view style="color: #222625;">3月2日</view>
                    <view style="color: #222625;">10:15</view>
                </view>
            </view>
        </view>


        <view class="order-item-skip">
            <view style="color: #B4C2C2;">机票详情</view>
            <image src="@/assets/images/right.png"></image>
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

}
</style>