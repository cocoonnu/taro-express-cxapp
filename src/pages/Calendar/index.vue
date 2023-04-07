<script setup lang="ts">
import { extract, extractDate, getDayDiff, formatDate } from '@/utils/time'
import arrowLeft from '@/assets/images/arrowLeft.png'
import { useHoemStore } from '@/store/home'
import tools from '@/utils/tools'
import Taro from '@tarojs/taro'
import { computed } from 'vue'

const homeStore = useHoemStore()


// 日历默认选中日期 格式: 2023-04-05
const chooseDate = computed(() => homeStore.chooseDate)


// 日历开始日期 格式: 2023-04-05
let startDate = computed(() => formatDate(new Date()))


// 日历结束日期 格式: 2023-04-05
let endDate = computed(() => {

    // 获取15天后的时间戳
    let timeCount = Date.now() +  15 * 24 * 60 * 60 * 1000
    return formatDate(new Date(timeCount))
})


// 点击日期后触发
function selectDate(params) {
    // params: [0: "2023", 1: "03", 2: "15", 3: "2023-03-15", 4: "星期三"]

    // 选择中的 Date
    const selectDateValue = new Date(params[3])

    // 改变首页日期展示
    homeStore.homeDate = extractDate(selectDateValue)

    // 计算与今日天数差
    homeStore.homeDayDiff = getDayDiff(new Date(startDate.value), selectDateValue)
    
    // 修改日历默认选中日期
    homeStore.chooseDate = params[3]

    // 显示成功信息
    tools.showToast(`已选择${homeStore.homeDate}`)
}

</script>

<template>
    <view class="calendar-container">

        <view class="calendar-top">
            <view class="top-content">

                <view class="top-content-icon" @click="Taro.navigateBack">
                    <image :src="arrowLeft"/>
                </view>
                <view class="top-content-text">选择出发日期</view>

            </view>
        </view>


        <view class="calendar-wrapper">
            <nut-calendar
                :poppable="false"
                :default-value="chooseDate"
                :is-auto-back-fill="true"
                :start-date="startDate"
                :end-date="endDate"
                :show-sub-title="false"
                :show-title="false"
                :show-today="false"
                @select="selectDate"
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
        // --nut-calendar-disable-color: #DFE5E6;
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
                    margin-bottom: 40px;
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