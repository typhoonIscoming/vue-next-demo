<template>
    <div>
        <div>
            count's value * 2 equal {{ getCount }}.
            <ElButton @click="handleIncrement">increment</ElButton>
            <ElButton @click="handleChangeDirectly">change data directly</ElButton>,
            <span>count value is {{ count }}</span>
            <ElButton @click="handleChangeByPatch">change data by $patch</ElButton>
            <span>mapActions -> random value {{ randomValue }}</span>
            <ElButton @click="useMapActions">change data by mapActions</ElButton>
            count minus 1 equal {{ count }}
            <ElButton @click="handleMinus">minus</ElButton>
        </div>
        <div>
            user store name is {{ user.name }}
            <ElButton @click="handleRandomName">change name</ElButton>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { storeToRefs, mapActions } from 'pinia';
import indexStore from '@/store';
import userStore from '@/store/user';
/**
 * setup是vue3新增的生命周期函数，setup的加入就是为了让vue3使用组合式API（Composition API）。
 * 使用组合式API更符合大型项目的开发，通过setup可以将该部分抽离成函数,让其他开发者就不用关心该部分逻辑。
 **/
export default {
    setup() {
        // 值得注意的是 indexStore 是一个方法，调用之后会给我们返回一个对象。
        // 这个时候，你就会发现，页面上就能正常显示我们在index.js 里面的 state 里面定义的 count 数据。
        const store = indexStore();
        const randomValue = ref(0);
        const user = userStore();
        return {
            store,
            user,
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
        handleMinus() {
            this.increment(-1)
        },
        handleRandomName() {
            const characters = [];
            const start = 97;
            for (let i = start; i < start + 26; i += 1) {
                characters.push(String.fromCharCode(i))
            }
            const random = Math.trunc(Math.random() * 10 + 2);
            let name = '';
            for (let i = 0; i < random; i += 1) {
                const index = Math.trunc(Math.random() * characters.length);
                name += characters[index];
            }
            this.user.setName(name)
        },
    },
}
</script>

<style>

</style>