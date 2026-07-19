import { createRouter, createWebHistory } from 'vue-router';
import { useAppStore } from '@/stores/app';

const routes = [
  {
    path: '/',
    name: 'realhome',
    component: () => import('@/views/RealHome.vue'),
  },
  {
    path: '/maps/main',
    name: 'maps/Main',
    component: () => import('@/views/Maps/Main.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (navigator.onLine) {
    next();
    return;
  }

  const appStore = useAppStore();
  appStore.setError({
    message: '인터넷 연결상태를 확인해주세요.',
    type: 'critical',
  });
});

export default router;
