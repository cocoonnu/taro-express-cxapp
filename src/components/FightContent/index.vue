<script setup lang="ts">
import { onMounted } from 'vue'
import { getflightList } from '@/utils/api'

onMounted(async function() {

    let res = await getflightList(123)
    console.log(res)
    
})
</script>

<template>

    <view class="fight-content">

    </view>

</template>

<style lang="scss">
</style>