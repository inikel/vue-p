import {createRouter, createWebHistory} from "vue-router";
import Payments from "@/pages/Payments";
import UserPage from "@/pages/UsersPage";

const routes = [
    {
        path: '/',
        component: UserPage
    },
    {
        path: '/payments',
        component: Payments
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
