import { all } from 'redux-saga/effects';
import signup from '../signup';
import signin from '../signin';
import navBar from '../navbar';

const actionWatcherSignUp = signup.sagas;
const actionWatcherSignIn = signin.sagas;
const actionWatcherNavBar = navBar.sagas;

export default function* rootSaga() {
    yield all([
        actionWatcherSignUp(),
        actionWatcherSignIn(),
        actionWatcherNavBar(),
    ]);
}
