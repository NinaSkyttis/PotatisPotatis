import React from 'react';
import ReactDOM from 'react-dom';
// what does this import give me below? 
import { Provider } from 'react-redux';
import App from './components/App.jsx';
import rootReducer from './reducers/reducers.js';
import store from './app/store/store.js';

const root = reactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
)