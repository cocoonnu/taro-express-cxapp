<script setup lang="ts">
import refresh from '@/assets/images/refresh.png'
import { getCurrentInstance } from 'vue'
import { useHoemStore } from '@/store/home'
import { storeToRefs } from 'pinia'
import { ref } from 'vue'

// 获取首页仓库数据
const homeStore = useHoemStore()
const { rightCityNme, leftCityName } = storeToRefs(homeStore)


// 定义事件总线
const cxt = getCurrentInstance()
let bus: any = null
if (cxt) bus = cxt.appContext.config.globalProperties.$bus


// 点击选择城市函数
function clickCity(cityLocation: string) {

    // 打开选择城市组件
    bus.emit('showCityChoose', cityLocation)
}


// 点击交换城市
let clickClass = ref<boolean>(false)

let leftCityClass = ref({
    animate__fadeInRight: false,
    animate__fadeOutRight: false
})

let rightCityClass = ref({
    animate__fadeInLeft: false,
    animate__fadeOutLeft: false
})

function clickRefresh() {

    // 交换数据
    setTimeout(() => { homeStore.changeCityNme() }, 500)

    // 动态样式
    clickClass.value = true
    setTimeout(() => { clickClass.value = false }, 500)

    leftCityClass.value.animate__fadeOutRight = true
    setTimeout(() => {
        leftCityClass.value.animate__fadeOutRight = false
        leftCityClass.value.animate__fadeInRight = true
    }, 500)

    rightCityClass.value.animate__fadeOutLeft = true
    setTimeout(() => {
        rightCityClass.value.animate__fadeOutLeft = false
        rightCityClass.value.animate__fadeInLeft = true
    }, 500)

}

</script>

<template>
    <view class="air-citys">
        <view 
            @click="clickCity('left')"
            class="city-left city-text animate__animated" 
            :class="leftCityClass"
        >
            {{ leftCityName }}
        </view>

        <view class="city-refresh" @click="clickRefresh">
            <image :src="refresh" :class="{ 'click': clickClass }"/>
        </view>

        <view 
            class="city-right city-text animate__animated" 
            @click="clickCity('right')"
            :class="rightCityClass"
        >
            {{ rightCityNme }}
        </view>
    </view>
</template>

<style lang="scss">
.air-citys {
    width: 565.38px;
    height: 92.31px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 23px;

    .city-text {
        width: 235px;
        height: 69.23px;
        font-size: 46.15px;
        font-weight: 500;
        line-height: 69.23px;
        color: rgba(34, 38, 37, 1);
    }

    .city-left {
        text-align: left;
    }

    .city-right {
        text-align: right;
    }

    .city-refresh {
        display: grid;
        place-items: center;
        width: 92.31px;
        height: 92.31px;
        border-radius: 100%;
        background: linear-gradient(138.4deg, rgba(20, 178, 181, 1) 0%,
                rgba(43, 194, 161, 1) 100%);
        

        image {
            width: 46px;
            height: 46px;
            transition: all 0.5s;

            &.click {
                transform: rotate(360deg);
            }
        }
    }
}
</style>