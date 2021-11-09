<template>
  <div class="errorMessage">
    <div>{{ errorMessage }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    errorMessage: String,
  },
};
</script>

<style></style>
