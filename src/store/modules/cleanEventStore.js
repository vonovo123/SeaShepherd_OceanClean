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
    try {
      const eventMarkers = await api.fetch('getEventMarkers', {
        method: 'get',
        table: 'markers',
      });
      commit(SET_EVENT_MARKERS, eventMarkers);
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  },
  getCleanEvent: async ({ commit }, id) => {
    const event = await api.fetch('getCleanEvent', {
      method: 'get',
      table: 'events',
      id: id,
    });
    if (!event) {
      return false;
    }
    commit(SET_EVENT_DETAIL, event);
    return event;
  },
  setMapSnapshot: ({ commit }, src) => {
    commit('SET_MAP_SNAPSHOT', src);
  },
  setCleanEvent: async ({ commit }, eventObj) => {
    let photoUrl = [];
    const files = [...eventObj.photos];
    delete eventObj.photos;
    try {
      //이벤트 등록
      await api.fetch('setCleanEvent', {
        method: 'post',
        table: 'events',
        id: eventObj.id,
        obj: eventObj,
      });
      // //마커등록
      await api.fetch('setEventMarker', {
        method: 'post',
        table: 'markers',
        id: eventObj.id,
        obj: {
          id: eventObj.id,
          position: eventObj.position,
          scale: eventObj.scale,
        },
      });
      // //스토리지에 파일 업로드
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
          '파일업로드에 실패했습니다.',
          'api',
          'storageUpload'
        );
      }
      //이미지 url 업로드
      await api.fetch('updateEventDetail', {
        method: 'patch',
        table: 'events',
        id: eventObj.id,
        obj: { photoUrl: photoUrl },
      });
      //에러시롤백
    } catch (error) {
      console.log(`files`, files);
      if (error.type !== 'critical') {
        if (error.name === 'patch' || error.name === 'storageUpload') {
          //스토리지에 이미지 업로드 실패 또는 db에 url 업데이트에 실패했으면 전체 롤백
          await api.fetch('deleteEventDetail', {
            method: 'delete',
            table: 'events',
            id: eventObj.id,
          });
          await api.fetch('deleteEventMarker', {
            method: 'delete',
            table: 'markers',
            id: eventObj.id,
          });
          const promises = [];
          files.forEach((file, idx) => {
            if (photoUrl[idx] !== 'error') {
              if (file) {
                promises.push(
                  desertFile(
                    eventObj.date.from,
                    eventObj.userInfo.email,
                    file.name
                  )
                );
              }
            }
          });
          await Promise.all(promises);
        }
      }
      commit('SET_ERROR', error, { root: true });
    }
  },
};
