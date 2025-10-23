// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBeMPh6GZiMeQKyjAReC9bD8U_2mFlaHbI",
  authDomain: "portfolio-fachinformatiker.firebaseapp.com",
  projectId: "portfolio-fachinformatiker",
  storageBucket: "portfolio-fachinformatiker.appspot.com",
  messagingSenderId: "943463722630",
  appId: "1:943463722630:web:310713a74883939b08eb07",
  measurementId: "G-29GCFDJQHY"
};

// تهيئة Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

// التصدير
export { app, analytics, db, auth };
