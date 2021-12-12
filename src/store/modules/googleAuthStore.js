export const namespaced = true;
export const state = {
  apiAuthInfo: {
    apiKey: 'AIzaSyCXVH4IUV06E6o_wtJjllitCNf99XT2B8E',
    clientId:
      '819954997763-50ogor1sa12gthhqr0gc1to9th02orvk.apps.googleusercontent.com',
    discoveryDocs: [
      'https://www.googleapis.com/discovery/v1/apis/people/v1/rest',
    ],
    scope: 'https://www.googleapis.com/auth/userinfo.profile',
  },

  authInfo: { isAuth: false, fullName: '', gMail: '' },
};
export const mutations = {
  SET_AUTH_INFO(state, { fullName, gMail, isAuth }) {
    state.authInfo.fullName = fullName;
    state.authInfo.gMail = gMail;
    state.authInfo.isAuth = isAuth;
  },
};

export const getters = {
  AuthInfo: state => {
    return state.authInfo;
  },
  ApiAuthInfo: state => {
    return state.apiAuthInfo;
  },
};
export const actions = {
  setAuthInfo: ({ commit }, authInfo) => {
    return new Promise((resolve, reject) => {
      commit('SET_AUTH_INFO', authInfo);
      resolve();
    });
  },
};
