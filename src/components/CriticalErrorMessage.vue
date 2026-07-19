<script setup>
import { computed } from 'vue';
import { useAppStore } from '@/stores/app';
import router from '@/router';

const props = defineProps({
  criticalErrorMessage: { type: String, default: '' },
});

const appStore = useAppStore();

const criticalErrorMessageHTML = computed(
  () => `<div>${props.criticalErrorMessage}</div>`
);

function goHome() {
  appStore.initError();
  router.push({ name: 'realhome' });
  setTimeout(() => {
    router.go(0);
  }, 800);
}
</script>

<template>
  <div class="critical-error" @click="goHome">
    <div class="critical-error__panel">
      <p class="critical-error__eyebrow">Something went wrong</p>
      <div class="critical-error__message" v-html="criticalErrorMessageHTML" />
      <p class="critical-error__hint">화면을 터치하면 처음 화면으로 돌아갑니다</p>
    </div>
  </div>
</template>

<style scoped>
.critical-error {
  position: fixed;
  inset: 0;
  z-index: 1001;
  display: grid;
  place-items: center;
  padding: 1.5rem;
  background:
    radial-gradient(circle at top, rgba(214, 40, 40, 0.18), transparent 45%),
    rgba(4, 16, 24, 0.94);
  cursor: pointer;
}

.critical-error__panel {
  max-width: 420px;
  text-align: center;
}

.critical-error__eyebrow {
  margin: 0 0 0.75rem;
  font-family: var(--font-display);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.75rem;
  color: var(--accent-soft);
}

.critical-error__message {
  margin-bottom: 1.25rem;
  font-size: 1.15rem;
  line-height: 1.6;
  font-weight: 600;
}

.critical-error__hint {
  margin: 0;
  color: var(--foam-muted);
  font-size: 0.9rem;
}
</style>
