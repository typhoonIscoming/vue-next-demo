<template>
    <div class="Manager">
        <div class="Left">
            <ScaleInputText />
        </div>
        <div>
            current count's value * 2 equal {{ getCount }}.
            <ElButton @click="handleIncrement">increment</ElButton>
            <ElButton @click="handleChangeDirectly">change data directly</ElButton>,
            <span>count value is {{ count }}</span>
            <ElButton @click="handleChangeByPatch">change data by $patch</ElButton>
            <span>mapActions -> random value {{ randomValue }}</span>
            <ElButton @click="useMapActions">change data by mapActions</ElButton>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { ElButton } from 'element-plus';
import ScaleInputText from '@/components/ScaleInputText.vue';
import indexStore from '@/store';
import { storeToRefs, mapActions } from 'pinia';

export default {
    name: 'Manager',
    components: {
        ElButton, ScaleInputText,
    },
    setup() {
        // 值得注意的是 indexStore 是一个方法，调用之后会给我们返回一个对象。
        // 这个时候，你就会发现，页面上就能正常显示我们在index.js 里面的 state 里面定义的 count 数据。
        const store = indexStore();
        const randomValue = ref(0);
        return {
            store,
            // 使用 storeToRefs 就能将store中的state 解构到组件中，直接使用响应式变量
            ...storeToRefs(store),
            randomValue,
            handleIncrement: () => {
                store.increment();
            },
        }
    },
    methods: {
        ...mapActions(indexStore, ['increment']),
        handleChangeDirectly() {
            this.store.count += 1
            console.log('this', this.store.count)
        },
        handleChangeByPatch() {
            const random = Math.trunc(Math.random() * 4 + 1);
            // 官方给我们的解释是 patch 是做了优化的，还有就是patch 可以同时修改 多个数据。
            // $patch 方法可以传递一个函数来修改。
            this.store.$patch({ count: this.store.count += random })
        },
        useMapActions() {
            const random = Math.random();
            const result = random < 0.5 ? Math.trunc((-1 - random) * 4) : Math.trunc(random * 4 + 1);
            this.randomValue = result;
            this.increment(result)
        },
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