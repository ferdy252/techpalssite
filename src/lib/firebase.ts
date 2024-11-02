import { getAnalytics, isSupported } from 'firebase/analytics';
import { addDoc, collection } from 'firebase/firestore';
import { httpsCallable, getFunctions } from 'firebase/functions';
import { app, db } from './firebase-config';

// Initialize Analytics only if supported
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);

// Initialize functions with region
const functions = getFunctions(app, 'us-central1');

export const submitContactForm = async (formData: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) => {
  try {
    // First, try to write to Firestore
    console.log('Attempting Firestore write...');
    const docRef = await addDoc(collection(db, 'contactSubmissions'), {
      ...formData,
      timestamp: new Date(),
      status: 'new'
    });
    console.log('Firestore write successful, docId:', docRef.id);

    // Then, try to send email
    console.log('Attempting to call Cloud Function...');
    const sendEmail = httpsCallable(functions, 'sendContactEmail');
    const result = await sendEmail(formData);
    console.log('Cloud Function result:', result);

    return result;
  } catch (error: any) {
    // Log the full error object
    console.error('Full error object:', error);
    console.error('Error code:', error.code);
    console.error('Error message:', error.message);
    console.error('Error details:', error.details);

    // Show the actual error message to the user
    throw error;
  }
};