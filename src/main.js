import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap'
import '@/assets/scss/main.scss'



// Ronnie - This is the normal way, but I split it incase we want to do certain things before mounting the app
// createApp(App).use(router).mount('#app') 
const app = createApp(App)
app.use(router)
app.mount('#app')


 