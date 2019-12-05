import { combineReducers } from 'redux';
import signUp from '../signup';
import signIn from '../signin';

const { reducers: singUpReducer } = signUp;
const { reducers: singInReducer } = signIn;

const rootReducers = {
    signIn: singInReducer,
    signUp: singUpReducer,
};
export default combineReducers(rootReducers);
