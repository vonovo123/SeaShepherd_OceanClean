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

  authInfo: { isAuth: false, fullName: '', mail: '', type: '' },
};
export const mutations = {
  SET_AUTH_INFO(state, { fullName, mail, isAuth, type }) {
    state.authInfo.fullName = fullName;
    state.authInfo.mail = mail;
    state.authInfo.isAuth = isAuth;
    state.authInfo.type = type;
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
  setAuthInfo: function ({ commit }, authInfo) {
    return new Promise((resolve, reject) => {
      commit('SET_AUTH_INFO', authInfo);
      resolve();
    });
  },
  initGoogleAuthClient: async () => {
    await gapi.client.init(state.apiAuthInfo);
    await actions.updateGoogleSigninStatus();
  },
  loadGoogleAuthClient: function () {
    gapi.load('client:auth2', actions.initGoogleAuthClient);
  },
  updateGoogleSigninStatus: async () => {
    console.log('update');
    const isAuth = await gapi.auth2.getAuthInstance().isSignedIn.get();
    if (isAuth) {
      const res = await gapi.client.people.people.get({
        resourceName: 'people/me',
        personFields: 'names,emailAddresses',
      });
      state.authInfo = {
        fullName: res.result.names[0].displayName,
        mail: res.result.emailAddresses[0].value,
        isAuth: isAuth,
        type: 'gmail',
      };
    }
  },
  googleSignIn: async () => {
    await gapi.auth2.getAuthInstance().signIn();
    await actions.updateGoogleSigninStatus();
    return 'signIn';
  },
  googleSignOut: async () => {
    await gapi.auth2.getAuthInstance().signOut();
  },
};
