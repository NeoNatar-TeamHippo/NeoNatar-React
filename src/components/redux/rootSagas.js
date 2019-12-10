import { all } from 'redux-saga/effects';
import signup from '../signup';

const actionWatcher = signup.sagas;

export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}
