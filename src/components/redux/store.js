import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducers';
import rootSaga from './rootSagas';
import history from '../history/History';

const initializeSagaMiddleware = createSagaMiddleware();
const routerWare = routerMiddleware(history);
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(initializeSagaMiddleware, routerWare))
);
initializeSagaMiddleware.run(rootSaga);
export default store;
