<template>
    <div class="d-flex" id="wrapper">
        <!-- Sidebar-->
        <div class="border-end bg-white" id="sidebar-wrapper" v-if="!$route.meta.hideNavigation">
            <div class="list-group list-group-flush">
                <router-link :to="{ name: 'Home' }" class="list-group-item list-group-item-action list-group-item-light p-3" aria-current="page" href="#!" @click.prevent="toggle">Dashboard</router-link>
                <router-link :to="{ name: 'About' }" class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" @click.prevent="toggle">Getting Started</router-link>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" @click.prevent="toggle">UI Componenets</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" @click.prevent="toggle">Buttons</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" @click.prevent="toggle">Modals</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3" href="#!" @click.prevent="toggle">Tables</a>
                <a class="list-group-item list-group-item-action list-group-item-light p-3 orange" href="#!" @click="signOut">Logout</a>
            </div>
        </div>
        <!-- Page content wrapper-->
        <div id="page-content-wrapper">
            <!-- Top navigation-->
            <nav class="navbar navbar-expand navbar-dark fixed-top bg-primary" id="nav">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-0 mb-md-0">                                                          
                            <li class="nav-item" v-if="$route.meta.public">
                                <router-link :to="{ name: 'Register' }" class="nav-link">Register</router-link>
                            </li>                                                                
                            <li class="nav-item" v-if="$route.meta.public">
                                <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
                            </li>                                           
                        </ul> 
                    </div>

                    <div id="sidebarToggle" class="sidebartoggle" :class="{ 'active' : isBurgerActive }" @click.prevent="toggle" v-if="!$route.meta.hideNavigation">
                        <button type="button" class="burger-button" title="Menu">
                            <span class="burger-bar burger-bar--1"></span>
                            <span class="burger-bar burger-bar--2"></span>
                            <span class="burger-bar burger-bar--3"></span>
                        </button>
                    </div>

                </div>
            </nav>
            <!-- Page content-->
            <div class="container-fluids">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>


import firebase from 'firebase'
import {ref, onBeforeMount} from 'vue';
import { useRoute, useRouter } from 'vue-router'


export default {

    data: () => ({
        isBurgerActive: false
    }),
    methods: {
        toggle() {
            console.log("clicked");
            document.body.classList.toggle('sb-sidenav-toggled');
            console.log("2");
            this.isBurgerActive = !this.isBurgerActive;
            console.log("3");
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            console.log("4");
        }
    },

  setup () {
    const router = useRouter ();
    const route = useRoute ();
    const name = ref("");

    console.log("Menu 0 - ");

    onBeforeMount (() => {
      console.log('Menu - Onbefores');


      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          console.log("Menu 01");
          router.replace('/login');
        }
        else if (route.path == "/login" || route.path == "/register") {
            console.log("Menu 02");
            router.replace("/");
            const curuser = firebase.auth().currentUser;
            if (curuser) {
                console.log("Menu 01");
                name.value = curuser.displayName;
                console.log("Menu User" + name.value );

            }
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