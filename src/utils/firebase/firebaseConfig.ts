// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyCeZM0LDmubS5tTXhzf5-xEhb0gHBm5DsM",
  authDomain: "recipe-3e00a.firebaseapp.com",
  projectId: "recipe-3e00a",
  storageBucket: "recipe-3e00a.appspot.com",
  messagingSenderId: "209235460820",
  appId: "1:209235460820:web:e54997c271f4d4fedd3141",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

export const dataBase = getFirestore(firebaseApp);

export const auth = getAuth(firebaseApp);
