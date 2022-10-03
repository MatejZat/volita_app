//IMPORT ROUTER
import { createRouter, createWebHistory } from 'vue-router'

//IMPORT INDEX.VUE
import Index from '../views/app/Index'

//IMPORT STORE
import store from "@/store";


const routes = [

    //LOGIN

    {
        path: '/login',
        name: 'Login',
        meta: { layout: 'auth' },
        component: function () {
            return import(/* webpackChunkName: "login" */ '../views/auth/Login')
        }
    },


    //DASHBOARD

    {
        path: '/',
        name: 'Dashboard',
        component: Index
    },


    //CALENDAR

    {
        path: '/kalendar',
        name: 'Calendar',
        component: function () {
            return import(/* webpackChunkName: "calendar" */ '../views/app/Calendar.vue')
        }
    }
]


//CREATE ROUTER
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})



//SET LAYOUTS
router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.layout && to.meta.layout == 'auth') {
        store.commit('setLayout', 'auth');
    } else {
        store.commit('setLayout', 'app');
    }
    next(true);
});


export default router
