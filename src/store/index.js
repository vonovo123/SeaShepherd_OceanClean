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
    currentAddress: '주소가 정확하지 않습니다.',
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
      state.error = {
        flag: true,
        type: error.type,
        message: error.message,
      };
      //critlcal error가 아닌경우 3초 후 화면에서 제거
      if (error.type !== 'critical') {
        setTimeout(() => {
          state.error = {
            flag: false,
            type: '',
            message: '',
          };
        }, 3000);
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
      //location.reload();
      moveToRealHome();
    },
    setError: ({ commit }, { message, type }) => {
      console.log(message);
      console.log(type);
      let name = 'test';
      commit('SET_ERROR', new TypeError(message, type, name));
    },
    //현재위치 지정
    setCurPosition: async ({ commit }, pos) => {
      if (!pos) {
        if (navigator.geolocation) {
          try {
            const getPosition = function () {
              return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject);
              });
            };
            const position = await getPosition();
            if (!position) {
              throw new Error('noAccess');
            }
            commit('SET_CUR_POSITON', {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          } catch (e) {
            console.log(e.message);
            let message =
              '브라우저가 GPS정보를 제공하지 않습니다.<br/>5.0버전 이상의 Chrome/Safari 브라우저로 이용바랍니다.';
            if (e.message === 'noAccess') {
              message = '현재위치정보를 확인 할 수 없습니다.';
            }
            if (e.message === `User denied Geolocation`) {
              message = '브라우저 및 PC의 위치 엑세스를 허용해주세요.';
            }
            throw new Error(message);
          }
        } else {
          throw new Error('브라우저 및 PC의 위치 엑세스를 허용해주세요.');
        }
      } else {
        commit('SET_CUR_POSITON', pos);
      }
    },
    setCurAddress({ commit }, address) {
      commit('SET_CUR_ADDRESS', address);
    },
  },
});
