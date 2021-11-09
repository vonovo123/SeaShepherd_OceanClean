<template>
  <div
    class="criticalErrorMessage"
    @click="$store.dispatch('clickCriticError')"
  >
    {{ criticalErrorMessage }}<br />
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

<style></style>
