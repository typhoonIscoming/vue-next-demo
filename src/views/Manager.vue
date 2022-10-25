<template>
    <div class="Manager">
        <div class="Left">
            <ScaleInputText />
        </div>
        <PricticeStore ref="prictiseStore" />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { ElButton } from 'element-plus';
import ScaleInputText from '@/components/ScaleInputText.vue';
// import PricticeStore from '@/modules/practiceStore.vue';

export default {
    name: 'Manager',
    components: {
        ElButton, ScaleInputText,
        // 可以拆分模块打包
        PricticeStore: defineAsyncComponent({
            loader: () => new Promise((resolve) => {
                setTimeout(() => {
                    resolve(import('@/modules/practiceStore.vue'))
                }, 2000)
            }),
            loadingComponent: 'loading',
            errorComponent: 'error',
            timeout: 3000,
        }),
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