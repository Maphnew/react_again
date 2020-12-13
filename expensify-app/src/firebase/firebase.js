import firebase from 'firebase';
import moment from 'moment';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }



// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })


// // database.ref('expenses')
// //     .once('value')
// //     .then((snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })

// //         console.log(expenses);
// //     })

// // database.ref('expenses')
// //     .on('value', (snapshot) => {
// //         const expenses = [];

// //         snapshot.forEach((childSnapshot) => {
// //             expenses.push({
// //                 id: childSnapshot.key,
// //                 ...childSnapshot.val()
// //             })
// //         })

// //         console.log(expenses);
// //     })


// database.ref('expenses').push({
//     description: 'rent',
//     note: '',
//     amount: '90000',
//     createdAt: moment(0).toString()
// })

// // database.ref('notes/MN6j2icljNfvS6O6vFh').remove()

// // database.ref('notes').push({
// //     title: 'To do',
// //     body: 'Go for a run'
// // })

// // database.ref().on('value', (snapshot) => {
// //     const value = snapshot.val()
// //     console.log(`${value.name} is a ${value.job.title} at ${value.job.company}`)
// // }, (e) => {
// //     console.log('Error:', e)
// // });

// // setTimeout(() => {
// //     database.ref('name').set('Andrew')
// // }, 3000)



// // const onValueChange = database.ref().on('value', (snapshot) => {
// //     console.log(snapshot.val());
// // }, (e) => {
// //     console.log('Error with data fetching', e);
// // });

// // setTimeout(() => {
// //     database.ref('age').set(29);
// // }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// // setTimeout(() => {
// //     database.ref('age').set(30);
// // }, 10500);


// // database.ref('location')
// //     .once('value')
// //     .then((snapshot) => {
// //         const val = snapshot.val();
// //         console.log(val);
// //     }).catch((e) => {
// //         console.log('Error fetching data', e)
// //     })



// // database.ref().set({
// //     name: 'Maphnew Kim',
// //     age: 29,
// //     stressLevel: 6,
// //     job: {
// //         title: 'Software developer',
// //         company: 'Google'
// //     },
// //     isSingle: false,
// //     location: {
// //         city: 'Ulsan',
// //         country: 'Korea'
// //     }
// // }).then(() => {
// //     console.log('Data is saved');
// // }).catch((er) => {
// //     console.log('This failed', e);
// // });

// // database.ref().update({
// //     stressLevel: 9,
// //     'job/company': 'Amazon',
// //     'location/city': 'Seattle'
// // });

// // database.ref('isSingle').set(null)

// // database.ref()
// //     .remove()
// //     .then(() => {
// //         console.log('removed')
// //     }).catch((e) => {
// //         console.log('not removed')
// //     });