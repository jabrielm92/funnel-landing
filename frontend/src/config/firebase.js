import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyAQ6B7yN4Q--S9VVTNOB665Wea1w4xLlgc",
  authDomain: "ari-site-main.firebaseapp.com",
  databaseURL: "https://ari-site-main-default-rtdb.firebaseio.com",
  projectId: "ari-site-main",
  storageBucket: "ari-site-main.firebasestorage.app",
  messagingSenderId: "917004758503",
  appId: "1:917004758503:web:e336f9a2747e267527e142",
  measurementId: "G-FJK7NKJ1N1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { app, database };