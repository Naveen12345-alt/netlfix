import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import { seedDatabase } from '../seed';
// we need to somehow send the database

//  we need a config here
const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT,
  storageBucket: process.env.REACT_APP_STORAGE,
  messagingSenderId: process.env.REACT_APP_MESSAGE,
  appId: process.env.REACT_APP_ID,
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };
