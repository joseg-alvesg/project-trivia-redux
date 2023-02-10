import { combineReducers } from 'redux';
import saveLoginReducer from './login';
import triviaReducer from './trivia';

const rootReducer = combineReducers({ ...saveLoginReducer, ...triviaReducer });

export default rootReducer;
