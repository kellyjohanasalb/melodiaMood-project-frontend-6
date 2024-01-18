// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD04I5x8fSsy_zME6yKKxj9thO8y4DRjrQ",
  authDomain: "mood-ef190.firebaseapp.com",
  projectId: "mood-ef190",
  storageBucket: "mood-ef190.appspot.com",
  messagingSenderId: "236546637217",
  appId: "1:236546637217:web:f323bd25b574df5c36dfe0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
