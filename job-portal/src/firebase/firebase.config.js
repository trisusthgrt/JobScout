/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAKkKXB5eCSJJo6QUUbE0wMJO9ETiKtDw",
  authDomain: "mern-job-portal-e7c9b.firebaseapp.com",
  projectId: "mern-job-portal-e7c9b",
  storageBucket: "mern-job-portal-e7c9b.appspot.com",
  messagingSenderId: "463595355974",
  appId: "1:463595355974:web:4a3d84a5aa00f2115b2f47",
  measurementId: "G-BGRPXRFQTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;