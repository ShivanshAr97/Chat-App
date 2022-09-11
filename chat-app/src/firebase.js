import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsXiJLgkqBKZGUmzlmLuAE18Ein0IggRA",
  authDomain: "trial-6418e.firebaseapp.com",
  projectId: "trial-6418e",
  storageBucket: "trial-6418e.appspot.com",
  messagingSenderId: "149564367604",
  appId: "1:149564367604:web:4182af1d76d404b45d34a1"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()