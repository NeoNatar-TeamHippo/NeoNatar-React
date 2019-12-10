import { all } from 'redux-saga/effects';
import signup from '../signup';
import signin from '../signin';

const actionWatcherSignUp = signup.sagas;
const actionWatcherSignIn = signin.sagas;

export default function* rootSaga() {
    yield all([
        actionWatcherSignUp(), actionWatcherSignIn(),
    ]);
}
