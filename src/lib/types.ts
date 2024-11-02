import { Firestore } from 'firebase/firestore';
import { FirebaseApp } from 'firebase/app';

export interface FirebaseConfig {
  app: FirebaseApp;
  db: Firestore;
} 