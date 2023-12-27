// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAr71WlP-lG19lzZJE1Oy1Tp7-L4KsalyI",
    authDomain: "melodia-1-mood.firebaseapp.com",
    projectId: "melodia-1-mood",
    storageBucket: "melodia-1-mood.appspot.com",
    messagingSenderId: "293802579955",
    appId: "1:293802579955:web:a68a32b47c4950ca8be486"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
