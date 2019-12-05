import { combineReducers } from 'redux';
import signUp from '../signup';

const { reducers: singUpReducer } = signUp;

const rootReducers = {
    signUp: singUpReducer,
};
export default combineReducers(rootReducers);
