<template>
    <div class="Main">
        show component
        <TseClock />

        <TseCircle />
    </div>
</template>

<script>
import TseClock from '@/components/clock.vue';
import TseCircle from '@/components/circle.vue';

export default {
    name: 'Main',
    components: {
        TseClock, TseCircle,
    },
    mounted() {
        class ComponentCard extends HTMLElement{
            constructor() {
                super();
                var container = document.createElement('div');
                container.classList.add('container');

                this.appendChild(container)
            }
        }
        window.customElements.define('define-component-card', ComponentCard)
    },
}
</script>

<style lang="scss" scoped>
.Main{
    height: 100%;
    background: #2f363e;
}
</style>