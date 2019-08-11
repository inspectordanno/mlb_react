import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import BaseballApp from './components/BaseballApp';

const store = configureStore();
// const state = store.getState();

const jsx = (
  <Provider store={store}>
    <BaseballApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));