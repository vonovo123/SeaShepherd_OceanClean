import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/index.js';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'realhome',
    component: () => import('../views/RealHome.vue'),
  },
  {
    path: '/maps/main',
    name: 'maps/Main',
    component: () => import('../views/Maps/Main.vue'),
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
    console.log('internetDisconnet');
    store.dispatch('setError', {
      message: '인터넷 연결상태를 확인해주세요.',
      type: 'critical',
    });
  }
});
export default router;
