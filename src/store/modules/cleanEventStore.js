export const namespaced = true;
const api = require('../../API/api.js');
export const state = {
  cleanEvents: [],
  isError: false,
  errorMessage: '',
};
export const SET_CLEAN_EVENTS = 'SET_CLEAN_EVENTS';
export const SET_API_ERROR = 'SET_API_ERROR';

export const mutations = {
  [SET_CLEAN_EVENTS](state, cleanEvents) {
    state.cleanEvents = cleanEvents;
  },
  [SET_API_ERROR](state, errorMessage) {
    if (errorMessage) {
      state.isError = true;
      state.errorMessage = errorMessage;

      setTimeout(() => {
        state.isError = false;
        state.errorMessage = '';
      }, 5000);
    }
  },
};

export const actions = {
  fetchCleanEvents: async ({ commit }) => {
    try {
      const events = await api.getCleanEvents('cleanEvents');
      commit(SET_CLEAN_EVENTS, events);
    } catch (e) {
      commit(SET_API_ERROR, e.message);
    }
  },
};
