import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAZ019x9AAK31hAbTnn6dCiX_OA0HebObw",
  authDomain: "fir-todolistapp-71e96.firebaseapp.com",
  projectId: "fir-todolistapp-71e96",
  storageBucket: "fir-todolistapp-71e96.appspot.com",
  messagingSenderId: "609160845071",
  appId: "1:609160845071:web:3007209de434fb4ad8d07a",
});

const db = firebaseApp.firestore();

export default db;
