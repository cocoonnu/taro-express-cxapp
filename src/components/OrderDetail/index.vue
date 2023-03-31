<script setup lang="ts">
</script>


<template>
    <view class="order-detail">

        <view class="order-detail-icon">
            <!-- <image src="@/assets/images/orderAircraft.png"/> -->
        </view>

        <view class="order-detail-content">

            <view class="content-route-Pay">
                <view class="content-route">
                    <view style="color: #14B2B5;">EU2280</view>
                    <view style="color: #222625;">上海 - 深圳</view>
                </view>

                <view class="content-pay">¥ 1680</view>
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
    margin-top: 31px;


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
        height: 180.77px;
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
    }

}
</style>