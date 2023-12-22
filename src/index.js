// import React from 'react'
import ReactDOM from 'react-dom/client'
import React from 'react';
import './index.scss'
import store from './store'
import { Provider } from 'react-redux'
import App from './App'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)