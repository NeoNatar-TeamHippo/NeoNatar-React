import { all } from 'redux-saga/effects';
import signup from '../signup';
import signin from '../signin';
import navBar from '../navbar';
import locations from '../locations';
import commercials from '../commercials';
import tickets from '../tickets';
import overview from '../overview';
import campaigns from '../campaigns';
import savedLocations from '../savedLocations';
import transactions from '../transactions';

const actionWatcherSignUp = signup.sagas;
const actionWatcherSignIn = signin.sagas;
const actionWatcherNavBar = navBar.sagas;
const actionWatcherLocations = locations.sagas;
const actionWatcherCommercials = commercials.sagas;
const actionWatcherTickets = tickets.sagas;
const actionWatcherOverview = overview.sagas;
const actionWatcherCampaigns = campaigns.sagas;
const actionWatcherSavedLocations = savedLocations.sagas;
const actionWatcherTransactions = transactions.sagas;

export default function* rootSaga() {
    yield all([
        actionWatcherCommercials(),
        actionWatcherSignUp(),
        actionWatcherSignIn(),
        actionWatcherNavBar(),
        actionWatcherLocations(),
        actionWatcherTickets(),
        actionWatcherOverview(),
        actionWatcherCampaigns(),
        actionWatcherSavedLocations(),
        actionWatcherTransactions(),
    ]);
}
