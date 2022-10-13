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
        meta: { title: 'Nástenka' },
        component: Index
    },


    //CALENDAR

    {
        path: '/kalendar',
        name: 'Calendar',
        meta: { title: 'Kalendár' },
        component: function () {
            return import(/* webpackChunkName: "calendar" */ '../views/app/Calendar.vue')
        }
    },

    //BUSINESS CASES

    {
        path: '/obchodne-pripady',
        meta: { title: 'Obchodné prípady' },
        children: [
            {
                path: '',
                name: 'BusinessCases',
                component: function () {
                    return import(/* webpackChunkName: "business-cases" */ '../views/app/BusinessCases/CasesIndex.vue')
                },
            },
            {
                path: '/obchodne-pripady/:id/edit',
                name: 'BusinessCasesEdit',
                meta: { title: 'Nazov' },
                component: function () {
                    return import(/* webpackChunkName: "business-cases" */ '../views/app/BusinessCases/CasesEdit.vue')
                },
            }
        ]
    },

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
