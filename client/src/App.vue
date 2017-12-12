<template>
    <div id="app">
        <navbar-page></navbar-page>
        <!--<img src="./assets/logo.png">-->
        <router-view></router-view>
    </div>
</template>

<script>
    import NavbarPage from './components/MDB/NavbarPage'
    import Vuex from 'vuex'
    export default {
        name: 'app',
        components: { NavbarPage }
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
