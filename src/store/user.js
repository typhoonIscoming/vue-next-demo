import { defineStore } from 'pinia';


export default defineStore('user', {
    state: () => ({ name: 'edurado' }),
    actions: {
        setName(str) {
            this.name = str;
        },
    },
})


