<script setup lang="ts">
import type { PropType } from 'vue'


interface FlightInformation {
    startDayDate: string,
    startWeek: string,
    endDayDate: string,
    endWeek: string,
    startTime: string,
    endTime: string,
    flightNum: string,
    leftCityName: string,
    rightCityName: string,
    timeDiff: string,
    startPlace: string,
    price: number
}


let props = defineProps({

    flightItemInfo: {
        type: Object as PropType<FlightInformation>,
        require: true
    }

})


</script>

<template>
    <view class="flight-item-info">

        <view class="item-info-container">

            <view class="container-left">
                <view class="info-date">
                    <view>{{ flightItemInfo?.startDayDate }}</view>
                    <view>{{ flightItemInfo?.startWeek }}</view>
                </view>

                <view class="info-time">{{ flightItemInfo?.startTime }}</view>

                <view class="info-city">
                    <view class="info-city-text">{{ flightItemInfo?.leftCityName }}</view>
                    <view class="info-city-icon">始</view>
                </view>
            </view>


            <view class="container-center">
                <view class="center-text">{{ flightItemInfo?.flightNum }}</view>

                <view class="info-stopover">
                    <view class="info-stopover-line"></view>
                    <view class="info-stopover-content">经停信息</view>
                    <view class="info-stopover-line right"></view>
                </view>

                <view class="center-text">{{ flightItemInfo?.timeDiff }}</view>
            </view>


            <view class="container-right">
                <view class="info-date">
                    <view>{{ flightItemInfo?.endDayDate }}</view>
                    <view>{{ flightItemInfo?.endWeek }}</view>
                </view>

                <view class="info-time">{{ flightItemInfo?.endTime }}</view>

                <view class="info-city">
                    <view class="info-city-icon end">终</view>
                    <view class="info-city-text">{{ flightItemInfo?.rightCityName }}</view>
                </view>
            </view>

        </view>


        <!-- 分割线 -->
        <view class="split-line"></view>


        <view class="item-seat-container">

            <view class="seat-item">
                <view class="seat-item-label">商务：</view>
                <view class="seat-item-value">无</view>
            </view>

            <view class="seat-item">
                <view class="seat-item-label">一等：</view>
                <view class="seat-item-value">有</view>
            </view>

            <view class="seat-item">
                <view class="seat-item-label">二等：</view>
                <view class="seat-item-value">有</view>
            </view>

        </view>

    </view>
</template>

<style lang="scss">
.flight-item-info {
    width: 100%;
    height: 100%;
    padding: 31px;
    box-sizing: border-box;

    .item-info-container {
        width: 100%;
        height: 169.23px;
        display: flex;

        .container-left {
            width: calc(50% - 92.31px);
            height: 100%;
        }

        .container-center {
            width: 184.62px;
            height: 100%;
            padding: 21px 0;
            box-sizing: border-box;

            .center-text {
                width: 100%;
                height: 34.62px;
                font-size: 23.08px;
                font-weight: 500;
                line-height: 34.62px;
                text-align: center;                  
            }

            .info-stopover {
                margin: 8px 0;
                width: 100%;
                height: 42.31px;
                display: flex;
                justify-content: center;
                align-items: center;

                .info-stopover-line {
                    width: 31px;
                    height: 2px;
                    background: linear-gradient(90deg, rgba(223, 229, 230, 0) 0%,
                    rgba(223, 229, 230, 1) 100%);

                    &.right {
                        background: linear-gradient(90deg, rgba(223, 229, 230, 1) 0%,
                        rgba(223, 229, 230, 0) 100%);
                    }
                }
                
                .info-stopover-content {
                    display: grid;
                    place-items: center;
                    width: 123.08px;
                    height: 42.31px;
                    font-size: 23.08px;
                    font-weight: 500;
                    color: rgba(223, 229, 230, 1);                    
                    border-radius: 30.77px;
                    background: rgba(223, 229, 230, 0.1);
                    border: 1.92px solid rgba(223, 229, 230, 1);            
                    padding: 3.85px 15.38px 3.85px 15.38px;
                    box-sizing: border-box;
                }
            }
        }

        .container-right {
            width: calc(50% - 92.31px);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }

        .info-date {
            width: fit-content;
            height: 34.62px;
            line-height: 34.62px;
            font-size: 23.08px;
            color: #B4C2C2;
            display: flex;
            column-gap: 5px;
        }
        
        .info-time {
            width: fit-content;
            height: 88.46px;
            font-size: 57.69px;
            font-weight: 600;
            line-height: 88.46px;            
            color: #222625;
        }

        .info-city {
            width: fit-content;
            height: 46.15px;
            display: flex;
            align-items: center;
            column-gap: 8px;

            .info-city-text {
                font-size: 30.77px;
                font-weight: 500;
                color: #222625;            
            }

            .info-city-icon {
                display: grid;
                place-items: center;
                width: 30.77px;
                height: 30.77px;
                font-size: 19px;
                font-weight: 400;
                color: rgba(255, 141, 26, 1);
                border-radius: 3.85px;
                padding: 0px 5.77px 0px 5.77px;
                box-sizing: border-box;
                margin-top: 4px;
                background: rgba(255, 141, 26, 0.1);
                border: 1.92px solid rgba(255, 141, 26, 1);    
                
                &.end {
                    color: rgba(93, 201, 136, 1);
                    background: rgba(93, 201, 136, 0.1);
                    border: 1.92px solid rgba(93, 201, 136, 1);                    
                }
            }
        }
    }


    .split-line {
        margin: 23px 0;
        width: 596.15px;
        height: 2px;
        background-color: #F2F5F5;
    }


    .item-seat-container {
        width: 100%;
        height: 34.62px;
        display: flex;
        justify-content: space-between;

        .seat-item {
            width: fit-content;
            display: flex;
            font-size: 23.08px;
            color: rgba(180, 194, 194, 1);

            .seat-item-value {
                color: rgba(20, 178, 181, 1);
            }
        }
    }


}
</style>