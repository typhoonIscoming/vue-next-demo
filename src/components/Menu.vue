<template>
    <div class="MenuList">
        <router-link to="/main" class="menuItem">Main</router-link>
        <router-link to="/home" class="menuItem">Home</router-link>
        <router-link to="/dashboard" class="menuItem">dashboard</router-link>
        <router-link to="/manager" class="menuItem">Manager</router-link>
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
    box-sizing: border-box;
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    .menuItem{
        text-decoration: none;
        color: black;
        position: relative;
        &+.menuItem{
            margin-left: 20px;
        }
        &.router-link-active {
            color: red;
            &::after{
                position: absolute;
                content: '';
                width: 100%;
                height: 2px;
                bottom: -4px;
                left: 0;
                background: red;
            }
        }
    }
}
</style>
