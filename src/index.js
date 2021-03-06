import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import appState from './reducers/reducer_index';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './styles/styles.scss'
import * as serviceWorker from './serviceWorker';

const store = createStore(appState, applyMiddleware(thunk));

window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
