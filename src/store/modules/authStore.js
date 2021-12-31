export const namespaced = true;
import { checkEmailAuth, authWithEmailLink } from '../../util/firebase.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
const VUE_APP_GOOGLE_MAP = process.env.VUE_APP_GOOGLE_MAP;
export const state = {
  apiAuthInfo: {
    apiKey: VUE_APP_GOOGLE_MAP,
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
  loadGoogleAuthClient: () => {
    gapi.load('client:auth2', actions.initGoogleAuthClient);
  },
  loadDirAuthClient: async () => {
    const dirLogin = await actions.checkDirAuthStatus();
    if (dirLogin) {
      actions.updateDirAuthStatus(dirLogin);
    }
  },
  initGoogleAuthClient: async () => {
    await gapi.client.init(state.apiAuthInfo);
    actions.updateGoogleAuthStatus();
  },
  //구글인증여부 체크
  checkGoogleAuthStatus: async () => {
    return await gapi.auth2.getAuthInstance().isSignedIn.get();
  },
  updateGoogleAuthStatus: async () => {
    //인증시 google계정에 등록된 사용자정보 가져오기
    const isAuth = gapi.auth2.getAuthInstance().isSignedIn.get();
    //인증시 google계정에 등록된 사용자정보 가져오기
    if (isAuth) {
      const res = await gapi.client.people.people.get({
        resourceName: 'people/me',
        personFields: 'names,emailAddresses',
      });
      //인증정보 갱신
      state.authInfo = {
        fullName: res.result.names[0].displayName,
        mail: res.result.emailAddresses[0].value,
        isAuth: true,
        type: 'gmail',
      };
    }
  },

  checkDirAuthStatus: async () => {
    return await checkEmailAuth();
  },
  checkDirAuthLink: async () => {
    return await authWithEmailLink();
  },
  updateDirAuthStatus: dirLogin => {
    state.authInfo = {
      fullName: dirLogin.displayName,
      mail: dirLogin.email,
      isAuth: true,
      type: 'dir',
    };
  },
  setAuthInfo: function ({ commit }, authInfo) {
    return new Promise((resolve, reject) => {
      commit('SET_AUTH_INFO', authInfo);
      resolve();
    });
  },
  //인증
  googleSignIn: async () => {
    await gapi.auth2.getAuthInstance().signIn();
    await actions.updateGoogleAuthStatus();
  },
  //인증종료
  googleSignOut: async () => {
    await gapi.auth2.getAuthInstance().signOut();
    state.authInfo = {
      fullName: '',
      mail: '',
      isAuth: false,
      type: '',
    };
  },
};
