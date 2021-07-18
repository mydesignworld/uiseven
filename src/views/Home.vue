<template>
  <div class="holdvue home">
    <img alt="Adhara logo" class="medium-logo" src="../assets/images/logo-adhara-color.png">
    <p class="orange">Welcome to Adhara UI, {{ name }}</p>
    <ModalTest/>
  </div>
</template>

<script>
// @ is an alias to /src
import ModalTest from '@/components/ModalTest.vue'
import firebase from 'firebase'
import {ref, onBeforeMount} from 'vue';

export default {
  name: 'Home',
  components: {
    ModalTest
  },

  setup () {
    const name = ref("");

    onBeforeMount (() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          console.log("Home - Not user");
        }
        else {
            console.log("Menu 02");
            const curuser = firebase.auth().currentUser;
            if (curuser) {
                console.log("Menu 01");
                name.value = curuser.displayName;
                console.log("Menu User" + name.value );

            }
        }
      });
    });

    return {
      name
    }

  }  

  
}
</script>

