<template>
    <div class="Manager">
        <ElButton type="primary">ElButton</ElButton>
        Manager
    </div>
</template>

<script>
import { ElButton } from 'element-plus';

export default {
    name: 'Manager',
    components: {
        ElButton,
    },
}
</script>

<style lang="scss" scoped>
.Manager{
    height: 100vh;
}
</style>