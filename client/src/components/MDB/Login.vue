<template>
  <section class="form-dark">
    <div class="card card-image">
    <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">

      <!--Header-->
      <div class="text-center">
        <h3 class="white-text mb-5 mt-4 font-bold"><strong>SIGN</strong> <a class="teal-text font-bold"><strong> UP</strong></a></h3>
      </div>

      <!--Body-->
      <div class="md-form">
        <input type="text" id="Form-email5" class="form-control white-text">
        <label for="Form-email5" class="active">Your email</label>
      </div>

      <div class="md-form pb-3">
        <input type="password" id="Form-pass5" class="form-control white-text">
        <label for="Form-pass5" class="active">Your password</label>
        <div class="form-group">
          <input type="checkbox" id="checkbox6">
          <label for="checkbox6" class="white-text">Accept the<a href="#" class="teal-text font-bold"> Terms and Conditions</a></label>
        </div>
      </div>

      <!--Grid row-->
      <div class="row d-flex align-items-center mb-4">

        <!--Grid column-->
        <div class="text-center mb-3 col-md-12">
          <button type="button" class="btn btn-teal btn-block btn-rounded z-depth-1 waves-effect waves-light">Sign in</button>
        </div>
        <!--Grid column-->
      </div>
      <!--Grid row-->

      <!--Grid column-->
      <div class="col-md-12">
        <p class="font-small white-text d-flex justify-content-end">Have an account? <a href="#" class="teal-text ml-1 font-bold"> Log in</a></p>
      </div>
      <!--Grid column-->

    </div>
  </div>
  </section>
</template>

<script>

  export default {
    name: 'Login',
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .card-image{
      background-image: url('./../../assets/bglogin.jpeg');
      width: 28rem;
      background-size: cover;
    }
    .form-dark .md-form label {
      color: #fff;
    }
    .form-dark [type="radio"] + label, .form-dark [type="checkbox"] + label {
      font-size: 0.8rem;
    }
    .form-dark input[type="checkbox"] + label:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 17px;
      height: 17px;
      z-index: 0;
      border: 1.5px solid #fff;
      border-radius: 1px;
      margin-top: 2px;
      -webkit-transition: 0.2s;
      transition: 0.2s;
    }

</style>
