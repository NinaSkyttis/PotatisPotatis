import {combineReducers} from 'redux';

import potatisReducer from './potatisReducer';

// combine reducers
const reducers = combineReducers({
  // if we had other reducers, they would go here
  potatisReducer: potatisReducer,
  // cards: cardsReducer,
});

// make the combined reducers available for import
export default reducers;
