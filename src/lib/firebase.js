import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAP8bG9lT2h7mot3u-pWoatCiBJ1yCGuAg',
  authDomain: 'metacart-7.firebaseapp.com',
  projectId: 'metacart-7',
  storageBucket: 'metacart-7.appspot.com',
  messagingSenderId: '983793141649',
  appId: '1:983793141649:web:5f4d862799ecf5fb7bbc30',
  measurementId: 'G-GFGK3W6EET'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };
