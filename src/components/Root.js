import React from 'react';
import {Provider} from 'react-redux';
import {Layout} from './layout';

const Root = (store) => (
    <Provider store={store}>
        <Layout/>
    </Provider>
);

export default Root;