<template>
    <div class="Manager">
        <div class="Left">
            <ScaleInputText />
        </div>
        <PricticeStore />
    </div>
</template>

<script>
import { ElButton } from 'element-plus';
import ScaleInputText from '@/components/ScaleInputText.vue';
import PricticeStore from '@/modules/practiceStore.vue';

export default {
    name: 'Manager',
    components: {
        ElButton, ScaleInputText, PricticeStore,
    },
}
</script>

<style lang="scss" scoped>
.Manager{
    height: 100vh;
    background-color: #6a85b6;
    color: white;
    .Left{
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>