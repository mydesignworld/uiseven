import { createRouter, createWebHistory } from 'vue-router'
import { watch } from "vue"
import Home from '../views/Home.vue'
import { user, initialised } from "@/components/auth";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Dashboard'
    }    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/routing/:id', //dynamic routing test :id
    name: 'Routing',
    meta: {
      title: 'Routings'
    },       
    component: () => import('../views/Routing.vue')
  },
  {
    path: '/register',
    name: 'Register',   
    component: () => import('../views/Register.vue'),
    meta: {
      public: true,
      hideNavigation: true
    }
  },
  {
    path: '/login',
    name: 'Login',   
    component: () => import('../views/Login.vue'),
    meta: {
      public: true,
      hideNavigation: true
    }    
  }  
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  // Remove Bootstrap mobile navigation show 
  // document.querySelector("#navbarCollapse").classList.remove("show");
  // START - Ronnie - Give page proper titles
  console.log(to)
  // Ronnie - TO ENABLE the Additional title like company name, edit .env file in route as well as index.html with process.env.VUE_APP_TITLE
  // Ronnie - document.title = `${process.env.VUE_APP_TITLE} - ${to.name}` 

  let myDocumentTitle = to.name;
  if (to.meta.title) {
    myDocumentTitle += ' - ' + to.meta.title;
  }  
  if (to.params.title) {
    myDocumentTitle += ' - ' + to.params.title
  }
  document.title = myDocumentTitle
  next()
  // END - Ronnie - Give page proper titles

});

router.beforeEach((to, _, next) => {
  console.log('Router 01');
  if (initialised.value) {
    console.log('Router 02');
    if (!to.matched.some(record => record.meta.public) && !user.value) {
      console.log('Router 03 - ' + user.value);
      return next("/login");
    }
    console.log('Router 04');
    next();
    console.log('Router 05');
  } else {
    watch(
      () => initialised.value,
      newVal => {
        if (newVal) {
          console.log("03");
          if (!to.matched.some(record => record.meta.public) && !user.value) {
            console.log("04");
            return next("/login");
          }

          next();
        }
      }
    );
  }
});


export default router
