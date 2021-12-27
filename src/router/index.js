import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '@/store/index.js';
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
    path: '/realhome',
    name: 'realhome',
    component: () => import('../views/RealHome.vue'),
  },
  {
    path: '/error',
    name: '/error',
    component: () => import('../views/Error/ErrorPage.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (navigator.onLine) {
    next();
  } else {
    console.log('offLine');
    store.dispatch('setError', {
      message: '인터넷 연결상태를 확인해주세요.',
      type: 'critical',
    });
  }
});
export default router;
