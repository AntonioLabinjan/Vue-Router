import { createRouter, createWebHistory } from 'vue-router';
import HomeRoute from '@/views/HomeRoute.vue';
import AboutRoute from '@/views/AboutRoute.vue';

const routes = [
  { path: '/home-route', component: HomeRoute },
  { path: '/about-route', component: AboutRoute },
  { path: '/', redirect: '/home-route' }, // Dodana redirekcija na /home-route
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
