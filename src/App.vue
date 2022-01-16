<template>
  <div class="container">
    <div class="main">
      <router-view></router-view>
    </div>
    <ErrorMessage
      v-show="error.type !== 'critical' && error.flag"
      :errorMessage="error.message"
    ></ErrorMessage>
    <CriticalErrorMessage
      v-show="error.type === 'critical' && error.flag"
      :criticalErrorMessage="error.message"
    >
    </CriticalErrorMessage>
  </div>
</template>
<script>
import ErrorMessage from './components/ErrorMessage.vue';
import CriticalErrorMessage from './components/CriticalErrorMessage.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      errorMessage: 'test',
    };
  },
  components: { ErrorMessage, CriticalErrorMessage },
  methods: {
    ...mapActions({
      loadGoogleAuthClient: 'authStore/loadGoogleAuthClient',
      loadDirAuthClient: 'authStore/loadDirAuthClient',
    }),
  },
  mounted() {},
  computed: {
    ...mapGetters({
      error: 'getError',
    }),
  },
};
</script>

<style src="./css/style.css"></style>
