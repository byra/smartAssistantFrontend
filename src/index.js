import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Layout from './components/layout';
import registerServiceWorker from './registerServiceWorker';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Layout/>, document.getElementById('root'));
registerServiceWorker();
