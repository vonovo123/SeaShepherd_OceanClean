import Vue from 'vue';
import Vuex from 'vuex';
import * as cleanEventStore from './modules/cleanEventStore.js';
import * as authStore from './modules/authStore.js';
import router from '../router/index.js';
import TypeError from '../util/TypeError.js';
Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    cleanEventStore,
    authStore,
  },
  state: {
    currentPosition: { lat: 0, lng: 0 },
    currentAddress: '주소가 정확히지 않습니다.',
    error: {
      flag: false,
      type: '',
      message: '',
    },
  },
  mutations: {
    SET_CUR_POSITON(state, pos) {
      Vue.set(state.currentPosition, 'lat', pos.lat);
      Vue.set(state.currentPosition, 'lng', pos.lng);
    },
    SET_CUR_ADDRESS(state, address) {
      state.currentAddress = address;
    },
    SET_ERROR(state, error) {
      console.log(JSON.stringify(error));
      state.error = {
        flag: true,
        type: error.type,
        message: error.message,
      };
      if (error.type !== 'critical') {
        setTimeout(() => {
          state.error = {
            flag: false,
            type: '',
            message: '',
          };
        }, 5000);
      }
    },
    //에러상태 초기화
    INIT_ERROR(state) {
      state.error = {
        flag: false,
        type: '',
        message: '',
      };
    },
  },
  getters: {
    CurPosition: state => {
      return state.currentPosition;
    },
    getError: state => {
      return state.error;
    },
  },
  actions: {
    //지도로 이동
    moveToMaps: () => {
      router.replace({
        name: 'maps/Main',
      });
    },
    //인증화면으로 이동
    moveToAuth: () => {
      router.replace({
        name: 'auth/Main',
      });
    },
    //등록화면으로
    moveToRegistEvent: () => {
      router.push({
        name: 'regist/Main',
      });
    },
    moveToRealHome: () => {
      router.push({
        name: 'realhome',
      });
    },
    //브라우져에러 발생시
    clickCriticError: ({ commit }) => {
      //에러 초기화
      commit('INIT_ERROR');
      location.reload();
    },
    setError: ({ commit }, { message, type }) => {
      commit('SET_ERROR', new TypeError(message, type));
    },
    //현재위치 지정
    setCurPosition: ({ commit }, pos) => {
      return new Promise((resolve, reject) => {
        if (!pos) {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
              position => {
                if (position) {
                  const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                  };
                  //현재위치
                  commit('SET_CUR_POSITON', pos);
                  //선택된 마커위치
                  resolve();
                } else {
                  reject('curPosition');
                }
              },
              e => {
                reject('browserLocation');
              }
            );
          } else {
            reject('browserVersion');
          }
        } else {
          commit('SET_CUR_POSITON', pos);
          resolve();
        }
      });
    },
    setCurAddress({ commit }, address) {
      commit('SET_CUR_ADDRESS', address);
    },
    setConnectionStatus: ({ commit }) => {
      return new Promise((resolve, reject) => {
        if (!navigator.onLine) {
          commit(
            'SET_ERROR',
            new TypeError(
              '에러: 인터넷에 연결되어있지 않습니다. 연결상태를 확인해주세요.',
              'critical'
            )
          );
          resolve('offLine');
        } else {
          resolve('onLine');
        }
      });
    },
  },
});
