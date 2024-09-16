// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMfcylQkaQWKINc43p4TV4Jz3Rzsr1W9A",
  authDomain: "kudunav-navigation.firebaseapp.com",
  projectId: "kudunav-navigation",
  storageBucket: "kudunav-navigation.appspot.com",
  messagingSenderId: "765514916776",
  appId: "1:765514916776:web:310391c7e87230f761339d",
  measurementId: "G-NM4SQ3WWFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };