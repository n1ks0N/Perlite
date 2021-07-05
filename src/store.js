import { combineReducers, createStore } from 'redux';
import contentReducer from './reducers/contentReducer';

const reducers = combineReducers({
  content: contentReducer
});

const store = createStore(reducers);

export default store;
