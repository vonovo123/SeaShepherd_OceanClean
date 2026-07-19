<script setup>
import { storeToRefs } from 'pinia';
import { useAppStore } from '@/stores/app';
import ErrorMessage from '@/components/ErrorMessage.vue';
import CriticalErrorMessage from '@/components/CriticalErrorMessage.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';

const appStore = useAppStore();
const { error, isLoading } = storeToRefs(appStore);
</script>

<template>
  <div class="app-shell">
    <router-view />
    <ErrorMessage
      v-show="error.type !== 'critical' && error.flag"
      :error-message="error.message"
    />
    <CriticalErrorMessage
      v-show="error.type === 'critical' && error.flag"
      :critical-error-message="error.message"
    />
    <LoadingOverlay v-if="isLoading" />
  </div>
</template>

<style scoped>
.app-shell {
  position: relative;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
