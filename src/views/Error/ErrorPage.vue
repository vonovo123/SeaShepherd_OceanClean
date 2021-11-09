<template>
  <div>{{ $route.query.type }}</div>
</template>

<script>
export default {
  created() {
    console.log($route.query.type);
  },
};
</script>

<style></style>
