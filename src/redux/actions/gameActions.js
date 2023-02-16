import {
  ADD_COUNTER,
  ADD_POINT,
  QUESTION_RESULT,
  SELECT_ANSWER,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER,
} from '../../constants';

export const addCounter = (payload) => ({
  type: ADD_COUNTER,
  payload,
});

export const addPoint = (payload) => ({
  type: ADD_POINT,
  payload,
});

export const questionResult = (payload) => ({
  type: QUESTION_RESULT,
  payload,
});

export const selectAnswer = (payload) => ({
  type: SELECT_ANSWER,
  payload,
});

export const startTimer = () => ({
  type: START_TIMER,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

// ! utiluizar o estado global dentro do timer estava
// ! gerando um loop de renderização das respostas sempre
// ! triggando um novo "sorteio" das respostas
// export const decrementTimer = () => ({
//   type: DECREMENT_TIMER,
// });
