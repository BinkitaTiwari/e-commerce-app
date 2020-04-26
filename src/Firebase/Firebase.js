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
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
    

  export const auth= firebase.auth();
  export const firestore= firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account' });

  export const signInWithGoogle =()=> auth.signInWithPopup(provider);
  export default firebase;
