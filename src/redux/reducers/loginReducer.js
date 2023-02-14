import { MD5 } from 'crypto-js';
import { PLAYER_INITIAL_STATE, SAVE_LOGIN } from '../../constants';

const loginReducer = (state = PLAYER_INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      name: action.payload.name,
      gravatarEmail: MD5(action.payload.email).toString(),
    };
  default:
    return state;
  }
};

export default loginReducer;
