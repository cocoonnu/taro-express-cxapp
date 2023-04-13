<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
    orderTabValue: string,
}>()


const emits = defineEmits<{
    (e: 'update:orderTabValue', orderTabValue: string): void
}>()


// 复制一份
let orderTab = ref<string>(props.orderTabValue) 


// 同时监听两个显示变量的变化
watch(() => props.orderTabValue, (newValue) => {
    orderTab.value = newValue
})


watch(() => orderTab.value, (newValue) => {
    emits('update:orderTabValue', newValue)
})


function changeTabList(tab: any) {

    // 默认tab.paneKey：0、1、2、3
    orderTab.value = tab.paneKey
}


</script>

<template>
    <nut-navbar>
        <template #content>
            <nut-tabs v-model="orderTab" @click="changeTabList">

                <nut-tab-pane title="全部"></nut-tab-pane>
                <nut-tab-pane title="待支付"></nut-tab-pane>
                <nut-tab-pane title="待出行"></nut-tab-pane>
                <nut-tab-pane title="已完成"></nut-tab-pane>

            </nut-tabs>
        </template>
    </nut-navbar>
</template>

<style lang="scss">
.order-container {
    .nut-navbar {
        width: 100%;
        height: 84.62px;
        padding: 0;
        box-shadow: none;
        background-color: #fff;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;

        .nut-navbar__title {
            width: 580.77px;
            height: 61.54px;            
            margin-top: 23px;            
        }

        .nut-tabs {
            width: 100%;
            height: 100%;

            .nut-tabs__titles {
                height: 100%;
                padding: 0;
            }

            .nut-tabs__list {
                height: 100%;
                display: flex;
                justify-content: flex-start;
                align-items: flex-start;
                column-gap: 81px;

                .nut-tabs__titles-item {
                    width: 61.54px;
                    height: 61.54px;          
                    font-size: 28px;
                    color: #222625;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;

                    &.active {
                        color: #14B2B5;
                        font-weight: 500;
                    }
                }
            }
        }

        .nut-tabs__titles-item__smile, 
        .nut-tabs__titles-item__line {
            bottom: 0;
            height: 7px;
            background: #14B2B5;
        }
    
        .nut-tabs__titles-item.active 
        .nut-tabs__titles-item__line {
            width: 100%;
            height: 7px;
            background: #14B2B5;
        }
    }

}
</style>