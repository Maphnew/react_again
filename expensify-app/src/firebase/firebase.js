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

database.ref().on('value', (snapshot) => {
    const value = snapshot.val()
    console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`)
}, (e) => {
    console.log('Error:', e)
});

setTimeout(() => {
    database.ref('name').set('Andrew')
}, 3000)



// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((e) => {
//         console.log('Error fetching data', e)
//     })



// database.ref().set({
//     name: 'Maphnew Kim',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Ulsan',
//         country: 'Korea'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((er) => {
//     console.log('This failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref('isSingle').set(null)

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('removed')
//     }).catch((e) => {
//         console.log('not removed')
//     });