<template>
  <div class="hello">
    <h1>Register</h1>
    <input type="email" v-model="email" name="email" placeholder="email"/>
    <input type="password" v-model="password" name="password" placeholder="password"/>
    <button @click="Register">Register</button>
  </div>
</template>


<script>
  import store from './FootballStore'
  import Vuex from 'vuex'
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    store: store,
    name: 'hello',
    props: {},
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      ...Vuex.mapActions([
        'createEvent'
      ]),
      async Register(){
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        console.log(response.data)
      }
    },
    watch: {
      email(value){
        console.log('email has changed', value)
      }
    },
    computed: {
      ...Vuex.mapGetters(['events'])
    }
  }
</script>


<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .cell {
    display: block;
    background-color: #23BF4B;
    background-repeat: no-repeat;
    width: 49px;
    height: 49px;
    float: left;
    border: 1px solid white;
  }

  .cliquable {
    cursor: pointer;
  }

  .isBallon {
    justify-content: center;
    cursor: pointer;
  }

  .isBallon1joueur {
    background-image: url("./../assets/ball24.png");
  }

  .isBallon2joueur {
    background-image: url("./../assets/ball24.png");
  }

  .terrain {
    width: 400px;
  }

  .user1 {
    justify-content: center;
    margin-top: 20%; /*temp*/
  }

  .user2 {
    justify-content: center;
    transform: rotate(180deg);
  }
</style>
