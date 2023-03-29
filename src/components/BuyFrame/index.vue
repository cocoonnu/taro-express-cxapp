<script setup lang="ts">
import { ref } from 'vue'

const TabData = ref({
    tabvalue: 'air',

    tabList: [
        {
            title: '飞机票',
            paneKey: 'air',
            src: '../../assets/iconsvg/aircraft.svg',
            srcA: '../../assets/iconsvg/aircraftActive.svg',
        },
        {
            title: '火车票',
            paneKey: 'train',
            src: '../../assets/iconsvg/highspeed.svg',
            srcA: '../../assets/iconsvg/highspeedActive.svg',

        },
        {
            title: '汽车票',
            paneKey: 'bus',
            src: '../../assets/iconsvg/bus.svg',
            srcA: '../../assets/iconsvg/busActive.svg',
        }
    ]
})
</script>


<template>
    <view class="buy-frame-container">

        <nut-tabs v-model="TabData.tabvalue">

            <!-- tab 头部 -->
            <template v-slot:titles>

                <view 
                    class="tab-titles" 
                    v-for="(item, index) in TabData.tabList"
                    @click="TabData.tabvalue = item.paneKey"
                    :class="{ active: TabData.tabvalue == item.paneKey }"
                    :key="index"
                >

                    <!-- <image :src="item.src" v-if="TabData.tabvalue != item.paneKey"/> -->
                    <!-- <image :src="item.srcA" v-else/> -->
                    <image src="../../assets/iconsvg/aircraftActive.svg"/>
                    <view class="tab-title-text">{{ item.title }}</view>

                </view>

            </template>


        </nut-tabs>

    <!-- <nut-tabs v-model="state.tab7value">

      <template v-slot:titles>
        <div class="nut-tabs__titles-item" @click="state.tab7value = item.paneKey"
          :class="{ active: state.tab7value == item.paneKey }" :key="item.paneKey" v-for="item in state.list6">
          <span class="nut-tabs__titles-item__text">{{ item.title }}</span>
          <span class="nut-tabs__titles-item__line"></span>
        </div>
      </template>
      
      <nut-tab-pane v-for="item in state.list6" :pane-key="item.paneKey">
        {{ item.title }}
      </nut-tab-pane>
    </nut-tabs>         -->
        
    </view>
</template>


<style lang="scss">
.buy-frame-container {
    width: 658px;
    height: 712px;    
    border-radius: 23px;    
    background-color: #fff;
    margin-top: 33px;
    overflow: hidden;

    .tab-titles {
        width: 100%;
        height: 92px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(247, 250, 250, 1);

        image {
            width: 46.15px;
            height: 46.15px; 
            fill: red;           
        }

        .tab-title-text {
            width: 70px;
            height: 46.15px;
            line-height: 46.15px;
            text-align: center;
            font-size: 23.08px;
            font-weight: 500; 
            color: #222625;           
            margin-left: 10px;
        }

        .tab-title-text.active {
            color: #14B2B5;
        }
    }

    .buy-frame-content {
        height: 619.23px;
        border-radius: 23.08px;
        background: rgba(255, 255, 255, 1);                
    }
}
</style>