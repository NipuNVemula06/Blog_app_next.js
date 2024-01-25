import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "blog-app-69605.firebaseapp.com",
  projectId: "blog-app-69605",
  storageBucket: "blog-app-69605.appspot.com",
  messagingSenderId: "189723748551",
  appId: "1:189723748551:web:8c3507aac9dbd53e80f6e2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
