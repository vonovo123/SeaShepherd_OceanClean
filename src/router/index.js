import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store/index.js';
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

router.beforeEach(async (to, from, next) => {
  if (to.path !== '/Error/ErrorPage') {
    const isOnline = await store.dispatch('setConnectionStatus');
    console.log(isOnline);
    if (isOnline === 'offLine') {
      next({ path: '/Error/ErrorPage', query: { type: '404' } });
    } else {
      next();
    }
  } else {
    console.log(to);
    next({ query: { type: '404' } });
  }
});
export default router;
