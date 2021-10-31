import Vue from 'vue';
import Vuex from 'vuex';
import * as hyunwooStore from './modules/hyunwooStore.js';
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    hyunwooStore,
  },
  state: {},
  actions: {},
  mutations: {},
});
