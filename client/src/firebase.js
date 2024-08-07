// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-8f6e5.firebaseapp.com",
  projectId: "mern-blog-8f6e5",
  storageBucket: "mern-blog-8f6e5.appspot.com",
  messagingSenderId: "1066488507041",
  appId: "1:1066488507041:web:ed02bc500281495fdbdee0",
  measurementId: "G-3HM1S3X0E5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);