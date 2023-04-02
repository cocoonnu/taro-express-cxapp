<script setup lang="ts">
import arrowLeft from '@/assets/images/arrowLeft.png'
import { getAirpostList } from '@/utils/api'
import { ref, onMounted } from 'vue'

onMounted(async function() {

    let res = await getAirpostList()
    console.log(res)
})


const dataList = ref([
    {
        title: 'A',
        list: [
            {
                name: '安徽',
                id: 1
            },
            {
                name: '安庆',
                id: 7
            }
        ]
    },
    {
        title: 'B',
        list: [
            {
                name: '北京',
                id: 2
            }
        ]
    },
    {
        title: 'G',
        list: [
            {
                name: '广西',
                id: 3
            },
            {
                name: '广东',
                id: 4
            }
        ]
    },
    {
        title: 'H',
        list: [
            {
                name: '湖南',
                id: 5
            },
            {
                name: '湖北',
                id: 6
            }
        ]
    }
])

const clickItem = (key: string, item: any) => {
    console.log(key, JSON.stringify(item))
}

const clickIndex = (key: string) => {
    console.log(key)
}


</script>


<template>
<view class="city-choose">

    <view class="city-choose-top">
        <view class="top-content">
            <image :src="arrowLeft"/>
            <view class="top-content-text">请选择城市</view>
        </view>
    </view>

    <nut-elevator 
        :index-list="dataList" 
        :height="800" 
        @click-item="clickItem" 
        @click-index="clickIndex"
    >
    </nut-elevator>

</view>
</template>


<style lang="scss">
.city-choose {
    min-height: 100vh;
    background-color: #F2F5F5;
    font-size: 30px;

    .city-choose-top {
        width: 100%;
        height: 175px;
        background-color: #fff;
        overflow: hidden;
        
        .top-content {
            height: 46.15px;
            margin-left: 46px;
            margin-top: 104px;
            display: flex;

            image {
                width: 46.15px;
                height: 46.15px;
            }

            .top-content-text {
                font-size: 30.77px;
                line-height: 46.15px;
                color: rgba(34, 38, 37, 1);                
                margin-left: 190px;
            }
        }
    }




    .nut-elevator__bars__inner__item,
    .nut-elevator__list__item__code,
    .nut-elevator__list__item__name {
        font-size: 30px;
    }
}

</style>