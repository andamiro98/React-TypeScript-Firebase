import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
import 'firebase/database';

interface FirebaseConfig {
  readonly apiKey: string;
  readonly authDomain: string;
  readonly projectId: string;
  readonly storageBucket: string;
  readonly messagingSenderId: string;
  readonly appId: string;
}


const firebaseConfig: FirebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY as string,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN as string,
  projectId: process.env.REACT_APP_PROJECTID as string,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET as string,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID as string,
  appId: process.env.REACT_APP_APPID as string,
};


initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const authService = getAuth();

export const dbService = getFirestore();
export const storageService = getStorage();