<template>
  <!--<div id="registration" class="col-md-6 offset-md-3">-->
<!--
    <div v-show="!success">
      <h3>S'inscrire</h3>
      <br>
      <label>Pseudonyme</label>
      <b-form-input v-model="user.username" type="text" :state="user.username.length < 4 ?'success':'warning'"></b-form-input>
      <br>
      <label>Email</label>
      <b-form-input v-model="user.email" type="email" :formatter="format"></b-form-input>
      <br>
      <b-button  @click="subscribe()" :disabled="validate()" variant="primary">Envoyer</b-button>
    </div>
    <div v-show="success">
      <h1>Félicitations !</h1>
      <p>Vous êtes désormais un membre du club des critiques ! Vous allez recevoir votre mot de passe par mail dans quelques minutes !</p>
    </div>
-->

    <login></login>

  <!--</div>-->
</template>

<script>
  import Login from './../components/MDB/Login.vue'
  export default {
    components:{
      Login
    },
    data() {
      return {
        user: {
          username: '',
          email: '',
        },
        errors: {
          username: '',
          email: '',
        },
        success: false,
      }
    },
    methods: {
      subscribe() {
        createUser(this.user).then(() => {
          this.success = true
        }).catch(() => { })
      },
      validate() {
        return this.user.username.length < 5
      },
      format(value) {
        return value.toLowerCase()
      },
    },
  }

</script>

<style>
  body{
    background-image: url('./../assets/bglogin.jpeg');
    background-size: cover;
  }
</style>
