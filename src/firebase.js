import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBhBuz022XEAya4iY2i1WgtldXucFy3PNQ",
    authDomain: "netflix-clone-b8923.firebaseapp.com",
    projectId: "netflix-clone-b8923",
    storageBucket: "netflix-clone-b8923.appspot.com",
    messagingSenderId: "162776163056",
    appId: "1:162776163056:web:91a542d7fe04641c7e9835",
    measurementId: "G-3RCH1VGSHG"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { auth };
export default db;