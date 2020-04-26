import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config={
    apiKey: "AIzaSyB_AbHtc0swIoOhsJrHqmdycrpFPr7ijyM",
    authDomain: "e-commerce-app-40a8c.firebaseapp.com",
    databaseURL: "https://e-commerce-app-40a8c.firebaseio.com",
    projectId: "e-commerce-app-40a8c",
    storageBucket: "e-commerce-app-40a8c.appspot.com",
    messagingSenderId: "978041420966",
    appId: "1:978041420966:web:4213b5bf82719dc8c48867",
    measurementId: "G-CBTHDR347N"
  };

  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });

  export const signInWithGoogle =()=> auth.signInWithPopup(provider);
  export default firebase;
