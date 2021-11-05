import Vue from 'vue';
import Vuex from 'vuex';
import * as cleanEventStore from './modules/cleanEventStore.js';
import router from '../router/index.js';
import TypeError from '../util/TypeError.js';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    cleanEventStore,
  },
  state: {
    currentPosition: { lat: 0, lng: 0 },
    selectedPosition: { lat: 0, lng: 0 },
    isError: false,
    isCriticError: false,
    errorMessage: '',
    criticErrorMessage: '',
  },
  mutations: {
    SET_CUR_POSITON(state, pos) {
      Vue.set(state.currentPosition, 'lat', pos.lat);
      Vue.set(state.currentPosition, 'lng', pos.lng);
    },
    SET_SELECTED_POSITON(state, pos) {
      Vue.set(state.selectedPosition, 'lat', pos.lat);
      Vue.set(state.selectedPosition, 'lng', pos.lng);
    },
    SET_ERROR(state, error) {
      if (error) {
        if (error.type !== 'critical') {
          state.isError = true;
          state.errorMessage = error.message;
          setTimeout(() => {
            state.isError = false;
            state.errorMessage = '';
          }, 5000);
        } else {
          state.isCriticError = true;
          state.criticErrorMessage = error.message;
        }
      }
    },
    //에러상태 초기화
    INIT_ERROR(state) {
      state.isError = false;
      state.isCriticError = false;
      state.errorMessage = '';
      state.criticErrorMessage = '';
    },
  },
  actions: {
    moveToMaps: () => {
      router.replace({
        name: 'Main',
      });
    },
    clickCriticError: ({ commit }) => {
      commit('INIT_ERROR');
      router.replace({
        name: 'Home',
      });
    },
    setCurPosition: ({ commit }) => {
      return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            if (position) {
              const pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              };
              //현재위치
              commit('SET_CUR_POSITON', pos);
              //선택된 마커위치
              commit('SET_SELECTED_POSITON', pos);
              resolve('setCurLoc');
            } else {
              commit(
                'SET_ERROR',
                new TypeError(
                  '에러: 현재위치를 불러오는데 실패했습니다.',
                  'browser'
                )
              );
              reject('noGeolocation');
            }
          });
        } else {
          commit(
            'SET_ERROR',
            new TypeError(
              '에러: 브라우저가 현재위치를 제공하지 않습니다. 브라우저의 위치정보접근을 허용해주세요.',
              'browser'
            )
          );
          reject('noGeolocation');
        }
      });
    },
  },
});
