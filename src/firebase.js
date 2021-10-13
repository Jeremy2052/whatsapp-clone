import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBPhQB_R8bKYoS3Emwo58XMzOIfPzyGLEQ",
  authDomain: "whatsapp-clone-68030.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-68030.firebaseio.com",
  projectId: "whatsapp-clone-68030",
  storageBucket: "whatsapp-clone-68030.appspot.com",
  messagingSenderId: "9986830143",
  appId: "1:9986830143:web:7f30b6891b9b881d68ad8a",
  measurementId: "G-1CVB519YQS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
