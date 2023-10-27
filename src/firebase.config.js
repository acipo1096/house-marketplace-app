// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4pH-j9c7JfJ_QPHv0iYoooabk00Q6sXo",
  authDomain: "house-marketplace-app-324a7.firebaseapp.com",
  projectId: "house-marketplace-app-324a7",
  storageBucket: "house-marketplace-app-324a7.appspot.com",
  messagingSenderId: "1064666658371",
  appId: "1:1064666658371:web:03be97ba4ca1186c7806f6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
