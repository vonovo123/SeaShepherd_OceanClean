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
export const upLoadFile = function (id, date, file) {
  const imageRef = ref(storage, `images/${id}/${date}/${file.name}`);
  uploadBytesResumable(imageRef, file, metadata)
    .then(snapshot => {
      getDownloadURL(snapshot.ref).then(url => {
        console.log('File available at', url);
        // ...
      });
    })
    .catch(error => {
      console.log(err);
    });
};

export const desertFile = function (name) {
  const desertRef = ref(storage, 'images/' + name);
  deleteObject(desertRef)
    .then(() => {
      // File deleted successfully
      console.log('delete');
    })
    .catch(error => {
      // Uh-oh, an error occurred!
    });
};
export default firebase;
