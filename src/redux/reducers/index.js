import { combineReducers } from 'redux';
import gameReducer from './gameReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({ player: loginReducer, game: gameReducer });

export default rootReducer;
