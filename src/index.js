import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';
import reduxStore from './components/redux/store';
import router from './components/router';

import { authTrue, setUnAuthenticated } from './components/signin/actions';
import { logoutUser, loadingUser } from './components/navbar/actions';

const { store } = reduxStore;
const { persistor } = reduxStore;
const { Routes } = router.components;
const token = localStorage.getItem('FBToken');
if (token) {
    const tokeToDecode = token.split(' ')[1];
    const decodedToken = jwtDecode(tokeToDecode);
    if (decodedToken.exp * 1000 < Date.now()) {
        console.log('expired token');
        localStorage.removeItem('FBToken');
        store.dispatch(setUnAuthenticated());
        store.dispatch(logoutUser());
    } else {
        store.dispatch(authTrue());
        store.dispatch(loadingUser(token));
    }
}
const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
