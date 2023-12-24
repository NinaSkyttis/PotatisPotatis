import {configureStore} from '@reduxjs/toolkit';
import potatisReducer from './reducers/potatisReducer';
// import { composeWithDevTools }
// from 'redux-devtools-extension/developmentOnly';


// store is the global state that will be
// accessible to any component throughout your app
export const store = configureStore({
  reducer: {
    potatis: potatisReducer,
  },
  // middleware: [thunk, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
