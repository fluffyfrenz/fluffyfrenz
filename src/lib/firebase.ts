// lib/firebase.ts

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "../config/firebaseConfig";

// Ensure firebase apps aren't duplicated
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();

export { auth, firebase };
