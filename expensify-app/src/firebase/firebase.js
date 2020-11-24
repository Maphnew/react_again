import firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDs_mQfxf5c1t3cDs0v-vfj4tB9JGrp0bY",
    authDomain: "expensify-e4c88.firebaseapp.com",
    databaseURL: "https://expensify-e4c88.firebaseio.com",
    projectId: "expensify-e4c88",
    storageBucket: "expensify-e4c88.appspot.com",
    messagingSenderId: "70931864257",
    appId: "1:70931864257:web:b8839709d9b22fe226d240"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: 'Maphnew Kim'
});