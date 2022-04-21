<template>
    <div class="MenuList">
        <router-link to="/home" class="menuItem">Home</router-link>
        <router-link to="/main" class="menuItem">Main</router-link>
    </div>
</template>

<script>
export default {
    name: 'TseMenuList',
}
</script>

<style lang="scss" scoped>
.MenuList{
    width: 100%;
    padding: 10px;
    .menuItem+.menuItem{
        margin-left: 20px;
    }
}
</style>
