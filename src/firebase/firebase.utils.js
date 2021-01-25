import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAsZZMy71AP6sYTI6FnyuTwVogcZEYF5-I",
  authDomain: "crwn-db-db939.firebaseapp.com",
  projectId: "crwn-db-db939",
  storageBucket: "crwn-db-db939.appspot.com",
  messagingSenderId: "84494552173",
  appId: "1:84494552173:web:2dfcbdd19e883475a54364",
  measurementId: "G-EGQF134F50"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;