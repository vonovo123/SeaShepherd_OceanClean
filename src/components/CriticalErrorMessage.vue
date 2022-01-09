<template>
  <div class="criticalErrorMessage" @click="goHome">
    <div class="customCriticalMessageWrapper">
      <div
        class="customCriticalMessage"
        v-html="criticalErrorMessageHTML"
      ></div>
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
  computed: {
    criticalErrorMessageHTML: function () {
      const criticalErrorMessageHTML = `<div>${this.criticalErrorMessage}</div>`;
      return criticalErrorMessageHTML;
    },
  },
  methods: {
    goHome: () => {
      router.push({
        name: 'realhome',
      });

      setTimeout(() => {
        router.go();
      }, 1000);
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
.customCriticalMessageWrapper {
  position: relative;
  top: 40%;
}
.customCriticalMessage {
  margin-bottom: 20px;
}
</style>
