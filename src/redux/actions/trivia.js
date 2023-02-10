import {
  ADD_COUNTER,
  ADD_POINT,
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
