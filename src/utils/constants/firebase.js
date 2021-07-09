import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXXkVkkk6DKnWLAvj4FuocOGqHoV6J7Sc",
  authDomain: "perlite-2143f.firebaseapp.com",
  projectId: "perlite-2143f",
  storageBucket: "perlite-2143f.appspot.com",
  messagingSenderId: "320220437240",
  appId: "1:320220437240:web:abcc5f7229e26753bdf90d",
  measurementId: "G-ZP5JXY7KJ1"
};

// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);
