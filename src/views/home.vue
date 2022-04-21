<template>
    <div class="home">
        <div class="DeleteContainer">
            <TseDeleteButton />
        </div>
        <div class="BowlContainer">
            <!-- <TseLightingBowl /> -->
            <TseFingerScanning />
        </div>
        <div class="ScrollHeartContainer">
            <TseScrollHeart />
        </div>
        <div class="row">
            <TseLiquidDestortedImage />
            <TseClipPath />
        </div>
        <TseHeartFallowMouse />
    </div>
</template>

<script>
import TseDeleteButton from '@/components/deleteBtn.vue';
import TseLightingBowl from '@/components/lightingBowl.vue';
import TseFingerScanning from '@/components/FingerScanning.vue';
import TseScrollHeart from '@/components/ScrollHeart.vue';
import TseHeartFallowMouse from '@/components/HeartFallowMouse.vue';
import TseLiquidDestortedImage from '@/components/LiquidDestortedImage.vue';
import TseClipPath from '@/components/ClipPath.vue';

export default {
    components: {
        TseDeleteButton, TseLightingBowl, TseFingerScanning, TseScrollHeart, TseHeartFallowMouse,
        TseLiquidDestortedImage, TseClipPath,
    },
}
</script>

<style lang="scss" scoped>
.home{
    min-height: 100vh;
    .DeleteContainer{
        padding: 10px;
        display: flex;
        justify-content: center;
    }
    .BowlContainer{
        display: flex;
        padding: 20px;
        background-color: #121212;
        justify-content: center;
    }
    .ScrollHeartContainer{
        overflow: hidden;
    }
    .row{
        display: flex;
        padding: 20px;
        gap: 20px;
    }
}
</style>