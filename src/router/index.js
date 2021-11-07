import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/maps/main',
    name: 'maps/Main',
    component: () => import('../views/Maps/Main.vue'),
  },
  {
    path: '/auth/main',
    name: 'auth/Main',
    component: () => import('../views/Auth/Main.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
