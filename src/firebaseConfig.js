// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC1Z0LCGkw4uuhdACCaXz5otEI-y4cGc18",
  authDomain: "news-aggregator-857d4.firebaseapp.com",
  projectId: "news-aggregator-857d4",
  storageBucket: "news-aggregator-857d4.firebasestorage.app",
  messagingSenderId: "147846674630",
  appId: "1:147846674630:web:e0480cf298027a053d7fc7",
  measurementId: "G-LVVLPDZ5J9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);