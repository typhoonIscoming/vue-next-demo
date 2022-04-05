<template>
    <div class="Main">
        show component
        <TseClock />
    </div>
</template>

<script>
import TseClock from '@/components/clock.vue';

export default {
    name: 'Main',
    components: {
        TseClock,
    },
    created() {},
}
</script>

<style lang="scss" scoped>
.Main{
    height: 100%;
    background: #2f363e;
}
</style>