<template>
    <div class="home">
        <div class="DeleteContainer">
            <TseDeleteButton />
        </div>
    </div>
</template>

<script>
import TseDeleteButton from '@/components/deleteBtn.vue';

export default {
    components: {
        TseDeleteButton,
    },
}
</script>

<style lang="scss" scoped>
.home{
    min-height: 100vh;
    .DeleteContainer{
        padding: 10px;
        display: flex;
        justify-content: center;
    }
}
</style>