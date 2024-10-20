// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration (copy this from the Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyCB0KjKIMIuWWkFWUnl7DRAm8reWPWMtc8",
    authDomain: "raah-e-karam.firebaseapp.com",
    projectId: "raah-e-karam",
    storageBucket: "raah-e-karam.appspot.com",
    messagingSenderId: "117620185822",
    appId: "1:117620185822:web:3d85a9f3efa300d419804f",
    measurementId: "G-L6LH8K1G5R"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore (Optional)
export const db = getFirestore(app);

export default app;
