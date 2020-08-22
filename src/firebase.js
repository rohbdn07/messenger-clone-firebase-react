import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB7-MpFL5DzzILfJT11tjFMhDXaVXiZTGY",
    authDomain: "fb-messenger-clone-7ed39.firebaseapp.com",
    databaseURL: "https://fb-messenger-clone-7ed39.firebaseio.com",
    projectId: "fb-messenger-clone-7ed39",
    storageBucket: "fb-messenger-clone-7ed39.appspot.com",
    messagingSenderId: "363681336865",
    appId: "1:363681336865:web:565702c92a90e092949d60",
    measurementId: "G-8B2MERDWCB"
});

const db = firebaseApp.firestore();