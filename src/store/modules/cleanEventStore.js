export const namespaced = true;
import TypeError from '../../util/TypeError.js';
const api = require('../../API/api.js');
export const state = {
  cleanEvents: [],
};
export const SET_CLEAN_EVENTS = 'SET_CLEAN_EVENTS';
export const mutations = {
  [SET_CLEAN_EVENTS](state, cleanEvents) {
    state.cleanEvents = cleanEvents;
  },
};
import { upLoadFile, desertFile } from '../../util/firebase.js';
export const actions = {
  fetchCleanEvents: async ({ commit }) => {
    try {
      const events = await api.getCleanEvent('cleanEvents', { id: '' });
      commit(SET_CLEAN_EVENTS, events);
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  },
  fetchCleanEvent: async ({ commit }, event) => {
    let photoUrl = [];
    try {
      //이미지
      const files = [...event.photos];
      //복사후 삭제
      //입력값 db에 등록
      const result = await api.setCleanEvent({ obj: event });
      //스토리지에 파일 업로드
      const promises = [];

      files.forEach((file, idx) => {
        if (file) {
          if (idx !== 1) {
            promises.push(
              upLoadFile(result.date.from, result.userInfo.email, file)
            );
          } else {
            promises.push(upLoadFile(result.date.from, result.userInfo.email));
          }
        }
      });
      //병렬처리
      const photoUrlArray = await Promise.all(promises);
      console.log(photoUrlArray);
      //storage url get
      photoUrl = [...photoUrlArray];
      if (photoUrl.includes('error')) {
        throw new TypeError(
          '파일업로드에 실패했습니다.',
          'api',
          'storageUpload'
        );
      }
      const update = await api.updateCleanEvent({
        id: event.id,
        obj: { photoUrl: photoUrl },
      });
      //에러시롤백
    } catch (error) {
      console.log(error);
      if (error.type !== 'critical') {
        if (error.name === 'patch' || error.name === 'storageUpload') {
          //스토리지에 이미지 업로드 실패 또는 db에 url 업데이트에 실패했으면 전체 롤백
          const result = await api.deleteCleanEvent({ id: event.id });
          const promises = [];
          event.photos.forEach((file, idx) => {
            if (photoUrl[idx] !== 'error') {
              if (file) {
                promises.push(
                  desertFile(event.date.from, event.userInfo.email, file.name)
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
