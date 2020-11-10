import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBc-xDNdC8zeE8krFfc26KzyyLRK-dvYxQ",
  authDomain: "note-taker-react-dbb32.firebaseapp.com",
  databaseURL: "https://note-taker-react-dbb32.firebaseio.com",
  projectId: "note-taker-react-dbb32",
  storageBucket: "note-taker-react-dbb32.appspot.com",
  messagingSenderId: "27668436533",
  appId: "1:27668436533:web:8d55cfb3534a840df0837c",
  measurementId: "G-MGG8X57JDV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
