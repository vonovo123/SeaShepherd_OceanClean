<template>
  <div class="loading-overlay" aria-live="polite" aria-busy="true">
    <div class="loading-spinner" />
    <p>불러오는 중</p>
  </div>
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-content: center;
  gap: 1rem;
  background: rgba(4, 16, 24, 0.72);
  color: var(--foam);
  font-family: var(--font-body);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.85rem;
}

.loading-spinner {
  width: 42px;
  height: 42px;
  margin: 0 auto;
  border: 2px solid rgba(238, 245, 248, 0.2);
  border-top-color: var(--warm);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
