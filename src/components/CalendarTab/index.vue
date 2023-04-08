<script setup lang="ts">
import calendar from '@/assets/images/calendar.png'
import { getWeekValue } from '@/utils/time'
import { useHoemStore } from '@/store/home'
import { useOrderStore } from '@/store/order'
import { ref, onMounted, computed } from 'vue'
import { extractDate, getDayDiff, formatDate } from '@/utils/time'
import Taro from '@tarojs/taro'
import tools from '@/utils/tools'
import dayjs from 'dayjs'

const homeStore = useHoemStore()
const orderStore = useOrderStore()

onMounted(function () {

    // 初始化数据
    createDateArr()
})
 

// dateValueArr 单项类型
interface DateValue {
    date: Date
    dateValue: string,
    week: string
}


// 选中的日期序号
let pickDateIndex = computed(() => homeStore.homeDayDiff)


// 滚动条位置
let scrollLeft = computed(() => (pickDateIndex.value * 60))


// 16天日期数据数组
let dateValueArr = ref<Array<DateValue>>([])


// 点击日期对象时
async function clickDateItem(dateItem: DateValue) {

    // 改变首页日期展示
    homeStore.homeDate = extractDate(dateItem.date)
    
    // 计算与今日天数差
    homeStore.homeDayDiff = getDayDiff(new Date(), dateItem.date)

    // 修改日历默认选中日期
    homeStore.chooseDate = formatDate(dateItem.date) 

    // 刷新机票信息数组
    tools.showLoading()
    await orderStore.fetchFlightInfoArr()
    tools.hideLoading()
}


// 生成16天日期数组数据
function createDateArr() {

    const todayTime = Date.now()

    for (let i = 0; i <= 15; i++) {

        const dateItem = new Date(todayTime + i * 24 * 60 * 60 * 1000)
        const day = dayjs(dateItem)

        dateValueArr.value.push({
            date: dateItem,
            dateValue: day.format('MM-DD'),
            week: getWeekValue(dateItem)
        })
    }
}


</script>

<template>
    <view class="calendar-tab">

        <view class="calendar-tab-scroll">
            <scroll-view 
                class="scroll-container" 
                :scroll-x="true" 
                style="width: 100%" 
                :scroll-left="scrollLeft"
                :scrollWithAnimation="true"
                :enhanced="true"
                :showScrollbar="false"
            >

                <view 
                    v-for="(item, index) in dateValueArr"
                    class="scroll-container-item"
                    :class="{ active: pickDateIndex == index }"
                    @click="clickDateItem(item)"
                    :id="`date${index}`"
                >
                    <view class="item-date">{{ item.dateValue }}</view>

                    <view class="item-week">{{ item.week }}</view>
                </view>

            </scroll-view>
        </view>        


        <view 
            class="calendar-tab-right" 
            @click="Taro.navigateTo({ url: '/pages/Calendar/index' })"
        >
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
        box-sizing: border-box;

        .scroll-container {
            white-space: nowrap;

            .scroll-container-item {
                display: inline-block;
                width: 17%;
                height: 92.31px;
                margin-left: 25px;
                border-radius: 7.69px;
                font-size: 24px;
                color: #B4C2C2;             
                padding: 12px 0;
                box-sizing: border-box;
                text-align: center;

                .item-week {
                    margin-top: 6px;
                }


                &.active {
                    background: linear-gradient(180deg, rgba(20, 178, 181, 0.2) 0%, 
                    rgba(20, 178, 181, 0.01) 100%);   
                    color: #14B2B5;
                }

                &:last-of-type {
                    margin-right: 25px;
                }
            }

        }        
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