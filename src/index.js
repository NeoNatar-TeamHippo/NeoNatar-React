import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './components/redux/store';

import router from './components/router';

const { Routes } = router.components;
const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

