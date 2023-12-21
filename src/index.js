import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import {Counter} from './features/counter/Counter'
import store from './app/store'
import { Provider } from 'react-redux'

// As of React 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <Counter />
  </Provider>
)