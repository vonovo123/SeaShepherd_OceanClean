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
  isAuth: false,
};
export const mutations = {
  SET_AUTH_STATE(state, isAuth) {
    state.isAuth = isAuth;
  },
};

export const getters = {
  getAuthState: state => {
    return state.isAuth;
  },
};
export const actions = {
  setAuthStatus: ({ commit }, authFlag) => {
    console.log(authFlag);
  },
};
