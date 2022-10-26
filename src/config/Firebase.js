import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: replace with your own config
const firebaseConfig = {

    apiKey: "AIzaSyCGBKDpH6_fj7rmi52HC69Wv0o1z8laEZM",
    authDomain: "movie-app-acd2e.firebaseapp.com",  
    projectId: "movie-app-acd2e",  
    storageBucket: "movie-app-acd2e.appspot.com",
    messagingSenderId: "747726108755",  
    appId: "1:747726108755:web:45d2a28c61c2921495aea6"
  
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };