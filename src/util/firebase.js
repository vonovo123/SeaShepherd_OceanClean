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
} from 'firebase/firestore';

//auth
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  updateProfile,
} from 'firebase/auth';
const firebaseConfig = {
  //apiKey: 'AIzaSyA_VDwU58UN1eSHjLSsaKI-LbX8llEnIwQ',
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
  console.log(`remove`);
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
  console.log(`${collectionName} ${id}, ${obj}`);
  const ref = doc(db, collectionName, id);
  console.log(ref);
  //  await setDoc(ref, { test: '1', game: '2' });
  return await setDoc(ref, obj);
};
export const getData = async function (collectionName, id) {
  if (id) {
    console.log(id);
    console.log(collectionName);
    const ref = doc(db, collectionName, id);
    const snap = await getDoc(ref);
    return snap.data();
  } else {
    console.log(collectionName);
    const snaps = await getDocs(collection(db, collectionName));
    const dataArray = snaps.docs.map(snap => snap.data());
    console.log(dataArray);
    return dataArray;
  }
};

const actionCodeSettings = {
  //url: 'http://localhost:8080/realhome',
  url: 'https://679d-223-62-216-243.ngrok.io/realhome',
  // This must be true.
  handleCodeInApp: true,
};
export const sendEmailAuth = async function (email, name) {
  sendSignInLinkToEmail(auth, email, actionCodeSettings);
  window.localStorage.setItem('emailForSignIn', email);
  window.localStorage.setItem('nameForSignIn', name);
};
//이메일 인증 aipkey를 가지고 첫화면에 접근했는지 판단
export const authWithEmailLink = async function () {
  if (isSignInWithEmailLink(auth, window.location.href)) {
    const name = window.localStorage.getItem('nameForSignIn');
    const email = window.localStorage.getItem('emailForSignIn');
    await signInWithEmailLink(auth, email, window.location.href);
    updateProfile(auth.currentUser, { displayName: name });
    return true;
  } else {
    return false;
  }
};

export const checkEmailAuth = function () {
  return auth.currentUser;
};

export const signOutEmailAuth = function () {
  signOut(auth);
};
export default firebase;
