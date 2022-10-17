import { defineStore } from 'pinia';


export default defineStore('index', {
    state: () => ({ count: 0, name: 'edurado' }),
    getters: {
        getCount: state => state.count * 2,
    },
    actions: {
        increment(base) {
            if (typeof base === 'number') {
                this.count += base
            } else {
                this.count += 1;
            }
        },
    },
})
