import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyDNuKKQiFJAvZvxi_PiViDVs2arJ4LDiUk",
    authDomain: "todoist-project-8d2e2.firebaseapp.com",
    databaseURL: "https://todoist-project-8d2e2.firebaseio.com",
    projectId: "todoist-project-8d2e2",
    storageBucket: "todoist-project-8d2e2.appspot.com",
    messagingSenderId: "818795489449",
    appId: "1:818795489449:web:1a4fed167821bcf5c861b8",
});

export { firebaseConfig as firebase };