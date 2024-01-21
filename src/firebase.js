// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push, serverTimestamp } from 'firebase/database';

const firebaseConfig = {
  "YOUR-CREDENTIAL"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const userDataRef = ref(database, 'user_data');

export { app, userDataRef, push, serverTimestamp };
