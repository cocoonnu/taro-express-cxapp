<script setup lang="ts">
import arrowLeft from '@/assets/images/arrowLeft.png'
import { ref } from 'vue'

const state = ref({
    date: ''
})
const setChooseValue = param => {
    state.value.date = param[3]
}
</script>

<template>
    <view class="calendar-container">
        <view class="calendar-top">
            <view class="top-content">

                <image :src="arrowLeft"/>
                <view class="top-content-text">选择出发日期</view>

            </view>
        </view>


        <view class="calendar-wrapper">
            <nut-calendar
                :poppable="false"
                :default-value="state.date"
                :is-auto-back-fill="true"
                @choose="setChooseValue"
                :start-date="`2023-03-01`"
                :end-date="`2023-4-20`"
                :show-sub-title="false"
                :show-title="false"
                :show-today="false"
            ></nut-calendar>
        </view>    
    </view>



</template>

<style lang="scss">
.calendar-container {
    min-height: 100vh;
    background-color: #fff;

    .calendar-top {
        width: 100%;
        height: 180px;
        overflow: hidden;
        background-color: #fff;

        .top-content {
            margin-top: 105px;
            margin-left: 46px;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            image {
                width: 46.15px;
                height: 46.15px;            
                object-fit: cover;
            }
    
            .top-content-text {
                font-size: 32px;
                color: #222625;
                margin-left: 190px;
            }
        }
    }


    .calendar-wrapper {
        display: flex;
        width: 100%;
        height: 1200px;
        overflow: hidden;

        --nut-calendar-primary-color: #14B2B5;
        --nut-calendar-choose-color: #14B2B5;
        --nut-calendar-choose-font-color: #fff;
        --nut-calendar-base-color: #222625;
        --nut-calendar-disable-color: #DFE5E6;
        --nut-calendar-base-font: 30.7px;
        --nut-calendar-text-font: 30.7px;
        --nut-calendar-month-title-font-size: 38px;
        --nut-calendar-day-font: 30.7px;
        // --nut-calendar-day-active-border-radius: 15px;
        --nut-calendar-day67-font-color: #14B2B5;



        .nut-calendar {

            .nut-calendar__content .nut-calendar__panel {
                margin-top: 50px;
                height: 100%!important;
    
                .nut-calendar__month {
                    box-sizing: border-box;
                    padding: 0px 25px;     
                    margin-bottom: 60px;               
                }

                .nut-calendar__month-title {
                    height: 40px;
                    line-height: 40px;
                    margin-bottom: 30px;
                }

                .nut-calendar__days .nut-calendar__day {
                    height: 70px;
                }
            }
            
            .nut-calendar__header .nut-calendar__weekdays {
                box-shadow: none;
                font-size: 30px;
                margin: 25px 0;
                box-sizing: border-box;
                padding: 0px 25px;
            }        
        }
        

    }
}
</style>