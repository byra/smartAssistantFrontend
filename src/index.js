import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Layout from './components/layout';
import Bot from './components/bot'
import registerServiceWorker from './registerServiceWorker';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<div><Layout /><Bot/></div>, document.getElementById('root'));
registerServiceWorker();
