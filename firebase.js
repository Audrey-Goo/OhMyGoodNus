//import firebase from 'firebase/app' //
//import 'firebase/auth' //

import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from 'firebase/auth'; 
import { GoogleAuthProvider } from "firebase/auth";
import { setPersistence, signInWithRedirect, browserSessionPersistence  } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAlNAYRzPOlXBzWQn0JG3hM9mX8CxVtY_U",
  authDomain: "insta-e8883.firebaseapp.com",
  projectId: "insta-e8883",
  storageBucket: "insta-e8883.appspot.com",
  messagingSenderId: "980475201213",
  appId: "1:980475201213:web:0c81012d88e673d8dc19d4",
  measurementId: "G-24MCVCCGZH"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth(); 
const provider = new GoogleAuthProvider();

export { app, db, storage, auth, provider };