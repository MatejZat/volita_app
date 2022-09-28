// CSS
import './assets/sass/app.scss';

// VUE
import { createApp } from 'vue'

// APP.VUE
import App from './App.vue'


// SERVICE WORKER
import './registerServiceWorker'


// ROUTER
import router from './router'


// STORE
import store from './store'


// CREATE APP
createApp(App).use(store).use(router).mount('#app')
