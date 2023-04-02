<script setup lang="ts">
// 引入静态资源
import directiond from '@/assets/iconsvg/direction-d.svg'
import search from '@/assets/iconsvg/search.svg'
import scan from '@/assets/iconsvg/scan.svg'

</script>

<template>
    <view class="home-top">
        <view class="top-area">
            <view class="area-content">南昌</view>
            <image :src="directiond" />
        </view>

        <view class="top-icon">
            <image :src="search" />
            <image :src="scan" />
        </view>
    </view>
</template>

<style lang="scss">
.home-top {
    width: 658px;
    height: 81px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .top-area {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
        .area-content {
            height: 46.15px;
            line-height: 46.15px;
            text-align: left;
            font-size: 36px;
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
</style>