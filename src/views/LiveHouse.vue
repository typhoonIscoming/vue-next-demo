<template>
    <div class="LiveHouse">
        <div class="BarrageBox">
        </div>
        <Sheep />
    </div>
</template>

<script>
// import { Baberrage } from 'vue-baberrage'
import Sheep from '@/components/Sheep.vue';

export default {
    name: 'LiveHouse',
    components: {
        Sheep,
    },
}
</script>

<style lang="scss" scoped>
.LiveHouse{
    height: 100%;
    .BarrageBox{
        height: 30px;
    }
}
</style>
