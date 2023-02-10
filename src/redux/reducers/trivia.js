import {
  ADD_COUNTER,
  ADD_POINT,
  // END_GAME,
  // NEXT_QUESTION,
  SELECT_ANSWER,
  START_TIMER,
  STOP_TIMER,
} from '../../constants';

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
    // ? provavelmente será apenas uma função de redirect ao clicar no botão?
    // case END_GAME:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // ? provavelmente será apenas uma função de redirect ao clicar no botão?
    // case NEXT_QUESTION:
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
  case QUESTION_RESULT:
    return {
      ...state,
      ...action.payload,
    };
  case SELECT_ANSWER:
    return {
      ...state,
      ...action.payload,
    };
  case START_TIMER:
    return {
      ...state,
      ...action.payload,
    };
  case STOP_TIMER:
    return {
      ...state,
      ...action.payload,
    };
  default:
    return state;
  }
};

export default triviaReducer;
