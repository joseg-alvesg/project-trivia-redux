import {
  ADD_COUNTER,
  ADD_POINT,
  FETCH_QUESTION_SUCCESS,
  FETCH_SESSION_TOKEN_LOADING,
  FETCH_SESSION_TOKEN_SUCCESS,
  START_TIMER,
  STOP_TIMER,
} from '../../constants';
import { GAME_INITIAL_STATE } from '../../constants/initialState';

const gameReducer = (state = GAME_INITIAL_STATE, action) => {
  switch (action.type) {
  case FETCH_SESSION_TOKEN_LOADING:
    return {
      ...state,
      isLoading: true,
    };
  case FETCH_SESSION_TOKEN_SUCCESS:
    return {
      ...state,
      token: action.payload.token,
      isLoading: false,
    };
  case FETCH_QUESTION_SUCCESS:
    return {
      ...state,
      ...action.payload,
    };
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
  case START_TIMER:
    return {
      ...state,
      timeRunning: true,
      finalAnswer: false,
    };
  case STOP_TIMER:
    return {
      ...state,
      timeRunning: false,
      finalAnswer: true,
    };
    // ! utiluizar o estado global dentro do timer estava
    // ! gerando um loop de renderização das respostas sempre
    // ! triggando um novo "sorteio" das respostas
    // case DECREMENT_TIMER:
    //   return {
    //     ...state,
    //     timer: state.timeRunning ? state.timer - 1 : state.timer,
    //   };
  default:
    return state;
  }
};

export default gameReducer;
