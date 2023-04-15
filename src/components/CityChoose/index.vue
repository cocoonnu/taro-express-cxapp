<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getCityList } from './hook/cityList'
import { useHoemStore } from '@/store/home'
import tools from '@/utils/tools'
import Taro from '@tarojs/taro'
const homeStore = useHoemStore()


onMounted(async () => {

    // 绑定打开城市选择组件事件
    Taro.eventCenter.on('showCityChoose', (cl: string) => {

        // 显示组件和获取城市位置
        visible.value = true
        cityLocation.value = cl
    })


    // 初始化城市数据
    cityList.value = await getCityList()
    // if (Taro.getStorageSync('cityList')) {

    //     cityList.value = Taro.getStorageSync('cityList')

    // } else {

    //     cityList.value = await getCityList()
    //     Taro.setStorageSync('cityList', cityList.value)
    // }
})


onBeforeUnmount(() => {
    Taro.eventCenter.off('showCityChoose')
})


// 组件显示与隐藏
let visible = ref<boolean>(false)


// 选择结果数组
let cityValue = ref([])


// 城市机场数据
let cityList = ref<any>([])


// 左边还是右边城市
let cityLocation = ref<string>('')


// 选择完成的回调函数
function finshChoose(params: any) {
    // ["B", "北京", "大兴国际机场"]

    if (cityLocation.value == 'left') {
        homeStore.leftCityName = params[1]
        homeStore.startPlace = params[2]
    }

    if (cityLocation.value == 'right') homeStore.rightCityNme = params[1]

    tools.showToast(`已选择${params[2]}`)
}


</script>


<template>
    <nut-cascader
        title="地址选择"
        v-model:visible="visible"
        v-model="cityValue"
        @change="finshChoose"
        :options="cityList"
    ></nut-cascader>
</template>


<style lang="scss">
.home-content {
    --nut-cascader-bar-font-size: 30px;
    --nut-cascader-font-size: 26px;
    --nut-cascader-line-height: 46px;
    --nut-cascader-item-padding: 20px 30px;
    --nut-cascader-item-font-size: 26px;
    --nut-tabs-titles-item-font-size: 26px;
    --nut-cascader-item-active-color: #14B2B5;
    --nut-cascader-tabs-item-padding: 0px 0px;


    .nut-popup--bottom.round {
        border-top-right-radius: 23px;
        border-top-left-radius: 23px;
    }


    .nut-popup {
        min-height: 0;
        height: 980px;

        .nut-cascader__bar {
            box-sizing: border-box;
            padding: 35px 0;
        }


        .nut-tabs__titles-item__line {
            display: none;
        }

        .nut-tabs__titles-item__text.ellipsis {
            margin: 30px;
        }

        .nutui-iconfont {
            font-size: 28px;
        }
    }


    .nut-cascader-pane {
        height: 800px;
        margin-top: 10px;
    }

    .nut-cascader-pane::-webkit-scrollbar {
        display: none;
    }
}
</style>