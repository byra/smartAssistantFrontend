import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from './components/layout';
import registerServiceWorker from './registerServiceWorker';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {store} from './store';


ReactDOM.render(
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('root'));


registerServiceWorker();
