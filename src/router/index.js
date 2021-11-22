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
  {
    path: '/regist/main',
    name: 'regist/Main',
    component: () => import('../views/Regist/Main.vue'),
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

// router.beforeEach((to, from, next) => {
//   if (to.name === '/error') {
//     console.log(from);
//     console.log(to);

//     if (navigator.onLine) {
//       next({ path: to.query.prev });
//     } else {
//       next({ params: { type: to.params } });
//     }
//   } else {
//     next();
//     // if (navigator.onLine) {
//     //   next();
//     // } else {
//     //   next();
//     //   console.log(to);
//     //   const prev = !to.name ? 'Home' : to.name;
//     //   console.log(prev);
//     //   next({
//     //     name: '/error',
//     //     query: { type: 'NetworkError', prev: prev },
//     //   });
//     // }
//   }
// });
export default router;
