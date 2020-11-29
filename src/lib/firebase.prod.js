import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAYN03dF43s6MtMqjdDmVx0FFCKi-Kv5BM",
  authDomain: "devter-daaf2.firebaseapp.com",
  databaseURL: "https://devter-daaf2.firebaseio.com",
  projectId: "devter-daaf2",
  storageBucket: "devter-daaf2.appspot.com",
  messagingSenderId: "988730163442",
  appId: "1:988730163442:web:ac8bbfde3ec1e0404c506b",
  measurementId: "G-8NV68YQGXF"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
