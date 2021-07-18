<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary" id="nav">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link">About</router-link>
          </li>                                        

          <li class="nav-item">
            <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link" @click="signOut">Logout</a>
          </li>
          <li>{{ name }}</li>                                                  
        </ul>        
      </div>
    </div>
  </nav>

</template>


<script>
import firebase from 'firebase'
import {ref, onBeforeMount} from 'vue';
import { useRoute, useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter ();
    const route = useRoute ();
    const name = ref("");

    console.log("Menu 0 - ");

    onBeforeMount (() => {
      console.log('Menu - Onbefores');
      const curuser = firebase.auth().currentUser;
      if (curuser) {
        console.log("Menu 01");
        name.value = curuser.displayName;
        console.log("Menu User" + name.value );

      }

      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          console.log("Menu 01");
          router.replace('/login');
        }
        else if (route.path == "/login" || route.path == "/register") {
          console.log("Menu 02");
          router.replace("/");
        }
      });
    });

    const signOut = () => {
      console.log("Menu 03");

      firebase.auth().signOut().then(() => {
        console.log("Signed Out");
      }).catch((error) => {
        console.log(error)
      });
      console.log("Menu 04");

    }

    return {
      signOut,
      name
    }

  }
}

</script>