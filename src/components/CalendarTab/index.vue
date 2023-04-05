<script setup lang="ts">
import calendar from '@/assets/images/calendar.png'

</script>

<template>
    <view class="calendar-tab">

        <view class="calendar-tab-scroll">
            <!-- <scroll-view class="scroll-view_H" :scroll-x="true" @scroll="scroll" style="width: 100%">
            <view id="demo21" class="scroll-view-item_H demo-text-1">a</view>
            <view id="demo22"  class="scroll-view-item_H demo-text-2">b</view>
            <view id="demo23" class="scroll-view-item_H demo-text-3">c</view>
            </scroll-view> -->
        </view>        


        <view class="calendar-tab-right">
            <image :src="calendar"/>
        </view>

    </view>
</template>

<style lang="scss">
.calendar-tab {
    width: 100%;
    height: 130.77px;
    background: #fff;    
    display: flex;

    .calendar-tab-scroll {
        width: 612px;
        height: 100%;
        padding: 19px 0;
    }

    
    .calendar-tab-right {
        width: 138.46px;
        height: 130.77px;
        display: grid;
        place-items: center;
        box-shadow: -15px 0px 8px rgba(0, 0, 0, 0.035);

        image {
            width: 46.15px;
            height: 46.15px;            
        }
    }
}
</style>