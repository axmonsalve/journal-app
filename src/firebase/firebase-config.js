import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA80cJnlRM55P7EbQONOQSWJPwtIGMvFsA',
  authDomain: 'reactjournal-471b5.firebaseapp.com',
  projectId: 'reactjournal-471b5',
  storageBucket: 'reactjournal-471b5.appspot.com',
  messagingSenderId: '278269625538',
  appId: '1:278269625538:web:9f1024943ce5d6c156e75b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
