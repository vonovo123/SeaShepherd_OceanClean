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
import { mapGetters, mapActions, mapState } from 'vuex';
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
  mounted() {
    (function () {
      var touchStartHandler, touchMoveHandler, touchPoint;
      // Only needed for touch events on chrome.
      if (
        (window.chrome || navigator.userAgent.match('CriOS')) &&
        'ontouchstart' in document.documentElement
      ) {
        touchStartHandler = function () {
          // Only need to handle single-touch cases
          touchPoint =
            event.touches.length === 1 ? event.touches[0].clientY : null;
        };
        touchMoveHandler = function (event) {
          var newTouchPoint;
          // Only need to handle single-touch cases
          if (event.touches.length !== 1) {
            touchPoint = null;
            return;
          }
          // We only need to defaultPrevent when scrolling up
          newTouchPoint = event.touches[0].clientY;
          if (newTouchPoint > touchPoint) {
            event.preventDefault();
          }
          touchPoint = newTouchPoint;
        };
        document.addEventListener('touchstart', touchStartHandler, {
          passive: false,
        });
        document.addEventListener('touchmove', touchMoveHandler, {
          passive: false,
        });
      }
    })();
  },
  computed: {
    ...mapGetters({
      error: 'getError',
    }),
  },
};
</script>

<style src="./css/style.css"></style>
