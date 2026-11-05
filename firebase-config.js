// js/firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyC0es16ee_2qU7exCEHzGJHGZM8VXIYcN0",
  authDomain: "ella-empire-live.firebaseapp.com",
  projectId: "ella-empire-live",
  storageBucket: "ella-empire-live.firebasestorage.app",
  messagingSenderId: "133927835401",
  appId: "1:133927835401:web:d48ff15fc27c1c375e25d8"
};

// Initialize Firebase using the COMPAT version
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();