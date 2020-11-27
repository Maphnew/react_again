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
    age: 29,
    stressLevel: 6,
    job: {
        title: 'Software developer',
        company: 'Google'
    },
    isSingle: false,
    location: {
        city: 'Ulsan',
        country: 'Korea'
    }
}).then(() => {
    console.log('Data is saved');
}).catch((er) => {
    console.log('This failed', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});

// database.ref('isSingle').set(null)

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('removed')
//     }).catch((e) => {
//         console.log('not removed')
//     });