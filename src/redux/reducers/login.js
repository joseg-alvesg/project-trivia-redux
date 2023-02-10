import { FETCH_SESSION_TOKEN_LOADING } from '../../constants';
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
      player: { ...state.player, name: action.payload },
    };
  default:
    return state;
  }
};

export default saveLoginReducer;
