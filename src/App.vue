<template>
    <div class="root">
        <TseMenuList />
        <router-view />
    </div>
</template>

<script>
import TseMenuList from '@/components/Menu.vue';

export default {
    name: 'App',
    components: {
        TseMenuList,
    },
};
</script>

<style>
@import url('http://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900');
*{ margin: 0; padding: 0; }
html, body, #app, .root{ height: 100%; }
#app {
    font-family: 'Poppins', sans-serif, 'Avenir', Helvetica, Arial;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    box-sizing: border-box;
}
</style>
