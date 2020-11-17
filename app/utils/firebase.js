import firebase from "firebase/app";

const firebaseConfig={
    apiKey: "AIzaSyBk3WUjsJ_QWkaUzbhHUB7kSK8o-FRorJE",
    authDomain: "sales-round.firebaseapp.com",
    databaseURL: "https://sales-round.firebaseio.com",
    projectId: "sales-round",
    storageBucket: "sales-round.appspot.com",
    messagingSenderId: "1071912051283",
    appId: "1:1071912051283:web:dfa0d749d53d5cd9e85ca6"
};  
export const firebaseApp = firebase.initializeApp(firebaseConfig);