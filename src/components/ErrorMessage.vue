<template>
  <div class="errorMessage">
    <div class="customMessage" v-html="errorMessageHTML"></div>
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
  computed: {
    errorMessageHTML: function () {
      const errorMessageHTML = `<div>${this.errorMessage}</div>`;
      return errorMessageHTML;
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
  top: 20%;
  width: 300px;
  margin-left: calc(300px / -2);
  text-align: center;
}
</style>
