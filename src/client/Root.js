import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from 'redux/reducer'

import App from 'shared/App';

const store = createStore(reducer)

const Root = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    );
};

export default Root;