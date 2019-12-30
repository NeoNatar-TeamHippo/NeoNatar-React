import firebase from 'firebase/app';
import 'firebase/database';

const config = {
    apiKey: 'AIzaSyCkW6dR3mtgJZZNe6HxJRsJiSut_vL2Mb8',
    authDomain: 'neonatar.firebaseapp.com',
    databaseURL: 'https://neonatar.firebaseio.com',
    projectId: 'neonatar',
    storageBucket: 'neonatar.appspot.com',
    messagingSenderId: '680502222040',
    appId: '1:680502222040:web:649f24f14b356da2d88bad',
    measurementId: 'G-WBL78JKHGK',
};

export default firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseTickets = firebaseDB.ref('tickets');

export { firebase, firebaseDB, firebaseTickets };
