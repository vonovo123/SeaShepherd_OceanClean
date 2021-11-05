export const namespaced = true;
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

export const actions = {
  fetchCleanEvents: async ({ commit }) => {
    try {
      const events = await api.getCleanEvents('cleanEvents');
      commit(SET_CLEAN_EVENTS, events);
    } catch (error) {
      commit('SET_ERROR', error, { root: true });
    }
  },
};
