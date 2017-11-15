<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <navmenu></navmenu>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navmenu from './components/Navmenu'
    import Vuex from 'vuex'
    export default {
        name: 'app',
        components: { Navmenu }
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
