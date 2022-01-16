export const namespaced = true;
import TypeError from '../../util/TypeError.js';
//const api = require('../../API/api.js');
import api from '../../API/api.js';
export const state = {
  eventMarkers: [],
  eventDetail: '',
  mapSnapshot: '',
};
const SET_EVENT_MARKERS = 'SET_EVENT_MARKERS';
const SET_EVENT_DETAIL = 'SET_EVENT_DETAIL';
export const mutations = {
  [SET_EVENT_MARKERS](state, eventMarkers) {
    state.eventMarkers = eventMarkers;
  },
  [SET_EVENT_DETAIL](state, eventDetail) {
    state.eventDetail = eventDetail;
  },
  SET_MAP_SNAPSHOT(state, src) {
    state.mapSnapshot = src;
  },
};
import { upLoadFile, desertFile } from '../../util/firebase.js';
export const getters = {
  EventMarkerData: state => {
    return state.eventMarkers;
  },
  EventDetail: state => {
    return state.eventDetail;
  },
  MapSnapShot: state => {
    return state.mapSnapshot;
  },
};
export const actions = {
  //마커 데이터 조회
  getEventMarkers: async ({ commit }) => {
    const eventMarkers = await api.fetch('getEventMarkers', {
      method: 'get',
      table: 'markers',
    });
    commit(SET_EVENT_MARKERS, eventMarkers);
  },
  getCleanEvent: async ({ commit }, id) => {
    const event = await api.fetch('getCleanEvent', {
      method: 'get',
      table: 'events',
      id: id,
    });
    if (!event) {
      throw new Error('noData');
    }
    commit(SET_EVENT_DETAIL, event);
    return event;
  },
  setEventDetail({ commit }, event) {
    return new Promise((resolve, reject) => {
      commit(SET_EVENT_DETAIL, event);
      resolve();
    });
  },
  setMapSnapshot: ({ commit }, src) => {
    commit('SET_MAP_SNAPSHOT', src);
  },
  setCleanEvent: async ({ commit }, eventObj) => {
    let photoUrl = [];
    const files = [...eventObj.photos];
    delete eventObj.photos;
    try {
      //이미지 url 생성을 취한 스토리지에 파일 선업로드
      const promises = [];
      files.forEach(file => {
        if (file) {
          promises.push(
            upLoadFile(eventObj.date.from, eventObj.userInfo.email, file)
          );
        }
      });
      // //병렬처리
      const photoUrlArray = await Promise.all(promises);
      //storage url get
      photoUrl = [...photoUrlArray];
      if (photoUrl.includes('error')) {
        throw new TypeError(
          '파일업로드에 실패했습니다. <br/> 잠시후 다시 시도바랍니다.',
          'critical',
          'storageUpload'
        );
      }
      await api.transactionFetchData(
        {
          method: 'post',
          table: 'events',
          id: eventObj.id,
          obj: { ...eventObj, photoUrl },
        },
        {
          method: 'post',
          table: 'markers',
          id: eventObj.id,
          obj: {
            id: eventObj.id,
            position: eventObj.position,
            scale: eventObj.scale,
          },
        }
      );
      return { photoUrl };
    } catch (error) {
      //이벤트 등록 에러시 이미지업로드 롤백
      const promises = [];
      files.forEach((file, idx) => {
        if (photoUrl[idx] !== 'error') {
          if (file) {
            promises.push(
              desertFile(eventObj.date.from, eventObj.userInfo.email, file.name)
            );
          }
        }
      });
      await Promise.all(promises);
    }
  },
};
