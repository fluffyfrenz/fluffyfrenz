// chat.ts
import firebase from "firebase/compat/app";

export interface User {
    uid: string;
    displayName: string;
    photoURL: string;
  }
  
  export interface Message {
    uid: string; // User ID who sent the message
    text: string;
    timestamp: firebase.firestore.Timestamp;
  }
  