import { configureStore } from '@reduxjs/toolkit'
import potatisReducer from './reducers/potatisReducer'
// should i be adding composewithdevtools from our react-redux unit? Do I need typescript? 




// store is the global state that will be 
// accessible to any component throughout your app
const store = configureStore({
  reducer: {
    potatis: potatisReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;