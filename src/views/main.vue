<template>
    <div class="Main">
        <div class="row row1">
            <TseRadar />
        </div>
        <div class="row">
            <TseClock />
            <TseChargingEffect />
            <TseSunMoonAlternation />
        </div>
        <!-- <TseCircle /> -->
    </div>
</template>

<script>
import TseClock from '@/components/clock.vue';
import TseCircle from '@/components/circle.vue';
import TseChargingEffect from '@/components/ChargingEffect.vue';
import TseSunMoonAlternation from '@/components/Alternation.vue';
import TseRadar from '@/components/Radar.vue';


export default {
    name: 'Main',
    components: {
        TseClock, TseCircle, TseChargingEffect, TseSunMoonAlternation, TseRadar,
    },
    mounted() {
        // class ComponentCard extends HTMLElement{
        //     constructor() {
        //         super();
        //         var container = document.createElement('div');
        //         container.classList.add('container');

        //         this.appendChild(container)
        //     }
        // }
        // window.customElements.define('define-component-card', ComponentCard)
    },
}
</script>

<style lang="scss" scoped>
.Main{
    background: #2f363e;
    padding: 50px;
    .row{
        display: flex;
        flex-wrap: wrap;
        gap: 30px;
        flex-shrink: 0;
        &+.row{
            margin-top: 20px;
        }
    }
    .row1{
        height: 360px;
    }
    .menu{
        background: white;
    }
}
</style>