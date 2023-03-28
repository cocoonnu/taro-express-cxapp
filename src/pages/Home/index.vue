<script setup lang="ts">
import { ref } from 'vue'

const msg = ref('Hello world')

</script>


<template>
    <view class="index">
        <text>{{ msg }}</text>
    </view>
</template>


<style lang="scss">
.index {
    color: aqua;
}
</style>