import {
  ADD_COUNTER,
  ADD_POINT,
  // END_GAME,
  // NEXT_QUESTION,
  QUESTION_RESULT,
  SELECT_ANSWER,
  START_TIMER,
  STOP_TIMER,
} from '../../constants';

export const addCounter = (payload) => ({
  type: ADD_COUNTER,
  payload,
});

export const addPoint = (payload) => ({
  type: ADD_POINT,
  payload,
});

// ? provavelmente será apenas uma função de redirect ao clicar no botão?
// export const endGame = (payload) => ({
//   type: END_GAME,
//   payload,
// });

// ? provavelmente será apenas uma função de redirect ao clicar no botão?
// export const nextQuestion = (payload) => ({
//   type: NEXT_QUESTION,
//   payload,
// });

export const questionResult = (payload) => ({
  type: QUESTION_RESULT,
  payload,
});

export const selectAnswer = (payload) => ({
  type: SELECT_ANSWER,
  payload,
});

export const startTimer = (payload) => ({
  type: START_TIMER,
  payload,
});

export const stopTimer = (payload) => ({
  type: STOP_TIMER,
  payload,
});
