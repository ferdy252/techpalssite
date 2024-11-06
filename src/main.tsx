import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Lazy load Firebase initialization
const loadFirebase = async () => {
  await import('./lib/firebase');
};

// Initialize Firebase after the app has loaded
window.addEventListener('load', () => {
  loadFirebase();
});

const root = document.getElementById('root');
if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}