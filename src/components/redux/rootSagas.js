import { all } from 'redux-saga/effects';
import signup from '../signup';
import signin from '../signin';
import navBar from '../navbar';
import locations from '../locations';
import commercials from '../commercials';

const actionWatcherSignUp = signup.sagas;
const actionWatcherSignIn = signin.sagas;
const actionWatcherNavBar = navBar.sagas;
const actionWatcherLocations = locations.sagas;
const actionWatcherCommercials = commercials.sagas;

export default function* rootSaga() {
    yield all([
        actionWatcherCommercials(),
        actionWatcherSignUp(),
        actionWatcherSignIn(),
        actionWatcherNavBar(),
        actionWatcherLocations(),
    ]);
}
