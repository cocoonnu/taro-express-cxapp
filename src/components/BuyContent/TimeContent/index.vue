<script setup lang="ts">
</script>

<template>
    <view class="air-time">
        <view class="time-date">2月28日</view>
        <view class="time-interval">2天后</view>
    </view>
</template>

<style lang="scss">
.air-time {
    width: 280px;
    height: 70px;
    display: flex;
    justify-content: flex-start;
    margin: 27px 0;

    .time-date {
        height: 69.23px;            
        font-size: 46.15px;
        font-weight: 500;
        line-height: 69.23px;
        color: rgba(34, 38, 37, 1);
    }

    .time-interval {
        margin: 27px 0 0 15px;
        font-size: 23.08px;
        font-weight: 500;
        color: rgba(180, 194, 194, 1);            
    }
}
</style>