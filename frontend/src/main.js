// ICONS
import VueFeather from "vue-feather";

// VUE
import { createApp } from "vue";

// APP.VUE
import App from "./App.vue";

// SERVICE WORKER
import "./registerServiceWorker";

// ROUTER
import router from "./router";

// STORE
import store from "./store";

// CREATE APP
createApp(App)
    .component(VueFeather.name, VueFeather)
    .use(store)
    .use(router)
    .mount("#app");
