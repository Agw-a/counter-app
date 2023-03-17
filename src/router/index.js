import { createRouter, createWebHistory } from 'vue-router'
import CouterApp from '@/components/CounterApp.vue'
import NotFound from '@/components/NotFound.vue'
import MainApp from '@/components/MainApp.vue'


const routes = [
    {
        path: '/',
        component: CouterApp
    },
    {
        path: '/counter',
        component: MainApp
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;