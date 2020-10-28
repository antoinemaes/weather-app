import { combineReducers } from 'redux';
import { asyncReducer } from './async';
import { storeReducer } from './store';

const rootReducer = combineReducers({
    weather: asyncReducer(),
    location: storeReducer
});

export default rootReducer;