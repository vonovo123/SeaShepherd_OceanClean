import { initializeApp } from 'firebase/app';
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

const firebaseConfig = {
  apiKey: 'AIzaSyA_VDwU58UN1eSHjLSsaKI-LbX8llEnIwQ',
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
//스토리지 파일 등록
export const upLoadFile = async function (date, email, file) {
  // eslint-disable-next-line no-async-promise-executor
  try {
    console.log('upload');
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

export default firebase;
