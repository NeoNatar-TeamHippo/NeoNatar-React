import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: process.env.REACT_APP_APIKEY,
    appId: process.env.REACT_APP_APPID,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    measurementId: process.env.REACT_APP_MEASUREMENTID,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
};

export default firebase.initializeApp(config);

const firebaseDB = firebase.firestore();
const firebaseTickets = firebaseDB.collection('tickets');
const firebaseCampaigns = firebaseDB.collection('campaigns');

export { firebase, firebaseCampaigns, firebaseDB, firebaseTickets };
