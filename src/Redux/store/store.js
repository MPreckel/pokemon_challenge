import { createStore, combineReducers } from 'redux';
import scrollReducer from '../reducers/scrollReducer';  


const rootReducer = combineReducers({
  scroll: scrollReducer,
});


const store = createStore(rootReducer);

export default store;