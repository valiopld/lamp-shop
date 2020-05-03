import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyATZ1NdgUxaCZ5h-bedXb6pyeq8IDv1OCI",
  authDomain: "lamp-db-c1ef2.firebaseapp.com",
  databaseURL: "https://lamp-db-c1ef2.firebaseio.com",
  projectId: "lamp-db-c1ef2",
  storageBucket: "lamp-db-c1ef2.appspot.com",
  messagingSenderId: "1078915198413",
  appId: "1:1078915198413:web:746400890bb5b4d894a884",
  measurementId: "G-Z0WN9863EN",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: "select_accout" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
