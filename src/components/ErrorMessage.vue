<script setup>
import { computed } from 'vue';

const props = defineProps({
  errorMessage: { type: String, default: '' },
});

const errorMessageHTML = computed(() => `<div>${props.errorMessage}</div>`);
</script>

<template>
  <div class="error-toast">
    <div class="error-toast__body" v-html="errorMessageHTML" />
  </div>
</template>

<style scoped>
.error-toast {
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 12%;
  width: min(340px, calc(100% - 2rem));
  transform: translateX(-50%);
  padding: 1rem 1.15rem;
  border-radius: var(--radius-sm);
  background: var(--foam);
  color: var(--ocean-deep);
  box-shadow: var(--shadow);
  text-align: center;
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
