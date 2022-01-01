import { initializeApp } from 'firebase/app';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });
const VUE_APP_FIREBASE = process.env.VUE_APP_FIREBASE;
//storage
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';

//fireStore
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  setDoc,
  writeBatch,
} from 'firebase/firestore';

//auth
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from 'firebase/auth';
const firebaseConfig = {
  apiKey: VUE_APP_FIREBASE,
  authDomain: 'seashepherd-oceanclean.firebaseapp.com',
  databaseURL: 'https://seashepherd-oceanclean-default-rtdb.firebaseio.com',
  projectId: 'seashepherd-oceanclean',
  storageBucket: 'seashepherd-oceanclean.appspot.com',
};
const metadata = {
  contentType: 'image/png',
};

const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);
const db = getFirestore(firebase);
const auth = getAuth(firebase);
//스토리지 파일 등록
export const upLoadFile = async function (date, email, file) {
  // eslint-disable-next-line no-async-promise-executor
  try {
    const imageRef = ref(storage, `images/${date}/${email}/${file.name}`);
    const snapshot = await uploadBytesResumable(imageRef, file, metadata);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    return 'error';
  }
};
//스토리지 파일 삭제
export const desertFile = function (date, email, fileName) {
  const desertRef = ref(storage, `images/${date}/${email}/${fileName}`);
  deleteObject(desertRef).then(() => {});
};

export const deleteData = async function (collectionName, id) {
  const ref = doc(db, collectionName, id);
  await deleteDoc(ref);
};
export const patchData = async function (collectionName, id, obj) {
  const ref = doc(db, collectionName, id);
  await updateDoc(ref, obj);
};
export const postData = async function (collectionName, id, obj) {
  const ref = doc(db, collectionName, id);
  return await setDoc(ref, obj);
};
export const getData = async function (collectionName, id) {
  if (id) {
    const ref = doc(db, collectionName, id);
    const snap = await getDoc(ref);
    return snap.data();
  } else {
    const snaps = await getDocs(collection(db, collectionName));
    const dataArray = snaps.docs.map(snap => snap.data());
    return dataArray;
  }
};

export const batch = async function (...params) {
  console.log(`batch: ${JSON.stringify(params)}`);
  const batch = writeBatch(db);
  let ref = null;
  params.forEach(({ method, table, id, obj }) => {
    //쓰기
    ref = doc(db, table, id);
    if (method === 'post') {
      batch.set(ref, obj);
      //수정
    } else if (method === 'patch') {
      batch.update(ref, obj);
      //삭제
    } else if (method === 'delete') {
      batch.delete(ref, obj);
    }
  });
  await batch.commit();
};

const actionCodeSettings = {
  url: 'https://vonovo123.github.io/SeaShepherd_OceanClean',
  //url: 'https://679d-223-62-216-243.ngrok.io/realhome',
  // This must be true.
  handleCodeInApp: true,
};
export const sendEmailAuth = async function (email, name) {
  try {
    sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
    window.localStorage.setItem('nameForSignIn', name);
  } catch (e) {
    throw new Error(
      '인증 이메일 발신에 실패했습니다. 잠시후 다시 시도해주세요.'
    );
  }
};
//이메일 인증 aipkey를 가지고 첫화면에 접근했는지 판단
export const authWithEmailLink = async function () {
  try {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const name = window.localStorage.getItem('nameForSignIn');
      const email = window.localStorage.getItem('emailForSignIn');
      await signInWithEmailLink(auth, email, window.location.href);
      updateProfile(auth.currentUser, { displayName: name });
      return true;
    } else {
      return false;
    }
  } catch (e) {
    console.log(e);
    throw new Error(
      '이메일 인증에 실패했습니다.<br/>잠시후 다시 시도해주세요.'
    );
  }
};

export const checkEmailAuth = function () {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, user => {
      resolve(user);
    });
  });
};

export const signOutEmailAuth = function () {
  signOut(auth);
};
export default firebase;
