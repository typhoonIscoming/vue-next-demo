<template>
    <div class="Manager">
        <!-- <ElButton type="primary">ElButton</ElButton> -->
        <div class="Left">
            <ScaleInputText />
        </div>
    </div>
</template>

<script>
import { ElButton } from 'element-plus';
import ScaleInputText from '@/components/ScaleInputText.vue';

export default {
    name: 'Manager',
    components: {
        ElButton, ScaleInputText,
    },
}
</script>

<style lang="scss" scoped>
.Manager{
    height: 100vh;
    background-color: #6a85b6;
    text-align: center;
    .Left{
        width: 300px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>