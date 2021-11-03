import Vue from 'vue';
import Vuex from 'vuex';
import * as cleanEventStore from './modules/cleanEventStore.js';
import router from '../router/index.js';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    cleanEventStore,
  },
  state: {
    currentPosition: { lat: 0, lng: 0 },
  },
  mutations: {
    SET_CUR_POSITON(state, pos) {
      Object.entries(pos).forEach(([key, value]) => {
        state.currentPosition[key] = value;
      });
      console.log(this.state);
    },
  },
  actions: {
    moveToMaps: () => {
      router.replace({
        name: 'Main',
      });
    },
    setCurPosition: ({ commit }) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          commit('SET_CUR_POSITON', pos);
        });
      }
      // } else {
      // }
    },
  },
});
