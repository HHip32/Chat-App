import { initializeApp, getApp } from 'firebase/app';
import { initializeFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6GHwfD6AJMS_862hksq6xZgGfAkfflf8",
    authDomain: "chat-app-2c64e.firebaseapp.com",
    projectId: "chat-app-2c64e",
    storageBucket: "chat-app-2c64e.appspot.com",
    messagingSenderId: "409074213215",
    appId: "1:409074213215:web:88c856b9df2a8a8292d6ea"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = initializeFirestore(app, {experimentalForceLongPolling: true});

export { db, auth };