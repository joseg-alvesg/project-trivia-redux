import {
  FETCH_SESSION_TOKEN_LOADING,
  FETCH_SESSION_TOKEN_SUCCESS,
  SAVE_LOGIN } from '../../constants';
import INITIAL_STATE from '../../constants/initialState';

const saveLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SESSION_TOKEN_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case FETCH_SESSION_TOKEN_SUCCESS:
    return {
      ...state,
      token: action.payload,
    };
  case SAVE_LOGIN:
    return {
      ...state,
      player: { ...state.player,
        name: action.payload.name,
        gravatarEmail: action.payload.email },
    };
  default:
    return state;
  }
};

export default saveLoginReducer;
