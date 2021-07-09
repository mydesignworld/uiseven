import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      auth: true,
      title: 'Dashboard'
    }    
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/routing/:id', //dynamic routing test :id
    name: 'Routing',
    meta: {
      auth: true,
      title: 'Routings'
    },       
    component: () => import('../views/Routing.vue')
  } 
]



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  
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

})


export default router
