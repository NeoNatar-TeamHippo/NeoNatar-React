import React from 'react';
import ReactDOM from 'react-dom';
import jwtDecode from 'jwt-decode';
import { Provider } from 'react-redux';

import './index.scss';
import router from './components/router';
import reduxStore from './components/redux/store';
import { authTrue, setUnAuthenticated } from './components/signin/actions';
import { logoutUser, loadingUser } from './components/navbar/actions';

const { store } = reduxStore;
const { Routes } = router.components;
const token = localStorage.getItem('FBToken');
if (token) {
    const tokeToDecode = token.split(' ')[1];
    const decodedToken = jwtDecode(tokeToDecode);
    if (decodedToken.exp * 1000 < Date.now()) {
        localStorage.removeItem('FBToken');
        store.dispatch(setUnAuthenticated());
        store.dispatch(logoutUser());
    } else {
        store.dispatch(authTrue());
        store.dispatch(loadingUser());
    }
} else {
    store.dispatch(setUnAuthenticated());
}
const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
