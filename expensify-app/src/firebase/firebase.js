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

const database = firebase.database();

database.ref().set({
    name: 'Maphnew Kim',
    age: 34,
    isSingle: false,
    location: {
        city: 'Ulsan',
        country: 'Korea'
    }
});

// database.ref().set('This is my data.');

database.ref('age').set(35);
database.ref('location/city').set('Seoul');
database.ref('attributes').set({
    height: 166,
    weight: 64
});

console.log('Data changed.')