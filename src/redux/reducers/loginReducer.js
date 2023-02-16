import { MD5 } from 'crypto-js';
import {
  INCREMENT_SCORE, PLAYER_INITIAL_STATE, PLAY_AGAIN, SAVE_LOGIN } from '../../constants';

const loginReducer = (state = PLAYER_INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmailHash: MD5(action.payload.email).toString(),
    };
  case INCREMENT_SCORE:
    return {
      ...state,
      score: state.score + action.payload,
    };
  case PLAY_AGAIN:
    return {
      ...PLAYER_INITIAL_STATE,
    };

  default:
    return state;
  }
};

export default loginReducer;
