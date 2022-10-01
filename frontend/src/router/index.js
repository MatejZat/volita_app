import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index'

const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Index
    },
    {
        path: '/kalendar',
        name: 'Calendar',
        component: function () {
            return import(/* webpackChunkName: "calendar" */ '../views/Calendar.vue')
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
