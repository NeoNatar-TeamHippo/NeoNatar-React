import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './rootReducers';
import rootSaga from './rootSagas';
import history from '../history/History';

const persistConfig = {
    key: 'root',
    storage,
};
const initializeSagaMiddleware = createSagaMiddleware();
const routerWare = routerMiddleware(history);
const persistedReducer = persistReducer(persistConfig, rootReducer);
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    persistedReducer,
    storeEnhancers(applyMiddleware(initializeSagaMiddleware, routerWare))
);
const persistor = persistStore(store);
initializeSagaMiddleware.run(rootSaga);

export default { store, persistor };
