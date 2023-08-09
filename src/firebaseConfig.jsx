import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyC25e1eEeoQYIbZJNDLNBRJtG9RWLReyik",
  authDomain: "hunza-bykea-c0ca9.firebaseapp.com",
  databaseURL: "https://hunza-bykea-c0ca9-default-rtdb.firebaseio.com",
  projectId: "hunza-bykea-c0ca9",
  storageBucket: "hunza-bykea-c0ca9.appspot.com",
  messagingSenderId: "114764797676",
  appId: "1:114764797676:web:014772caa41828080ef7c9",
  measurementId: "G-80ZNME1ZJR",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export const storage  = getStorage(app)
