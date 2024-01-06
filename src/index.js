// import React from 'react'
import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.scss';
import store from './store';
import {Provider} from 'react-redux';
import App from './App';
import {HashRouter} from 'react-router-dom';
// import thunk from 'redux-thunk';
// import {HashRouter} from 'react-router-dom';

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// const basename = 'dist';

root.render(
    <React.StrictMode>
      <Provider store={store}>
        <HashRouter>
          <App />
        </HashRouter>
      </Provider>
    </React.StrictMode>,

);
