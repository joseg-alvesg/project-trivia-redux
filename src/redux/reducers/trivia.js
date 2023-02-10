import {
  ADD_COUNTER,
  ADD_POINT,
  // SELECT_ANSWER,
  // START_TIMER,
  // STOP_TIMER,
} from '../../constants';
import INITIAL_STATE from '../../constants/initialState';

const triviaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_COUNTER:
    return {
      ...state,
      assertions: state.assertions + action.payload,
    };
  case ADD_POINT:
    return {
      ...state,
      score: state.score + action.payload,
    };
  case QUESTION_RESULT:
    return {
      ...state,
      ...action.payload,
    };
  // case SELECT_ANSWER:
  //   return {
  //     ...state,
  //     ...action.payload,
  //   };
  // case START_TIMER:
  //   return {
  //     ...state,
  //     ...action.payload,
  //   };
  // case STOP_TIMER:
  //   return {
  //     ...state,
  //     ...action.payload,
  //   };
  default:
    return state;
  }
};

export default triviaReducer;
