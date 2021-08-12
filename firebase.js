import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCL0NDKtTxJBO9XAu4n_HYaZGdg3-1UUWI",
    authDomain: "discord-clone-6dc59.firebaseapp.com",
    databaseURL: "https://discord-clone-6dc59.firebaseio.com",
    projectId: "discord-clone-6dc59",
    storageBucket: "discord-clone-6dc59.appspot.com",
    messagingSenderId: "356546293520",
    appId: "1:356546293520:web:a7f76ba9f25527a6193f95"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

