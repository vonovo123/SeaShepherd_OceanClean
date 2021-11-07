<template>
  <div>
    <button @click="$store.dispatch('moveToMaps')">지도로이동</button>
    <br />
    <button @click="$store.dispatch('moveToAuth')">인증화면으로</button>
  </div>
</template>

<script>
//import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {},
  computed: {},
  methods: {},
};
</script>
