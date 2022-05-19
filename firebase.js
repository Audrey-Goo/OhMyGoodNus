// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlNAYRzPOlXBzWQn0JG3hM9mX8CxVtY_U",
  authDomain: "insta-e8883.firebaseapp.com",
  projectId: "insta-e8883",
  storageBucket: "insta-e8883.appspot.com",
  messagingSenderId: "980475201213",
  appId: "1:980475201213:web:0c81012d88e673d8dc19d4",
  measurementId: "G-24MCVCCGZH"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
//const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };