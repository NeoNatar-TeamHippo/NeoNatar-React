import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import signUp from '../signup';
import signIn from '../signin';
import navBar from '../navbar';
import locations from '../locations';
import savedLocations from '../savedLocations';
import history from '../history/History';
import tickets from '../tickets';

const { reducers: singUpReducer } = signUp;
const { reducers: singInReducer } = signIn;
const { reducers: navBarReducer } = navBar;
const { reducers: locationsReducer } = locations;
const { reducers: ticketsReducer } = tickets;
const { reducers: savedLocationsReducer } = savedLocations;

const rootReducers = {
    location: locationsReducer,
    router: connectRouter(history),
    savedLocation: savedLocationsReducer,
    signIn: singInReducer,
    signUp: singUpReducer,
    ticket: ticketsReducer,
    user: navBarReducer,
};
export default combineReducers(rootReducers);
