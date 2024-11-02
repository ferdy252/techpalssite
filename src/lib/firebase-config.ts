import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getFunctions } from 'firebase/functions';

const firebaseConfig = {
  apiKey: "AIzaSyA2cp71iVEJ8B1qsUvrYUpIoS9hdv_W2Uc",
  authDomain: "tech-32e7a.firebaseapp.com",
  projectId: "tech-32e7a",
  storageBucket: "tech-32e7a.firebasestorage.app",
  messagingSenderId: "697762540189",
  appId: "1:697762540189:web:ff9dfa7b972295d0180274",
  measurementId: "G-5EPXKDP09W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const functions = getFunctions(app, 'us-central1');