<template>
  <div class="wrapper">
    <div class="container">
      <div class="register block-center loginform">
        <img alt="Adhara logo" class="medium-logo" src="@/assets/images/logos/adhara_logo.svg"/>
        <form @submit.prevent="signup">
          <div class="mb-3">
            <input type="text" placeholder="Email" class="form-control" v-model="email"/>
          </div>
          <div class="mb-4">
            <input type="password" placeholder="Password" class="form-control" v-model="password"/>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary btn-onprimary btn-lg">Register</button>
          </div>
        </form>
        <div class="mt-3">
          <span class="text-white"> Already registered? </span>
          <router-link :to="{ name: 'Login' }" class="text-white">Login here</router-link>
        </div>
        <p class="mb-3 text-white">or</p>
        <a href="#" class="text-white" @click="google">
          <img alt="Goolge logo" class="medium-logo" src="@/assets/images/logos/google-logo-button.png"/>
        </a>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, defineComponent } from "vue";
import { user, google, useSignup } from ".";
import router from "@/router";
export default defineComponent({
  props: {
    loginReturnUrl: { type: String, default: "/" },
  },
  setup(props) {
    watch(
      () => user.value,
      newUser => {
        if (newUser) {
          router.push(props.loginReturnUrl);
        }
      }
    );
    return {
      ...useSignup(),
      google,
    };
  },

    mounted () {
      document.body.classList.add('fullbackground', 'login')
    },
    unmounted () {
      document.body.classList.remove('fullbackground', 'login')
    },

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped src="@/assets/css/login.css"></style> 