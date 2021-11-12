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

<style>
.errorMessage {
  background-color: #fff;
  font: 400 18px Roboto, Arial, sans-serif;
  box-shadow: 0 0 3px #aaa;
  transition: opacity 0.3s;
  position: fixed;
  z-index: 1001;
  left: 50%;
  top: 100px;
  transform: translate(-50%, -50%);
}
</style>
