import firebase from 'firebase/app';
import 'firebase/firestore';

const {
    REACT_APP_APIKEY,
    REACT_APP_APPID,
    REACT_APP_AUTHDOMAIN,
    REACT_APP_DATABASEURL,
    REACT_APP_MEASUREMENTID,
    REACT_APP_MESSAGINGSENDERID,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
} = process.env;

const config = {
    apiKey: REACT_APP_APIKEY,
    appId: REACT_APP_APPID,
    authDomain: REACT_APP_AUTHDOMAIN,
    databaseURL: REACT_APP_DATABASEURL,
    measurementId: REACT_APP_MEASUREMENTID,
    messagingSenderId: REACT_APP_MESSAGINGSENDERID,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
};

export default firebase.initializeApp(config);

const firebaseDB = firebase.firestore();
const firebaseTickets = firebaseDB.collection('tickets');
const firebaseCampaigns = firebaseDB.collection('campaigns');
const firebaseCommercials = firebaseDB.collection('commercials');
const firebaseLocations = firebaseDB.collection('locations');
const firebaseSavedLocations = firebaseDB.collection('savedLocations');

export {
    firebase, firebaseCampaigns,
    firebaseDB, firebaseTickets,
    firebaseCommercials,
    firebaseLocations,
    firebaseSavedLocations
};
