import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import reduxStore from './components/redux/store';

import router from './components/router';

const { store } = reduxStore;
const { persistor } = reduxStore;
const { Routes } = router.components;
const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
