import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "@/views/LoginView";
import RegistView from "@/views/RegistView";
import kategorieAddView from "@/views/KategorieAddView";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/regist',
        name: 'regist',
        component: RegistView
    },
    {
        path: '/kategorieAdd',
        name: 'kategorieAdd',
        component: kategorieAddView
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
