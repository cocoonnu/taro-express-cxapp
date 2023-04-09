<script setup lang="ts">
import arrowLeft from '@/assets/images/arrowLeft.png'
import loginpng from '@/assets/images/login.png'
import { getLoginKey, getUsersData } from '@/utils/api'
import Taro from '@tarojs/taro'


// 返回上一页
function goBack() {
    Taro.navigateBack()
}

// 点击登录
async function clickLogin() {


    
    // Taro.login({

    //     success: async function (res) {

    //         let result = await getLoginKey({ code: res.code })
    //         console.log(result)
    //     },

    //     fail(res) {
    //         console.log(res)
    //     },
    // })
}


// 申请用户信息授权
async function applyUser() {

    let res = await Taro.getSetting()
    const scope = 'scope.userFuzzyLocation'

    // 未授权
    if (!res.authSetting[scope]) {

        // 申请授权
        Taro.authorize({
            scope,

            success() {
                // ...调用api 最好将结果存储下来
            },

            fail() {
                console.log('您拒绝了地理位置申请')
            },
        })
    }

    // 已授权
    if (res.authSetting[scope]) {
    }
}

</script>

<template>
    <view class="login-container">

        <view class="login-top">
            <image :src="arrowLeft" @click="goBack"/>            
            <view class="login-top-text">身份验证</view>
        </view>

        <view class="login-title">
            <view class="login-title-top">使用微信验证身份</view>
            <view class="login-title-bottom">验证时请注意您的网络，以及周围环境</view>
        </view>

        <view class="login-image"><image :src="loginpng"/></view>

        <button class="login-bth" @click="clickLogin" open-type="getUserInfo">
            一键微信登录
        </button>

        <button class="login-bth cancel" @click="goBack">暂不微信登录</button>

    </view>
</template>

<style lang="scss">
.login-container {
    min-height: 100vh;
    background-color: #FAFCFB;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .login-top {
        width: 657.69px;
        height: 46.15px;        
        line-height: 46.15px;
        margin-top: 104px;
        display: flex;
        justify-content: flex-start;
        column-gap: 221px;

        image {
            width: 46.15px;
            height: 46.15px;            
        }

        .login-top-text {
            width: fit-content;
            font-size: 30.77px;
            color: rgba(34, 38, 37, 1);
        }
    }

    .login-title {
        width: 392.31px;
        height: 126.92px;      
        text-align: center;
        margin-top: 65px;
        
        .login-title-top {
            font-size: 46.15px;
            color: #222625;
            margin-bottom: 23px;
        }

        .login-title-bottom {
            font-size: 23.08px;
            color: #B4C2C2;
        }
    }

    .login-image {
        width: 380.77px;
        height: 323.08px;
        margin-top: 185px;
        margin-bottom: 306px;
        
        image {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .login-bth {
        width: 657.69px;
        height: 107.69px;
        border-radius: 15.38px;
        display: grid;
        place-items: center;
        font-size: 30.77px;
        color: #fff;
        padding: 0px 30.77px 0px 30.77px;
        box-sizing: border-box;
        margin-bottom: 46px;
        background: linear-gradient(138.4deg, rgba(20, 178, 181, 1) 0%, 
        rgba(43, 194, 161, 1) 100%);

        &.cancel {
            background: rgba(255, 255, 255, 1);
            border: 1.92px solid rgba(208, 217, 215, 1);            
            color: rgba(180, 194, 194, 1);
        }

    }
}
</style>