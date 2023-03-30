// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.React_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.React_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.React_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.React_APP_FIREBASE_APP_ID,
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const dataBase = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
