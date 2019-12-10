import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import signUp from '../signup';
import signIn from '../signin';
import history from '../history/History';

const { reducers: singUpReducer } = signUp;
const { reducers: singInReducer } = signIn;

const rootReducers = {
    router: connectRouter(history),
    signIn: singInReducer,
    signUp: singUpReducer,
};
export default combineReducers(rootReducers);
