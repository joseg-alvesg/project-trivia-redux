import {
  ADD_COUNTER,
  ADD_POINT,
  QUESTION_RESULT,
  REST_TIMER,
  SELECT_ANSWER,
  START_TIMER,
  STOP_TIMER,
  PLAY_AGAIN,
} from '../../constants';

export const addCounter = () => ({
  type: ADD_COUNTER,
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

export const restTimer = (payload) => ({
  type: REST_TIMER,
  payload,
});

export const playAgain = () => ({
  type: PLAY_AGAIN,
});
// ! utiluizar o estado global dentro do timer estava
// ! gerando um loop de renderização das respostas sempre
// ! triggando um novo "sorteio" das respostas
// export const decrementTimer = () => ({
//   type: DECREMENT_TIMER,
// });
