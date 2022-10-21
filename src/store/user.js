import { defineStore } from 'pinia';


export default defineStore('user', {
    state: () => ({ name: 'edurado' }),
    actions: {
        setName(str) {
            this.name = str;
        },
    },
    debounce: {
        // 设置actions.setName防抖300毫秒
        setName: 300,
    },
})


