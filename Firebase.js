// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// import { getPerformance } from "firebase/performance";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "hack-start-page.firebaseapp.com",
    projectId: "hack-start-page",
    storageBucket: "hack-start-page.appspot.com",
    messagingSenderId: "1027380916648",
    appId: "1:1027380916648:web:a34216af25f3a08d9ead9d",
    measurementId: "G-6JKDQ0VRVE"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const auth = getAuth(app);
// export const performance = getPerformance(app);
