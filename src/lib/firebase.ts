// lib/firebase.ts
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import firebaseConfig from "../config/firebaseConfig";

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app();
}

const auth = firebase.auth();
const googleProvider = new firebase.auth.GoogleAuthProvider();  // Google Auth Provider

export { auth, googleProvider, firebase };
