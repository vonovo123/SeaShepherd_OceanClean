import { initializeApp } from 'firebase/app';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyA_VDwU58UN1eSHjLSsaKI-LbX8llEnIwQ',
  authDomain: 'seashepherd-oceanclean.firebaseapp.com',
  databaseURL: 'https://seashepherd-oceanclean-default-rtdb.firebaseio.com',
  storageBucket: 'seashepherd-oceanclean.appspot.com',
};
const metadata = {
  contentType: 'image/png',
};

const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

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
  const desertRef = ref(storage, `images/${date}/${email}/${fileName}`);
  deleteObject(desertRef).then(() => {});
};
export default firebase;
