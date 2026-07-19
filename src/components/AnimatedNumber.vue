<script setup>
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
  value: { type: Number, required: true },
  duration: { type: Number, default: 1000 },
  formatValue: { type: Function, default: v => Math.round(v).toString() },
});

const display = ref(props.formatValue(0));

function animate(to) {
  const start = performance.now();
  const from = 0;

  function tick(now) {
    const progress = Math.min((now - start) / props.duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = from + (to - from) * eased;
    display.value = props.formatValue(current);
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

onMounted(() => animate(props.value));
watch(
  () => props.value,
  next => animate(next)
);
</script>

<template>
  <span>{{ display }}</span>
</template>
