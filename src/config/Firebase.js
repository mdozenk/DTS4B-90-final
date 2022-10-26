import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {

    apiKey: "process.env.REACT_APP_FIREBASE_KEY",
    authDomain: "movie-app-acd2e.firebaseapp.com",  
    projectId: "movie-app-acd2e",  
    storageBucket: "movie-app-acd2e.appspot.com",
    messagingSenderId: "747726108755",  
    appId: "1:747726108755:web:45d2a28c61c2921495aea6"
  
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };