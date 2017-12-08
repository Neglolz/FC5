<template>
    <div id="app">
        <navbar-menu></navbar-menu>
        <!--<img src="./assets/logo.png">-->
        <router-view></router-view>
    </div>
</template>

<script>
    import NavbarMenu from './components/NavbarMenu'
    import Vuex from 'vuex'
    export default {
        name: 'app',
        components: { NavbarMenu }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
