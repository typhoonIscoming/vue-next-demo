<template>
    <div class="Dashboard">
        <div class="row">
            <TseChangeImageColor />
        </div>
        Dashboard
    </div>
</template>

<script>
import TseChangeImageColor from '@/components/ChangeImageColor.vue';

export default {
    name: 'Dashboard',
    components: {
        TseChangeImageColor,
    },
}
</script>

<style lang="scss" scoped>
.Dashboard{
    height: 100vh;
    .row{
        display: flex;
        padding: 10px;
    }
}
</style>
