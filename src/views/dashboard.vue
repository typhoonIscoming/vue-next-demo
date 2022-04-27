<template>
    <div class="Dashboard">
        <div class="row">
            <TseChangeImageColor />
            <TseMagicMenu />
            <TseGradientMenu />
            <TseTextSweeping />
        </div>
        <div class="row row2">
            <TseMottled />
            <TseScrollClock />
            <TseWaveText />
            <TseGlassCard />
        </div>
        <div class="row">
            <TseSvg />
        </div>
        Dashboard
    </div>
</template>

<script>
import TseChangeImageColor from '@/components/ChangeImageColor.vue';
import TseMagicMenu from '@/components/MagicMenu.vue';
import TseGradientMenu from '@/components/GradientMenu.vue';
import TseMottled from '@/components/Mottled.vue';
import TseScrollClock from '@/components/ScrollClock.vue';
import TseWaveText from '@/components/WaveText.vue';
import TseSvg from '@/components/Svg.vue';
import TseTextSweeping from '@/components/TextSweeping.vue';
import TseGlassCard from '@/components/GlassCard.vue';

export default {
    name: 'Dashboard',
    components: {
        TseChangeImageColor, TseMagicMenu, TseGradientMenu, TseMottled, TseScrollClock,
        TseWaveText, TseSvg, TseTextSweeping, TseGlassCard,
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
        &.row2{
            align-items: center;
            height: 300px;
        }
    }
}
</style>
