<template>
  <div
    class="criticalErrorMessage"
    @click="$store.dispatch('clickCriticError')"
  >
    <p>시스템 에러 입니다. 잠시후 다시 접속해주세요.</p>
    <p>{{ criticalErrorMessage }}</p>
    <p>페이지 클릭시 메인화면으로 돌아갑니다.</p>
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
