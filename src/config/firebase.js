import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyBtGSuCZWHmqLOMvoSonBXJCKkOv1YAJ08',
  authDomain: 'gdsc-sjec.firebaseapp.com',
  projectId: 'gdsc-sjec',
  storageBucket: 'gdsc-sjec.appspot.com',
  messagingSenderId: '679022651354',
  appId: '1:679022651354:web:e579e0239bf1ca37a282e3',
};

firebase.initializeApp(firebaseConfig);
firebase
  .firestore()
  .enablePersistence({ synchronizeTabs: !0 })
  .catch(() => {
    console.warn('DB offline support not available');
  });
export default {
  notificationSupported: firebase.messaging.isSupported(),
  messaging: firebase.messaging.isSupported() ? firebase.messaging() : null,
  firestore: firebase.firestore(),
  auth: firebase.auth(),
  storage: firebase.storage(),
};
