<script setup lang="ts">
import { ref } from 'vue'
import BuyContent from '@/components/BuyContent/index.vue'

const TabData = ref({
    tabvalue: 'air',

    tabList: [
        {
            title: '飞机票',
            paneKey: 'air',
            src: require('@/assets/iconsvg/aircraft.svg'),
            srcA: require('@/assets/images/aircraft.png'),
        },
        {
            title: '火车票',
            paneKey: 'train',
            src: require('@/assets/iconsvg/highspeed.svg'),
            srcA: require('@/assets/images/highspeed.png'),
        },
        {
            title: '汽车票',
            paneKey: 'bus',
            src: require('@/assets/iconsvg/bus.png'),
            srcA: require('@/assets/images/bus.png'),
        }
    ]
})


</script>


<template>
    <view class="buy-frame-container">

        <nut-tabs v-model="TabData.tabvalue" >

            <!-- tab 头部 -->
            <template v-slot:titles>

                <view 
                    class="nut-tabs__titles" 
                    v-for="(item, index) in TabData.tabList"
                    @click="TabData.tabvalue = item.paneKey"
                    :class="{ active: TabData.tabvalue == item.paneKey }"
                    :key="index"
                    :id="item.paneKey"
                >

                    <view class="tab-title">
                        <image :src="item.src" v-if="TabData.tabvalue != item.paneKey"/>
                        <image :src="item.srcA" v-else/>
                        <view class="tab-title-text">{{ item.title }}</view>
                    </view>

                </view>

            </template>

            <!-- tab 内容区域 -->
            <nut-tab-pane pane-key="air">
                <BuyContent />
            </nut-tab-pane>

            <nut-tab-pane pane-key="train">
                <view class="waiting"><nut-empty description="暂无数据"/></view>
            </nut-tab-pane>

            <nut-tab-pane pane-key="bus">
                <view class="waiting"><nut-empty description="暂无数据"/></view>
            </nut-tab-pane>

        </nut-tabs>
        
    </view>
</template>


<style lang="scss">
.buy-frame-container {
    width: 660px;
    height: 715px;
    margin-top: 33px;
    overflow: hidden;
    border-radius: 23px;
    background-color: #fff;


    .nut-tabs__titles {
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        color: #222625;
        background: rgba(247, 250, 250, 1);
        overflow: hidden;

        .tab-title {
            display: flex;
            margin-top: 35px;

            image {
                width: 46.15px;
                height: 46.15px; 
            }
    
            .tab-title-text {
                width: 70px;
                height: 46.15px;
                line-height: 46.15px;
                text-align: center;
                font-size: 25px;
                font-weight: 500; 
                margin-left: 12px;
            }    
        }


        &.active {
            color: #14B2B5;
        }
    }

    #air {
        margin-left: 43px;
    }

    #train {
        margin: 0 62px;
    }

    #bus {
        margin-right: 43px;
    }


    // 内容区域最外层盒子
    .nut-tabs__content {
        height: 620px;
        border-radius: 23px;
        background: #fff;
    }

    // 内容区域父盒子
    .nut-tab-pane {
        padding: 62px 46px 46px 46px;
        box-sizing: border-box;
    }

    // waiting 盒子
    .waiting {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .nut-empty__box {
            width: 300px;
            height: 300px;
        }    

        .nut-empty__description {
            font-size: 24px;
            color: #B4C2C2;
        }
    }
}
</style>