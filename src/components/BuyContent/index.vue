<script setup lang="ts">
import CityContent from './CityContent/index.vue'
import TimeContent from './TimeContent/index.vue'
import checkLogin from '@/utils/checkLogin'
import Taro from '@tarojs/taro'
import { ref } from 'vue'


// 学生票选择框
let checkboxGroup = ref<Array<string>>(['student'])


// 点击查询机票
async function clickBtn() {

    // 判断是否登录
    let res = await checkLogin()

    if (res) {

        // 跳转到机票页
        Taro.navigateTo({ url: '/pages/QueryTicket/index' })
    } else {

        // 跳转到登录页
        Taro.navigateTo({
            url: '/pages/WeLogin/index?path=/pages/QueryTicket/index'
        })
    }

}

</script>


<template>
    <view class="air-content">

        <!-- 城市选择 -->
        <CityContent/>


        <!-- 分割线 -->
        <view class="split-line"></view>


        <!-- 时间选择 -->
        <TimeContent/>

        
        <!-- 分割线 -->
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
        <view class="inquire-btn" @click="clickBtn">
            查询机票
        </view>

    </view>
</template>


<style lang="scss">
.air-content {
    width: 100%;
    height: 100%;


    .split-line {
        width: 565.38px;
        height: 1.92px;
        background: rgba(247, 250, 250, 1);        
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
        box-sizing: border-box;
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