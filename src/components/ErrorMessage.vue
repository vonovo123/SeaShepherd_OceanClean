<template>
  <div class="errorMessage">
    <div class="customMessage"></div>
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
  watch: {
    errorMessage: function () {
      const $message = `<div>${this.errorMessage}</div>`;
      document.querySelector('.customMessage').innerHTML = $message;
    },
  },
};
</script>

<style>
.errorMessage {
  background-color: #fff;
  box-shadow: 0 0 3px #aaa;
  transition: opacity 0.3s;
  position: fixed;
  z-index: 1001;
  left: 50%;
  padding: 3%;
  top: 200px;
  transform: translate(-50%, -50%);
}
</style>
