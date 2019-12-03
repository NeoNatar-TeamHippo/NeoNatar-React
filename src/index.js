import React from 'react';
import ReactDOM from 'react-dom';

import router from './components/router';

const { Routes: App } = router.components;

ReactDOM.render(<App />, document.getElementById('root'));

