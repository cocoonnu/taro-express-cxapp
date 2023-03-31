<script setup lang="ts">

</script>


<template>
    <view class="swiper-container">
        <nut-swiper auto-play="5000">

            <nut-swiper-item>
                <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg"/>
            </nut-swiper-item>

            <nut-swiper-item>
                <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg"/>
            </nut-swiper-item>
            
      </nut-swiper>
    </view>    
</template>


<style lang="scss">
.swiper-container {
    width: 657.69px;
    height: 225px;
    margin-top: 35px;
    border-radius: 23.08px;
    background: #FAFCFB;
    overflow: hidden;

    .nut-swiper {
        width: 100%;
        height: 100%;
    
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}

</style>