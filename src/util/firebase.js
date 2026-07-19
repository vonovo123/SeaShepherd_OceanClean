import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
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
import {
  getAuth,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  signOut,
  updateProfile,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
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
const googleProvider = new GoogleAuthProvider();

export const upLoadFile = async function (date, email, file) {
  try {
    const imageRef = ref(storage, `images/${date}/${email}/${file.name}`);
    const snapshot = await uploadBytesResumable(imageRef, file, metadata);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch {
    return 'error';
  }
};

export const desertFile = function (date, email, fileName) {
  const desertRef = ref(storage, `images/${date}/${email}/${fileName}`);
  deleteObject(desertRef).then(() => {});
};

export const deleteData = async function (collectionName, id) {
  const refDoc = doc(db, collectionName, id);
  await deleteDoc(refDoc);
};

export const patchData = async function (collectionName, id, obj) {
  const refDoc = doc(db, collectionName, id);
  await updateDoc(refDoc, obj);
};

export const postData = async function (collectionName, id, obj) {
  const refDoc = doc(db, collectionName, id);
  return await setDoc(refDoc, obj);
};

export const getData = async function (collectionName, id) {
  if (id) {
    const refDoc = doc(db, collectionName, id);
    const snap = await getDoc(refDoc);
    return snap.data();
  }

  const snaps = await getDocs(collection(db, collectionName));
  return snaps.docs.map(snap => snap.data());
};

export const batchWrite = async function (...params) {
  const batch = writeBatch(db);
  params.forEach(({ method, table, id, obj }) => {
    const refDoc = doc(db, table, id);
    if (method === 'post') {
      batch.set(refDoc, obj);
    } else if (method === 'patch') {
      batch.update(refDoc, obj);
    } else if (method === 'delete') {
      batch.delete(refDoc);
    }
  });
  await batch.commit();
};

const actionCodeSettings = {
  url: 'https://vonovo123.github.io/SeaShepherd_OceanClean',
  handleCodeInApp: true,
};

export const sendEmailAuth = async function (email, name) {
  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    window.localStorage.setItem('emailForSignIn', email);
    window.localStorage.setItem('nameForSignIn', name);
  } catch {
    throw new Error(
      '인증 이메일 발신에 실패했습니다.<br/>잠시후 다시 시도해주세요.'
    );
  }
};

export const authWithEmailLink = async function () {
  try {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      const name = window.localStorage.getItem('nameForSignIn');
      const email = window.localStorage.getItem('emailForSignIn');
      await signInWithEmailLink(auth, email, window.location.href);
      if (auth.currentUser) {
        await updateProfile(auth.currentUser, { displayName: name });
      }
      return true;
    }
    return false;
  } catch {
    throw new Error(
      '이메일 인증에 실패했습니다.<br/>잠시후 다시 시도해주세요.'
    );
  }
};

export const checkEmailAuth = function () {
  return new Promise(resolve => {
    onAuthStateChanged(auth, user => {
      resolve(user);
    });
  });
};

export const signOutEmailAuth = function () {
  return signOut(auth);
};

export const signInWithGoogle = async function () {
  const result = await signInWithPopup(auth, googleProvider);
  return {
    fullName: result.user.displayName || '',
    mail: result.user.email || '',
  };
};

export const signOutGoogle = async function () {
  await signOut(auth);
};

export default firebase;
