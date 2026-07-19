import { defineStore } from 'pinia';
import { ref } from 'vue';
import {
  checkEmailAuth,
  authWithEmailLink,
  signInWithGoogle,
  signOutGoogle,
  signOutEmailAuth,
} from '@/util/firebase.js';

export const useAuthStore = defineStore('auth', () => {
  const authInfo = ref({
    isAuth: false,
    fullName: '',
    mail: '',
    type: '',
  });

  function setAuthInfo({ fullName, mail, isAuth, type }) {
    authInfo.value = { fullName, mail, isAuth, type };
  }

  async function checkDirAuthLink() {
    return await authWithEmailLink();
  }

  async function loadDirAuthClient() {
    const dirLogin = await checkEmailAuth();
    if (dirLogin) {
      setAuthInfo({
        fullName: dirLogin.displayName || '',
        mail: dirLogin.email || '',
        isAuth: true,
        type: 'dir',
      });
    }
  }

  async function googleSignIn() {
    const user = await signInWithGoogle();
    setAuthInfo({
      fullName: user.fullName,
      mail: user.mail,
      isAuth: true,
      type: 'gmail',
    });
  }

  async function googleSignOut() {
    await signOutGoogle();
    setAuthInfo({
      fullName: '',
      mail: '',
      isAuth: false,
      type: '',
    });
  }

  async function emailSignOut() {
    await signOutEmailAuth();
    setAuthInfo({
      fullName: '',
      mail: '',
      isAuth: false,
      type: '',
    });
  }

  return {
    authInfo,
    setAuthInfo,
    checkDirAuthLink,
    loadDirAuthClient,
    googleSignIn,
    googleSignOut,
    emailSignOut,
  };
});
