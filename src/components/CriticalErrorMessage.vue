<template>
  <div
    class="criticalErrorMessage"
    @click="$store.dispatch('clickCriticError')"
  >
    CRITICAL ERROR : {{ criticalErrorMessage }}<br />
    페이지 클릭시 메인화면으로 돌아갑니다.
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
  background-color: rgb(195, 78, 78);
  opacity: 0.4;
  color: white;
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
}
</style>
