<template>
  <div
    class="criticalErrorMessage"
    @click="$store.dispatch('clickCriticError')"
  >
    {{ criticalErrorMessage }}<br />
    터치시 화면을 새로고침 합니다.
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    criticalErrorMessage: String,
  },
};
</script>

<style>
.criticalErrorMessage {
  background-color: var(--objectColor);
  color: var(--fontColor);
  font-weight: bold;
  position: fixed;
  z-index: 1001;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
