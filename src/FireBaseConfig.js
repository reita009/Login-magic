import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const fireBaseConfig = {
    apiKey: "AIzaSyDp-7tYes_fQaaB2hYwvrtPBc1Cp8GLML4",
    authDomain: "loginreact-40f46.firebaseapp.com",
    projectId: "loginreact-40f46",
    storageBucket: "loginreact-40f46.appspot.com",
    messagingSenderId: "992193566042",
    appId: "1:992193566042:web:7c259878254247d0fa0f63"
  };

  const app = initializeApp(fireBaseConfig);
  export const auth = getAuth(app);