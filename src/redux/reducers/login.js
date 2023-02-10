import { SAVE_LOGIN } from '../../constants';
import INITIAL_STATE from '../../constants/initialState';

const saveLoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_LOGIN:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default saveLoginReducer;
