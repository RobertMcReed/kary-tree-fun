import React from 'react';
import { Provider } from 'react-redux';
import reduxLogger from 'redux-logger';
import { render as renderDOM } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import './style/main.scss';
import reducer from './reducer';
import App from './component/app';
import thunk from './middleware/thunk';

const middleware = applyMiddleware(reduxLogger, thunk);

const store = createStore(reducer, middleware);

const DOMContainer = document.createElement('div');

document.body.appendChild(DOMContainer);

const componentsEntry = (
  <Provider store={store}>
    <App />
  </Provider>
);

renderDOM(componentsEntry, DOMContainer);
