<template>
  <div class="criticalErrorMessage" @click="goHome">
    <div class="customMessageWrapper">
      <div class="customMessage"></div>
      <div>터치시 처음화면으로 돌아갑니다.</div>
    </div>
  </div>
</template>

<script>
import router from '../router/index.js';
export default {
  data() {
    return {};
  },
  props: {
    criticalErrorMessage: String,
  },
  watch: {
    criticalErrorMessage: function () {
      const $message = `<div>${this.criticalErrorMessage}</div>`;
      document.querySelector('.customMessage').innerHTML = $message;
    },
  },
  methods: {
    goHome: () => {
      router.push({
        name: 'realhome',
      });
      router.go();
    },
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
  text-align: center;
}
.customMessageWrapper {
  position: relative;
  top: 40%;
}
.customMessage {
  margin-bottom: 20px;
}
</style>
