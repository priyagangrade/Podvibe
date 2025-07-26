// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCs0C_lwgaK_Jy-W7HZZKhD0otypQ7NkRE",
//   authDomain: "podvibe-aee36.firebaseapp.com",
//   projectId: "podvibe-aee36",
//   storageBucket: "podvibe-aee36.firebasestorage.app",
//   messagingSenderId: "1040912918445",
//   appId: "1:1040912918445:web:28e0a58bcd851889cce324",
//   measurementId: "G-90998GQ0NM"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ Needed for login
import { getFirestore } from "firebase/firestore"; // ✅ If you're using Firestore
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey:
    import.meta.env.VITE_FIREBASE_API_KEY ||
    "AIzaSyCs0C_lwgaK_Jy-W7HZZKhD0otypQ7NkRE",
  authDomain:
    import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ||
    "podvibe-aee36.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "podvibe-aee36",
  storageBucket:
    import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ||
    "podvibe-aee36.firebasestorage.app",
  messagingSenderId:
    import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1040912918445",
  appId:
    import.meta.env.VITE_FIREBASE_APP_ID ||
    "1:1040912918445:web:28e0a58bcd851889cce324",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-90998GQ0NM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ These are important for sign-in and DB
const auth = getAuth(app);
const db = getFirestore(app);
let analytics = null;

// Only initialize analytics in production and in browser
if (typeof window !== "undefined" && import.meta.env.PROD) {
  analytics = getAnalytics(app);
}

export { auth, db, analytics };
