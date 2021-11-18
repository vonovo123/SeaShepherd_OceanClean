<template>
  <div class="home-main">
    <div class="body">
      {{ $route.query.type }}
      <button @click="$store.dispatch('moveToMaps')">MAP</button>
      <br />
      <button @click="$store.dispatch('moveToAuth')">인증화면으로</button>
      <br />
      <button @click="$store.dispatch('moveToRegistEvent')">등록폼으로</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {},
  methods: {},
};
</script>
<style></style>
