<template>
  <div>
    {{ $route.query.type }}
    <button @click="$store.dispatch('moveToMaps')">지도로이동</button>
    <br />
    <button @click="$store.dispatch('moveToAuth')">인증화면으로</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {},
  methods: {},
};
</script>
