<template>
    <div class="Dashboard">
        <div class="row">
            <TseChangeImageColor />
            <TseMagicMenu />
            <TseGradientMenu />
        </div>
        Dashboard
    </div>
</template>

<script>
import TseChangeImageColor from '@/components/ChangeImageColor.vue';
import TseMagicMenu from '@/components/MagicMenu.vue';
import TseGradientMenu from '@/components/GradientMenu.vue';

export default {
    name: 'Dashboard',
    components: {
        TseChangeImageColor, TseMagicMenu, TseGradientMenu,
    },
}
</script>

<style lang="scss" scoped>
.Dashboard{
    height: 100vh;
    .row{
        display: flex;
        padding: 10px;
        gap: 20px;
    }
}
</style>
