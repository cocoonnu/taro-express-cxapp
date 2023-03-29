<script setup lang="ts">
import BuyFrame from '../../components/BuyFrame/index.vue'

</script>


<template>
<view class="home-container">
    <view class="background"></view>

    <view class="home-content">
        
        <view class="home-top">
            <view class="top-area">
                <view class="area-content">南昌</view>
                <image src="../../assets/iconsvg/direction-d.svg" />
            </view>

            <view class="top-icon">
                <image src="../../assets/iconsvg/search.svg" />
                <image src="../../assets/iconsvg/scan.svg" />
            </view>
        </view>


        <BuyFrame/>

    </view>

</view>
</template>


<style lang="scss">
.home-container {
    // 暂时先指定页面高度
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgba(242, 245, 245, 1);

    .home-content {
        margin-top: -515px;
        color: rgba(34, 38, 37, 1);
    }

    .home-top {
        width: 658px;
        height: 81px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .top-area {
            width: 107.69px;
            height: 46.15px;            
            display: flex;
            justify-content: flex-start;
            align-items: center;
            
            .area-content {
                width: 61.54px;
                height: 46.15px;
                line-height: 46.15px;
                text-align: left;
                font-size: 30px;
                font-weight: 500;
            }            

            image {
                width: 46.15px;
                height: 46.15px;                
            }
        }

        .top-icon {
            width: 123px;
            height: 46px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            image {
                width: 46px;
                height: 46px;
            }
        }
    }
    
}
</style>