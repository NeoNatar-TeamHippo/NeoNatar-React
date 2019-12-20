import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import signUp from '../signup';
import signIn from '../signin';
import navBar from '../navbar';
import locations from '../locations';
import history from '../history/History';
import tickets from '../tickets';

const { reducers: singUpReducer } = signUp;
const { reducers: singInReducer } = signIn;
const { reducers: navBarReducer } = navBar;
const { reducers: locationsReducer } = locations;
const { reducers: ticketsReducer } = tickets;

const rootReducers = {
    location: locationsReducer,
    router: connectRouter(history),
    signIn: singInReducer,
    signUp: singUpReducer,
    ticket: ticketsReducer,
    user: navBarReducer,
};
export default combineReducers(rootReducers);
