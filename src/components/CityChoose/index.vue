<script setup lang="ts">
import getCityList from '@/hooks/CityChoose/getCityList'
import { ref, onMounted } from 'vue'
import { getCurrentInstance, onBeforeUnmount } from 'vue'


// 定义事件总线
const cxt = getCurrentInstance()
let bus: any = null
if (cxt) bus = cxt.appContext.config.globalProperties.$bus


// 组件初始化函数
onMounted(() => {

    // 绑定打开城市选择组件事件
    bus.on('showCityChoose', () => { visible.value = true })


    // 初始化城市数据
    getCityList(cityList)
})

onBeforeUnmount(() => {
    bus.off('showCityChoose')
})


// 组件显示与隐藏
let visible = ref<boolean>(false)


// 选择结果数组
let cityValue = ref([])


// 城市机场数据
let cityList = ref([])


// 选择完成的回调函数
function finshChoose(params: any) {
    console.log(params)  // 为一个结果数组
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
    --nut-tabs-horizontal-titles-item-active-line-width: 26px;


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
    }
}
</style>