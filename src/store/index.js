import Vue from 'vue';
import Vuex from 'vuex';
import * as hyunwooStore from './modules/hyunwooStore.js';
import router from '../router/index.js';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    hyunwooStore,
  },
  state: {},
  actions: {
    moveToMaps() {
      router.replace({
        name: 'Main',
      });
    },
  },
  mutations: {},
});
