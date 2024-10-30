import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyA2cp71VlEJ8B1qsuVrYUpIoS9hdv_W2uC",
  authDomain: "tech-32e7a.firebaseapp.com",
  projectId: "tech-32e7a",
  storageBucket: "tech-32e7a.appspot.com",
  messagingSenderId: "697762541089",
  appId: "1:697762541089:web:ff9fd7ab972295d0180274",
  measurementId: "G-5EPXKD8P0W9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);