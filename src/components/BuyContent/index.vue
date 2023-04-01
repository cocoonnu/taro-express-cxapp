<script setup lang="ts">
import refresh from '@/assets/images/refresh.png'
import { ref } from 'vue'

let checkboxGroup = ref<Array<string>>(['student'])

</script>


<template>
    <view class="air-content">

        <!-- 城市选择 -->
        <view class="air-citys">
            <view class="city-left city-text">南昌</view>

            <view class="city-refresh">
                <image :src="refresh"/>
            </view>

            <view class="city-right city-text">杭州</view>
        </view>

        <view class="split-line"></view>


        <!-- 时间选择 -->
        <view class="air-time">
            <view class="time-date">2月28日</view>
            <view class="time-interval">2天后</view>
        </view>

        <view class="split-line"></view>


        <!-- 高铁学生票 -->
        <nut-checkbox-group v-model="checkboxGroup">
            <nut-checkbox label="student">
                 学生票
             </nut-checkbox>

            <nut-checkbox label="highspeed">
                高铁 / 动车
            </nut-checkbox>
        </nut-checkbox-group>


        <!-- 查询机票按钮 -->
        <button class="inquire-btn">
            查询机票
        </button>


        <!-- 查询历史 -->
        <view class="history-query">            
            <!-- <view v-for="(item, index) in 3">
                
            </view> -->
        </view>

    </view>
</template>


<style lang="scss">
.air-content {
    width: 100%;
    height: 100%;


    .air-citys {
        width: 565.38px;
        height: 92.31px;        
        display: flex;
        justify-content: flex-start;
        align-items: center;    
        margin-bottom: 23px;

        .city-text {
            width: 92.31px;
            height: 69.23px;
            font-size: 46.15px;
            font-weight: 500;
            line-height: 69.23px;
            text-align: center;            
            color: rgba(34, 38, 37, 1);
        }

        .city-refresh {
            display: grid;
            place-items: center;
            width: 92.31px;
            height: 92.31px; 
            margin: 0 144px;   
            border-radius: 100%;        
            background: linear-gradient(138.4deg, rgba(20, 178, 181, 1) 0%,
            rgba(43, 194, 161, 1) 100%);            

            image {
                width: 46px;
                height: 46px;
            }
        }
    }


    .split-line {
        width: 565.38px;
        height: 1.92px;
        background: rgba(247, 250, 250, 1);        
    }


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


    .nut-checkbox-group {
        width: 565.38px;
        height: 34.62px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 50px;

        .nut-checkbox__icon {
            width: 55px;
            height: 55px;
            color: #14B2B5;
            font-size: 30px;
        }

        .nut-checkbox__icon--unchecked {
            width: 55px;
            height: 55px;
            font-size: 30px;
        }

        .nut-checkbox__label {
            font-size: 30px;
            color: #222625;
            margin-top: -3px;
        }

    }


    .inquire-btn {
        width: 565.38px;
        height: 107.69px;
        font-size: 30.77px;
        color: #fff;
        border-radius: 15.38px;
        background: linear-gradient(138.4deg, #14B2B5 0%, #2BC2A1 100%);
        box-shadow: 0px 23.08px 46.15px 0px rgba(20, 178, 181, 0.16);        
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 30.77px 0px 30.77px;        
        margin-top: 60px;
    }
}
</style>