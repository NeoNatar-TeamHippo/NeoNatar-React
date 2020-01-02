import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import signUp from '../signup';
import signIn from '../signin';
import navBar from '../navbar';
import locations from '../locations';
import commercials from '../commercials';
import savedLocations from '../savedLocations';
import history from '../history/History';
import tickets from '../tickets';
import campaigns from '../campaigns';

const { reducers: singUpReducer } = signUp;
const { reducers: singInReducer } = signIn;
const { reducers: navBarReducer } = navBar;
const { reducers: locationsReducer } = locations;
const { reducers: commercialsReducer } = commercials;
const { reducers: ticketsReducer } = tickets;
const { reducers: campaignsReducer } = campaigns;
const { reducers: savedLocationsReducer } = savedLocations;

const rootReducers = {
    campaigns: campaignsReducer,
    commercials: commercialsReducer,
    location: locationsReducer,
    router: connectRouter(history),
    savedLocation: savedLocationsReducer,
    signIn: singInReducer,
    signUp: singUpReducer,
    ticket: ticketsReducer,
    user: navBarReducer,
};
export default combineReducers(rootReducers);
